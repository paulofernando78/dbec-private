import { readCookie, verifySession } from "../_auth.js";
import { isAdmin, loadAccessibleStudent } from "../_ownership.js";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

export async function onRequestGet(context) {
  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);

  if (!session) {
    return Response.json(
      { error: "Não autorizado." },
      { status: 401, headers: noStoreHeaders },
    );
  }

  if (!context.env.DB) {
    return Response.json(
      { error: "O banco D1 não está configurado." },
      { status: 503, headers: noStoreHeaders },
    );
  }

  const url = new URL(context.request.url);
  const requestedStudentId = url.searchParams.get("studentId");

  if (session.role === "teacher" && !requestedStudentId) {
    // Admin monta a lista completa; professor recebe apenas o próprio roster.
    if (!isAdmin(session) && !Number.isInteger(session.userId)) {
      return Response.json(
        {
          viewer: { username: session.username, role: session.role },
          students: [],
        },
        { headers: noStoreHeaders },
      );
    }

    const { results: students } = await (isAdmin(session)
      ? context.env.DB.prepare(
          `SELECT
        student_slug AS studentId,
        display_name AS name,
        schedule,
        class_time AS time,
        plan
      FROM users
      WHERE role = 'student'
      ORDER BY display_name`,
        ).all()
      : context.env.DB.prepare(
          `SELECT
        student_slug AS studentId,
        display_name AS name,
        schedule,
        class_time AS time,
        plan
      FROM users
      WHERE role = 'student' AND teacher_id = ?
      ORDER BY display_name`,
        )
          .bind(session.userId)
          .all());

    return Response.json(
      {
        viewer: { username: session.username, role: session.role },
        students,
      },
      { headers: noStoreHeaders },
    );
  }

  const studentId =
    session.role === "teacher" ? requestedStudentId : session.studentId;

  if (!studentId) {
    return Response.json(
      { error: "Aluno não informado." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  // O professor só abre os próprios alunos; o admin, qualquer um.
  const student = await loadAccessibleStudent(
    context.env.DB,
    session,
    studentId,
  );

  if (!student) {
    return Response.json(
      { error: "Aluno não encontrado." },
      { status: 404, headers: noStoreHeaders },
    );
  }

  const [notesResult, calendarResult] = await Promise.all([
    context.env.DB.prepare(
      `SELECT note_type AS noteType, content, updated_at AS updatedAt
       FROM notes
       WHERE student_id = ?`,
    )
      .bind(student.id)
      .all(),
    context.env.DB.prepare(
      `SELECT lesson_date AS lessonDate,
              replacement_date AS replacementDate,
              status,
              updated_at AS updatedAt
       FROM calendar_entries
       WHERE student_id = ?
       ORDER BY lesson_date`,
    )
      .bind(student.id)
      .all(),
  ]);

  const notes = { teacher: "", student: "" };
  for (const note of notesResult.results) {
    if (note.noteType === "teacher" || note.noteType === "student") {
      notes[note.noteType] = note.content;
    }
  }

  return Response.json(
    {
      viewer: { username: session.username, role: session.role },
      student: {
        username: student.username,
        studentId: student.studentId,
        name: student.name,
        schedule: student.schedule,
        time: student.time,
        plan: student.plan,
      },
      notes,
      calendar: calendarResult.results,
    },
    { headers: noStoreHeaders },
  );
}
