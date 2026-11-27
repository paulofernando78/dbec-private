const defaultModels = [
  "gemini-3.8-flash-tts",
  "gemini-3.8-flash-lite-tts",
  "gemini-3.1-flash-tts-preview",
  "gemini-2.5-flash-preview-tts",
];

// One fixed, neutral voice for every generated word or sentence so the
// fallback audio always sounds the same.
const defaultVoice = "Charon";

// Kept short on purpose: short style strings stay stable across generations.
const neutralStyle = "neutral, clear, matter-of-fact";

const supportsStyle = (model) => model.startsWith("gemini-3.8");

const decodeBase64 = (value) => {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
};

const writeAscii = (view, offset, value) => {
  for (let index = 0; index < value.length; index += 1) {
    view.setUint8(offset + index, value.charCodeAt(index));
  }
};

const pcmToWav = (pcm, sampleRate = 24_000) => {
  const wav = new Uint8Array(44 + pcm.length);
  const view = new DataView(wav.buffer);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + pcm.length, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, pcm.length, true);
  wav.set(pcm, 44);
  return wav;
};

/**
 * @param {string} input
 * @param {string | undefined} apiKey
 * @param {string | undefined} models
 * @param {string | undefined} voice
 */
export async function dictionaryGemini(input, apiKey, models, voice) {
  if (!apiKey) return null;

  const modelList = (models || defaultModels.join(","))
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  const voiceName = voice?.trim() || defaultVoice;

  let sawRetryableError = false;

  for (const model of modelList) {
    let response;
    try {
      response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify({
            model,
            input: [
              {
                type: "user_input",
                content: [
                  {
                    type: "text",
                    text: input,
                    ...(supportsStyle(model)
                      ? {
                          annotations: [
                            { type: "speech_metadata", style: neutralStyle },
                          ],
                        }
                      : {}),
                  },
                ],
              },
            ],
            response_format: { type: "audio", mime_type: "audio/wav" },
            generation_config: {
              speech_config: [{ voice: voiceName }],
            },
          }),
          signal: AbortSignal.timeout(20_000),
        },
      );
    } catch (error) {
      console.warn("Gemini Dictionary TTS request failed", model, error);
      sawRetryableError = true;
      continue;
    }

    const result = await response.json().catch(() => null);
    if (!response.ok) {
      console.warn(
        "Gemini Dictionary TTS error",
        model,
        response.status,
        result?.error?.message,
      );
      if (response.status === 429 || response.status >= 500) {
        sawRetryableError = true;
        continue;
      }
      if (response.status === 404) continue;
      return null;
    }

    if (result?.status === "failed") {
      sawRetryableError = true;
      continue;
    }

    const audioPart = (result?.steps || [])
      .filter((step) => step?.type === "model_output")
      .flatMap((step) => step?.content || [])
      .filter((part) => part?.type === "audio" && part?.data)
      .at(-1);

    if (!audioPart?.data) {
      sawRetryableError = true;
      continue;
    }

    const decoded = decodeBase64(audioPart.data);
    const mimeType = (
      audioPart.mime_type ||
      audioPart.mimeType ||
      "audio/wav"
    ).toLowerCase();
    const audio = mimeType.startsWith("audio/wav") ? decoded : pcmToWav(decoded);

    return { audio, contentType: "audio/wav", provider: "gemini", model };
  }

  return sawRetryableError ? { cooldown: true, seconds: 300 } : null;
}
