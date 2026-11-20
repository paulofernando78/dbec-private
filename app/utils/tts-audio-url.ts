export const ttsAudioUrl = (text: string) =>
  `/api/dictionary-tts.wav?v=3&text=${encodeURIComponent(text)}`;
