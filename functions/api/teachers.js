// Registro de professores: criação, edição, limite de alunos, senha e remoção.
//
// Somente o admin gerencia professores. Nenhuma operação daqui toca em dado de
// aluno: remover um professor devolve os alunos para "sem professor"
// (users.teacher_id = NULL), mantendo todo o histórico deles.
//
// Professores criados aqui nunca são admin — o bootstrap do admin é o AUTH_USERS,
// por variável de ambiente.

import { readCookie, verifySession } from "../_auth.js";
import { isAdmin } from "../_ownership.js";
import { createPassword } from "../_password.js";
import { ensureTeacherPresenceStorage } from "../_presence.js";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

const json = (body, status = 200) =>
  Response.json(body, { status, headers: noStoreHeaders });

const teacherColumns = `
       users.id,
       users.username,
       users.display_name AS displayName,
       users.is_admin AS isAdmin,
       users.student_limit AS studentLimit,
       users.active,
       COALESCE(students.total, 0) AS studentCount,
       COALESCE(teacher_presence.last_seen_ms, 0) AS lastSeenMs`;

const teacherSource = `
     FROM users
     LEFT JOIN (
       SELECT teacher_id, COUNT(*) AS total
       FROM users
       WHERE role = 'student' AND teacher_id IS NOT NULL
       GROUP BY teacher_id
     ) AS students ON students.teacher_id = users.id
     LEFT JOIN teacher_presence ON teacher_presence.teacher_id = users.id`;

const presentTeacher = (teacher) => ({
  ...teacher,
  isAdmin: teacher.isAdmin === 1,
  // O admin não tem cota de alunos.
  isUnlimited: teacher.isAdmin === 1,
});

const readSession = (context) =>
  verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );

// Devolve a resposta de erro quando a sessão não pode gerenciar professores.
const requireAdmin = async (context) => {
  const session = await readSession(context);

  if (session?.role !== "teacher") {
    return json({ error: "Não autorizado." }, 401);
  }

  if (!isAdmin(session)) {
    return json({ error: "Somente o admin pode gerenciar professores." }, 403);
  }

  if (!context.env.DB) {
    return json({ error: "O banco D1 não está configurado." }, 503);
  }

  return null;
};

const readBody = async (context) => {
  try {
    const input = await context.request.json();
    return input !== null && typeof input === "object" ? input : null;
  } catch {
    return null;
  }
};

const normalizeTeacherInput = (input) => {
  const displayName =
    typeof input?.displayName === "string" ? input.displayName.trim() : "";
  const username =
    typeof input?.username === "string" ? input.username.trim().toLowerCase() : "";
  const studentLimit = input?.studentLimit;

  if (displayName.length < 3) return { error: "Informe o nome do professor." };
  if (username.length < 3) {
    return { error: "Informe um usuário com pelo menos 3 caracteres." };
  }
  if (!Number.isInteger(studentLimit) || studentLimit < 0 || studentLimit > 500) {
    return { error: "Informe um limite de alunos entre 0 e 500." };
  }

  return { value: { displayName, username, studentLimit } };
};

const findUsernameOwner = (db, username, exceptTeacherId = null) =>
  db
    .prepare(
      `SELECT id FROM users
       WHERE username = ? AND (? IS NULL OR id != ?)
       LIMIT 1`,
    )
    .bind(username, exceptTeacherId, exceptTeacherId)
    .first();

// Um professor gerenciável é sempre um professor não-admin.
const findManagedTeacher = (db, teacherId) =>
  db
    .prepare(
      `SELECT id, is_admin AS isAdmin
       FROM users
       WHERE id = ? AND role = 'teacher'`,
    )
    .bind(teacherId)
    .first();

export async function onRequestGet(context) {
  const session = await readSession(context);

  if (session?.role !== "teacher") {
    return json({ error: "Não autorizado." }, 401);
  }

  if (!context.env.DB) {
    return json({ error: "O banco D1 não está configurado." }, 503);
  }

  await ensureTeacherPresenceStorage(context.env.DB);

  // Admin vê todos; professor vê apenas o próprio perfil, limite e cota.
  if (!isAdmin(session) && !Number.isInteger(session.userId)) {
    return json({ teachers: [] });
  }

  const { results: teachers } = await (isAdmin(session)
    ? context.env.DB.prepare(
        `SELECT ${teacherColumns} ${teacherSource}
         WHERE users.role = 'teacher'
         ORDER BY users.is_admin DESC, users.display_name`,
      ).all()
    : context.env.DB.prepare(
        `SELECT ${teacherColumns} ${teacherSource}
         WHERE users.role = 'teacher' AND users.id = ?`,
      )
        .bind(session.userId)
        .all());

  return json({ teachers: teachers.map(presentTeacher) });
}

export async function onRequestPost(context) {
  const denied = await requireAdmin(context);
  if (denied) return denied;

  const input = await readBody(context);
  if (!input) return json({ error: "JSON inválido." }, 400);

  const { value, error } = normalizeTeacherInput(input);
  if (error) return json({ error }, 400);

  if (typeof input.password !== "string" || input.password.length < 8) {
    return json({ error: "A senha deve ter pelo menos 8 caracteres." }, 400);
  }

  if (await findUsernameOwner(context.env.DB, value.username)) {
    return json({ error: "Esse usuário já está sendo utilizado." }, 409);
  }

  const { hash, salt } = await createPassword(input.password);

  try {
    const result = await context.env.DB.prepare(
      `INSERT INTO users (
         username,
         display_name,
         role,
         is_admin,
         active,
         student_limit,
         password_hash,
         password_salt
       )
       VALUES (?, ?, 'teacher', 0, 1, ?, ?, ?)`,
    )
      .bind(value.username, value.displayName, value.studentLimit, hash, salt)
      .run();

    return json(
      {
        ok: true,
        teacher: {
          id: result.meta.last_row_id,
          username: value.username,
          displayName: value.displayName,
          isAdmin: false,
          isUnlimited: false,
          studentLimit: value.studentLimit,
          studentCount: 0,
          active: 1,
        },
      },
      201,
    );
  } catch (insertError) {
    console.error(insertError);
    return json({ error: "Não foi possível cadastrar o professor." }, 500);
  }
}

export async function onRequestPut(context) {
  const denied = await requireAdmin(context);
  if (denied) return denied;

  const input = await readBody(context);
  if (!input) return json({ error: "JSON inválido." }, 400);

  const teacherId = input.teacherId;
  if (!Number.isInteger(teacherId)) {
    return json({ error: "Professor inválido." }, 400);
  }

  const teacher = await findManagedTeacher(context.env.DB, teacherId);
  if (!teacher) return json({ error: "Professor não encontrado." }, 404);
  if (teacher.isAdmin === 1) {
    return json({ error: "O admin não pode ser editado por aqui." }, 403);
  }

  const { value, error } = normalizeTeacherInput(input);
  if (error) return json({ error }, 400);

  const active = input.active === 0 || input.active === false ? 0 : 1;
  const password =
    typeof input.password === "string" && input.password ? input.password : null;

  if (password !== null && password.length < 8) {
    return json({ error: "A senha deve ter pelo menos 8 caracteres." }, 400);
  }

  if (await findUsernameOwner(context.env.DB, value.username, teacherId)) {
    return json({ error: "Esse usuário já está sendo utilizado." }, 409);
  }

  try {
    const credentials = password ? await createPassword(password) : null;

    // A senha em branco mantém a atual.
    const result = credentials
      ? await context.env.DB.prepare(
          `UPDATE users
           SET display_name = ?, username = ?, student_limit = ?, active = ?,
               password_hash = ?, password_salt = ?
           WHERE id = ? AND role = 'teacher' AND is_admin = 0`,
        )
          .bind(
            value.displayName,
            value.username,
            value.studentLimit,
            active,
            credentials.hash,
            credentials.salt,
            teacherId,
          )
          .run()
      : await context.env.DB.prepare(
          `UPDATE users
           SET display_name = ?, username = ?, student_limit = ?, active = ?
           WHERE id = ? AND role = 'teacher' AND is_admin = 0`,
        )
          .bind(
            value.displayName,
            value.username,
            value.studentLimit,
            active,
            teacherId,
          )
          .run();

    if (result.meta.changes === 0) {
      return json({ error: "Professor não encontrado." }, 404);
    }
  } catch (updateError) {
    console.error(updateError);
    return json({ error: "Não foi possível atualizar o professor." }, 500);
  }

  return json({ ok: true });
}

export async function onRequestDelete(context) {
  const denied = await requireAdmin(context);
  if (denied) return denied;

  const input = await readBody(context);
  if (!input) return json({ error: "JSON inválido." }, 400);

  const teacherId = input.teacherId;
  if (!Number.isInteger(teacherId)) {
    return json({ error: "Professor inválido." }, 400);
  }

  const teacher = await findManagedTeacher(context.env.DB, teacherId);
  if (!teacher) return json({ error: "Professor não encontrado." }, 404);
  if (teacher.isAdmin === 1) {
    return json({ error: "O admin não pode ser removido." }, 403);
  }

  const { count } = await context.env.DB.prepare(
    `SELECT COUNT(*) AS count
     FROM users
     WHERE role = 'student' AND teacher_id = ?`,
  )
    .bind(teacherId)
    .first();

  // Desvincula antes de remover: os alunos voltam para "sem professor" e nada do
  // histórico deles é apagado. A ordem explícita também não depende do pragma de
  // foreign keys estar ligado.
  await context.env.DB.batch([
    context.env.DB.prepare(
      `UPDATE users SET teacher_id = NULL
       WHERE role = 'student' AND teacher_id = ?`,
    ).bind(teacherId),
    context.env.DB.prepare(
      `DELETE FROM users WHERE id = ? AND role = 'teacher' AND is_admin = 0`,
    ).bind(teacherId),
  ]);

  return json({ ok: true, unassignedStudents: count });
}
