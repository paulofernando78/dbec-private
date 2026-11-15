type JsDosPlayerProps = {
  bundleUrl: string;
  gameId: string;
  title: string;
};

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
      const storageUnavailable = (status) => [401, 404, 503].includes(status);

      Dos(document.getElementById("dos"), {
        url: ${JSON.stringify(bundleUrl)},
        autoStart: true,
        autoSave: true,
        fsChanges: {
          local: true,
          urlToKey: async () => gameId,
          pull: async () => {
            const response = await fetch(saveUrl, {
              credentials: "same-origin",
              headers: { Accept: "application/octet-stream" }
            });
            if (response.status === 204 || storageUnavailable(response.status)) return null;
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
            if (!response.ok && !storageUnavailable(response.status)) {
              throw new Error("Could not store the game save.");
            }
          },
          delete: async () => {
            const response = await fetch(saveUrl, {
              method: "DELETE",
              credentials: "same-origin"
            });
            if (!response.ok && !storageUnavailable(response.status)) {
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
    </script>
  </body>
</html>`;

export function JsDosPlayer({ bundleUrl, gameId, title }: JsDosPlayerProps) {
  return (
    <iframe
      allow="autoplay; fullscreen; gamepad"
      allowFullScreen
      className="aspect-4/3 w-full rounded-lg bg-slate-950"
      sandbox="allow-downloads allow-pointer-lock allow-same-origin allow-scripts"
      srcDoc={createPlayerDocument(bundleUrl, gameId, title)}
      title={`${title} game player`}
    />
  );
}
