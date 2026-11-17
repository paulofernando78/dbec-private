import { readCookie, verifySession } from "../_auth.js";

const headers = { "Cache-Control": "no-store" };

export async function onRequest(context) {
  const { request, env } = context;
  const session = await verifySession(readCookie(request, "dbec_session"), env.SESSION_SECRET);
  if (!session) return Response.json({ error: "Não autorizado." }, { status: 401, headers });
  if (!["GET", "PUT"].includes(request.method)) {
    return new Response(null, { status: 405, headers: { ...headers, Allow: "GET, PUT" } });
  }
  if (request.method === "PUT" && session.role !== "teacher") {
    return Response.json({ error: "Somente o professor pode editar estas observações." }, { status: 403, headers });
  }
  if (!env.DB) return Response.json({ error: "Banco indisponível." }, { status: 503, headers });

  let body;
  if (request.method === "PUT") {
    try { body = await request.json(); } catch {
      return Response.json({ error: "Dados inválidos." }, { status: 400, headers });
    }
    if (typeof body?.content !== "string" || body.content.length > 10000) {
      return Response.json({ error: "As observações devem ter até 10.000 caracteres." }, { status: 400, headers });
    }
  }
  const requestedId = body?.studentId ?? new URL(request.url).searchParams.get("studentId");
  const studentId = session.role === "teacher" ? requestedId : session.studentId;
  if (typeof studentId !== "string" || !studentId) {
    return Response.json({ error: "Aluno não informado." }, { status: 400, headers });
  }
  const student = await env.DB.prepare(
    "SELECT id FROM users WHERE role = 'student' AND student_slug = ?",
  ).bind(studentId).first();
  if (!student) return Response.json({ error: "Aluno não encontrado." }, { status: 404, headers });

  // Initialize independently of existing notes and calendar records.
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS calendar_notes (
    student_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`).run();

  if (request.method === "GET") {
    const note = await env.DB.prepare("SELECT content FROM calendar_notes WHERE student_id = ?")
      .bind(student.id).first();
    return Response.json({ content: note?.content ?? "" }, { headers });
  }
  await env.DB.prepare(`INSERT INTO calendar_notes (student_id, content, updated_at)
    VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(student_id) DO UPDATE SET content = excluded.content, updated_at = CURRENT_TIMESTAMP`)
    .bind(student.id, body.content).run();
  return Response.json({ ok: true }, { headers });
}
