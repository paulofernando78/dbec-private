import { dictionaryElevenLabs } from "./_dictionary-elevenlabs.mjs";
import { dictionaryGemini } from "./_dictionary-gemini.mjs";
import { dictionaryOpenRouter } from "./_dictionary-openrouter.mjs";

export const defaultCooldownSeconds = 300;

// Free quotas are limited, so short texts start at the highest-quality voice,
// while long texts start where a single request buys the most characters.
export const providerOrder = (length) => {
  if (length <= 30) return ["elevenlabs", "openrouter", "gemini"];
  if (length <= 250) return ["openrouter", "elevenlabs", "gemini"];
  return ["gemini", "openrouter", "elevenlabs"];
};

/**
 * @param {string} text
 * @param {Record<string, string | undefined>} env
 * @param {{
 *   isCoolingDown?: (provider: string) => boolean | Promise<boolean>;
 *   markCooldown?: (provider: string, seconds: number) => void | Promise<void>;
 * }} [hooks]
 */
export async function synthesizeDictionaryTts(text, env, hooks = {}) {
  for (const provider of providerOrder(text.length)) {
    if (hooks.isCoolingDown && (await hooks.isCoolingDown(provider))) continue;

    let result = null;

    if (provider === "elevenlabs") {
      result = await dictionaryElevenLabs(
        text,
        env.ELEVENLABS_API_KEY,
        env.ELEVENLABS_VOICE_ID,
        env.ELEVENLABS_MODEL_ID,
      );
    } else if (provider === "openrouter") {
      result = await dictionaryOpenRouter(
        text,
        env.OPENROUTER_API_KEY,
        // OPENROUTER_MODELS is the legacy name still set in some environments.
        env.OPENROUTER_TTS_MODELS || env.OPENROUTER_MODELS,
        env.OPENROUTER_TTS_VOICE,
      );
    } else {
      result = await dictionaryGemini(
        text,
        env.GEMINI_API_KEY,
        env.GEMINI_TTS_MODELS,
      );
    }

    if (result && "audio" in result) return result;

    if (result && result.cooldown && hooks.markCooldown) {
      await hooks.markCooldown(provider, result.seconds ?? defaultCooldownSeconds);
    }
  }

  return null;
}
