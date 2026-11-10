export function dictionaryOpenRouter(
  input: string,
  apiKey: string | undefined,
  models: string | undefined,
  voice: string | undefined,
): Promise<{ audio: ArrayBuffer; model: string } | null>;
