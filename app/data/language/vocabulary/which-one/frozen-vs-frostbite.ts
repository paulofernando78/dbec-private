import type { VocabularyTopic } from "./types";

export const frozenVsFrostbite = {
  id: "frozen-vs-frostbite",
  title: "Frozen vs. Frostbite",
  description:
    "Aprenda a distinguir um estado de uma lesão causada pelo frio.",
  introduction:
    "Frozen descreve um estado. Frostbite é o nome de uma lesão.",
  usages: [
    {
      word: "Frozen",
      meaning:
        "É um adjetivo que pode significar “congelado” ou “gelado”. Também é o particípio passado de freeze.",
      pattern: "be frozen · frozen + substantivo · freeze → froze → frozen",
      examples: [
        { english: "The lake is frozen.", portuguese: "O lago está congelado." },
        { english: "We bought frozen vegetables.", portuguese: "Compramos vegetais congelados." },
        {
          english: "My hands are freezing, but they aren't frozen.",
          portuguese: "Minhas mãos estão gelando, mas não estão congeladas.",
        },
      ],
    },
    {
      word: "Frostbite",
      meaning:
        "É um substantivo que indica uma lesão nos tecidos causada pelo frio extremo. O adjetivo correspondente é frostbitten.",
      pattern: "have / get / suffer from frostbite · frostbitten + parte do corpo",
      examples: [
        {
          english: "The climber suffered from frostbite.",
          portuguese: "O alpinista sofreu uma lesão causada pelo frio extremo.",
        },
        {
          english: "Frostbite often affects the fingers and toes.",
          portuguese: "A lesão por congelamento frequentemente afeta os dedos das mãos e dos pés.",
        },
        {
          english: "His frostbitten fingers needed medical treatment.",
          portuguese: "Seus dedos lesionados pelo frio precisaram de tratamento médico.",
        },
      ],
    },
  ],
  quickRule:
    "Compare frozen vegetables (vegetais congelados) com frostbitten toes (dedos dos pés lesionados pelo frio).",
} satisfies VocabularyTopic;

