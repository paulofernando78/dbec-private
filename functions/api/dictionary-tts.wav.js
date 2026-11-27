import { readCookie, verifySession } from "../_auth.js";
import { synthesizeDictionaryTts } from "../_dictionary-tts.mjs";

const maxTextLength = 500;
const cacheControl = "public, max-age=31536000, immutable";
const cachePrefix = "tts-cache/v4";

const encoder = new TextEncoder();

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

export async function onRequestGet(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (!session) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  const rawText = new URL(context.request.url).searchParams.get("text")?.trim();
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

  const cache = caches.default;
  const cached = await cache.match(context.request);
  if (cached) return cached;

  const hash = await hashText(text);
  const key = `${cachePrefix}/${hash.slice(0, 2)}/${hash}`;

  if (context.env.MEDIA) {
    const object = await context.env.MEDIA.get(key);
    if (object) {
      const response = new Response(object.body, {
        headers: {
          "Content-Type": object.httpMetadata?.contentType || "audio/mpeg",
          "Cache-Control": cacheControl,
          "Content-Length": String(object.size),
          "X-TTS-Provider": object.customMetadata?.provider || "cache",
          "X-TTS-Cache": "hit",
        },
      });
      context.waitUntil(cache.put(context.request, response.clone()));
      return response;
    }
  }

  const result = await synthesizeDictionaryTts(text, context.env, {
    isCoolingDown,
    markCooldown,
  });

  if (!result) {
    return Response.json(
      { error: "Dictionary TTS is temporarily unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (context.env.MEDIA) {
    context.waitUntil(
      context.env.MEDIA.put(key, result.audio, {
        httpMetadata: {
          contentType: result.contentType,
          cacheControl,
        },
        customMetadata: {
          provider: result.model
            ? `${result.provider}:${result.model}`
            : result.provider,
        },
      }),
    );
  }

  const response = new Response(result.audio, {
    headers: {
      "Content-Type": result.contentType,
      "Cache-Control": cacheControl,
      "Content-Length": String(result.audio.byteLength),
      "X-TTS-Provider": result.model
        ? `${result.provider}:${result.model}`
        : result.provider,
      "X-TTS-Cache": "miss",
    },
  });

  context.waitUntil(cache.put(context.request, response.clone()));
  return response;
}
