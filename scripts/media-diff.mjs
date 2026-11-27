#!/usr/bin/env node
/**
 * Compara local-media/ com o bucket do R2 e, opcionalmente, baixa o que falta.
 *
 * Uso:
 *   npm run media:diff                  # só o relatório
 *   npm run media:diff -- --download    # baixa o que falta / está diferente
 *   npm run media:diff -- --download --dry-run
 *
 * Nunca apaga nada: arquivos que só existem no local são apenas listados.
 * Prefixos privados (game-saves/, tts-cache/) ficam de fora dos dois lados.
 */
import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { promisify } from "node:util";

const runFile = promisify(execFile);
const projectDir = resolve(import.meta.dirname, "..");
const localRoot = resolve(projectDir, "local-media");
const bucket = process.env.MEDIA_BUCKET ?? "r2:dbec-media";
const rclone = process.env.RCLONE_BIN ?? "rclone";
const privatePrefixes = ["game-saves/", "tts-cache/"];
const sampleSize = 15;

const flags = new Set(process.argv.slice(2));
const download = flags.has("--download");
const pruneLocal = flags.has("--prune-local");
const dryRun = flags.has("--dry-run");
const quarantineRoot = resolve(projectDir, ".local-media-pruned");

const runRclone = async (params, options = {}) => {
  try {
    const { stdout } = await runFile(rclone, params, {
      maxBuffer: 128 * 1024 * 1024,
      ...options,
    });
    return stdout;
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("rclone não encontrado. Instale ou defina RCLONE_BIN.");
    }
    throw error;
  }
};

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
};

const isPrivate = (path) =>
  privatePrefixes.some((prefix) => path.startsWith(prefix));

const listRemote = async () => {
  // `lsf --format ps` usa uma listagem só; `lsl` faz um HEAD por objeto e
  // demora minutos no bucket inteiro.
  const output = await runRclone([
    "lsf",
    bucket,
    "--recursive",
    "--files-only",
    "--format",
    "ps",
  ]);
  const files = new Map();

  for (const line of output.split("\n")) {
    const separator = line.lastIndexOf(";");
    if (separator < 1) continue;

    const path = line.slice(0, separator).trim();
    const size = Number(line.slice(separator + 1));
    if (!path || path.endsWith(".DS_Store") || isPrivate(path)) continue;
    files.set(path, size);
  }

  return files;
};

const listLocal = async (directory, prefix = "") => {
  const files = new Map();

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.name === ".DS_Store") continue;

    if (entry.isDirectory()) {
      for (const [path, size] of await listLocal(join(directory, entry.name), relative)) {
        files.set(path, size);
      }
      continue;
    }

    if (isPrivate(relative)) continue;
    files.set(relative, (await stat(join(directory, entry.name))).size);
  }

  return files;
};

const groupByFolder = (paths) => {
  const groups = new Map();
  for (const path of paths) {
    const key = path.split("/").slice(0, 2).join("/");
    groups.set(key, (groups.get(key) ?? 0) + 1);
  }
  return [...groups].sort((a, b) => b[1] - a[1]);
};

/**
 * Arquivos de TTS no R2 têm a metadata `texthash`. Ao baixar o espelho eles
 * viram cópias locais; sem o sidecar o media:upload os trataria como curados e
 * apagaria a metadata. Então recriamos o sidecar a partir do R2.
 */
const syncTtsSidecars = async () => {
  let entries;

  try {
    const output = await runRclone([
      "lsjson",
      `${bucket}/audio`,
      "--recursive",
      "--metadata",
    ]);
    entries = JSON.parse(output || "[]");
  } catch (error) {
    console.warn("Não consegui ler a metadata do R2:", error.message ?? error);
    return 0;
  }

  let written = 0;

  for (const entry of entries) {
    const textHash = entry.Metadata?.texthash ?? entry.Metadata?.textHash;
    if (!textHash) continue;

    const base = entry.Path.replace(/\.(mp3|wav|ogg|m4a)$/i, "");
    const metaPath = resolve(
      projectDir,
      ".local-tts-cache",
      "meta",
      `${base}.json`,
    );

    await mkdir(dirname(metaPath), { recursive: true });
    await writeFile(
      metaPath,
      JSON.stringify({
        contentType: entry.MimeType,
        provider: "r2",
        textHash,
      }),
    );
    written += 1;
  }

  return written;
};

const main = async () => {
  const [remote, local] = await Promise.all([listRemote(), listLocal(localRoot)]);

  const missingLocal = [];
  const staleLocal = [];
  const missingRemote = [];

  for (const [path, size] of remote) {
    if (!local.has(path)) missingLocal.push({ path, size });
    else if (local.get(path) !== size) staleLocal.push({ path, size, localSize: local.get(path) });
  }

  for (const [path, size] of local) {
    if (!remote.has(path)) missingRemote.push({ path, size });
  }

  const bytesToDownload = [...missingLocal, ...staleLocal].reduce(
    (total, item) => total + item.size,
    0,
  );

  console.log(`R2:    ${remote.size} arquivos`);
  console.log(`local: ${local.size} arquivos`);
  console.log(
    `\nfaltando no local: ${missingLocal.length} (${formatBytes(missingLocal.reduce((total, item) => total + item.size, 0))})`,
  );
  console.log(`diferentes no local: ${staleLocal.length}`);
  console.log(`só no local: ${missingRemote.length}`);

  if (missingLocal.length) {
    console.log("\nFaltando, por pasta:");
    for (const [folder, count] of groupByFolder(missingLocal.map((item) => item.path))) {
      console.log(`  ${count.toString().padStart(4)}  ${folder}`);
    }
    console.log("\nAmostra:");
    for (const { path, size } of missingLocal.slice(0, sampleSize)) {
      console.log(`  ${formatBytes(size).padStart(8)}  ${path}`);
    }
    if (missingLocal.length > sampleSize) {
      console.log(`  … e mais ${missingLocal.length - sampleSize}`);
    }
  }

  if (staleLocal.length) {
    console.log("\nDiferentes (tamanho):");
    for (const { path, size, localSize } of staleLocal.slice(0, sampleSize)) {
      console.log(
        `  ${path}  (R2 ${formatBytes(size)}, local ${formatBytes(localSize)})`,
      );
    }
    if (staleLocal.length > sampleSize) {
      console.log(`  … e mais ${staleLocal.length - sampleSize}`);
    }
  }

  if (missingRemote.length) {
    console.log(
      `\nSó no local${pruneLocal ? " (serão movidos para a quarentena)" : " (nada é apagado; suba com media:upload se for curado)"}:`,
    );
    for (const { path } of missingRemote.slice(0, sampleSize)) {
      console.log(`  ${path}`);
    }
    if (missingRemote.length > sampleSize) {
      console.log(`  … e mais ${missingRemote.length - sampleSize}`);
    }
  }

  // Espelho exato também significa tirar do local o que não existe mais no R2.
  // Em vez de apagar, move para .local-media-pruned/<timestamp>/ — assim um
  // arquivo novo que ainda não foi enviado nunca é perdido.
  if (pruneLocal && missingRemote.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const targetRoot = join(quarantineRoot, stamp);

    if (dryRun) {
      console.log(`\n[dry-run] ${missingRemote.length} arquivo(s) iriam para ${targetRoot}`);
    } else {
      for (const { path } of missingRemote) {
        const source = join(localRoot, path);
        const target = join(targetRoot, path);
        await mkdir(dirname(target), { recursive: true });
        await rename(source, target);
      }
      console.log(
        `\n${missingRemote.length} arquivo(s) movidos para ${targetRoot} (nada foi apagado).`,
      );
    }
  }

  if (!download) return;

  if (!missingLocal.length && !staleLocal.length) {
    console.log("\nNada para baixar.");
    if (!dryRun) {
      const sidecars = await syncTtsSidecars();
      if (sidecars) console.log(`${sidecars} sidecar(s) de TTS atualizados.`);
    }
    return;
  }

  const directory = await mkdtemp(resolve(tmpdir(), "dbec-media-diff-"));
  const listPath = join(directory, "files.txt");
  const paths = [...missingLocal, ...staleLocal].map((item) => item.path);
  await writeFile(listPath, `${paths.join("\n")}\n`);

  console.log(
    `\nBaixando ${paths.length} arquivo(s), ${formatBytes(bytesToDownload)}…`,
  );

  const params = [
    "copy",
    bucket,
    localRoot,
    "--files-from-raw",
    listPath,
    "--no-traverse",
    "--progress",
    ...(dryRun ? ["--dry-run"] : []),
  ];

  try {
    const { stderr } = await runFile(rclone, params, {
      maxBuffer: 128 * 1024 * 1024,
    });
    const summary = stderr
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("Transferred:"))
      .at(-1);

    if (dryRun) console.log(`[dry-run] ${summary ?? "nada a transferir"}`);
    else if (summary) console.log(summary);
  } finally {
    await rm(directory, { recursive: true, force: true }).catch(() => {});
  }

  if (!dryRun) {
    const sidecars = await syncTtsSidecars();
    if (sidecars) {
      console.log(
        `${sidecars} sidecar(s) de TTS recriados (o media:upload vai ignorá-los).`,
      );
    }
  }
};

await main();
