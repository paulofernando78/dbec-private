import { dictionaryGemini } from "./_dictionary-gemini.mjs";
import { dictionaryOpenRouter } from "./_dictionary-openrouter.mjs";

export const defaultCooldownSeconds = 300;

// Gemini is always tried first so generated audio keeps one fixed voice; the
// other provider only covers outages.
export const providerOrder = () => ["gemini", "openrouter"];

/**
 * @param {string} text
 * @param {Record<string, string | undefined>} env
 * @param {{
 *   isCoolingDown?: (provider: string) => boolean | Promise<boolean>;
 *   markCooldown?: (provider: string, seconds: number) => void | Promise<void>;
 * }} [hooks]
 */
export async function synthesizeDictionaryTts(text, env, hooks = {}) {
  for (const provider of providerOrder()) {
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
        env.GEMINI_TTS_VOICE,
      );
    }

    if (result && "audio" in result) return result;

    if (result && result.cooldown && hooks.markCooldown) {
      await hooks.markCooldown(provider, result.seconds ?? defaultCooldownSeconds);
    }
  }

  return null;
}
