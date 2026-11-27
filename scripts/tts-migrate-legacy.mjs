#!/usr/bin/env node
/**
 * Migra o cache antigo do TTS (`tts-cache/<versão>/<sha256>`) para as pastas
 * por conteúdo, em MP3 de 48 kbps.
 *
 * O nome da chave é o sha256 do texto, então o script remonta o índice do
 * dicionário, casa cada hash com uma palavra (ou exemplo) e grava em
 * `audio/dictionary/<letra>/<nome>.mp3` com a metadata que o app espera.
 *
 * Uso:
 *   node ./scripts/tts-migrate-legacy.mjs           # só mostra o plano
 *   node ./scripts/tts-migrate-legacy.mjs --apply   # converte, envia e apaga o antigo
 *   node ./scripts/tts-migrate-legacy.mjs --apply --keep-legacy
 */
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { promisify } from "node:util";

import {
  dictionaryTtsFolder,
  ttsAudioName,
  ttsTextHash,
} from "../app/utils/tts-audio-url.ts";

const runFile = promisify(execFile);
const projectDir = resolve(import.meta.dirname, "..");
const bucket = "r2:dbec-media";
const legacyPrefix = "tts-cache";
const apply = process.argv.includes("--apply");
const keepLegacy = process.argv.includes("--keep-legacy");
const bitrate = "48k";

const rclone = process.env.RCLONE_BIN ?? "rclone";

const rcloneRun = async (args, options = {}) => {
  try {
    const { stdout } = await runFile(rclone, args, {
      maxBuffer: 64 * 1024 * 1024,
      ...options,
    });
    return stdout;
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(
        "rclone não encontrado. Instale ou defina RCLONE_BIN.",
      );
    }
    throw error;
  }
};

const normalize = (value) => value.replace(/\s+/g, " ").trim();
const sha256 = (value) =>
  createHash("sha256").update(normalize(value)).digest("hex");

// ---------------------------------------------------------------- dicionário
const dictionaryDir = resolve(projectDir, "app", "data", "dictionary");

const loadDictionaryFiles = async () => {
  const files = (await readdir(dictionaryDir)).filter(
    (name) => name.endsWith(".json") && !name.startsWith("."),
  );
  const data = [];
  for (const name of files) {
    const parsed = JSON.parse(await readFile(join(dictionaryDir, name), "utf8"));
    // Cada arquivo é uma lista de entradas; cada entrada tem `definitions`.
    data.push(...(Array.isArray(parsed) ? parsed : [parsed]));
  }
  return data;
};

/** sha256 do texto → { text, destinations:Set<"letra/nome"> } */
const buildIndex = (files) => {
  const index = new Map();

  const add = (text, folder, name) => {
    const value = text?.trim();
    if (!value) return;
    const hash = sha256(value);
    const destination = `${folder}/${name}`;
    const entry = index.get(hash) ?? { text: value, destinations: new Set() };
    entry.destinations.add(destination);
    index.set(hash, entry);
  };

  for (const file of files) {
    for (const definition of file?.definitions ?? []) {
      const word = definition?.word?.trim();
      if (!word) continue;
      const folder = dictionaryTtsFolder(word);
      const name = ttsAudioName(word);
      add(word, folder, name);
      (definition.examples ?? []).forEach((example, position) => {
        const suffix = position === 0 ? "" : `-${position + 1}`;
        add(example?.enExample, folder, `${name}-example${suffix}`);
      });
    }
  }

  return index;
};

// -------------------------------------------------------------- cache antigo
const listLegacy = async () => {
  const output = await rcloneRun([
    "lsf",
    `${bucket}/${legacyPrefix}`,
    "--recursive",
    "--files-only",
  ]);

  return output
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((path) => ({ path, hash: path.split("/").pop() }));
};

const objectInfo = async (path) => {
  const output = await rcloneRun([
    "lsjson",
    `${bucket}/${legacyPrefix}/${path}`,
  ]);
  const [entry] = JSON.parse(output || "[]");
  return entry ?? null;
};

// ------------------------------------------------------------------ conversão
const convertToMp3 = async (input, output) => {
  await runFile(
    "ffmpeg",
    [
      "-hide_banner",
      "-v",
      "error",
      "-y",
      "-i",
      input,
      "-codec:a",
      "libmp3lame",
      "-b:a",
      bitrate,
      "-ac",
      "1",
      "-ar",
      "24000",
      output,
    ],
    { timeout: 120_000 },
  );

  const { stdout } = await runFile("ffprobe", [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    output,
  ]);
  const duration = Number.parseFloat(stdout.trim());
  if (!Number.isFinite(duration) || duration <= 0) {
    throw new Error("MP3 inválido depois da conversão");
  }
  return duration;
};

// ---------------------------------------------------------------------- main
const main = async () => {
  const index = buildIndex(await loadDictionaryFiles());
  const legacy = await listLegacy();

  if (!legacy.length) {
    console.log("Nada em tts-cache/.");
    return;
  }

  // O mesmo áudio costuma existir em várias versões (v2, v3, v4): usa a mais
  // recente e apaga as demais depois do envio.
  const groups = new Map();
  for (const item of legacy) {
    const group = groups.get(item.hash) ?? [];
    group.push(item);
    groups.set(item.hash, group);
  }

  const directory = await mkdtemp(resolve(tmpdir(), "dbec-migrate-"));
  let migrated = 0;
  let unknown = 0;
  let failed = 0;

  for (const [hash, copies] of groups) {
    const match = index.get(hash);
    if (!match) {
      unknown += 1;
      continue;
    }

    const destinations = [...match.destinations];
    const label = destinations[0];
    console.log(
      `${apply ? "migra" : "plano"}  ${hash.slice(0, 8)}  ${label}  "${match.text.slice(0, 60)}"${copies.length > 1 ? `  (${copies.length} versões)` : ""}`,
    );

    if (!apply) continue;

    try {
      const infos = await Promise.all(
        copies.map((copy) => objectInfo(copy.path)),
      );
      const newest = copies
        .map((copy, position) => ({ ...copy, info: infos[position] }))
        .sort((a, b) =>
          String(b.info?.ModTime ?? "").localeCompare(
            String(a.info?.ModTime ?? ""),
          ),
        )[0];

      const source = join(directory, `${hash}.src`);
      const target = join(directory, `${hash}.mp3`);

      await rcloneRun([
        "copyto",
        `${bucket}/${legacyPrefix}/${newest.path}`,
        source,
      ]);

      const duration = await convertToMp3(source, target);
      const metadata = `x-amz-meta-texthash: ${ttsTextHash(match.text)}`;

      for (const destination of destinations) {
        await rcloneRun([
          "copyto",
          target,
          `${bucket}/audio/${destination}.mp3`,
          "--s3-no-check-bucket",
          "--header-upload",
          metadata,
        ]);
      }

      if (!keepLegacy) {
        for (const copy of copies) {
          await rcloneRun([
            "deletefile",
            `${bucket}/${legacyPrefix}/${copy.path}`,
            "--s3-no-check-bucket",
          ]);
        }
      }

      await rm(source, { force: true });
      await rm(target, { force: true });
      console.log(
        `ok     ${hash.slice(0, 8)}  → ${destinations.map((value) => `audio/${value}.mp3`).join(", ")}  (${duration.toFixed(1)}s)`,
      );
      migrated += 1;
    } catch (error) {
      console.error(`falhou ${hash.slice(0, 8)}:`, error.message ?? error);
      failed += 1;
    }
  }

  console.log(
    `\n${migrated} migrados, ${unknown} sem texto correspondente, ${failed} falharam.${apply ? "" : "  (use --apply para executar)"}`,
  );

  if (failed) process.exitCode = 1;
};

await main();
