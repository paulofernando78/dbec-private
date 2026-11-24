import { SESSION_IDLE_SECONDS } from "../shared/session.mjs";

const encoder = new TextEncoder();

const toBase64Url = (value) =>
  btoa(value)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");

const fromBase64Url = (value) => {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  return atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
};

const sign = async (value, secret) => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(value),
  );

  return toBase64Url(String.fromCharCode(...new Uint8Array(signature)));
};

export const getUsers = (env) => {
  let users;

  if (env.AUTH_USERS) {
    try {
      users = JSON.parse(env.AUTH_USERS.trim());
    } catch {
      throw new Error("AUTH_USERS_INVALID_JSON");
    }
  } else if (env.AUTH_USERNAME && env.AUTH_PASSWORD) {
    users = { [env.AUTH_USERNAME]: env.AUTH_PASSWORD };
  } else {
    throw new Error("AUTH_USERS_MISSING");
  }

  const entries = users && typeof users === "object" ? Object.entries(users) : [];

  if (!users || Array.isArray(users) || entries.length === 0) {
    throw new Error("AUTH_USERS_INVALID");
  }

  return Object.fromEntries(
    entries.map(([username, value]) => {
      if (!username) throw new Error("AUTH_USERS_INVALID");

      // Compatibilidade temporária com { "usuario": "senha" }.
      if (typeof value === "string" && value) {
        return [
          username,
          {
            password: value,
            role: "student",
            studentId: username,
            isAdmin: false,
          },
        ];
      }

      if (
        !value ||
        typeof value !== "object" ||
        typeof value.password !== "string" ||
        !value.password ||
        !["teacher", "student"].includes(value.role) ||
        (value.admin !== undefined && typeof value.admin !== "boolean") ||
        (value.role === "student" &&
          (typeof value.studentId !== "string" || !value.studentId))
      ) {
        throw new Error("AUTH_USERS_INVALID");
      }

      return [
        username,
        {
          password: value.password,
          role: value.role,
          studentId: value.role === "student" ? value.studentId : undefined,
          // AUTH_USERS é o canal privilegiado do dono (definido por variável de
          // ambiente), então professor vira admin por padrão. "admin": false cria
          // um professor sem privilégios.
          isAdmin: value.role === "teacher" && value.admin !== false,
        },
      ];
    }),
  );
};

export const sessionCookie = (token) =>
  `dbec_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_IDLE_SECONDS}`;

export const createSession = async (user, secret) => {
  const payload = toBase64Url(
    JSON.stringify({
      username: user.username,
      role: user.role,
      studentId: user.studentId,
      // userId identifica o professor no banco D1 e é o valor gravado em
      // users.teacher_id. Sessões antigas podem não ter os dois campos.
      userId: Number.isInteger(user.userId) ? user.userId : undefined,
      isAdmin: user.isAdmin === true,
      expiresAt: Date.now() + SESSION_IDLE_SECONDS * 1000,
    }),
  );
  return `${payload}.${await sign(payload, secret)}`;
};

export const verifySession = async (token, secret) => {
  if (!token || !secret) return null;

  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature || signature !== (await sign(payload, secret))) {
      return null;
    }

    const session = JSON.parse(fromBase64Url(payload));
    if (
      typeof session.username !== "string" ||
      !["teacher", "student"].includes(session.role) ||
      (session.userId !== undefined && !Number.isInteger(session.userId)) ||
      (session.isAdmin !== undefined && typeof session.isAdmin !== "boolean") ||
      typeof session.expiresAt !== "number" ||
      session.expiresAt <= Date.now() ||
      session.expiresAt > Date.now() + SESSION_IDLE_SECONDS * 1000
    ) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
};

export const readCookie = (request, name) => {
  const cookie = request.headers.get("Cookie") ?? "";
  const entry = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  return entry ? decodeURIComponent(entry.slice(name.length + 1)) : undefined;
};
