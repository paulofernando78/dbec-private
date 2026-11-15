type JsDosPlayerProps = {
  bundleUrl: string;
  title: string;
};

const createPlayerDocument = (bundleUrl: string, title: string) => `<!doctype html>
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
      Dos(document.getElementById("dos"), {
        url: ${JSON.stringify(bundleUrl)},
        autoStart: true,
        autoSave: true,
        imageRendering: "pixelated",
        lang: "en",
        mouseCapture: false,
        renderAspect: "4/3",
        theme: "dark"
      });
    </script>
  </body>
</html>`;

export function JsDosPlayer({ bundleUrl, title }: JsDosPlayerProps) {
  return (
    <iframe
      allow="autoplay; fullscreen; gamepad"
      allowFullScreen
      className="aspect-4/3 w-full rounded-lg bg-slate-950"
      sandbox="allow-downloads allow-pointer-lock allow-same-origin allow-scripts"
      srcDoc={createPlayerDocument(bundleUrl, title)}
      title={`${title} game player`}
    />
  );
}
