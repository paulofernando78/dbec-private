#!/usr/bin/env node
/**
 * Converte os WAV gerados pelo TTS em MP3 mono de 48 kbps, no lugar.
 *
 * Uso:
 *   node ./scripts/tts-to-mp3.mjs            # converte local-media/audio
 *   node ./scripts/tts-to-mp3.mjs --dry-run  # só lista
 *   node ./scripts/tts-to-mp3.mjs --bitrate 64k
 *
 * O WAV original só é apagado depois de o MP3 ser verificado com ffprobe.
 * Arquivos que já têm um .mp3 irmão são ignorados.
 */
import { execFile } from "node:child_process";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { promisify } from "node:util";

const runFile = promisify(execFile);
const projectDir = resolve(import.meta.dirname, "..");
const audioRoot = resolve(projectDir, "local-media", "audio");
const dryRun = process.argv.includes("--dry-run");
const bitrateIndex = process.argv.indexOf("--bitrate");
const bitrate = bitrateIndex > -1 ? process.argv[bitrateIndex + 1] : "48k";

const listWavFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listWavFiles(path)));
    } else if (entry.name.toLowerCase().endsWith(".wav")) {
      files.push(path);
    }
  }

  return files;
};

const hasSiblingMp3 = async (filePath) => {
  try {
    const file = await stat(filePath.replace(/\.wav$/i, ".mp3"));
    return file.isFile() && file.size > 0;
  } catch {
    return false;
  }
};

const probeDuration = async (filePath) => {
  const { stdout } = await runFile("ffprobe", [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    filePath,
  ]);
  return Number.parseFloat(stdout.trim());
};

const convert = async (filePath) => {
  const target = filePath.replace(/\.wav$/i, ".mp3");

  await runFile(
    "ffmpeg",
    [
      "-hide_banner",
      "-v",
      "error",
      "-y",
      "-i",
      filePath,
      "-codec:a",
      "libmp3lame",
      "-b:a",
      bitrate,
      "-ac",
      "1",
      "-ar",
      "24000",
      target,
    ],
    { timeout: 120_000 },
  );

  const duration = await probeDuration(target);
  if (!Number.isFinite(duration) || duration <= 0) {
    await unlink(target).catch(() => {});
    throw new Error("MP3 inválido depois da conversão");
  }

  await unlink(filePath);
  return { target, duration };
};

const main = async () => {
  let files;

  try {
    files = await listWavFiles(audioRoot);
  } catch {
    console.log(`Nenhuma pasta de áudio encontrada em ${audioRoot}.`);
    return;
  }

  if (!files.length) {
    console.log("Nenhum WAV para converter.");
    return;
  }

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const filePath of files) {
    const label = relative(projectDir, filePath);

    if (await hasSiblingMp3(filePath)) {
      console.log(`skip    ${label} (já existe MP3)`);
      skipped += 1;
      continue;
    }

    if (dryRun) {
      console.log(`dry-run ${label}`);
      continue;
    }

    try {
      const { duration } = await convert(filePath);
      console.log(`ok      ${label} → ${duration.toFixed(1)}s @ ${bitrate}`);
      converted += 1;
    } catch (error) {
      console.error(`falhou  ${label}:`, error.message ?? error);
      failed += 1;
    }
  }

  console.log(
    `\n${converted} convertidos, ${skipped} ignorados, ${failed} falharam.`,
  );

  if (converted && !dryRun) {
    console.log("Rode `npm run media:upload` para publicar no R2.");
  }

  if (failed) process.exitCode = 1;
};

await main();
