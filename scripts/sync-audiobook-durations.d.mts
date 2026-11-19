export type AudiobookDurationResult = {
  slug: string;
  count: number;
  duration: string;
  mode: "MP3" | "FALLBACK (--)" | string;
};

export function getMp3DurationSeconds(filePath: string): number;
export function formatDuration(totalSeconds: number): string;
export function findAudiobookMp3Files(slug: string): string[];
export function syncAudiobookDurations(options?: { silent?: boolean }): AudiobookDurationResult[];
