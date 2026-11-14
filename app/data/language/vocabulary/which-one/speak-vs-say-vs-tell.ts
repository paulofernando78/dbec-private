import type { VocabularyTopic } from "./types";

export const speakVsSayVsTell = {
  id: "speak-vs-say-vs-tell",
  title: "Speak vs. Say vs. Tell",
  description: "Entenda a diferença entre três verbos que podem ser traduzidos como “falar” ou “dizer”.",
  introduction:
    "Observe se a frase destaca o ato de falar, o que foi dito ou quem recebeu a informação.",
  usages: [
    {
      word: "Speak",
      meaning: "Refere-se ao ato de falar, ao idioma que alguém fala ou a uma conversa.",
      pattern: "speak + idioma · speak to + pessoa",
      examples: [
        { english: "She speaks English.", portuguese: "Ela fala inglês." },
        { english: "Can I speak to Ana?", portuguese: "Posso falar com a Ana?" },
      ],
    },
    {
      word: "Say",
      meaning: "Destaca as palavras ou a mensagem que alguém disse.",
      pattern: "say + mensagem · say + mensagem + to + pessoa",
      examples: [
        { english: "He said, “Hello.”", portuguese: "Ele disse: “Olá”." },
        {
          english: "What did she say to you?",
          portuguese: "O que ela disse a você?",
        },
      ],
    },
    {
      word: "Tell",
      meaning: "Destaca a informação dada diretamente a alguém.",
      pattern: "tell + pessoa + mensagem",
      examples: [
        { english: "Tell me the truth.", portuguese: "Conte-me a verdade." },
        { english: "She told us a story.", portuguese: "Ela nos contou uma história." },
      ],
    },
  ],
  quickRule:
    "Compare speak English, say something e tell someone something. Depois de tell, procure a pessoa que recebe a mensagem.",
} satisfies VocabularyTopic;

