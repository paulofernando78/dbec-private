// Regras de posse de aluno compartilhadas pelos endpoints do professor.
//
// Modelo: users.teacher_id aponta para o professor responsável. NULL significa
// "sem professor" — o aluno existe, com todo o histórico dele, apenas aguardando
// reatribuição. O admin (is_admin = 1) ignora a cota e enxerga todos os alunos.

export const isAdmin = (session) => session?.isAdmin === true;

export const isOwner = (session, student) => {
  if (isAdmin(session)) return true;
  if (!Number.isInteger(session?.userId)) return false;
  return student?.teacherId === session.userId;
};

// Garante que o professor autenticado por AUTH_USERS tenha uma linha em users,
// para servir de destino das atribuições (inclusive "atribuir a mim").
//
// A linha já pode existir de antes da migration 008 (caso do admin atual): nesse
// caso ela nasceu com is_admin = 0 e é promovida aqui, no login. Sem isso o admin
// apareceria como professor comum — com cota de 10 alunos e editável na UI.
//
// Idempotente.
export const ensureTeacherUser = async (db, session) => {
  if (!db || session?.role !== "teacher") return undefined;
  if (Number.isInteger(session.userId)) return session.userId;

  const existing = await db
    .prepare(
      "SELECT id, is_admin AS isAdmin FROM users WHERE username = ? AND role = 'teacher'",
    )
    .bind(session.username)
    .first();

  if (existing) {
    if (isAdmin(session) && existing.isAdmin !== 1) {
      await db
        .prepare("UPDATE users SET is_admin = 1 WHERE id = ?")
        .bind(existing.id)
        .run();
    }

    return existing.id;
  }

  const inserted = await db
    .prepare(
      `INSERT INTO users (username, display_name, role, is_admin, active)
       VALUES (?, ?, 'teacher', ?, 1)`,
    )
    .bind(session.username, session.username, isAdmin(session) ? 1 : 0)
    .run();

  return inserted.meta.last_row_id;
};

// Devolve o aluno apenas quando a sessão pode ler ou escrever os dados dele:
// aluno → somente o próprio; professor → somente os seus; admin → qualquer um.
// Caso contrário, null — quem chama trata como "não encontrado", para não
// revelar a existência do registro.
export const loadAccessibleStudent = async (db, session, studentId) => {
  if (!db || typeof studentId !== "string" || !studentId) return null;

  const student = await db
    .prepare(
      `SELECT
         id,
         username,
         student_slug AS studentId,
         display_name AS name,
         schedule,
         class_time AS time,
         plan,
         active,
         teacher_id AS teacherId
       FROM users
       WHERE student_slug = ? AND role = 'student'`,
    )
    .bind(studentId)
    .first();

  if (!student) return null;

  if (session?.role === "student") {
    return session.studentId === student.studentId ? student : null;
  }

  return isOwner(session, student) ? student : null;
};

// Cota de um professor alvo de atribuição. Admin nunca tem cota.
export const loadTeacherCapacity = async (db, teacherId) => {
  if (!Number.isInteger(teacherId)) return null;

  const teacher = await db
    .prepare(
      `SELECT id, is_admin AS isAdmin, student_limit AS studentLimit
       FROM users
       WHERE id = ? AND role = 'teacher' AND active = 1`,
    )
    .bind(teacherId)
    .first();

  if (!teacher) return null;

  if (teacher.isAdmin === 1) {
    return { teacherId, isUnlimited: true, used: 0, limit: 0, isFull: false };
  }

  const { count } = await db
    .prepare(
      `SELECT COUNT(*) AS count
       FROM users
       WHERE role = 'student' AND teacher_id = ?`,
    )
    .bind(teacherId)
    .first();

  return {
    teacherId,
    isUnlimited: false,
    used: count,
    limit: teacher.studentLimit,
    isFull: count >= teacher.studentLimit,
  };
};

export const capacityMessage = (capacity) =>
  `Este professor já está com ${capacity.used}/${capacity.limit} alunos.`;
