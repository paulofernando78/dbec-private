import { readCookie, verifySession } from "./_auth.js";

const protectedPaths = [
  "/dashboard",
  "/teacher/dashboard",
  "/authentic-content",
  "/vocabulary",
  "/pronunciation",
  "/games",
  "/lab",
];

const isProtectedPath = (pathname) =>
  protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === "/") {
    const token = readCookie(context.request, "dbec_session");
    const session = await verifySession(token, context.env.SESSION_SECRET);

    if (session) {
      url.pathname =
        session.role === "teacher"
          ? "/teacher/dashboard"
          : `/dashboard/${encodeURIComponent(session.studentId)}`;
      url.search = "";
      return Response.redirect(url.toString(), 302);
    }
  }

  if (!isProtectedPath(url.pathname)) {
    return context.next();
  }

  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);

  if (session) {
    if (session.role === "teacher" && url.pathname === "/dashboard") {
      url.pathname = "/teacher/dashboard";
      url.search = "";
      return Response.redirect(url.toString(), 302);
    }

    if (
      url.pathname === "/teacher/dashboard" ||
      url.pathname.startsWith("/teacher/dashboard/")
    ) {
      if (session.role === "teacher") {
        // The default Pages fallback is the prerendered home page.
        const fallbackUrl = new URL("/__spa-fallback", url);
        const response = await context.env.ASSETS.fetch(
          new Request(fallbackUrl, { method: context.request.method }),
        );
        if (!response.headers.get("Content-Type")?.startsWith("text/html")) {
          return response;
        }

        // Keep Cloudflare from injecting scripts into React's initial HTML.
        const headers = new Headers(response.headers);
        headers.set("Cache-Control", "private, no-store, no-transform");
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      }

      url.pathname = `/dashboard/${encodeURIComponent(session.studentId)}`;
      url.search = "";
      return Response.redirect(url.toString(), 302);
    }

    if (
      session.role === "student" &&
      (url.pathname === "/dashboard" ||
        (url.pathname.startsWith("/dashboard/") &&
          url.pathname !==
            `/dashboard/${encodeURIComponent(session.studentId)}`))
    ) {
      url.pathname = `/dashboard/${encodeURIComponent(session.studentId)}`;
      url.search = "";
      return Response.redirect(url.toString(), 302);
    }

    return context.next();
  }

  if (url.pathname === "/dashboard") {
    return context.next();
  }

  url.pathname = "/";
  url.searchParams.set("login", "required");
  return Response.redirect(url.toString(), 302);
}
