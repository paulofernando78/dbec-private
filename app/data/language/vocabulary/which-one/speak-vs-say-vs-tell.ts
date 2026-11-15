import type { VocabularyTopic } from "./types";
import { bold } from "@/helpers/content";

export const speakVsSayVsTell = {
  id: "speak-vs-say-vs-tell",
  title: "Speak vs. Say vs. Tell",
  description: ["Entenda a diferença entre ", bold("speak"), ", ", bold("say"), " e ", bold("tell"), "."],
  introduction: [
    "Use ",
    bold("speak"),
    " para o ato de falar, ",
    bold("say"),
    " para o que foi dito e ",
    bold("tell"),
    " quando o foco inclui quem recebeu a informação.",
  ],
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
  image: {
    src: "/media/images/language/vocabulary/which-one/speak-vs-say-vs-tell.avif?v=4",
    alt: "Uma mulher fala a uma plateia, um jovem diz algo a uma amiga e outra mulher conta uma história a um amigo.",
    width: 1774,
    height: 887,
  },
} satisfies VocabularyTopic;

