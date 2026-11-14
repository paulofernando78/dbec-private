import type { VocabularyTopic } from "./types";

export const stationaryVsStationery = {
  id: "stationary-vs-stationery",
  title: "Stationary vs. Stationery",
  description: "Distinga “parado” de “material de papelaria”.",
  introduction:
    "As palavras têm a mesma pronúncia, mas a grafia e a função na frase são diferentes.",
  usages: [
    {
      word: "Stationary",
      meaning: "É um adjetivo que significa “parado” ou “imóvel”.",
      pattern: "remain stationary · stationary + substantivo",
      examples: [
        {
          english: "The train remained stationary for ten minutes.",
          portuguese: "O trem ficou parado por dez minutos.",
        },
        {
          english: "She exercises on a stationary bike.",
          portuguese: "Ela se exercita em uma bicicleta ergométrica.",
        },
      ],
    },
    {
      word: "Stationery",
      meaning: "É um substantivo incontável que se refere a material de papelaria, como papel, envelopes e canetas.",
      pattern: "buy stationery · a stationery shop",
      examples: [
        {
          english: "I bought some stationery for school.",
          portuguese: "Comprei material de papelaria para a escola.",
        },
        {
          english: "The shop sells stationery, including pens and envelopes.",
          portuguese: "A loja vende material de papelaria, incluindo canetas e envelopes.",
        },
      ],
    },
  ],
  quickRule: "Associe o A de stationary ao A de at rest (em repouso) e o E de stationery ao E de envelope.",
} satisfies VocabularyTopic;
