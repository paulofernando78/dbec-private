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

export const defaultCooldownSeconds: number;

export function providerOrder(): DictionaryTtsProvider[];

export function synthesizeDictionaryTts(
  text: string,
  env: Record<string, string | undefined>,
  hooks?: DictionaryTtsHooks,
): Promise<DictionaryTtsResult | null>;
