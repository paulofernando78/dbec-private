import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createWorker } from "tesseract.js";

const input = "local-media/games/sierra/kings-quest-iv/kq-manual.pdf";
const output = "app/data/content/games/old-pc-games/sierra/kq4-manual-search.json";
const temporaryDirectory = mkdtempSync(join(tmpdir(), "kq4-manual-"));

try {
  execFileSync("pdftoppm", ["-jpeg", "-r", "150", input, join(temporaryDirectory, "page")]);
  const images = readdirSync(temporaryDirectory)
    .filter((name) => name.endsWith(".jpg"))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
  const worker = await createWorker("eng");
  const pages = [];

  for (const [index, image] of images.entries()) {
    const result = await worker.recognize(join(temporaryDirectory, image));
    pages.push(result.data.text.replace(/\s+/g, " ").trim());
    process.stdout.write(`\rOCR ${index + 1}/${images.length}`);
  }

  await worker.terminate();
  writeFileSync(output, `${JSON.stringify(pages, null, 2)}\n`);
  process.stdout.write("\n");
} finally {
  rmSync(temporaryDirectory, { force: true, recursive: true });
}
