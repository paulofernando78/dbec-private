// Essa função impede que alunos ou visitantes cadastrem outros alunos. Somente a sessão do professor será aceita.

import { readCookie, verifySession } from "../_auth.js";
import { syncPendingLessons } from "../_calendar.js";
import {
  capacityMessage,
  isAdmin,
  loadAccessibleStudent,
  loadTeacherCapacity,
} from "../_ownership.js";
import { createPassword } from "../_password.js";
import { ensurePresenceStorage } from "../_presence.js";
import { ensureReportStorage } from "../_reports.js";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

const studentColumns = `
      student_slug AS studentId,
      username,
      display_name AS name,
      COALESCE(email, '') AS email,
      COALESCE(phone, '') AS phone,
      schedule,
      class_time AS time,
      plan,
      active,
      teacher_id AS teacherId,
      COALESCE(student_presence.last_seen_ms, 0) AS lastSeenMs`;

const authenticateTeacher = async (context) => {
  const token = readCookie(context.request, "dbec_session");

  const session = await verifySession(token, context.env.SESSION_SECRET);

  if (session?.role !== "teacher") {
    return null;
  }

  return session;
};

const createStudentSlug = (name) =>
  name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const validateStudentInput = (input) => {
  if (!input || typeof input !== "object") {
    return "Dados inválidos.";
  }

  // Essa validação será executada também no servidor. A validação do formulário no React, sozinha, não é suficiente porque pode ser ignorada pelo navegador.

  const { name, email, phone, username, password, schedule, time, plan } = input;

  if (typeof name !== "string" || name.trim().length < 3) {
    return "Informe o nome do aluno.";
  }

  if (typeof username !== "string" || username.trim().length < 3) {
    return "Informe um usuário com pelo menos 3 caracteres.";
  }

  if (
    typeof email !== "string" ||
    (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
  ) {
    return "Informe um email válido.";
  }

  if (typeof phone !== "string") {
    return "Informe um telefone válido.";
  }

  if (typeof password !== "string" || password.length < 8) {
    return "A senha deve ter pelo menos 8 caracteres.";
  }

  if (typeof schedule !== "string" || !schedule) {
    return "Selecione os dias das aulas.";
  }

  if (typeof time !== "string" || !time) {
    return "Selecione o horário das aulas.";
  }

  if (plan !== "free" && plan !== "plus") {
    return "Selecione um plano válido.";
  }

  return null;
};

export async function onRequestGet(context) {
  const teacher = await authenticateTeacher(context);

  if (!teacher) {
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

  await ensurePresenceStorage(context.env.DB);
  await ensureReportStorage(context.env.DB);

  // Admin reatribui alunos, então precisa enxergar os "sem professor" também.
  if (!isAdmin(teacher) && !Number.isInteger(teacher.userId)) {
    return Response.json({ students: [] }, { headers: noStoreHeaders });
  }

  const { results: students } = await (isAdmin(teacher)
    ? context.env.DB.prepare(
        `SELECT ${studentColumns}
         FROM users
         LEFT JOIN student_presence ON student_presence.student_id = users.id
         WHERE role = 'student'
         ORDER BY display_name`,
      ).all()
    : context.env.DB.prepare(
        `SELECT ${studentColumns}
         FROM users
         LEFT JOIN student_presence ON student_presence.student_id = users.id
         WHERE role = 'student' AND teacher_id = ?
         ORDER BY display_name`,
      )
        .bind(teacher.userId)
        .all());

  return Response.json({ students }, { headers: noStoreHeaders });
}

export async function onRequestPost(context) {
  const teacher = await authenticateTeacher(context);

  if (!teacher) {
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

  let input;

  try {
    input = await context.request.json();
  } catch {
    return Response.json(
      { error: "JSON inválido." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const validationError = validateStudentInput(input);

  if (validationError) {
    return Response.json(
      { error: validationError },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const username = input.username.trim().toLowerCase();
  const studentId = createStudentSlug(name);
  const { hash, salt } = await createPassword(input.password);
  const ownerId = teacher.userId ?? null;

  if (ownerId !== null) {
    const capacity = await loadTeacherCapacity(context.env.DB, ownerId);

    if (capacity?.isFull) {
      return Response.json(
        { error: capacityMessage(capacity) },
        { status: 409, headers: noStoreHeaders },
      );
    }
  }

  try {
    const inserted = await context.env.DB.prepare(
      `INSERT INTO users (
        username,
        student_slug,
        display_name,
        email,
        phone,
        schedule,
        class_time,
        plan,
        password_hash,
        password_salt,
        role,
        teacher_id
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'student', ?)`,
    )
      .bind(
        username,
        studentId,
        name,
        email,
        phone,
        input.schedule,
        input.time,
        input.plan,
        hash,
        salt,
        ownerId,
      )
      .run();

    // As aulas futuras dos dias escolhidos já nascem pendentes no calendário.
    await syncPendingLessons(
      context.env.DB,
      inserted.meta.last_row_id,
      input.schedule,
    );

    return Response.json(
      {
        ok: true,
        student: {
          studentId,
          username,
          name,
          email,
          phone,
          schedule: input.schedule,
          time: input.time,
          plan: input.plan,
        },
      },
      { status: 201, headers: noStoreHeaders },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Usuário ou aluno já cadastrado." },
      { status: 409, headers: noStoreHeaders },
    );
  }
}

export async function onRequestPut(context) {
  const teacher = await authenticateTeacher(context);

  if (!teacher) {
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

  let input;

  try {
    input = await context.request.json();
  } catch {
    return Response.json(
      { error: "JSON inválido." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const studentId = input?.studentId;
  const name = input?.name?.trim();
  const username = input?.username?.trim().toLowerCase();
  const email = input?.email?.trim();
  const phone = input?.phone?.trim();
  const password = input?.password;
  const schedule = input?.schedule;
  const time = input?.time;
  const plan = input?.plan;

  if (
    !studentId ||
    !name ||
    !username ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    !schedule ||
    !time ||
    (plan !== "free" && plan !== "plus")
  ) {
    return Response.json(
      { error: "Preencha os dados do aluno." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Informe um email válido." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  if (password && (typeof password !== "string" || password.length < 8)) {
    return Response.json(
      { error: "A senha deve ter pelo menos 8 caracteres." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const student = await loadAccessibleStudent(
    context.env.DB,
    teacher,
    studentId,
  );

  if (!student) {
    return Response.json(
      { error: "Aluno não encontrado." },
      { status: 404, headers: noStoreHeaders },
    );
  }

  const existingUsername = await context.env.DB.prepare(
    `SELECT student_slug
     FROM users
     WHERE username = ? AND student_slug != ?
     LIMIT 1`,
  )
    .bind(username, studentId)
    .first();

  if (existingUsername) {
    return Response.json(
      { error: "Esse usuário já está sendo utilizado." },
      { status: 409, headers: noStoreHeaders },
    );
  }

  let result;

  try {
    if (password) {
      const { hash, salt } = await createPassword(password);

      result = await context.env.DB.prepare(
        `UPDATE users
         SET display_name = ?, username = ?, email = ?, phone = ?, schedule = ?, class_time = ?, plan = ?,
             password_hash = ?, password_salt = ?
         WHERE student_slug = ? AND role = 'student'`,
      )
        .bind(name, username, email, phone, schedule, time, plan, hash, salt, studentId)
        .run();
    } else {
      result = await context.env.DB.prepare(
        `UPDATE users
         SET display_name = ?, username = ?, email = ?, phone = ?, schedule = ?, class_time = ?, plan = ?
         WHERE student_slug = ? AND role = 'student'`,
      )
        .bind(name, username, email, phone, schedule, time, plan, studentId)
        .run();
    }
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Não foi possível atualizar o aluno." },
      { status: 500, headers: noStoreHeaders },
    );
  }

  if (result.meta.changes === 0) {
    return Response.json(
      { error: "Aluno não encontrado." },
      { status: 404, headers: noStoreHeaders },
    );
  }

  // Em caso de troca de dias de aula, as datas novas entram como pendentes e as
  // pendências que deixaram de existir são removidas.
  await syncPendingLessons(context.env.DB, student.id, schedule);

  return Response.json({ ok: true }, { headers: noStoreHeaders });
}

// Atribui, transfere ou desvincula um aluno. teacherId = null devolve o aluno
// para "sem professor". É um único UPDATE em users.teacher_id, então nada do
// histórico do aluno é tocado.
export async function onRequestPatch(context) {
  const teacher = await authenticateTeacher(context);

  if (!teacher) {
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

  let input;

  try {
    input = await context.request.json();
  } catch {
    return Response.json(
      { error: "JSON inválido." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const hasTeacherId =
    input !== null && typeof input === "object" && "teacherId" in input;
  const studentId = input?.studentId;
  const teacherId = hasTeacherId ? (input.teacherId ?? null) : undefined;

  if (
    typeof studentId !== "string" ||
    !studentId ||
    !hasTeacherId ||
    (teacherId !== null && !Number.isInteger(teacherId))
  ) {
    return Response.json(
      { error: "Dados inválidos." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  // Professor movimenta apenas os próprios alunos. Admin movimenta qualquer um,
  // inclusive os que estão sem professor.
  const student = await loadAccessibleStudent(context.env.DB, teacher, studentId);

  if (!student) {
    return Response.json(
      { error: "Aluno não encontrado." },
      { status: 404, headers: noStoreHeaders },
    );
  }

  if (teacherId !== null) {
    const capacity = await loadTeacherCapacity(context.env.DB, teacherId);

    if (!capacity) {
      return Response.json(
        { error: "Professor não encontrado." },
        { status: 404, headers: noStoreHeaders },
      );
    }

    if (capacity.isFull) {
      return Response.json(
        { error: capacityMessage(capacity) },
        { status: 409, headers: noStoreHeaders },
      );
    }
  }

  const result = await context.env.DB.prepare(
    "UPDATE users SET teacher_id = ? WHERE id = ? AND role = 'student'",
  )
    .bind(teacherId, student.id)
    .run();

  if (result.meta.changes === 0) {
    return Response.json(
      { error: "Aluno não encontrado." },
      { status: 404, headers: noStoreHeaders },
    );
  }

  return Response.json(
    { ok: true, studentId, teacherId },
    { headers: noStoreHeaders },
  );
}

export async function onRequestDelete(context) {
  const teacher = await authenticateTeacher(context);
  if (!teacher) return Response.json({ error: "Não autorizado." }, { status: 401, headers: noStoreHeaders });
  if (!context.env.DB) return Response.json({ error: "O banco D1 não está configurado." }, { status: 503, headers: noStoreHeaders });

  // Exclusão definitiva é destrutiva (apaga notas, calendário e progresso).
  // O professor usa "desvincular", que devolve o aluno para "sem professor".
  if (!isAdmin(teacher)) {
    return Response.json(
      {
        error:
          "Somente o admin pode excluir um aluno. Use desvincular para devolvê-lo à fila.",
      },
      { status: 403, headers: noStoreHeaders },
    );
  }

  let studentId;
  try {
    ({ studentId } = await context.request.json());
  } catch {
    return Response.json({ error: "JSON inválido." }, { status: 400, headers: noStoreHeaders });
  }
  if (typeof studentId !== "string" || !studentId) {
    return Response.json({ error: "Aluno inválido." }, { status: 400, headers: noStoreHeaders });
  }

  const student = await loadAccessibleStudent(context.env.DB, teacher, studentId);
  if (!student) return Response.json({ error: "Aluno não encontrado." }, { status: 404, headers: noStoreHeaders });

  await ensurePresenceStorage(context.env.DB);
  await ensureReportStorage(context.env.DB);
  const { results: auxiliaryTables } = await context.env.DB.prepare(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name IN ('ai_tutor_requests', 'ai_tutor_history')",
  ).all();
  const existingTables = new Set(auxiliaryTables.map((table) => table.name));
  await context.env.DB.batch([
    context.env.DB.prepare("DELETE FROM notes WHERE student_id = ?").bind(student.id),
    context.env.DB.prepare("DELETE FROM calendar_notes WHERE student_id = ?").bind(student.id),
    context.env.DB.prepare("DELETE FROM calendar_entries WHERE student_id = ?").bind(student.id),
    context.env.DB.prepare("DELETE FROM lesson_progress WHERE user_id = ?").bind(student.id),
    context.env.DB.prepare("DELETE FROM student_presence WHERE student_id = ?").bind(student.id),
    context.env.DB.prepare("DELETE FROM page_visits WHERE student_id = ?").bind(student.id),
    context.env.DB.prepare("DELETE FROM exercise_attempts WHERE student_id = ?").bind(student.id),
    ...(existingTables.has("ai_tutor_requests") ? [context.env.DB.prepare("DELETE FROM ai_tutor_requests WHERE user_key = ?").bind(`student:${studentId}`)] : []),
    ...(existingTables.has("ai_tutor_history") ? [context.env.DB.prepare("DELETE FROM ai_tutor_history WHERE user_key = ?").bind(`student:${studentId}`)] : []),
    context.env.DB.prepare("DELETE FROM users WHERE id = ? AND role = 'student'").bind(student.id),
  ]);

  if (context.env.MEDIA) {
    const prefix = `game-saves/${student.id}/`;
    let cursor;
    try {
      do {
        const page = await context.env.MEDIA.list({ prefix, cursor });
        await Promise.all(page.objects.map((object) => context.env.MEDIA.delete(object.key)));
        cursor = page.truncated ? page.cursor : undefined;
      } while (cursor);
    } catch (error) {
      console.error("Could not remove student game saves", error);
    }
  }

  return Response.json({ ok: true }, { headers: noStoreHeaders });
}
