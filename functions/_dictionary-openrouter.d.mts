export function dictionaryOpenRouter(
  input: string,
  apiKey: string | undefined,
  models: string | undefined,
  voice: string | undefined,
): Promise<
  | { audio: ArrayBuffer; contentType: string; provider: string; model: string }
  | { cooldown: true; seconds: number }
  | null
>;
