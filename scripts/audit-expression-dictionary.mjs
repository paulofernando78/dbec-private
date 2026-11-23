import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dictionaryDir = path.join(root, "app/data/dictionary");
const lessonFiles = [
  "business-1/lessons.ts",
  "business-2/business-two.ts",
  "everyday-1/lessons.ts",
  "everyday-2/lessons.ts",
  "everyday-3/everyday-three.ts",
];
const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const dictionaryFiles = fs.readdirSync(dictionaryDir).filter((file) =>
  /^[a-z]\.json$/.test(file) || ["business-1.generated.json", "expressions.generated.json"].includes(file)
);
const definitionsByLetter = new Map();
const supplemental = [];
for (const file of dictionaryFiles) {
  const groups = JSON.parse(fs.readFileSync(path.join(dictionaryDir, file), "utf8"));
  const definitions = groups.flatMap((group) => group.definitions ?? []);
  if (/^[a-z]\.json$/.test(file)) definitionsByLetter.set(file[0], definitions);
  else supplemental.push(...definitions);
}

const findMeaning = (term) => {
  const key = normalize(term);
  const firstLetter = key[0];
  const find = (definitions) => definitions.find((entry) => normalize(entry.word) === key);
  if (!firstLetter || !/[a-z]/.test(firstLetter)) {
    return find(supplemental) ?? find([...definitionsByLetter.values()].flat());
  }
  const primary = [
    ...(definitionsByLetter.get(firstLetter) ?? []),
    ...supplemental.filter((entry) => entry.word.toLowerCase().startsWith(firstLetter)),
  ];
  return find(primary) ?? find(
    [...definitionsByLetter.entries()]
      .filter(([letter]) => letter !== firstLetter)
      .flatMap(([, definitions]) => definitions),
  );
};

let missingCount = 0;
for (const file of lessonFiles) {
  const fullPath = path.join(root, "app/data/language/expressions", file);
  const source = ts.createSourceFile(file, fs.readFileSync(fullPath, "utf8"), ts.ScriptTarget.Latest, true);
  const terms = new Set();
  const visit = (node) => {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) &&
        (node.expression.text === "mark" || (file.startsWith("business-1/") && node.expression.text === "italic")) &&
        node.arguments.length === 1 && ts.isStringLiteral(node.arguments[0])) {
      terms.add(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  const missing = [...terms].filter((term) => !findMeaning(term)?.ptDefinition?.trim());
  missingCount += missing.length;
  console.log(`${file}: ${terms.size} terms, ${missing.length} without a Portuguese meaning`);
  for (const term of missing) console.error(`  ${term}`);
}

if (missingCount) process.exitCode = 1;
