import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const levelsPath = resolve(projectRoot, "app/data/skills/listening/audiobooks/levels.ts");
const audiobooksMediaDir = resolve(projectRoot, "local-media/audio/skills/listening/audiobooks");

export function getMp3DurationSeconds(filePath) {
  try {
    const stdout = execFileSync("afinfo", [filePath], { encoding: "utf8" });
    const match = stdout.match(/estimated duration:\s+([0-9.]+)\s+sec/);
    if (match) return parseFloat(match[1]);
  } catch {
    try {
      const stdout = execFileSync(
        "ffprobe",
        ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", filePath],
        { encoding: "utf8" }
      );
      const sec = parseFloat(stdout.trim());
      if (!Number.isNaN(sec)) return sec;
    } catch {
      // Audio tool not available or file unreadable
    }
  }
  return 0;
}

export function formatDuration(totalSeconds) {
  if (totalSeconds <= 0) return "--";

  const totalSec = Math.round(totalSeconds);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function findAudiobookMp3Files(slug) {
  if (!existsSync(audiobooksMediaDir)) return [];

  const subdirs = readdirSync(audiobooksMediaDir);
  for (const sub of subdirs) {
    const bookDir = join(audiobooksMediaDir, sub, slug);
    if (existsSync(bookDir) && statSync(bookDir).isDirectory()) {
      const files = readdirSync(bookDir)
        .filter((file) => file.toLowerCase().endsWith(".mp3"))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
      if (files.length > 0) {
        return files.map((file) => join(bookDir, file));
      }
    }
  }

  return [];
}

function updateDurationInLevels(source, slug, newDuration) {
  const pattern = new RegExp(`(slug:\\s*["\x27]${slug}["\x27][\\s\\S]*?duration:\\s*["\x27])([^"\x27]*)(["\x27])`);
  return source.replace(pattern, `$1${newDuration}$3`);
}

export function syncAudiobookDurations({ silent = false } = {}) {
  if (!existsSync(levelsPath)) {
    console.error(`levels.ts not found at: ${levelsPath}`);
    return [];
  }

  // Safety check: On Cloudflare Pages or CI, local-media is not cloned (.gitignore).
  // If local-media directory does not exist, do not overwrite levels.ts with fallback "--"!
  if (!existsSync(audiobooksMediaDir)) {
    if (!silent) {
      console.log(`[audiobooks:sync] local-media directory not found (${audiobooksMediaDir}). Preserving existing levels.ts durations.`);
    }
    return [];
  }

  let source = readFileSync(levelsPath, "utf8");
  const slugMatches = [...source.matchAll(/slug:\s*["\x27]([a-z0-9-]+)["\x27]/g)];
  const knownSlugs = [...new Set(slugMatches.map((m) => m[1]))].filter(
    (slug) => !slug.includes("-beginner") && !slug.includes("-a1") && !slug.includes("-a2") && !slug.includes("-b1") && !slug.includes("-b2") && !slug.includes("-c1")
  );

  if (!silent) {
    console.log(`\n📚 Scanning audiobooks in levels.ts (${knownSlugs.length} titles found)...\n`);
  }

  const results = [];

  for (const slug of knownSlugs) {
    const mp3Files = findAudiobookMp3Files(slug);

    if (mp3Files.length === 0) {
      source = updateDurationInLevels(source, slug, "--");
      results.push({ slug, count: 0, duration: "--", mode: "FALLBACK (--)" });
      continue;
    }

    let totalSeconds = 0;
    for (const file of mp3Files) {
      totalSeconds += getMp3DurationSeconds(file);
    }

    const formatted = formatDuration(totalSeconds);
    source = updateDurationInLevels(source, slug, formatted);
    results.push({ slug, count: mp3Files.length, duration: formatted, mode: "MP3" });
  }

  writeFileSync(levelsPath, source, "utf8");

  if (!silent) {
    console.table(results);
    console.log("\n✅ levels.ts updated successfully.\n");
  } else {
    console.log("[audiobooks:sync] durations updated in levels.ts");
  }

  return results;
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  syncAudiobookDurations();
}
