export function dictionaryElevenLabs(
  input: string,
  apiKey: string | undefined,
  voiceId: string | undefined,
  modelId: string | undefined,
): Promise<
  | {
      audio: ArrayBuffer | Uint8Array;
      contentType: string;
      provider: string;
      model: string;
    }
  | { cooldown: true; seconds: number }
  | null
>;
