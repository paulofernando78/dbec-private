import { readCookie, verifySession } from "../_auth.js";
import { clearStudentPresence, clearTeacherPresence } from "../_presence.js";

export async function onRequestPost(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (context.env.DB) {
    if (session?.role === "student") {
      await clearStudentPresence(context.env.DB, session.studentId);
    } else if (session?.role === "teacher" && Number.isInteger(session.userId)) {
      await clearTeacherPresence(context.env.DB, session.userId);
    }
  }
  return Response.json(
    { ok: true },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie":
          "dbec_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0",
      },
    },
  );
}
