import type { VocabularyTopic } from "../types";

export const stationaryVsStationery = {
  id: "stationary-vs-stationery",
  title: "Stationary vs. Stationery",
  description: "Tell the difference between staying still and writing supplies.",
  introduction:
    "These words sound the same, but stationary is an adjective and stationery is an uncountable noun.",
  usages: [
    {
      word: "Stationary",
      meaning: "Not moving (parado, imóvel).",
      pattern: "remain stationary · stationary + noun",
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
      meaning: "Writing supplies such as paper, envelopes, and pens (material de papelaria).",
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
  quickRule: "Remember the A in stAtionary for ‘at rest’ and the E in stationEry for ‘envelope’.",
} satisfies VocabularyTopic;
