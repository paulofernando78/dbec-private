import { readFile, rename, writeFile } from "node:fs/promises";
import { PDFDocument } from "pdf-lib";

const path = "local-media/games/sierra/kings-quest-iv/kq-manual.pdf";
const temporaryPath = `${path}.reordered`;
const source = await PDFDocument.load(await readFile(path));
const reordered = await PDFDocument.create();

// The scan is arranged for booklet printing. This is the normal reading order.
const readingOrder = [1, 2, 3, 4, 5, 15, 7, 13, 9, 10, 11, 12, 8, 14, 6, 16, 17, 18, 19, 20];
const pages = await reordered.copyPages(source, readingOrder.map((page) => page - 1));
for (const page of pages) reordered.addPage(page);

await writeFile(temporaryPath, await reordered.save({ useObjectStreams: false }));
await rename(temporaryPath, path);
