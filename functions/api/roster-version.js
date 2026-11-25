// Assinatura da lista de alunos/professores para o painel do professor.
//
// Resposta minúscula ({ version }) consultada a cada poucos segundos: o cliente
// só baixa a lista completa quando a versão muda. Professor comum enxerga os
// próprios alunos; o admin enxerga todos.

import { readCookie, verifySession } from "../_auth.js";
import { isAdmin } from "../_ownership.js";
import { rosterSignature } from "../../shared/roster-version.mjs";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

const json = (body, status = 200) =>
  Response.json(body, { status, headers: noStoreHeaders });

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

  const studentsQuery = isAdmin(session)
    ? context.env.DB.prepare(
        `SELECT id, teacher_id AS teacherId, display_name AS name,
                schedule, class_time AS time
         FROM users WHERE role = 'student'`,
      )
    : Number.isInteger(session.userId)
      ? context.env.DB.prepare(
          `SELECT id, teacher_id AS teacherId, display_name AS name,
                  schedule, class_time AS time
           FROM users WHERE role = 'student' AND teacher_id = ?`,
        ).bind(session.userId)
      : null;

  const [students, teachers] = await Promise.all([
    studentsQuery ? studentsQuery.all() : { results: [] },
    context.env.DB.prepare(
      `SELECT id, display_name AS displayName, active, student_limit AS studentLimit
       FROM users WHERE role = 'teacher'`,
    ).all(),
  ]);

  return json({
    version: rosterSignature(
      (students.results ?? []).map(
        (student) =>
          `${student.id}:${student.teacherId ?? "-"}:${student.name}:${student.schedule ?? "-"}:${student.time ?? "-"}`,
      ),
      (teachers.results ?? []).map(
        (teacher) =>
          `${teacher.id}:${teacher.displayName}:${teacher.active}:${teacher.studentLimit}`,
      ),
    ),
  });
}
