import { readCookie, verifySession } from "../_auth.js";
import { clearStudentPresence } from "../_presence.js";

export async function onRequestPost(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (session?.role === "student" && context.env.DB) {
    await clearStudentPresence(context.env.DB, session.studentId);
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
