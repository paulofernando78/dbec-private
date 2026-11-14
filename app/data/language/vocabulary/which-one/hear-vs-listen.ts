import type { VocabularyTopic } from "./types";

export const hearVsListen = {
  id: "hear-vs-listen",
  title: "Hear vs. Listen",
  description: "Quando usar hear e listen no dia a dia.",
  introduction:
    "Os dois verbos se referem a sons. A diferença está na atenção que você dá ao som.",
  usages: [
    {
      word: "Hear",
      meaning:
        "Perceber um som que chega aos seus ouvidos.",
      pattern: "hear + som / pessoa",
      examples: [
        { english: "I can hear music.", portuguese: "Eu consigo ouvir música." },
        {
          english: "Did you hear that noise?",
          portuguese: "Você ouviu aquele barulho?",
        },
      ],
    },
    {
      word: "Listen",
      meaning: "Prestar atenção ao que se ouve.",
      pattern: "listen to + som / pessoa",
      examples: [
        { english: "Listen to me.", portuguese: "Escute-me." },
        {
          english: "She listens to podcasts.",
          portuguese: "Ela escuta podcasts.",
        },
      ],
    },
  ],
  quickRule:
    "Use hear quando você ouve um som e listen to quando presta atenção a ele.",
} satisfies VocabularyTopic;

