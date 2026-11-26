import { dictionaryGemini } from "./_dictionary-gemini.mjs";
import { dictionaryOpenRouter } from "./_dictionary-openrouter.mjs";

export const defaultCooldownSeconds = 300;

// Free quotas are limited, so short texts prefer the Fish voice, while long
// texts start with Gemini, where a single request buys the most characters.
export const providerOrder = (length) =>
  length > 250 ? ["gemini", "openrouter"] : ["openrouter", "gemini"];

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

    if (provider === "openrouter") {
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
