import {
  audiobookLanguage,
  audiobookStyle,
  defaultAudiobookVoice,
  dictionaryGemini,
} from "./_dictionary-gemini.mjs";
import { dictionaryOpenRouter } from "./_dictionary-openrouter.mjs";

export const defaultCooldownSeconds = 300;

// Audiobook narration lives under this prefix, so it can use its own voice
// without touching the neutral dictionary voice.
export const audiobookFolderPrefix = "skills/listening/audiobooks/";

// Gemini is always tried first so generated audio keeps one fixed voice; the
// other provider only covers outages.
export const providerOrder = () => ["gemini", "openrouter"];

export const isAudiobookFolder = (folder) =>
  Boolean(folder?.startsWith(audiobookFolderPrefix));

const firstModel = (models) =>
  (models || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)[0];

/**
 * Modelo fixo do audiobook. A narração não troca de modelo nem de provider:
 * outra voz/modelo quebraria a continuidade do livro, então é melhor falhar do
 * que gerar um trecho com voz diferente.
 *
 * @param {Record<string, string | undefined>} env
 */
export const resolveAudiobookModel = (env) =>
  env?.GEMINI_TTS_AUDIOBOOK_MODEL?.trim() ||
  firstModel(env?.GEMINI_TTS_AUDIOBOOK_MODELS) ||
  firstModel(env?.GEMINI_TTS_MODELS);

/**
 * Voz e estilo usados na síntese. Dicionário e páginas seguem com a voz neutra;
 * audiobooks usam uma voz de narrador.
 *
 * @param {Record<string, string | undefined>} env
 * @param {{ folder?: string | null }} [options]
 */
export const resolveTtsVoice = (env, options = {}) => {
  if (!isAudiobookFolder(options.folder)) {
    return { voice: env?.GEMINI_TTS_VOICE, style: undefined, language: undefined };
  }

  return {
    voice: env?.GEMINI_TTS_AUDIOBOOK_VOICE?.trim() || defaultAudiobookVoice,
    style: audiobookStyle,
    // Sempre inglês americano, mesmo com texto ambíguo.
    language: audiobookLanguage,
  };
};

// Hash curto e estável (FNV-1a). Entra na chave do cache para que trocar voz,
// estilo ou modelo descarte o áudio sintetizado anterior.
const shortHash = (value) => {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
};

/**
 * @param {Record<string, string | undefined>} env
 * @param {{ folder?: string | null }} [options]
 */
export const ttsVoiceTag = (env, options = {}) => {
  if (!isAudiobookFolder(options.folder)) return "default";

  const { voice, style, language } = resolveTtsVoice(env, options);
  const model = resolveAudiobookModel(env);
  return shortHash(`${voice}|${style ?? ""}|${language ?? ""}|${model ?? ""}`);
};

/**
 * @param {string} text
 * @param {Record<string, string | undefined>} env
 * @param {{
 *   isCoolingDown?: (provider: string) => boolean | Promise<boolean>;
 *   markCooldown?: (provider: string, seconds: number) => void | Promise<void>;
 * }} [hooks]
 * @param {{ folder?: string | null }} [options]
 */
export async function synthesizeDictionaryTts(text, env, hooks = {}, options = {}) {
  const { voice, style, language } = resolveTtsVoice(env, options);
  const audiobook = isAudiobookFolder(options.folder);
  const providers = audiobook ? ["gemini"] : providerOrder();

  for (const provider of providers) {
    // O cooldown nasce do tráfego do dicionário; ele não deve bloquear a
    // narração do livro, que só tem essa voz como opção.
    if (!audiobook && hooks.isCoolingDown && (await hooks.isCoolingDown(provider))) {
      continue;
    }

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
        // Um único modelo para o livro inteiro: sem troca de voz no meio.
        audiobook ? resolveAudiobookModel(env) : env.GEMINI_TTS_MODELS,
        voice,
        audiobook ? style : undefined,
        // Só o audiobook fixa o idioma; o dicionário continua livre.
        audiobook ? language : undefined,
      );
    }

    if (result && "audio" in result) return result;

    if (result && result.cooldown && hooks.markCooldown) {
      await hooks.markCooldown(provider, result.seconds ?? defaultCooldownSeconds);
    }
  }

  return null;
}
