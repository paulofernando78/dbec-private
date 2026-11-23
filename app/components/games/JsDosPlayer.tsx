import { useEffect, useRef } from "react";

import { notifySessionActivity } from "@/hooks/useSession";

type JsDosPlayerProps = {
  bundleUrl: string;
  gameId: string;
  title: string;
};

const sessionBridgeScript = `
      (function () {
        var lastSent = 0;
        var notifyParent = function () {
          var now = Date.now();
          if (now - lastSent < 20000) return;
          lastSent = now;
          try {
            window.parent.postMessage({ type: "dbec:activity" }, "*");
          } catch (error) {}
        };
        ["pointerdown", "pointermove", "keydown", "wheel"].forEach(function (type) {
          document.addEventListener(type, notifyParent, { capture: true, passive: true });
        });
        window.setInterval(function () {
          if (document.visibilityState === "visible") notifyParent();
        }, 180000);
        notifyParent();
      })();
`;

const createPlayerDocument = (bundleUrl: string, gameId: string, title: string) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <link rel="stylesheet" href="https://v8.js-dos.com/latest/js-dos.css" />
    <style>
      html, body, #dos {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
        background: #020617;
      }
    </style>
  </head>
  <body>
    <div id="dos"></div>
    <script src="https://v8.js-dos.com/latest/js-dos.js"></script>
    <script>
      const gameId = ${JSON.stringify(gameId)};
      const saveUrl = "/api/game-save?gameId=" + encodeURIComponent(gameId);
      const start = async () => {
        const sessionResponse = await fetch("/api/session", { credentials: "same-origin" });
        if (!sessionResponse.ok) throw new Error("Sign in to save and load this game.");
        const session = await sessionResponse.json();
        const account = session.role === "student"
          ? "student:" + (session.studentId || session.username)
          : "teacher:" + session.username;

        Dos(document.getElementById("dos"), {
        url: ${JSON.stringify(bundleUrl)},
        autoStart: true,
        autoSave: true,
        fsChanges: {
          local: true,
          urlToKey: async () => account + ":" + gameId,
          pull: async () => {
            const response = await fetch(saveUrl, {
              credentials: "same-origin",
              headers: { Accept: "application/octet-stream" }
            });
            if (response.status === 204) return null;
            if (!response.ok) throw new Error("Could not load the game save.");
            return new Uint8Array(await response.arrayBuffer());
          },
          push: async (_key, data) => {
            const response = await fetch(saveUrl, {
              method: "PUT",
              credentials: "same-origin",
              headers: { "Content-Type": "application/octet-stream" },
              body: data
            });
            if (!response.ok) {
              throw new Error("Could not store the game save.");
            }
          },
          delete: async () => {
            const response = await fetch(saveUrl, {
              method: "DELETE",
              credentials: "same-origin"
            });
            if (!response.ok) {
              throw new Error("Could not delete the game save.");
            }
          }
        },
        imageRendering: "pixelated",
        lang: "en",
        mouseCapture: false,
        renderAspect: "4/3",
        theme: "dark"
        });
      };
      start().catch((error) => {
        const player = document.getElementById("dos");
        player.textContent = error.message || "Could not start the game.";
        player.style.color = "white";
        player.style.display = "grid";
        player.style.placeItems = "center";
      });
    </script>
    <script>${sessionBridgeScript}</script>
  </body>
</html>`;

export function JsDosPlayer({ bundleUrl, gameId, title }: JsDosPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (event.data?.type === "dbec:activity") notifySessionActivity();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl" aria-label={`${title} CRT game player`}>
      <div className="relative rounded-2xl bg-linear-to-br from-[#eee9d7] via-[#d8d2bd] to-[#b8b19d] p-3 pb-0 shadow-[inset_0_0.125rem_0_rgba(255,255,255,0.8),inset_0_-0.25rem_0.5rem_rgba(83,75,58,0.2),0_0.75rem_1.5rem_rgba(15,23,42,0.2)] sm:p-5 sm:pb-0">
        <div className="rounded-xl bg-[#3f3d37] p-1.5 shadow-[inset_0_0_0.5rem_rgba(0,0,0,0.7),0_0.25rem_0.75rem_rgba(48,43,32,0.55)] sm:p-3">
          <div className="relative overflow-hidden rounded-xl bg-slate-950 shadow-[inset_0_0_1rem_rgba(0,0,0,0.95)]">
            <iframe
              ref={iframeRef}
              allow="autoplay; fullscreen; gamepad"
              allowFullScreen
              className="block aspect-4/3 w-full bg-slate-950"
              sandbox="allow-downloads allow-pointer-lock allow-same-origin allow-scripts"
              srcDoc={createPlayerDocument(bundleUrl, gameId, title)}
              title={`${title} game player`}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,transparent_68%,rgba(0,0,0,0.16)_100%)] shadow-[inset_0_0_0.75rem_rgba(255,255,255,0.05)]"
            />
          </div>
        </div>

        <div aria-hidden="true" className="relative flex h-9 items-center justify-center sm:h-14">
          <div className="flex items-center gap-2 sm:gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                key={index}
                className="size-2 rounded-full border border-[#77715f] bg-linear-to-br from-[#f5f0df] to-[#aaa38f] shadow-[inset_0_0.0625rem_0_rgba(255,255,255,0.8),0_0.0625rem_0.125rem_rgba(0,0,0,0.35)] sm:size-2.5"
              />
            ))}
          </div>
          <span className="absolute right-8 size-1 rounded-full bg-emerald-700 shadow-[0_0_0.25rem_rgba(21,128,61,0.65)] sm:right-12" />
          <span className="absolute right-3 size-3 rounded-full border border-[#77715f] bg-linear-to-br from-[#eee8d5] to-[#aaa38f] shadow-[inset_0_0.0625rem_0_rgba(255,255,255,0.8),0_0.0625rem_0.125rem_rgba(0,0,0,0.35)] sm:right-5 sm:size-4" />
        </div>
      </div>

      <div aria-hidden="true" className="mx-auto h-2 w-4/5 rounded-b-xl bg-linear-to-b from-[#aaa38f] to-[#77715f] shadow-md sm:h-3" />
    </div>
  );
}
