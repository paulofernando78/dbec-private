#!/usr/bin/env node
/**
 * Apaga um arquivo (ou uma pasta) do espelho — local e R2 — de uma vez.
 *
 * Uso:
 *   npm run media:delete -- audio/dictionary/a/avoid.mp3
 *   npm run media:delete -- audio/course/a1/unit-1/           # prefixo inteiro
 *   npm run media:delete -- <path> --remote-only              # só no R2 (teste de TTS)
 *   npm run media:delete -- <path> --local-only               # só no local
 *   npm run media:delete -- <path> --dry-run
 *
 * Sem flags, apaga dos dois lados. Nada acontece fora de local-media/ e do
 * bucket configurado em MEDIA_BUCKET.
 */
import { execFile } from "node:child_process";
import { readdir, rm, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
import { promisify } from "node:util";

const runFile = promisify(execFile);
const projectDir = resolve(import.meta.dirname, "..");
const localRoot = resolve(projectDir, "local-media");
const bucket = process.env.MEDIA_BUCKET ?? "r2:dbec-media";
const rclone = process.env.RCLONE_BIN ?? "rclone";

const argumentsList = process.argv.slice(2);
const flags = new Set(argumentsList.filter((value) => value.startsWith("--")));
const targets = argumentsList.filter((value) => !value.startsWith("--"));

const remoteOnly = flags.has("--remote-only");
const localOnly = flags.has("--local-only");
const dryRun = flags.has("--dry-run");

const useRemote = !localOnly;
const useLocal = !remoteOnly;

const runRclone = async (params) => {
  try {
    const { stdout } = await runFile(rclone, params, {
      maxBuffer: 32 * 1024 * 1024,
    });
    return stdout;
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("rclone não encontrado. Instale ou defina RCLONE_BIN.");
    }
    throw error;
  }
};

const normalize = (value) => value.replace(/^\/+/, "").replace(/\/+$/, "");

const isSafe = (path) =>
  Boolean(path) && !path.split("/").includes("..") && !path.startsWith(".");

const localExists = async (path) => {
  try {
    await stat(resolve(localRoot, path));
    return true;
  } catch {
    return false;
  }
};

const isDirectory = async (path) => {
  try {
    return (await stat(resolve(localRoot, path))).isDirectory();
  } catch {
    return false;
  }
};

// Remove sidecars cujo áudio não existe mais, para o media:upload não ficar
// com entradas fantasma.
const pruneSidecars = async () => {
  const metaRoot = resolve(projectDir, ".local-tts-cache", "meta");
  let entries;

  try {
    entries = await readdir(metaRoot, { recursive: true, withFileTypes: true });
  } catch {
    return 0;
  }

  let removed = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) continue;

    const relative = join(entry.parentPath, entry.name)
      .slice(metaRoot.length + 1)
      .replace(/\.json$/, "");
    let found = false;

    for (const extension of ["mp3", "wav", "ogg", "m4a"]) {
      try {
        await stat(resolve(localRoot, "audio", `${relative}.${extension}`));
        found = true;
        break;
      } catch {
        // continua tentando
      }
    }

    if (!found) {
      await rm(join(entry.parentPath, entry.name), { force: true });
      removed += 1;
    }
  }

  return removed;
};

const failures = [];

const deleteTarget = async (path, wantsPrefix) => {
  const directory = wantsPrefix || (useLocal && (await isDirectory(path)));

  console.log(`\n${path}${directory ? " (prefixo)" : ""}`);

  if (useRemote) {
    console.log(`  R2:    ${dryRun ? "[dry-run] " : ""}apagar ${bucket}/${path}`);
    if (!dryRun) {
      try {
        await runRclone(
          directory
            ? ["delete", `${bucket}/${path}`, "--s3-no-check-bucket"]
            : ["deletefile", `${bucket}/${path}`, "--s3-no-check-bucket"],
        );
      } catch (error) {
        const message = String(error.message ?? error);
        // deletefile de um objeto que já não existe é sucesso na prática.
        if (message.includes("object not found") || message.includes("doesn't exist")) {
          console.log("  R2:    (já não existia)");
        } else {
          failures.push(`R2 ${path}: ${message.split("\n")[0]}`);
        }
      }
    }
  }

  if (useLocal) {
    const exists = await localExists(path);
    console.log(
      `  local: ${dryRun ? "[dry-run] " : ""}${exists ? "apagar" : "não existe"} local-media/${path}`,
    );
    if (!dryRun && exists) {
      try {
        await rm(resolve(localRoot, path), { recursive: true, force: true });
      } catch (error) {
        failures.push(`local ${path}: ${error.message ?? error}`);
      }
    }
  }
};

const main = async () => {
  if (!targets.length) {
    console.error(
      "Informe o caminho (dentro de local-media). Ex.: audio/dictionary/a/avoid.mp3",
    );
    process.exitCode = 1;
    return;
  }

  for (const target of targets) {
    const path = normalize(target);
    const wantsPrefix = target.endsWith("/");

    if (!isSafe(path)) {
      console.error(`Caminho inválido: ${target}`);
      process.exitCode = 1;
      continue;
    }

    await deleteTarget(path, wantsPrefix);
  }

  if (useLocal && !dryRun) {
    const removed = await pruneSidecars();
    if (removed) console.log(`\n${removed} sidecar(s) de TTS removidos.`);
  }

  if (failures.length) {
    console.error("\nFalhas:");
    for (const failure of failures) console.error(`  ${failure}`);
    process.exitCode = 1;
  }
};

await main();
