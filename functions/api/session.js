import { createSession, readCookie, sessionCookie, verifySession } from "../_auth.js";

export async function onRequestPost(context) {
  const secret = context.env.SESSION_SECRET;
  const session = await verifySession(readCookie(context.request, "dbec_session"), secret);
  const headers = { "Cache-Control": "no-store" };
  if (!session) return Response.json({ error: "Não autorizado." }, { status: 401, headers });

  const token = await createSession(session, secret);
  headers["Set-Cookie"] = sessionCookie(token);
  return Response.json({ expiresAt: (await verifySession(token, secret)).expiresAt }, { headers });
}

export async function onRequestGet(context) {
  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);

  if (!session) {
    return Response.json(
      { error: "Não autorizado." },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  const dashboardPath =
    session.role === "teacher"
      ? "/teacher/dashboard"
      : `/dashboard/${encodeURIComponent(session.studentId)}`;

  let profile = {
    displayName: session.username,
    schedule: null,
    time: null,
    plan: null,
  };

  if (session.role === "student" && context.env.DB) {
    const student = await context.env.DB.prepare(
      `SELECT
        display_name AS displayName,
        schedule,
        class_time AS time,
        plan
      FROM users
      WHERE role = 'student' AND student_slug = ?`,
    )
      .bind(session.studentId)
      .first();

    if (student) profile = student;
  }

  return Response.json(
    {
      username: session.username,
      role: session.role,
      studentId: session.studentId,
      expiresAt: session.expiresAt,
      dashboardPath,
      ...profile,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
