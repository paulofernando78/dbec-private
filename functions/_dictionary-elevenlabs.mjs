const defaultModel = "eleven_multilingual_v2";

/**
 * @param {string} input
 * @param {string | undefined} apiKey
 * @param {string | undefined} voiceId
 * @param {string | undefined} modelId
 */
export async function dictionaryElevenLabs(input, apiKey, voiceId, modelId) {
  if (!apiKey || !voiceId) return null;

  let response;
  try {
    response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          Accept: "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: input,
          model_id: modelId || defaultModel,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0,
            use_speaker_boost: true,
          },
        }),
        signal: AbortSignal.timeout(15_000),
      },
    );
  } catch (error) {
    console.warn("ElevenLabs Dictionary TTS request failed", error);
    return { cooldown: true, seconds: 300 };
  }

  if (!response.ok) {
    console.warn("ElevenLabs Dictionary TTS response rejected", response.status);
    await response.body?.cancel();

    if (response.status === 401 || response.status === 403) {
      return { cooldown: true, seconds: 3600 };
    }
    if (response.status === 429 || response.status >= 500) {
      return { cooldown: true, seconds: 300 };
    }
    return null;
  }

  const contentType = response.headers.get("content-type")?.split(";")[0];
  if (contentType !== "audio/mpeg") {
    console.warn(
      "ElevenLabs Dictionary TTS returned an unexpected content type",
      contentType,
    );
    await response.body?.cancel();
    return null;
  }

  const audio = await response.arrayBuffer();
  if (!audio.byteLength) return null;

  return { audio, contentType: "audio/mpeg", provider: "elevenlabs" };
}
