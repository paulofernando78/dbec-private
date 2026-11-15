import type { VocabularyTopic } from "./types";
import { bold } from "@/helpers/content";

export const hearVsListen = {
  id: "hear-vs-listen",
  title: "Hear vs. Listen",
  description: ["Quando usar ", bold("hear"), " e ", bold("listen"), " no dia a dia."],
  introduction: [
    bold("Hear"),
    " e ",
    bold("listen"),
    " se referem a sons. A diferença está na atenção que você dá ao som.",
  ],
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
  image: {
    src: "/media/images/language/vocabulary/which-one/hear-vs-listen.avif?v=1",
    alt: "Uma pessoa percebe a campainha tocar e outra presta atenção ao que uma amiga diz em uma cafeteria.",
    width: 1774,
    height: 887,
  },
} satisfies VocabularyTopic;

