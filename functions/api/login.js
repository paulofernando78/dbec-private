import { createSession, getUsers, sessionCookie } from "../_auth.js";
import { ensureTeacherUser } from "../_ownership.js";
import { verifyPassword } from "../_password.js";

const invalidCredentials = () =>
  Response.json(
    { error: "Usuário ou senha inválidos." },
    {
      status: 401,
      headers: { "Cache-Control": "no-store" },
    },
  );

// O professor do AUTH_USERS é o bootstrap. Ele também precisa de uma linha em
// users para receber alunos atribuídos. Se o banco ainda não tiver a migration
// 008, o login continua válido e o professor apenas fica sem identidade para
// atribuição.
const resolveTeacherUserId = async (env, username, isAdmin) => {
  try {
    return await ensureTeacherUser(env.DB, { username, role: "teacher", isAdmin });
  } catch (error) {
    console.error("Could not resolve the teacher user id", error);
    return undefined;
  }
};

export async function onRequestPost(context) {
  try {
    const { username, password } = await context.request.json();

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password
    ) {
      return invalidCredentials();
    }

    const normalizedUsername = username.trim().toLowerCase();
    const users = getUsers(context.env);

    const configuredUser = users[normalizedUsername];
    let user;

    if (configuredUser?.role === "teacher") {
      if (configuredUser.password !== password) {
        return invalidCredentials();
      }

      const isAdmin = configuredUser.isAdmin === true;

      user = {
        username: normalizedUsername,
        role: "teacher",
        studentId: undefined,
        isAdmin,
        userId: context.env.DB
          ? await resolveTeacherUserId(context.env, normalizedUsername, isAdmin)
          : undefined,
      };
    } else {
      if (!context.env.DB) {
        return invalidCredentials();
      }

      const account = await context.env.DB.prepare(
        `SELECT
      id,
      username,
      role,
      student_slug AS studentId,
      is_admin AS isAdmin,
      password_hash AS passwordHash,
      password_salt AS passwordSalt
    FROM users
    WHERE username = ?
      AND role IN ('teacher', 'student')
      AND active = 1`,
      )
        .bind(normalizedUsername)
        .first();

      if (!account || !account.passwordHash || !account.passwordSalt) {
        return invalidCredentials();
      }

      const passwordIsValid = await verifyPassword(
        password,
        account.passwordHash,
        account.passwordSalt,
      );

      if (!passwordIsValid) {
        return invalidCredentials();
      }

      user = {
        username: account.username,
        role: account.role,
        studentId: account.role === "student" ? account.studentId : undefined,
        userId: account.id,
        isAdmin: account.role === "teacher" && account.isAdmin === 1,
      };
    }

    const token = await createSession(
      {
        username: user.username,
        role: user.role,
        studentId: user.studentId,
        userId: user.userId,
        isAdmin: user.isAdmin,
      },
      context.env.SESSION_SECRET,
    );

    const redirectTo =
      user.role === "teacher"
        ? "/teacher/dashboard"
        : `/dashboard/${encodeURIComponent(user.studentId)}`;

    return Response.json(
      { ok: true, role: user.role, redirectTo },
      {
        headers: {
          "Cache-Control": "no-store",
          "Set-Cookie": sessionCookie(token),
        },
      },
    );
  } catch (error) {
    const configurationCode =
      error instanceof Error &&
      [
        "AUTH_USERS_MISSING",
        "AUTH_USERS_INVALID_JSON",
        "AUTH_USERS_INVALID",
      ].includes(error.message)
        ? error.message
        : "AUTH_CONFIGURATION_ERROR";

    return Response.json(
      {
        error: "A autenticação não está configurada corretamente.",
        code: configurationCode,
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
