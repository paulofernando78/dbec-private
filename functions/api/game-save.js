import { readCookie, verifySession } from "../_auth.js";

const headers = { "Cache-Control": "no-store" };
const maxSaveSize = 10 * 1024 * 1024;
const gameIdPattern = /^\/games\/(sierra|lucas-arts)\/([a-z0-9-]+)$/;

const getSession = async (context) => {
  const token = readCookie(context.request, "dbec_session");
  return verifySession(token, context.env.SESSION_SECRET);
};

const getUser = (db, username) =>
  db.prepare("SELECT id FROM users WHERE username = ?").bind(username).first();

const getSaveContext = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return { response: Response.json({ error: "Não autorizado." }, { status: 401, headers }) };
  }
  if (!context.env.DB || !context.env.MEDIA) {
    return {
      response: Response.json(
        { error: "O armazenamento de saves não está configurado." },
        { status: 503, headers },
      ),
    };
  }

  const gameId = new URL(context.request.url).searchParams.get("gameId") ?? "";
  const match = gameId.match(gameIdPattern);
  if (!match) {
    return { response: Response.json({ error: "Jogo inválido." }, { status: 400, headers }) };
  }

  const user = await getUser(context.env.DB, session.username);
  if (!user) {
    return { response: Response.json({ error: "Usuário não encontrado." }, { status: 404, headers }) };
  }

  const [, developer, slug] = match;
  return {
    key: `game-saves/${user.id}/${developer}/${slug}.changes`,
    gameId,
    user,
  };
};

export async function onRequestGet(context) {
  const save = await getSaveContext(context);
  if (save.response) return save.response;

  const object = await context.env.MEDIA.get(save.key);
  if (!object) return new Response(null, { status: 204, headers });

  const responseHeaders = new Headers(headers);
  responseHeaders.set("Content-Type", "application/octet-stream");
  responseHeaders.set("Content-Length", String(object.size));
  return new Response(object.body, { status: 200, headers: responseHeaders });
}

export async function onRequestPut(context) {
  const save = await getSaveContext(context);
  if (save.response) return save.response;

  const declaredSize = Number(context.request.headers.get("Content-Length") ?? 0);
  if (declaredSize > maxSaveSize) {
    return Response.json({ error: "Save muito grande." }, { status: 413, headers });
  }

  const data = await context.request.arrayBuffer();
  if (data.byteLength === 0 || data.byteLength > maxSaveSize) {
    return Response.json({ error: "Save inválido." }, { status: 400, headers });
  }

  await context.env.MEDIA.put(save.key, data, {
    httpMetadata: { contentType: "application/octet-stream" },
    customMetadata: { gameId: save.gameId, userId: String(save.user.id) },
  });

  return Response.json({ ok: true, size: data.byteLength }, { headers });
}

export async function onRequestDelete(context) {
  const save = await getSaveContext(context);
  if (save.response) return save.response;

  await context.env.MEDIA.delete(save.key);
  return Response.json({ ok: true }, { headers });
}
