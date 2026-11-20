const immutableCache = "public, max-age=31536000, immutable";

const getObjectKey = (path) =>
  (Array.isArray(path) ? path : [path])
    .filter(Boolean)
    .map((part) => decodeURIComponent(part))
    .join("/");

// Preserve existing R2 media while the navbar-based keys are populated.
const previousMediaPrefixes = [
  ["images/learn/course/", "images/course/"],
  ["audio/learn/course/", "audio/course/"],
  ["audio/language/pronunciation/", "audio/pronunciation/"],
  ["audio/skills/listening/audiobooks/starter/the-last-photo/the-last-photo.mp3", "audio/audiobooks/the-last-photo.mp3"],
  ["audio/skills/listening/audiobooks/", "audio/audiobooks/listening/audiobooks/"],
  ["images/skills/listening/audiobooks/starter/", "images/audiobooks/starter-beginner/"],
  ["images/learn/specific-purposes/travel/", "images/course/travel/"],
  ["images/skills/listening/audiobooks/", "images/audiobooks/"],
  ["images/learn/ted-ed/", "images/authentic-content/ted-ed/"],
  ["images/content/culture/history/", "images/culture/history/"],
  ["images/language/grammar-structures/punctuation/", "images/grammar/punctuation/"],
  ["images/content/games/old-pc-games/", "images/content/old-pc-games/"],
];

const getPreviousMediaKey = (key) => {
  const match = previousMediaPrefixes.find(([prefix]) => key.startsWith(prefix));
  return match ? match[1] + key.slice(match[0].length) : null;
};

const createHeaders = (object) => {
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", immutableCache);
  headers.set("ETag", object.httpEtag);
  return headers;
};

const privatePrefixes = ["game-saves/", "tts-cache/"];

const getKeyFromContext = (context) => {
  const key = getObjectKey(context.params.path);
  const isPrivate = privatePrefixes.some((prefix) => key.startsWith(prefix));
  return key && !key.includes("..") && !isPrivate ? key : null;
};

export async function onRequestHead(context) {
  if (!context.env.MEDIA) {
    return new Response(null, { status: 503 });
  }

  const key = getKeyFromContext(context);
  if (!key) return new Response(null, { status: 400 });

  const current = await context.env.MEDIA.head(key);
  const previousKey = current ? null : getPreviousMediaKey(key);
  const object = previousKey ? await context.env.MEDIA.head(previousKey) : current;
  if (!object) return new Response(null, { status: 404 });

  const headers = createHeaders(object);
  if (previousKey) headers.set("Cache-Control", "no-store");
  headers.set("Content-Length", String(object.size));
  return new Response(null, { status: 200, headers });
}

export async function onRequestGet(context) {
  if (!context.env.MEDIA) {
    return new Response("Media bucket is not configured.", { status: 503 });
  }

  const key = getKeyFromContext(context);
  if (!key) {
    return new Response("Invalid media path.", { status: 400 });
  }

  const rangeRequested = context.request.headers.has("Range");
  const cache = caches.default;

  if (!rangeRequested) {
    const cached = await cache.match(context.request);
    if (cached) return cached;
  }

  let object;
  let objectKey = key;
  const options = rangeRequested ? { range: context.request.headers } : undefined;

  try {
    object = await context.env.MEDIA.get(key, options);
    const previousKey = object ? null : getPreviousMediaKey(key);
    if (previousKey) {
      objectKey = previousKey;
      object = await context.env.MEDIA.get(objectKey, options);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes("InvalidRange") && !message.includes("10039")) {
      throw error;
    }

    const metadata = await context.env.MEDIA.head(objectKey);
    const headers = new Headers({ "Accept-Ranges": "bytes" });
    if (metadata) headers.set("Content-Range", `bytes */${metadata.size}`);
    return new Response("Requested range is not satisfiable.", {
      status: 416,
      headers,
    });
  }

  if (!object) return new Response("Media not found.", { status: 404 });

  const headers = createHeaders(object);

  if (objectKey !== key) headers.set("Cache-Control", "no-store");

  if (rangeRequested && object.range) {
    const { offset, length } = object.range;
    const end = offset + length - 1;
    headers.set("Content-Range", `bytes ${offset}-${end}/${object.size}`);
    headers.set("Content-Length", String(length));

    return new Response(object.body, { status: 206, headers });
  }

  headers.set("Content-Length", String(object.size));
  const response = new Response(object.body, { status: 200, headers });
  if (objectKey === key) context.waitUntil(cache.put(context.request, response.clone()));

  return response;
}
