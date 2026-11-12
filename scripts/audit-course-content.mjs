import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = join(process.cwd(), "app", "data", "course");
const levels = new Set(["a1", "a2", "a2-b1", "b1", "b2", "c1"]);
const issues = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (entry.endsWith(".ts") && !entry.includes("skeleton-lessons")) inspect(path);
  }
}

function inspect(path) {
  const relativePath = relative(process.cwd(), path);
  const parts = relativePath.split("/");
  if (!levels.has(parts[3])) return;
  const source = readFileSync(path, "utf8");

  if (source.includes('image: ""')) issues.push(`${relativePath}: empty image URL`);
  if (/Pronunciation to be added|Form notes to be added|Portuguese translation to be added|\bplaceholder\b/i.test(source) || /\bTODO\b|\bFIXME\b/.test(source)) {
    issues.push(`${relativePath}: placeholder or unfinished content`);
  }
  if (source.includes('type: "listen"') && !source.includes("followUp:")) {
    issues.push(`${relativePath}: listening step has no follow-up task`);
  }
}

walk(root);

if (issues.length > 0) {
  console.error(`Course content audit found ${issues.length} blocking issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log("Course content audit passed with no blocking issues.");
}
