import type { VocabularyTopic } from "../types";

export const lieVsLay = {
  id: "lie-vs-lay",
  title: "Lie vs. Lay",
  description: "Learn the difference between resting and putting something down.",
  introduction:
    "These verbs are often confused because their forms overlap. The key question is whether there is a direct object.",
  usages: [
    {
      word: "Lie",
      meaning: "To rest or be in a flat position. It does not take a direct object.",
      pattern: "lie + place / position",
      examples: [
        { english: "I need to lie down.", portuguese: "Preciso me deitar." },
        { english: "The keys are lying on the table.", portuguese: "As chaves estão sobre a mesa." },
      ],
    },
    {
      word: "Lay",
      meaning: "To put something or someone in a particular position. It takes a direct object.",
      pattern: "lay + object + place / position",
      examples: [
        { english: "Lay the keys on the table.", portuguese: "Coloque as chaves sobre a mesa." },
        { english: "She laid the baby down.", portuguese: "Ela colocou o bebê para deitar." },
      ],
    },
  ],
  quickRule:
    "Lie means rest by yourself; lay means put something or someone down. Compare: I lie down, but I lay the book down.",
} satisfies VocabularyTopic;
