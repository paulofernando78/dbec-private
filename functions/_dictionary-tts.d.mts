export type DictionaryTtsProvider = "openrouter" | "gemini";

export type DictionaryTtsResult = {
  audio: ArrayBuffer | Uint8Array;
  contentType: string;
  provider: string;
  model?: string;
};

export type DictionaryTtsHooks = {
  isCoolingDown?: (provider: string) => boolean | Promise<boolean>;
  markCooldown?: (provider: string, seconds: number) => void | Promise<void>;
};

export type DictionaryTtsOptions = {
  /** Pasta do áudio; audiobooks usam voz de narrador. */
  folder?: string | null;
};

export const defaultCooldownSeconds: number;

export const audiobookFolderPrefix: string;

export function providerOrder(): DictionaryTtsProvider[];

export function isAudiobookFolder(folder?: string | null): boolean;

export function resolveAudiobookModel(
  env: Record<string, string | undefined>,
): string | undefined;

export function resolveTtsVoice(
  env: Record<string, string | undefined>,
  options?: DictionaryTtsOptions,
): { voice: string | undefined; style: string | undefined; language: string | undefined };

export function ttsVoiceTag(
  env: Record<string, string | undefined>,
  options?: DictionaryTtsOptions,
): string;

export function synthesizeDictionaryTts(
  text: string,
  env: Record<string, string | undefined>,
  hooks?: DictionaryTtsHooks,
  options?: DictionaryTtsOptions,
): Promise<DictionaryTtsResult | null>;
