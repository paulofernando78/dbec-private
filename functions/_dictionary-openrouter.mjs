/**
 * @param {string} input
 * @param {string | undefined} apiKey
 * @param {string | undefined} models
 * @param {string | undefined} voice
 */
export async function dictionaryOpenRouter(input, apiKey, models, voice) {
  if (!apiKey || !models) return null;

  let sawRetryableError = false;

  for (const model of models.split(",").map((value) => value.trim())) {
    if (!model.endsWith(":free")) continue;

    try {
      const response = await fetch("https://openrouter.ai/api/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, input, voice: voice || undefined, response_format: "mp3" }),
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok || response.headers.get("content-type")?.split(";")[0] !== "audio/mpeg") {
        console.warn("OpenRouter Dictionary TTS response rejected", model, response.status);
        if (response.status === 429 || response.status >= 500) sawRetryableError = true;
        await response.body?.cancel();
        continue;
      }
      const audio = await response.arrayBuffer();
      if (audio.byteLength) {
        return {
          audio,
          contentType: "audio/mpeg",
          provider: "openrouter",
          model,
        };
      }
    } catch {
      console.warn("OpenRouter Dictionary TTS request failed", model);
      sawRetryableError = true;
    }
  }

  return sawRetryableError ? { cooldown: true, seconds: 300 } : null;
}
