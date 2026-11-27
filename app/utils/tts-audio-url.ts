export const maxTtsTextLength = 500;
// A versão faz parte da URL: suba o número quando a voz ou o formato do áudio
// mudar, para navegadores e CDN descartarem o áudio sintetizado anterior.
export const ttsAudioVersion = 10;

export type TtsAudioOptions = {
  /** Pasta de destino no R2, espelhando a navegação do site. */
  folder?: string;
  /** Nome do arquivo; quando ausente, vem do texto falado. */
  name?: string;
};

// Hash curto e estável (FNV-1a). Serve só para invalidar cache quando o texto
// muda, não para segurança.
const shortHash = (value: string) => {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
};

const slug = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Hash curto do texto falado; é o `h` da URL e a metadata gravada no R2. */
export const ttsTextHash = (text: string) => shortHash(text.trim());

const maxNameLength = 48;

/** Nome legível a partir do texto; só ganha hash quando precisa ser cortado. */
export const ttsAudioName = (text: string) => {
  const words = slug(text).split("-").filter(Boolean);
  const picked: string[] = [];
  let length = 0;

  for (const word of words) {
    if (length + word.length + 1 > maxNameLength) break;
    picked.push(word);
    length += word.length + 1;
  }

  const base = picked.join("-") || `audio-${shortHash(text)}`;
  return words.length > picked.length
    ? `${base}-${shortHash(text)}`
    : base;
};

/**
 * Converte a rota atual na pasta de mídia correspondente, seguindo a mesma
 * hierarquia da navegação usada em local-media/audio.
 */
export const ttsFolderForPath = (pathname: string) => {
  const parts = pathname
    .split("/")
    .map(slug)
    .filter(Boolean);

  if (!parts.length) return "pages/home";

  const [root, ...rest] = parts;

  if (root === "course" || root === "travel") {
    const isTravel = root === "travel";
    const level = isTravel ? undefined : rest[0];
    const tail = isTravel ? rest : rest.slice(1);

    if (!isTravel && !level) return "learn/course";

    const grouped: string[] = [];
    for (let index = 0; index < tail.length; index += 2) {
      const key = tail[index];
      const value = tail[index + 1];
      grouped.push(value ? `${key}-${value}` : key);
      if (!value) break;
    }

    return isTravel
      ? ["learn", "specific-purposes", "travel", ...grouped].join("/")
      : ["learn", "course", level ?? "", ...grouped].join("/");
  }

  if (root === "audiobooks") {
    return ["skills", "listening", "audiobooks", ...rest].join("/");
  }

  if (
    root === "vocabulary" ||
    root === "expressions" ||
    root === "grammar" ||
    root === "pronunciation"
  ) {
    return ["language", root, ...rest].join("/");
  }

  if (root === "culture") return ["content", "culture", ...rest].join("/");
  if (root === "songs") return ["content", "songs", ...rest].join("/");

  return ["pages", root, ...rest].join("/");
};

/** Audio compartilhado de uma palavra do dicionário. */
export const dictionaryTtsFolder = (word: string) =>
  `dictionary/${slug(word).charAt(0) || "a"}`;

export const ttsAudioUrl = (text: string, options: TtsAudioOptions = {}) => {
  const value = text.trim();
  if (!value) return "";

  const params = new URLSearchParams({
    v: String(ttsAudioVersion),
    text: value,
    h: ttsTextHash(value),
  });

  if (options.folder) params.set("folder", options.folder);
  if (options.name) params.set("name", options.name);

  return `/api/dictionary-tts.wav?${params.toString()}`;
};

/** Server TTS only accepts short texts; longer ones keep the browser voice. */
export const ttsAudioUrlForText = (text: string, options: TtsAudioOptions = {}) => {
  const value = text.trim();
  if (!value || value.length > maxTtsTextLength) return "";
  return ttsAudioUrl(value, options);
};
