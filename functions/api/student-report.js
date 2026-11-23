import { readCookie, verifySession } from "../_auth.js";
import { ensureReportStorage } from "../_reports.js";

const headers = { "Cache-Control": "no-store" };
const json = (body, status = 200) => Response.json(body, { status, headers });
const getSession = (context) => verifySession(
  readCookie(context.request, "dbec_session"), context.env.SESSION_SECRET,
);

export async function onRequestGet(context) {
  const session = await getSession(context);
  if (session?.role !== "teacher") return json({ error: "Não autorizado." }, 401);
  if (!context.env.DB) return json({ error: "Banco não configurado." }, 503);
  const studentId = new URL(context.request.url).searchParams.get("studentId");
  if (!studentId) return json({ error: "Aluno não informado." }, 400);
  const student = await context.env.DB.prepare(
    "SELECT id FROM users WHERE student_slug = ? AND role = 'student'",
  ).bind(studentId).first();
  if (!student) return json({ error: "Aluno não encontrado." }, 404);
  await ensureReportStorage(context.env.DB);
  const [visits, attempts] = await Promise.all([
    context.env.DB.prepare(`SELECT id, path, title, started_at_ms AS startedAtMs,
      last_seen_ms AS lastSeenMs FROM page_visits WHERE student_id = ?
      ORDER BY started_at_ms DESC LIMIT 500`).bind(student.id).all(),
    context.env.DB.prepare(`SELECT id, path, exercise, answers_json AS answersJson,
      score, total, checked_at_ms AS checkedAtMs FROM exercise_attempts
      WHERE student_id = ? ORDER BY checked_at_ms DESC LIMIT 500`).bind(student.id).all(),
  ]);
  return json({
    visits: visits.results,
    attempts: attempts.results.map(({ answersJson, ...attempt }) => ({
      ...attempt, answers: JSON.parse(answersJson),
    })),
  });
}

export async function onRequestPost(context) {
  const session = await getSession(context);
  if (session?.role !== "student") return json({ error: "Não autorizado." }, 401);
  if (!context.env.DB) return json({ error: "Banco não configurado." }, 503);
  let input;
  try { input = await context.request.json(); } catch { return json({ error: "JSON inválido." }, 400); }
  const { kind, path } = input ?? {};
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//") || path.length > 500) {
    return json({ error: "Página inválida." }, 400);
  }
  const student = await context.env.DB.prepare(
    "SELECT id FROM users WHERE student_slug = ? AND role = 'student' AND active = 1",
  ).bind(session.studentId).first();
  if (!student) return json({ error: "Aluno não encontrado." }, 401);
  await ensureReportStorage(context.env.DB);
  const now = Date.now();

  if (kind === "visit") {
    const title = typeof input.title === "string" ? input.title.slice(0, 160) : path;
    if (Number.isSafeInteger(input.visitId) && input.visitId > 0) {
      await context.env.DB.prepare(`UPDATE page_visits SET last_seen_ms = ?
        WHERE id = ? AND student_id = ? AND path = ?`)
        .bind(now, input.visitId, student.id, path).run();
      return json({ ok: true, visitId: input.visitId });
    }
    const result = await context.env.DB.prepare(`INSERT INTO page_visits
      (student_id, path, title, started_at_ms, last_seen_ms)
      VALUES (?, ?, ?, ?, ?)`).bind(student.id, path, title, now, now).run();
    return json({ ok: true, visitId: result.meta.last_row_id });
  }

  if (kind === "attempt") {
    const exercise = typeof input.exercise === "string" ? input.exercise.slice(0, 160) : "Exercise";
    const answers = input.answers;
    if (!Array.isArray(answers) || answers.length === 0 || answers.length > 100 ||
      !answers.every((answer) => answer && typeof answer.question === "string" &&
        typeof answer.response === "string" && typeof answer.correctAnswer === "string" &&
        typeof answer.correct === "boolean")) {
      return json({ error: "Tentativa inválida." }, 400);
    }
    const safeAnswers = answers.map((answer) => ({
      question: answer.question.slice(0, 500),
      response: answer.response.slice(0, 500),
      correctAnswer: answer.correctAnswer.slice(0, 500),
      correct: answer.correct,
    }));
    const score = safeAnswers.filter((answer) => answer.correct).length;
    await context.env.DB.prepare(`INSERT INTO exercise_attempts
      (student_id, path, exercise, answers_json, score, total, checked_at_ms)
      VALUES (?, ?, ?, ?, ?, ?, ?)`)
      .bind(student.id, path, exercise, JSON.stringify(safeAnswers), score, safeAnswers.length, now).run();
    return json({ ok: true });
  }
  return json({ error: "Evento inválido." }, 400);
}
