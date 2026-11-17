import type { VocabularyTopic } from "./types";

export const storyVsHistory = {
  id: "story-vs-history",
  title: "Story vs. History",
  description: "As duas palavras podem significar “história”, mas o contexto muda a escolha.",
  introduction: "Compare uma narrativa que alguém conta com o estudo ou o registro de acontecimentos do passado.",
  usages: [
    {
      word: "Story",
      meaning: "Uma história contada: um conto, um relato ou uma narrativa. Pode ser inventada ou verdadeira. Não use story apenas para ficção: uma história real também é a true story.",
      pattern: "tell a story · read a story · a true story",
      examples: [
        { english: "Tell me a story.", portuguese: "Conte uma história para mim." },
        { english: "This film is based on a true story.", portuguese: "Este filme é baseado em uma história real." },
        { english: "She told us the story of her first trip abroad.", portuguese: "Ela nos contou a história da primeira viagem dela ao exterior." },
      ],
    },
    {
      word: "History",
      meaning: "História como disciplina ou como o conjunto e o registro de acontecimentos do passado: de um país, de uma pessoa ou de uma instituição, por exemplo. Em geral, não leva a/an nesse sentido.",
      pattern: "study history · the history of Brazil · medical history",
      examples: [
        { english: "I study history at school.", portuguese: "Estudo história na escola." },
        { english: "This book is about the history of Brazil.", portuguese: "Este livro é sobre a história do Brasil." },
        { english: "The doctor asked about my medical history.", portuguese: "O médico perguntou sobre meu histórico médico." },
      ],
    },
  ],
  quickRule: "Story é uma narrativa, real ou inventada. History é o passado estudado ou registrado. Um livro de history pode conter muitas stories.",
  practice: [
    { question: "Please tell the children a ___ before bed.", choices: ["story", "history"], answer: "story" },
    { question: "We are learning about the ___ of Brazil.", choices: ["story", "history"], answer: "history" },
    { question: "It sounds unbelievable, but it is a true ___.", choices: ["story", "history"], answer: "story" },
    { question: "The nurse checked my medical ___.", choices: ["story", "history"], answer: "history" },
  ],
} as const satisfies VocabularyTopic;
