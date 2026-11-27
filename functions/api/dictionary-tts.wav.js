import { readCookie, verifySession } from "../_auth.js";
import {
  isAudiobookFolder,
  synthesizeDictionaryTts,
  ttsVoiceTag,
} from "../_dictionary-tts.mjs";
import { wavToMp3 } from "../_mp3.mjs";

const maxTextLength = 500;
const cacheControl = "public, max-age=31536000, immutable";
const legacyCachePrefix = "tts-cache/v4";

const encoder = new TextEncoder();

// Pastas e nomes chegam do cliente, então são tratados como entrada não
// confiável: cada segmento vira [a-z0-9-] e nada pode escapar da raiz.
const segmentPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const normalizeFolder = (value) => {
  if (!value) return null;
  const parts = value.trim().toLowerCase().split("/");
  if (parts.length > 8) return null;
  if (!parts.every((part) => segmentPattern.test(part))) return null;
  const folder = parts.join("/");
  return folder.length <= 120 ? folder : null;
};

const normalizeName = (value) => {
  if (!value) return null;
  const name = value.trim().toLowerCase();
  return segmentPattern.test(name) && name.length <= 60 ? name : null;
};

const normalizeTextHash = (value) => {
  if (!value) return null;
  const hash = value.trim().toLowerCase();
  return /^[0-9a-f]{8,64}$/.test(hash) ? hash : null;
};

const extensionFor = (contentType) => {
  const type = (contentType || "").split(";")[0].trim().toLowerCase();
  if (type === "audio/mpeg" || type === "audio/mp3") return "mp3";
  if (type === "audio/ogg") return "ogg";
  if (type === "audio/mp4" || type === "audio/m4a") return "m4a";
  return "wav";
};

const hashText = async (value) => {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
};

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const cooldownRequest = (provider) =>
  new Request(`https://tts-cooldown.internal/${provider}`);

const isCoolingDown = async (provider) => {
  try {
    return Boolean(await caches.default.match(cooldownRequest(provider)));
  } catch {
    return false;
  }
};

const markCooldown = async (provider, seconds) => {
  try {
    await caches.default.put(
      cooldownRequest(provider),
      new Response("cooldown", {
        headers: { "Cache-Control": `max-age=${Math.max(seconds, 60)}` },
      }),
    );
  } catch {
    // The cooldown is best-effort: never fail a request because of it.
  }
};

// `bytes=0-`, `bytes=100-200` e `bytes=-500` (últimos 500 bytes).
// Devolve null quando não há range, e { unsatisfiable: true } quando o
// intervalo pedido começa depois do fim do áudio.
const parseRange = (value, size) => {
  const match = /^bytes=(\d*)-(\d*)$/.exec(value ?? "");
  if (!match || (!match[1] && !match[2])) return null;

  if (!match[1]) {
    const suffix = Number(match[2]);
    if (!suffix) return { unsatisfiable: true };
    return { start: Math.max(size - suffix, 0), end: size - 1 };
  }

  const start = Number(match[1]);
  const end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (start >= size || start > end) return { unsatisfiable: true };
  return { start, end };
};

const audioHeaders = (contentType, provider, cacheStatus) =>
  new Headers({
    "Content-Type": contentType,
    "Cache-Control": cacheControl,
    "Accept-Ranges": "bytes",
    "X-TTS-Provider": provider,
    "X-TTS-Cache": cacheStatus,
    "X-TTS-Format": extensionFor(contentType),
  });

const audioResponse = (request, audio, headers) => {
  const size = audio.byteLength;
  const range = parseRange(request.headers.get("Range"), size);

  if (!range) {
    headers.set("Content-Length", String(size));
    return new Response(audio, { status: 200, headers });
  }

  if (range.unsatisfiable) {
    headers.set("Cache-Control", "no-store");
    headers.set("Content-Range", `bytes */${size}`);
    headers.set("Content-Length", "0");
    return new Response(null, { status: 416, headers });
  }

  headers.set("Content-Range", `bytes ${range.start}-${range.end}/${size}`);
  headers.set("Content-Length", String(range.end - range.start + 1));
  return new Response(audio.slice(range.start, range.end + 1), {
    status: 206,
    headers,
  });
};

const storedResponse = (request, object, cacheStatus) => {
  const headers = audioHeaders(
    object.httpMetadata?.contentType || "audio/mpeg",
    object.customMetadata?.provider || "cache",
    cacheStatus,
  );

  if (request.headers.has("Range") && object.range) {
    const { offset, length } = object.range;
    headers.set(
      "Content-Range",
      `bytes ${offset}-${offset + length - 1}/${object.size}`,
    );
    headers.set("Content-Length", String(length));
    return new Response(object.body, { status: 206, headers });
  }

  headers.set("Content-Length", String(object.size));
  return new Response(object.body, { status: 200, headers });
};

/**
 * Lê o primeiro objeto existente entre as chaves candidatas (a extensão pode
 * ser wav ou mp3, dependendo do provider que gerou).
 */
const readStored = async (bucket, keys, rangeRequested, request) => {
  for (const key of keys) {
    try {
      const object = rangeRequested
        ? await bucket.get(key, { range: request.headers })
        : await bucket.get(key);
      if (object) return { key, object };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (!message.includes("InvalidRange") && !message.includes("10039")) {
        throw error;
      }
      return { key, invalidRange: true };
    }
  }

  return {};
};

export async function onRequestGet(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (!session) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  const url = new URL(context.request.url);
  const rawText = url.searchParams.get("text")?.trim();
  if (!rawText || rawText.length > maxTextLength) {
    return Response.json({ error: "Invalid text." }, { status: 400 });
  }

  const text = normalizeText(rawText);
  if (!text) {
    return Response.json({ error: "Invalid text." }, { status: 400 });
  }

  const hasProvider = Boolean(
    context.env.OPENROUTER_API_KEY || context.env.GEMINI_API_KEY,
  );
  if (!hasProvider) {
    return Response.json(
      { error: "Dictionary TTS is not configured." },
      { status: 503 },
    );
  }

  const folder = normalizeFolder(url.searchParams.get("folder"));
  const name = normalizeName(url.searchParams.get("name"));
  const namedPath = folder && name ? `audio/${folder}/${name}` : null;
  const textHash = normalizeTextHash(url.searchParams.get("h"));

  // Audiobooks usam uma voz de narrador. A voz entra na identidade do áudio:
  // trocar de voz muda a chave do cache e o textHash gravado no R2, então o
  // áudio antigo é descartado em vez de continuar sendo servido.
  const audiobook = isAudiobookFolder(folder);
  const voiceTag = ttsVoiceTag(context.env, { folder });
  const withVoice = (value) => (audiobook ? `${value}:${voiceTag}` : value);
  const cacheKeyUrl = new URL(context.request.url);
  if (audiobook) cacheKeyUrl.searchParams.set("ttsVoice", voiceTag);
  const cacheKey = cacheKeyUrl.toString();

  const cache = caches.default;
  const rangeRequested = context.request.headers.has("Range");

  // Um 206 nunca é guardado na Cache API, então ranges vão direto ao R2 (que
  // responde por faixa) ou ao buffer sintetizado.
  if (!rangeRequested) {
    const cached = await cache.match(cacheKey);
    if (cached) {
      const headers = new Headers(cached.headers);
      headers.set("X-TTS-Cache", "hit");
      return new Response(cached.body, {
        status: cached.status,
        statusText: cached.statusText,
        headers,
      });
    }
  }

  const hash = await hashText(text);
  const legacyKey = `${legacyCachePrefix}/${hash.slice(0, 2)}/${hash}`;
  const keys = namedPath
    ? [`${namedPath}.mp3`, `${namedPath}.wav`]
    : [legacyKey];

  if (context.env.MEDIA) {
    const stored = await readStored(
      context.env.MEDIA,
      keys,
      rangeRequested,
      context.request,
    );

    if (stored.invalidRange) {
      const metadata = await context.env.MEDIA.head(stored.key);
      const headers = new Headers({
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store",
      });
      if (metadata) headers.set("Content-Range", `bytes */${metadata.size}`);
      return new Response("Requested range is not satisfiable.", {
        status: 416,
        headers,
      });
    }

    if (stored.object) {
      // Sem textHash o arquivo foi colocado ali à mão (ou é do cache antigo) e
      // passa a ser a versão oficial. Com hash diferente, o texto (ou a voz do
      // audiobook) mudou e o áudio precisa ser regerado.
      // O rclone grava a metadata em minúsculas; aceita as duas formas.
      const custom = stored.object.customMetadata ?? {};
      const storedHash = custom.textHash ?? custom.texthash ?? null;
      const upToDate =
        !storedHash || !textHash || storedHash === withVoice(textHash);

      if (upToDate) {
        const response = storedResponse(context.request, stored.object, "hit");
        if (response.status === 200) {
          context.waitUntil(cache.put(cacheKey, response.clone()));
        }
        return response;
      }
    }
  }

  const result = await synthesizeDictionaryTts(
    text,
    context.env,
    {
      isCoolingDown,
      markCooldown,
    },
    { folder },
  );

  if (!result) {
    return Response.json(
      {
        error: audiobook
          ? "Audiobook narration is temporarily unavailable."
          : "Dictionary TTS is temporarily unavailable.",
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  const provider = result.model
    ? `${result.provider}:${result.model}`
    : result.provider;

  // O Gemini só entrega WAV; guardar sempre MP3 deixa o arquivo ~10x menor.
  // `TTS_MP3=off` desliga a conversão (útil em plano sem CPU para isso).
  let audio = result.audio;
  let contentType = result.contentType;

  if (context.env.TTS_MP3 !== "off" && extensionFor(contentType) === "wav") {
    try {
      const mp3 = await wavToMp3(audio);
      if (mp3) {
        audio = mp3;
        contentType = "audio/mpeg";
      }
    } catch (error) {
      console.warn("Could not convert TTS audio to MP3", error);
    }
  }

  if (context.env.MEDIA) {
    const extension = extensionFor(contentType);
    const key = namedPath ? `${namedPath}.${extension}` : legacyKey;

    context.waitUntil(
      context.env.MEDIA.put(key, audio, {
        httpMetadata: {
          contentType,
          cacheControl,
        },
        customMetadata: {
          provider,
          textHash: withVoice(textHash ?? hash.slice(0, 8)),
        },
      }),
    );

    // Ao trocar de provider a extensão muda; remove a sobra para a leitura não
    // achar o arquivo antigo primeiro.
    if (namedPath) {
      const stale = ["wav", "mp3", "ogg", "m4a"]
        .map((value) => `${namedPath}.${value}`)
        .filter((value) => value !== key);

      context.waitUntil(
        Promise.all(
          stale.map((value) => context.env.MEDIA.delete(value).catch(() => {})),
        ),
      );
    }
  }

  const response = audioResponse(
    context.request,
    audio,
    audioHeaders(contentType, provider, "miss"),
  );

  // A Cache API só aceita respostas 200; um 206 fica fora do cache.
  if (response.status === 200) {
    context.waitUntil(cache.put(cacheKey, response.clone()));
  }

  return response;
}
