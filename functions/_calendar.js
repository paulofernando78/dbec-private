// Mantém o calendário do aluno coerente com os dias e o horário escolhidos no
// cadastro: cada aula futura dos dias do schedule nasce como "P" (Pending).
//
// Assim o DateTimeCard já sabe qual é o próximo aluno pendente logo depois de o
// professor cadastrar ou editar um aluno, sem ter que marcar as datas à mão.
//
// Regras:
// - só cria entradas futuras, e apenas onde ainda não existe nenhuma (nunca
//   sobrescreve um OK, ROK, H etc. definido pelo professor);
// - ao mudar os dias de aula, apaga as pendências futuras que deixaram de ser
//   dia de aula (as aulas passadas ficam intactas).
//
// Idempotente: pode rodar em todo PUT do cadastro.

import { lessonDateKeys, todayDateKey } from "../shared/school-calendar.mjs";

const loadEntriesFrom = (db, studentId, today) =>
  db
    .prepare(
      `SELECT lesson_date AS lessonDate, status
       FROM calendar_entries
       WHERE student_id = ? AND lesson_date >= ?`,
    )
    .bind(studentId, today)
    .all();

export const syncPendingLessons = async (
  db,
  studentId,
  schedule,
  today = todayDateKey(),
) => {
  if (!db || !Number.isInteger(studentId)) return;

  const { results: entries = [] } = await loadEntriesFrom(db, studentId, today);
  const existingDates = new Set(entries.map((entry) => entry.lessonDate));
  const desiredDates = lessonDateKeys(schedule, today);
  const desired = new Set(desiredDates);

  const statements = [
    // Datas que deixaram de ser dia de aula do aluno e ainda estavam pendentes.
    ...entries
      .filter((entry) => entry.status === "P" && !desired.has(entry.lessonDate))
      .map((entry) =>
        db
          .prepare(
            `DELETE FROM calendar_entries
             WHERE student_id = ? AND lesson_date = ? AND status = 'P'`,
          )
          .bind(studentId, entry.lessonDate),
      ),
    // Aulas futuras do schedule que ainda não existem no calendário.
    ...desiredDates
      .filter((lessonDate) => !existingDates.has(lessonDate))
      .map((lessonDate) =>
        db
          .prepare(
            `INSERT INTO calendar_entries (student_id, lesson_date, status, updated_at)
             VALUES (?, ?, 'P', CURRENT_TIMESTAMP)
             ON CONFLICT(student_id, lesson_date) DO NOTHING`,
          )
          .bind(studentId, lessonDate),
      ),
  ];

  if (statements.length > 0) await db.batch(statements);
};
