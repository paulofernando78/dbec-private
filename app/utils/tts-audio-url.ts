export const ttsAudioUrl = (text: string) =>
  `/api/dictionary-tts.wav?v=2&text=${encodeURIComponent(text)}`;
