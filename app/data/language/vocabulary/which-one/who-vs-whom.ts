import type { VocabularyTopic } from "./types";
import { bold } from "@/helpers/content";

export const whoVsWhom = {
  id: "who-vs-whom",
  title: "Who vs. Whom",
  description: ["Aprenda quando usar ", bold("who"), " e ", bold("whom"), "."],
  introduction: [
    bold("Who"),
    " indica quem pratica a ação. ",
    bold("Whom"),
    " indica quem recebe a ação e aparece especialmente depois de preposições. Na conversa cotidiana, who também é comum no lugar de whom quando a pessoa recebe a ação.",
  ],
  usages: [
    {
      word: "Who",
      meaning: "Use quando a pessoa é o sujeito, isto é, quando ela pratica a ação. Também é a escolha comum na fala informal para perguntar por alguém que recebe a ação.",
      pattern: "who + verbo",
      examples: [
        { english: "Who sent you the gift?", portuguese: "Quem enviou o presente para você?" },
        { english: "Who did you invite?", portuguese: "Quem você convidou? (uso comum na conversa)" },
      ],
    },
    {
      word: "Whom",
      meaning: "Use para a pessoa que recebe a ação, sobretudo na escrita formal e depois de uma preposição como to, with ou for.",
      pattern: "preposição + whom · whom + sujeito + verbo",
      examples: [
        { english: "To whom did you send the gift?", portuguese: "Para quem você enviou o presente?" },
        { english: "Whom did you invite?", portuguese: "Quem você convidou? (forma mais formal)" },
      ],
    },
  ],
  quickRule: "Se a resposta for he ou she, use who. Se for him ou her, whom é a forma formal; depois de preposição, prefira whom.",
  image: {
    src: "/media/images/language/vocabulary/which-one/who-vs-whom.avif?v=1",
    alt: "Dois painéis: em Who, a pessoa em destaque entrega um presente; em Whom, a pessoa em destaque recebe um presente.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "___ sent the message?", choices: ["who", "whom"], answer: "who" },
    { question: "To ___ did you send the message?", choices: ["who", "whom"], answer: "whom" },
    { question: "___ will lead the meeting?", choices: ["who", "whom"], answer: "who" },
    { question: "With ___ did she travel?", choices: ["who", "whom"], answer: "whom" },
    { question: "For ___ is this package?", choices: ["who", "whom"], answer: "whom" },
  ],
} as const satisfies VocabularyTopic;
