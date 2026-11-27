export const maxTtsTextLength = 500;

export const ttsAudioUrl = (text: string) =>
  `/api/dictionary-tts.wav?v=5&text=${encodeURIComponent(text)}`;

/** Server TTS only accepts short texts; longer ones keep the browser voice. */
export const ttsAudioUrlForText = (text: string) => {
  const value = text.trim();
  if (!value || value.length > maxTtsTextLength) return "";
  return ttsAudioUrl(value);
};
