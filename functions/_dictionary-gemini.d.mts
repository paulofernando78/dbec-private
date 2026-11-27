export function dictionaryGemini(
  input: string,
  apiKey: string | undefined,
  models: string | undefined,
  voice?: string | undefined,
): Promise<
  | { audio: ArrayBuffer | Uint8Array; contentType: string; provider: string; model: string }
  | { cooldown: true; seconds: number }
  | null
>;
