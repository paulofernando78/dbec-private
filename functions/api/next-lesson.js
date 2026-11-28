// Próxima aula ainda marcada como pendente (P) no calendário.
//
// O DateTimeCard no topo mostra o nome do aluno dessa aula. Percorre as entradas
// de calendário dos alunos do professor, escolhe a mais próxima a partir de hoje
// e devolve só ela: o cartão é estreito e comporta um aluno por vez.
//
// `today` vem do navegador (fuso local do professor). O servidor roda em UTC, e
// sem esse parâmetro a virada do dia poderia mostrar a aula de ontem à noite.

import { readCookie, verifySession } from "../_auth.js";
import { isAdmin } from "../_ownership.js";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

const json = (body, status = 200) =>
  Response.json(body, { status, headers: noStoreHeaders });

const isDateKey = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value ?? "");

const currentDateKey = () => new Date().toISOString().slice(0, 10);

const lessonColumns = `
  calendar_entries.lesson_date AS lessonDate,
  calendar_entries.status,
  users.student_slug AS studentId,
  users.display_name AS name,
  users.class_time AS time`;

export async function onRequestGet(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );

  if (session?.role !== "teacher") {
    return json({ error: "Não autorizado." }, 401);
  }

  if (!context.env.DB) {
    return json({ error: "O banco D1 não está configurado." }, 503);
  }

  if (!isAdmin(session) && !Number.isInteger(session.userId)) {
    return json({ lesson: null });
  }

  const requestedToday = new URL(context.request.url).searchParams.get("today");
  const today = isDateKey(requestedToday) ? requestedToday : currentDateKey();

  // Admin enxerga todos os alunos, inclusive os que ainda estão sem professor.
  const query = isAdmin(session)
    ? context.env.DB.prepare(
        `SELECT ${lessonColumns}
         FROM calendar_entries
         JOIN users ON users.id = calendar_entries.student_id
         WHERE calendar_entries.status = 'P'
           AND calendar_entries.lesson_date >= ?
           AND users.role = 'student'
         ORDER BY calendar_entries.lesson_date, users.class_time, users.display_name
         LIMIT 1`,
      ).bind(today)
    : context.env.DB.prepare(
        `SELECT ${lessonColumns}
         FROM calendar_entries
         JOIN users ON users.id = calendar_entries.student_id
         WHERE calendar_entries.status = 'P'
           AND calendar_entries.lesson_date >= ?
           AND users.role = 'student'
           AND users.teacher_id = ?
         ORDER BY calendar_entries.lesson_date, users.class_time, users.display_name
         LIMIT 1`,
      ).bind(today, session.userId);

  const lesson = await query.first();

  return json({ lesson: lesson ?? null });
}
