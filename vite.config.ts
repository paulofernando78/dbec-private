import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { createHash } from "node:crypto";
import { createReadStream, existsSync, watch } from "node:fs";
import { mkdir, readFile, stat, unlink, writeFile } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { defineConfig, type Plugin } from "vite";
import { synthesizeDictionaryTts } from "./functions/_dictionary-tts.mjs";
import { syncAudiobookDurations } from "./scripts/sync-audiobook-durations.mjs";
import { SESSION_IDLE_SECONDS } from "./shared/session.mjs";
import { rosterSignature } from "./shared/roster-version.mjs";

import { students as developmentStudents } from "./app/data/students";

const localLessonCompletionByUser = new Map<string, Map<string, boolean>>();
const maxGameSaveSize = 10 * 1024 * 1024;
const gameSaveIdPattern = /^\/games\/(sierra|lucas-arts)\/([a-z0-9-]+)$/;
const localNotes = new Map<string, { teacher: string; student: string }>();
const localCalendarNotes = new Map<string, string>();
const localAiTutorRequests = new Map<string, number[]>();
const localAiTutorHistory = new Map<string, { role: string; text: string }[]>();
const localDictionaryTtsCache = new Map<
  string,
  { audio: Buffer; model: string; contentType?: string }
>();
let localSession: {
  username: string;
  role: string;
  studentId?: string;
  userId?: number;
  isAdmin?: boolean;
  expiresAt: number;
} | null = null;

const aiTutorSystemInstruction = `You are DBEC's friendly English tutor.
Help teachers and English learners explain words and expressions, check grammar and spelling, explain corrections politely, give short examples, and practice age-appropriate conversation.
Reply in Portuguese unless the user asks for English. Keep answers concise and encouraging. Do not complete tests or graded assignments; teach the reasoning instead.`;

type LocalStudent = {
  studentId: string;
  username: string;
  name: string;
  schedule: string;
  time: string;
  plan: "free" | "plus";
  /** null espelha "sem professor" (users.teacher_id IS NULL). */
  teacherId: number | null;
};

type LocalTeacher = {
  id: number;
  username: string;
  displayName: string;
  isAdmin: boolean;
  studentLimit: number;
  active: number;
};

let nextLocalUserId = 1;

const localStudents = new Map<string, LocalStudent>(
  Object.entries(developmentStudents).map(([studentId, student]) => [
    studentId,
    {
      studentId,
      username: studentId.split("-")[0],
      name: student.name,
      schedule: student.schedule,
      time: student.time,
      plan: "free",
      teacherId: null,
    },
  ]),
);

const localTeachersByUsername = new Map<string, LocalTeacher>();
const localTeachersById = new Map<number, LocalTeacher>();

const ensureLocalTeacher = (username: string, isAdmin: boolean) => {
  const existing = localTeachersByUsername.get(username);

  if (existing) {
    existing.isAdmin = existing.isAdmin || isAdmin;
    return existing;
  }

  const teacher: LocalTeacher = {
    id: nextLocalUserId++,
    username,
    displayName: username,
    isAdmin,
    studentLimit: 10,
    active: 1,
  };

  localTeachersByUsername.set(teacher.username, teacher);
  localTeachersById.set(teacher.id, teacher);
  return teacher;
};

const localStudentCountFor = (teacherId: number) =>
  [...localStudents.values()].filter((student) => student.teacherId === teacherId)
    .length;

const localTeacherCapacity = (teacherId: number) => {
  const teacher = localTeachersById.get(teacherId);
  if (!teacher) return null;

  const used = localStudentCountFor(teacher.id);

  return {
    used,
    limit: teacher.studentLimit,
    isFull: !teacher.isAdmin && used >= teacher.studentLimit,
  };
};

const localTeacherPayload = (teacher: LocalTeacher) => ({
  id: teacher.id,
  username: teacher.username,
  displayName: teacher.displayName,
  isAdmin: teacher.isAdmin,
  isUnlimited: teacher.isAdmin,
  studentLimit: teacher.studentLimit,
  studentCount: localStudentCountFor(teacher.id),
  active: teacher.active,
});

type LocalTeacherInput = {
  displayName: string;
  username: string;
  studentLimit: number;
};

const normalizeLocalTeacherInput = (
  input: any,
): { ok: true; value: LocalTeacherInput } | { ok: false; error: string } => {
  const displayName =
    typeof input?.displayName === "string" ? input.displayName.trim() : "";
  const username =
    typeof input?.username === "string" ? input.username.trim().toLowerCase() : "";
  const studentLimit = input?.studentLimit;

  if (displayName.length < 3) {
    return { ok: false, error: "Informe o nome do professor." };
  }
  if (username.length < 3) {
    return { ok: false, error: "Informe um usuário com pelo menos 3 caracteres." };
  }
  if (!Number.isInteger(studentLimit) || studentLimit < 0 || studentLimit > 500) {
    return { ok: false, error: "Informe um limite de alunos entre 0 e 500." };
  }

  return { ok: true, value: { displayName, username, studentLimit } };
};

const isLocalAdmin = (session: { isAdmin?: boolean } | null) =>
  session?.isAdmin === true;

const ownsLocalStudent = (
  session: { userId?: number; isAdmin?: boolean } | null,
  student: LocalStudent,
) => {
  if (isLocalAdmin(session)) return true;

  const userId = session?.userId;
  return userId !== undefined && student.teacherId === userId;
};

const createStudentSlug = (name: string) =>
  name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const mediaTypes: Record<string, string> = {
  ".aac": "audio/aac",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".m4a": "audio/mp4",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".webp": "image/webp",
};

const localMedia = (): Plugin => ({
  name: "local-media",
  apply: "serve",
  config: () => ({
    server: {
      fs: {
        deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "**/.local-audiobooks/**"],
      },
    },
  }),
  configureServer(server) {
    server.middlewares.use("/media", async (request, response, next) => {
      if (!request.url || !["GET", "HEAD"].includes(request.method ?? "")) {
        return next();
      }

      try {
        const mediaPath = decodeURIComponent(request.url.split("?")[0])
          .replace(/^\/+/, "");
        const extension = extname(mediaPath).toLowerCase();
        const mediaRoot = resolve(process.cwd(), "local-media");
        const filePath = resolve(mediaRoot, mediaPath);

        if (!filePath.startsWith(`${mediaRoot}${sep}`)) return next();

        const file = await stat(filePath);
        if (!file.isFile()) return next();

        response.setHeader(
          "Content-Type",
          mediaTypes[extension] ?? "application/octet-stream",
        );
        response.setHeader("Accept-Ranges", "bytes");
        response.setHeader("Cache-Control", "no-store");

        const range = request.headers.range?.match(/bytes=(\d*)-(\d*)/);
        if (range) {
          const start = range[1] ? Number(range[1]) : 0;
          const end = range[2] ? Number(range[2]) : file.size - 1;

          if (start > end || end >= file.size) {
            response.statusCode = 416;
            response.setHeader("Content-Range", `bytes */${file.size}`);
            response.end();
            return;
          }

          response.statusCode = 206;
          response.setHeader("Content-Range", `bytes ${start}-${end}/${file.size}`);
          response.setHeader("Content-Length", String(end - start + 1));
          if (request.method === "HEAD") return response.end();
          createReadStream(filePath, { start, end }).pipe(response);
          return;
        }

        response.setHeader("Content-Length", String(file.size));
        if (request.method === "HEAD") return response.end();
        createReadStream(filePath).pipe(response);
      } catch {
        next();
      }
    });
  },
});

const localAuth = (): Plugin => ({
  name: "local-auth",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/api", (_request, _response, next) => {
      if (localSession && localSession.expiresAt <= Date.now()) localSession = null;
      next();
    });
    server.middlewares.use("/api/login", async (request, response, next) => {
      if (request.method !== "POST") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      try {
        request.setEncoding("utf8");
        let body = "";
        for await (const chunk of request) body += chunk;

        const { username, password } = JSON.parse(body);
        const variables = await readFile(resolve(process.cwd(), ".dev.vars"), "utf8");
        const authUsers = variables.match(/^AUTH_USERS=(.*)$/m)?.[1]?.trim();
        const users = authUsers ? JSON.parse(authUsers) : undefined;
        const rawUser = users?.[username];
        const user =
          typeof rawUser === "string"
            ? { password: rawUser, role: "student", studentId: username }
            : rawUser;

        if (
          !users ||
          typeof username !== "string" ||
          typeof password !== "string" ||
          !Object.prototype.hasOwnProperty.call(users, username) ||
          !user ||
          user.password !== password
        ) {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Usuário ou senha inválidos." }));
          return;
        }

        const redirectTo =
          user.role === "teacher"
            ? "/teacher/dashboard"
            : `/dashboard/${encodeURIComponent(user.studentId ?? username)}`;

        const teacher =
          user.role === "teacher"
            ? ensureLocalTeacher(username, user.admin !== false)
            : null;

        localSession = {
          username,
          role: user.role,
          studentId: user.studentId,
          userId: teacher?.id,
          isAdmin: teacher?.isAdmin ?? false,
          expiresAt: Date.now() + SESSION_IDLE_SECONDS * 1000,
        };

        response.statusCode = 200;
        response.end(
          JSON.stringify({ ok: true, role: user.role, redirectTo }),
        );
      } catch {
        response.statusCode = 503;
        response.end(
          JSON.stringify({
            error: "Verifique o arquivo .dev.vars do ambiente local.",
          }),
        );
      }
    });

    server.middlewares.use("/api/logout", (request, response, next) => {
      if (request.method !== "POST") return next();
      localSession = null;
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ ok: true }));
    });

    server.middlewares.use("/api/session", (request, response, next) => {
      if (request.method !== "GET" && request.method !== "POST") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession || localSession.expiresAt <= Date.now()) {
        localSession = null;
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      if (request.method === "POST") {
        localSession.expiresAt = Date.now() + SESSION_IDLE_SECONDS * 1000;
        response.end(JSON.stringify({ expiresAt: localSession.expiresAt }));
        return;
      }

      const dashboardPath =
        localSession.role === "teacher"
          ? "/teacher/dashboard"
          : `/dashboard/${encodeURIComponent(localSession.studentId ?? localSession.username)}`;

      const student = localSession.studentId
        ? localStudents.get(localSession.studentId)
        : undefined;

      response.statusCode = 200;
      response.end(
        JSON.stringify({
          ...localSession,
          dashboardPath,
          displayName: student?.name ?? localSession.username,
          schedule: student?.schedule ?? null,
          time: student?.time ?? null,
          plan: student?.plan ?? null,
        }),
      );
    });

    server.middlewares.use(
      "/api/dictionary-tts.wav",
      async (request, response, next) => {
        if (request.method !== "GET") return next();
        if (!localSession) {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Unauthorized." }));
          return;
        }

        try {
          const text = new URL(request.url ?? "", "http://localhost")
            .searchParams.get("text")
            ?.trim();
          if (!text || text.length > 500) {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "Invalid text." }));
            return;
          }

          const cached = localDictionaryTtsCache.get(text);
          if (cached) {
            response.setHeader("Content-Type", cached.contentType ?? "audio/wav");
            response.setHeader("Content-Length", String(cached.audio.length));
            response.setHeader("X-TTS-Provider", cached.model);
            response.end(cached.audio);
            return;
          }

          const variables = await readFile(
            resolve(process.cwd(), ".dev.vars"),
            "utf8",
          );
          const readVariable = (name: string) =>
            variables.match(new RegExp(`^${name}=(.*)$`, "m"))?.[1]?.trim();

          const env = {
            OPENROUTER_API_KEY: readVariable("OPENROUTER_API_KEY"),
            OPENROUTER_TTS_MODELS: readVariable("OPENROUTER_TTS_MODELS"),
            OPENROUTER_TTS_VOICE: readVariable("OPENROUTER_TTS_VOICE"),
            GEMINI_API_KEY: readVariable("GEMINI_API_KEY"),
            GEMINI_TTS_MODELS: readVariable("GEMINI_TTS_MODELS"),
          };

          if (!env.OPENROUTER_API_KEY && !env.GEMINI_API_KEY) {
            response.statusCode = 503;
            response.end(
              JSON.stringify({ error: "Dictionary TTS is not configured." }),
            );
            return;
          }

          const result = await synthesizeDictionaryTts(text, env);
          if (!result) {
            response.statusCode = 503;
            response.end(
              JSON.stringify({
                error: "Dictionary TTS is temporarily unavailable.",
              }),
            );
            return;
          }

          const bytes =
            result.audio instanceof Uint8Array
              ? result.audio
              : new Uint8Array(result.audio);
          const audio = Buffer.from(bytes);
          const provider = result.model
            ? `${result.provider}:${result.model}`
            : result.provider;

          localDictionaryTtsCache.set(text, {
            audio,
            model: provider,
            contentType: result.contentType,
          });

          response.statusCode = 200;
          response.setHeader("Content-Type", result.contentType);
          response.setHeader("Content-Length", String(audio.length));
          response.setHeader("X-TTS-Provider", provider);
          response.end(audio);
        } catch (error) {
          console.error("Local Dictionary TTS error", error);
          response.statusCode = 500;
          response.end(JSON.stringify({ error: "Dictionary TTS failed." }));
        }
      },
    );

    server.middlewares.use("/api/ai-chat", async (request, response, next) => {
      if (!["GET", "PUT", "POST"].includes(request.method ?? "")) return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      const userKey = localSession.role === "student"
        ? `student:${localSession.studentId}`
        : `teacher:${localSession.username}`;
      if (request.method === "GET") {
        response.end(JSON.stringify({ account: userKey, messages: localAiTutorHistory.get(userKey) ?? [] }));
        return;
      }

      let localReservation: { userKey: string; createdAt: number } | null = null;
      try {
        request.setEncoding("utf8");
        let body = "";
        for await (const chunk of request) body += chunk;
        const input = JSON.parse(body);
        if (input.account !== undefined && input.account !== userKey) {
          response.statusCode = 409;
          response.end(JSON.stringify({ error: "A sessão mudou." }));
          return;
        }
        if (request.method === "PUT") {
          if (input.account !== userKey || !Array.isArray(input.messages) ||
              !input.messages.every((entry: { role?: unknown; text?: unknown }) =>
                (entry?.role === "user" || entry?.role === "model") &&
                typeof entry.text === "string" && entry.text.trim(),
              )) {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "Histórico inválido." }));
            return;
          }
          if (!localAiTutorHistory.has(userKey)) localAiTutorHistory.set(userKey, input.messages);
          response.end(JSON.stringify({ account: userKey, messages: localAiTutorHistory.get(userKey) }));
          return;
        }
        const variables = await readFile(resolve(process.cwd(), ".dev.vars"), "utf8");
        const apiKey = variables
          .match(/^OPENROUTER_API_KEY=(.*)$/m)?.[1]
          ?.trim();
        const configuredModels =
          variables.match(/^OPENROUTER_MODELS=(.*)$/m)?.[1]?.trim() ||
          "openrouter/free";
        const models = configuredModels
          .split(",")
          .map((model) => model.trim())
          .filter(
            (model) => model === "openrouter/free" || model.endsWith(":free"),
          );
        if (!apiKey) {
          response.statusCode = 503;
          response.end(
            JSON.stringify({
              error: "Adicione OPENROUTER_API_KEY ao arquivo .dev.vars.",
            }),
          );
          return;
        }
        if (models.length === 0) {
          response.statusCode = 503;
          response.end(
            JSON.stringify({
              error:
                "OPENROUTER_MODELS deve conter apenas openrouter/free ou modelos terminados em :free.",
            }),
          );
          return;
        }

        const messages = Array.isArray(input.messages)
          ? input.messages.slice(-12)
          : [];
        const isValid =
          messages.length > 0 &&
          messages.every(
            (message: { role?: unknown; text?: unknown }) =>
              (message?.role === "user" || message?.role === "model") &&
              typeof message.text === "string" &&
              message.text.trim().length > 0 &&
              message.text.length <= 2_000,
          ) &&
          messages.at(-1)?.role === "user";
        if (!isValid) {
          response.statusCode = 400;
          response.end(JSON.stringify({ error: "Mensagem inválida." }));
          return;
        }

        const now = Date.now();
        const recentRequests = (localAiTutorRequests.get(userKey) ?? []).filter(
          (createdAt) => createdAt > now - 60 * 60 * 1_000,
        );
        const lastRequestAt = recentRequests.at(-1) ?? 0;
        if (lastRequestAt > now - 10_000) {
          const retryAfterSeconds = Math.max(
            1,
            Math.ceil((lastRequestAt + 10_000 - now) / 1_000),
          );
          response.statusCode = 429;
          response.end(
            JSON.stringify({
              error: `Aguarde ${retryAfterSeconds} segundos antes de enviar outra pergunta.`,
              retryAfterSeconds,
            }),
          );
          return;
        }
        if (recentRequests.length >= 10) {
          const retryAfterSeconds = Math.max(
            1,
            Math.ceil((recentRequests[0] + 60 * 60 * 1_000 - now) / 1_000),
          );
          response.statusCode = 429;
          response.end(
            JSON.stringify({
              error: `Você atingiu o limite de 10 perguntas por hora. Tente novamente em cerca de ${Math.max(1, Math.ceil(retryAfterSeconds / 60))} minutos.`,
              retryAfterSeconds,
            }),
          );
          return;
        }
        recentRequests.push(now);
        localAiTutorRequests.set(userKey, recentRequests);
        localReservation = { userKey, createdAt: now };

        type OpenRouterTextResult = {
          model?: string;
          error?: { message?: string };
          choices?: Array<{
            message?: {
              content?:
                | string
                | Array<{ type?: string; text?: string }>;
            };
          }>;
        };
        let result: OpenRouterTextResult | null = null;
        let usedModel = "";
        const skippedModels: string[] = [];
        const rateLimitedModels: string[] = [];

        for (const model of models) {
          let openRouterResponse;
          try {
            openRouterResponse = await fetch(
              "https://openrouter.ai/api/v1/chat/completions",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${apiKey}`,
                  "Content-Type": "application/json",
                  "HTTP-Referer": "http://localhost:5173",
                  "X-Title": "Daily Basis English Course",
                },
                body: JSON.stringify({
                  model,
                  messages: [
                    { role: "system", content: aiTutorSystemInstruction },
                    ...messages.map(
                      (message: {
                        role: "user" | "model";
                        text: string;
                      }) => ({
                        role: message.role === "model" ? "assistant" : "user",
                        content: message.text.trim(),
                      }),
                    ),
                  ],
                  max_tokens: 800,
                }),
              },
            );
          } catch (error) {
            console.error("OpenRouter API request failed", model, error);
            skippedModels.push(model);
            continue;
          }

          const candidateResult = await openRouterResponse
            .json()
            .catch(() => null) as
            | OpenRouterTextResult
            | null;
          if (openRouterResponse.ok) {
            result = candidateResult;
            usedModel = candidateResult?.model ?? model;
            break;
          }

          console.error(
            "OpenRouter API error",
            model,
            openRouterResponse.status,
            candidateResult?.error?.message,
          );
          if (
            openRouterResponse.status === 429 ||
            openRouterResponse.status >= 500
          ) {
            skippedModels.push(model);
            if (openRouterResponse.status === 429) {
              rateLimitedModels.push(model);
            }
            continue;
          }
          break;
        }

        if (!result || !usedModel) {
          localAiTutorRequests.set(
            userKey,
            recentRequests.filter((createdAt) => createdAt !== now),
          );
          response.statusCode = 503;
          response.end(JSON.stringify({
            error:
              rateLimitedModels.length === models.length
                ? "All available AI models have reached their usage limits. Please try again later."
                : "The AI service is temporarily unavailable. Please try again later.",
          }));
          return;
        }

        const rawContent = result.choices?.[0]?.message?.content;
        const message = (
          typeof rawContent === "string"
            ? rawContent
            : rawContent
                ?.map((part) => part.text)
                .filter(Boolean)
                .join("\n")
        )?.trim();
        if (!message) {
          localAiTutorRequests.set(
            userKey,
            recentRequests.filter((createdAt) => createdAt !== now),
          );
          response.statusCode = 502;
          response.end(JSON.stringify({ error: "O tutor não gerou uma resposta." }));
          return;
        }

        const history = [
          ...(localAiTutorHistory.get(userKey) ?? []),
          { role: "user", text: messages.at(-1).text },
          { role: "model", text: message },
        ];
        localAiTutorHistory.set(userKey, history);
        response.statusCode = 200;
        response.end(JSON.stringify({
          message,
          messages: history,
          model: usedModel,
          fallbackNotice:
            rateLimitedModels.length > 0
              ? `Some AI models have reached their usage limits. Your request was automatically completed using ${usedModel}.`
              : skippedModels.length > 0
                ? `Some AI models were temporarily unavailable. Your request was automatically completed using ${usedModel}.`
              : null,
        }));
      } catch (error) {
        if (localReservation) {
          const { userKey, createdAt } = localReservation;
          localAiTutorRequests.set(
            userKey,
            (localAiTutorRequests.get(userKey) ?? []).filter(
              (requestAt) => requestAt !== createdAt,
            ),
          );
        }
        console.error("Local AI Tutor error", error);
        response.statusCode = 500;
        response.end(JSON.stringify({ error: "Não foi possível acessar o AI Tutor." }));
      }
    });

    server.middlewares.use("/api/dashboard", (request, response, next) => {
      if (request.method !== "GET") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      const requestedStudentId = new URL(
        request.url ?? "",
        "http://localhost",
      ).searchParams.get("studentId");
      const studentId =
        localSession.role === "teacher"
          ? requestedStudentId
          : localSession.studentId;
      const student = studentId ? localStudents.get(studentId) : undefined;
      const canReadStudent =
        student &&
        (localSession.role !== "teacher" ||
          ownsLocalStudent(localSession, student));

      if (!studentId || !canReadStudent) {
        response.statusCode = 404;
        response.end(JSON.stringify({ error: "Aluno não encontrado." }));
        return;
      }

      response.statusCode = 200;
      response.end(
        JSON.stringify({
          viewer: {
            username: localSession.username,
            role: localSession.role,
          },
          student,
          notes: localNotes.get(studentId) ?? { teacher: "", student: "" },
          calendar: [],
        }),
      );
    });

    server.middlewares.use("/api/calendar-notes", async (request, response, next) => {
      if (request.method !== "GET" && request.method !== "PUT") return next();
      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");
      const session = localSession;
      if (!session) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }
      if (request.method === "PUT" && session.role !== "teacher") {
        response.statusCode = 403;
        response.end(JSON.stringify({ error: "Somente o professor pode editar estas observações." }));
        return;
      }
      try {
        let body: { studentId?: string; content?: string } = {};
        if (request.method === "PUT") {
          request.setEncoding("utf8");
          let raw = "";
          for await (const chunk of request) raw += chunk;
          body = JSON.parse(raw);
          if (typeof body?.content !== "string" || body.content.length > 10000) {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "As observações devem ter até 10.000 caracteres." }));
            return;
          }
        }
        const requestedId = body.studentId ?? new URL(request.url ?? "", "http://localhost").searchParams.get("studentId");
        const studentId = session.role === "teacher" ? requestedId : session.studentId;
        const student = typeof studentId === "string" ? localStudents.get(studentId) : undefined;
        const canReachStudent =
          student &&
          (session.role !== "teacher" || ownsLocalStudent(session, student));

        if (!canReachStudent) {
          response.statusCode = 404;
          response.end(JSON.stringify({ error: "Aluno não encontrado." }));
          return;
        }
        if (request.method === "PUT") localCalendarNotes.set(student.studentId, body.content!);
        response.end(JSON.stringify(request.method === "GET" ? { content: localCalendarNotes.get(student.studentId) ?? "" } : { ok: true }));
      } catch {
        response.statusCode = 400;
        response.end(JSON.stringify({ error: "Dados inválidos." }));
      }
    });

    server.middlewares.use("/api/notes", async (request, response, next) => {
      if (request.method !== "PUT") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      try {
        request.setEncoding("utf8");
        let body = "";
        for await (const chunk of request) body += chunk;

        const { studentId, noteType, content, shared = false } = JSON.parse(body);
        const allowedStudentId =
          localSession.role === "teacher"
            ? studentId
            : localSession.studentId;
        const canEditNote =
          localSession.role === "teacher"
            ? noteType === "teacher" || noteType === "student"
            : noteType === "student";

        const targetStudent = localStudents.get(allowedStudentId);
        const canReachStudent =
          targetStudent &&
          (localSession.role !== "teacher" ||
            ownsLocalStudent(localSession, targetStudent));

        if (
          !canReachStudent ||
          !canEditNote ||
          typeof content !== "string"
        ) {
          response.statusCode = 403;
          response.end(JSON.stringify({ error: "Operação não permitida." }));
          return;
        }

        const current = localNotes.get(allowedStudentId) ?? {
          teacher: "",
          student: "",
        };
        localNotes.set(
          allowedStudentId,
          shared && noteType === "student"
            ? { teacher: "", student: content }
            : { ...current, [noteType]: content },
        );

        response.statusCode = 200;
        response.end(JSON.stringify({ ok: true }));
      } catch {
        response.statusCode = 400;
        response.end(JSON.stringify({ error: "Dados inválidos." }));
      }
    });

    server.middlewares.use(
      "/api/students",
      async (request, response, next) => {
        if (
          !request.method ||
          !["GET", "POST", "PUT", "PATCH", "DELETE"].includes(request.method)
        ) {
          return next();
        }

        response.setHeader("Content-Type", "application/json");
        response.setHeader("Cache-Control", "no-store");

        const viewer = localSession;

        if (!viewer || viewer.role !== "teacher") {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Não autorizado." }));
          return;
        }

        if (request.method === "GET") {
          const students = [...localStudents.values()]
            .filter((student) => ownsLocalStudent(viewer, student))
            .sort((a, b) => a.name.localeCompare(b.name));

          response.statusCode = 200;
          response.end(JSON.stringify({ students }));
          return;
        }

        try {
          request.setEncoding("utf8");
          let body = "";
          for await (const chunk of request) body += chunk;

          const input = JSON.parse(body);

          // Atribuir, transferir ou desvincular: muda apenas o responsável.
          if (request.method === "PATCH") {
            const patchStudentId = input.studentId;
            const hasTeacherId = "teacherId" in input;
            const targetTeacherId: number | null = hasTeacherId
              ? (input.teacherId ?? null)
              : null;

            if (
              typeof patchStudentId !== "string" ||
              !hasTeacherId ||
              (targetTeacherId !== null && !Number.isInteger(targetTeacherId))
            ) {
              response.statusCode = 400;
              response.end(JSON.stringify({ error: "Dados inválidos." }));
              return;
            }

            const target = localStudents.get(patchStudentId);

            if (!target || !ownsLocalStudent(viewer, target)) {
              response.statusCode = 404;
              response.end(JSON.stringify({ error: "Aluno não encontrado." }));
              return;
            }

            if (targetTeacherId !== null) {
              const capacity = localTeacherCapacity(targetTeacherId);

              if (!capacity) {
                response.statusCode = 404;
                response.end(
                  JSON.stringify({ error: "Professor não encontrado." }),
                );
                return;
              }

              if (capacity.isFull) {
                response.statusCode = 409;
                response.end(
                  JSON.stringify({
                    error: `Este professor já está com ${capacity.used}/${capacity.limit} alunos.`,
                  }),
                );
                return;
              }
            }

            localStudents.set(patchStudentId, {
              ...target,
              teacherId: targetTeacherId,
            });
            response.statusCode = 200;
            response.end(
              JSON.stringify({
                ok: true,
                studentId: patchStudentId,
                teacherId: targetTeacherId,
              }),
            );
            return;
          }

          // Exclusão definitiva: admin-only, porque é destrutiva.
          if (request.method === "DELETE") {
            if (!isLocalAdmin(viewer)) {
              response.statusCode = 403;
              response.end(
                JSON.stringify({
                  error:
                    "Somente o admin pode excluir um aluno. Use desvincular para devolvê-lo à fila.",
                }),
              );
              return;
            }

            const deleteStudentId = input.studentId;
            const target =
              typeof deleteStudentId === "string"
                ? localStudents.get(deleteStudentId)
                : undefined;

            if (!target) {
              response.statusCode = 404;
              response.end(JSON.stringify({ error: "Aluno não encontrado." }));
              return;
            }

            localStudents.delete(deleteStudentId);
            localNotes.delete(deleteStudentId);
            localCalendarNotes.delete(deleteStudentId);
            response.statusCode = 200;
            response.end(JSON.stringify({ ok: true }));
            return;
          }

          const name = input.name?.trim();
          const username = input.username?.trim().toLowerCase();
          const schedule = input.schedule;
          const time = input.time;
          const plan = input.plan;

          if (
            !name ||
            !username ||
            !schedule ||
            !time ||
            (plan !== "free" && plan !== "plus")
          ) {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "Preencha os dados do aluno." }));
            return;
          }

          // Aluno novo entra no roster do professor da sessão. Admin é ilimitado.
          const ownerId = viewer.userId ?? null;

          if (ownerId !== null) {
            const capacity = localTeacherCapacity(ownerId);

            if (capacity?.isFull) {
              response.statusCode = 409;
              response.end(
                JSON.stringify({
                  error: `Este professor já está com ${capacity.used}/${capacity.limit} alunos.`,
                }),
              );
              return;
            }
          }

          if (request.method === "POST") {
            if (typeof input.password !== "string" || input.password.length < 8) {
              response.statusCode = 400;
              response.end(
                JSON.stringify({
                  error: "A senha deve ter pelo menos 8 caracteres.",
                }),
              );
              return;
            }

            const studentId = createStudentSlug(name);
            const duplicate = [...localStudents.values()].some(
              (student) =>
                student.studentId === studentId || student.username === username,
            );

            if (duplicate) {
              response.statusCode = 409;
              response.end(
                JSON.stringify({ error: "Usuário ou aluno já cadastrado." }),
              );
              return;
            }

            const student: LocalStudent = {
              studentId,
              username,
              name,
              schedule,
              time,
              plan,
              teacherId: ownerId,
            };
            localStudents.set(studentId, student);
            response.statusCode = 201;
            response.end(JSON.stringify({ ok: true, student }));
            return;
          }

          const studentId = input.studentId;
          const current =
            typeof studentId === "string"
              ? localStudents.get(studentId)
              : undefined;

          if (!current || !ownsLocalStudent(viewer, current)) {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: "Aluno não encontrado." }));
            return;
          }

          const duplicateUsername = [...localStudents.values()].some(
            (student) =>
              student.studentId !== studentId && student.username === username,
          );

          if (duplicateUsername) {
            response.statusCode = 409;
            response.end(
              JSON.stringify({ error: "Esse usuário já está sendo utilizado." }),
            );
            return;
          }

          localStudents.set(studentId, {
            ...current,
            studentId,
            username,
            name,
            schedule,
            time,
            plan,
          });
          response.statusCode = 200;
          response.end(JSON.stringify({ ok: true }));
        } catch {
          response.statusCode = 400;
          response.end(JSON.stringify({ error: "JSON inválido." }));
        }
      },
    );

    server.middlewares.use(
      "/api/student-report",
      (request, response, next) => {
        if (request.method !== "GET") return next();

        response.setHeader("Content-Type", "application/json");
        response.setHeader("Cache-Control", "no-store");

        const viewer = localSession;

        if (!viewer || viewer.role !== "teacher") {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Não autorizado." }));
          return;
        }

        const studentId = new URL(
          request.url ?? "",
          "http://localhost",
        ).searchParams.get("studentId");
        const student =
          typeof studentId === "string" ? localStudents.get(studentId) : undefined;

        if (!student || !ownsLocalStudent(viewer, student)) {
          response.statusCode = 404;
          response.end(JSON.stringify({ error: "Aluno não encontrado." }));
          return;
        }

        // O dev não registra visitas nem verificações de exercícios.
        response.statusCode = 200;
        response.end(JSON.stringify({ visits: [], attempts: [] }));
      },
    );

    server.middlewares.use(
      "/api/roster-version",
      (request, response, next) => {
        if (request.method !== "GET") return next();

        response.setHeader("Content-Type", "application/json");
        response.setHeader("Cache-Control", "no-store");

        const viewer = localSession;

        if (!viewer || viewer.role !== "teacher") {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Não autorizado." }));
          return;
        }

        const students = [...localStudents.values()]
          .filter((student) => ownsLocalStudent(viewer, student))
          .map(
            (student) =>
              `${student.studentId}:${student.teacherId ?? "-"}:${student.name}:${student.schedule ?? "-"}:${student.time ?? "-"}`,
          );

        const teachers = [...localTeachersById.values()].map(
          (teacher) =>
            `${teacher.id}:${teacher.displayName}:${teacher.active}:${teacher.studentLimit}`,
        );

        response.statusCode = 200;
        response.end(
          JSON.stringify({ version: rosterSignature(students, teachers) }),
        );
      },
    );

    server.middlewares.use(
      "/api/teachers",
      async (request, response, next) => {
        if (
          !request.method ||
          !["GET", "POST", "PUT", "DELETE"].includes(request.method)
        ) {
          return next();
        }

        response.setHeader("Content-Type", "application/json");
        response.setHeader("Cache-Control", "no-store");

        const viewer = localSession;

        if (!viewer || viewer.role !== "teacher") {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Não autorizado." }));
          return;
        }

        const respond = (status: number, body: unknown) => {
          response.statusCode = status;
          response.end(JSON.stringify(body));
        };

        if (request.method === "GET") {
          const teachers = isLocalAdmin(viewer)
            ? [...localTeachersById.values()]
            : [...localTeachersById.values()].filter(
                (teacher) => teacher.id === viewer.userId,
              );

          respond(200, { teachers: teachers.map(localTeacherPayload) });
          return;
        }

        if (!isLocalAdmin(viewer)) {
          respond(403, { error: "Somente o admin pode gerenciar professores." });
          return;
        }

        let input: any;

        try {
          request.setEncoding("utf8");
          let raw = "";
          for await (const chunk of request) raw += chunk;
          input = JSON.parse(raw);
        } catch {
          respond(400, { error: "JSON inválido." });
          return;
        }

        const usernameTaken = (username: string, exceptId?: number) =>
          [...localTeachersById.values()].some(
            (teacher) =>
              teacher.username === username && teacher.id !== exceptId,
          );

        const teacherId = input?.teacherId;
        const managedTeacher = Number.isInteger(teacherId)
          ? localTeachersById.get(teacherId)
          : undefined;

        if (request.method === "POST") {
          const normalized = normalizeLocalTeacherInput(input);

          if (!normalized.ok) {
            respond(400, { error: normalized.error });
            return;
          }

          if (typeof input.password !== "string" || input.password.length < 8) {
            respond(400, { error: "A senha deve ter pelo menos 8 caracteres." });
            return;
          }

          if (usernameTaken(normalized.value.username)) {
            respond(409, { error: "Esse usuário já está sendo utilizado." });
            return;
          }

          const teacher: LocalTeacher = {
            id: nextLocalUserId++,
            username: normalized.value.username,
            displayName: normalized.value.displayName,
            isAdmin: false,
            studentLimit: normalized.value.studentLimit,
            active: 1,
          };

          localTeachersByUsername.set(teacher.username, teacher);
          localTeachersById.set(teacher.id, teacher);
          respond(201, { ok: true, teacher: localTeacherPayload(teacher) });
          return;
        }

        if (!managedTeacher) {
          respond(404, { error: "Professor não encontrado." });
          return;
        }

        if (managedTeacher.isAdmin) {
          respond(403, {
            error:
              request.method === "DELETE"
                ? "O admin não pode ser removido."
                : "O admin não pode ser editado por aqui.",
          });
          return;
        }

        if (request.method === "DELETE") {
          const unassignedStudents = localStudentCountFor(managedTeacher.id);

          for (const [slug, student] of localStudents) {
            if (student.teacherId === managedTeacher.id) {
              localStudents.set(slug, { ...student, teacherId: null });
            }
          }

          if (localTeachersByUsername.get(managedTeacher.username) === managedTeacher) {
            localTeachersByUsername.delete(managedTeacher.username);
          }
          localTeachersById.delete(managedTeacher.id);
          respond(200, { ok: true, unassignedStudents });
          return;
        }

        const normalized = normalizeLocalTeacherInput(input);

        if (!normalized.ok) {
          respond(400, { error: normalized.error });
          return;
        }

        if (usernameTaken(normalized.value.username, managedTeacher.id)) {
          respond(409, { error: "Esse usuário já está sendo utilizado." });
          return;
        }

        managedTeacher.displayName = normalized.value.displayName;
        managedTeacher.username = normalized.value.username;
        managedTeacher.studentLimit = normalized.value.studentLimit;
        managedTeacher.active =
          input.active === 0 || input.active === false ? 0 : 1;
        respond(200, { ok: true });
      },
    );

    server.middlewares.use(
      "/api/game-save",
      async (request, response) => {
        response.setHeader("Cache-Control", "no-store");
        if (!localSession || localSession.expiresAt <= Date.now()) {
          response.statusCode = 401;
          response.end("Não autorizado.");
          return;
        }

        const gameId = new URL(request.url ?? "", "http://localhost").searchParams.get("gameId") ?? "";
        const match = gameId.match(gameSaveIdPattern);
        if (!match) {
          response.statusCode = 400;
          response.end("Jogo inválido.");
          return;
        }

        const userKey = localSession.role === "student"
          ? `student:${localSession.studentId ?? localSession.username}`
          : `teacher:${localSession.username}`;
        const userFolder = createHash("sha256").update(userKey).digest("hex");
        const filePath = resolve(process.cwd(), ".local-game-saves", userFolder, match[1], `${match[2]}.changes`);

        try {
          if (request.method === "GET") {
            try {
              const data = await readFile(filePath);
              response.setHeader("Content-Type", "application/octet-stream");
              response.statusCode = 200;
              response.end(data);
            } catch (error) {
              if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
              response.statusCode = 204;
              response.end();
            }
            return;
          }

          if (request.method === "PUT") {
            const chunks: Buffer[] = [];
            let size = 0;
            for await (const chunk of request) {
              const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
              size += bytes.length;
              if (size > maxGameSaveSize) {
                response.statusCode = 413;
                response.end("Save muito grande.");
                return;
              }
              chunks.push(bytes);
            }
            if (size === 0) {
              response.statusCode = 400;
              response.end("Save inválido.");
              return;
            }
            await mkdir(dirname(filePath), { recursive: true });
            await writeFile(filePath, Buffer.concat(chunks));
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify({ ok: true, size }));
            return;
          }

          if (request.method === "DELETE") {
            try {
              await unlink(filePath);
            } catch (error) {
              if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
            }
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify({ ok: true }));
            return;
          }

          response.statusCode = 405;
          response.end("Método não permitido.");
        } catch (error) {
          console.error("Could not process local game save:", error);
          response.statusCode = 500;
          response.end("Não foi possível salvar o jogo.");
        }
      },
    );

    server.middlewares.use(
      "/api/lesson-progress",
      async (request, response, next) => {
        response.setHeader("Content-Type", "application/json");
        response.setHeader("Cache-Control", "no-store");

        if (!localSession || localSession.expiresAt <= Date.now()) {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Não autorizado." }));
          return;
        }

        const userKey = localSession.username;
        const localLessonCompletion = localLessonCompletionByUser.get(userKey) ?? new Map<string, boolean>();

        if (request.method === "GET") {
          response.statusCode = 200;
          response.end(
            JSON.stringify({ lessons: Object.fromEntries(localLessonCompletion) }),
          );
          return;
        }

        if (request.method === "PUT") {
          try {
            request.setEncoding("utf8");
            let body = "";
            for await (const chunk of request) body += chunk;

            const { lessonId, completed, checklist } = JSON.parse(body);
            const isGame = typeof lessonId === "string" &&
              /^\/games\/(sierra|lucas-arts)\/[a-z0-9-]+$/.test(lessonId);
            if (
              typeof lessonId !== "string" ||
              (!isGame && !/^\/authentic-content\/ted-ed\/[a-z0-9-]+$/.test(lessonId)) ||
              (checklist === undefined
                ? typeof completed !== "boolean"
                : !isGame || !Array.isArray(checklist) || checklist.length === 0 ||
                  checklist.length > 500 || !checklist.every((checked) => typeof checked === "boolean"))
            ) {
              throw new Error("Invalid lesson progress");
            }

            const isComplete = checklist ? checklist.every(Boolean) : completed;
            if (isGame) {
              const prefix = `${lessonId}/checklist/`;
              for (const id of localLessonCompletion.keys()) {
                if (id.startsWith(prefix)) localLessonCompletion.delete(id);
              }
              (checklist ?? []).forEach((checked: boolean, index: number) => {
                if (checked) localLessonCompletion.set(`${prefix}${index}`, true);
              });
            }
            localLessonCompletion.set(lessonId, isComplete);
            localLessonCompletionByUser.set(userKey, localLessonCompletion);
            response.statusCode = 200;
            response.end(JSON.stringify({ ok: true, lessonId, completed: isComplete }));
          } catch {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "Dados inválidos." }));
          }
          return;
        }

        next();
      },
    );
  },
});

const audiobookDurationWatcher = (): Plugin => ({
  name: "audiobook-duration-watcher",
  apply: "serve",
  configureServer() {
    const audiobooksDir = resolve(
      process.cwd(),
      "local-media/audio/skills/listening/audiobooks",
    );
    if (!existsSync(audiobooksDir)) return;

    let debounceTimer: NodeJS.Timeout | null = null;
    const triggerSync = (filename?: string) => {
      if (filename && !filename.toLowerCase().endsWith(".mp3")) return;
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        try {
          syncAudiobookDurations({ silent: true });
        } catch (error) {
          console.error("Failed to auto-sync audiobook durations:", error);
        }
      }, 400);
    };

    // Run once on server startup
    triggerSync();

    try {
      const watcher = watch(
        audiobooksDir,
        { recursive: true },
        (_event, filename) => {
          triggerSync(typeof filename === "string" ? filename : undefined);
        },
      );
      process.on("exit", () => watcher.close());
    } catch (error) {
      console.warn("Could not start audiobook watcher:", error);
    }
  },
});

export default defineConfig({
  server: {
    watch: {
      ignored: ["**/local-media/**"],
    },
  },
  plugins: [
    audiobookDurationWatcher(),
    localMedia(),
    localAuth(),
    tailwindcss(),
    reactRouter(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
