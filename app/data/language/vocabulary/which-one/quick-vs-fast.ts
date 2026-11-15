import type { VocabularyTopic } from "./types";

export const quickVsFast = {
  id: "quick-vs-fast",
  title: "Quick vs. Fast",
  description:
    "Compare dois usos de “rápido” em inglês.",
  introduction:
    "Quick costuma destacar o pouco tempo que algo leva. Fast costuma destacar a velocidade.",
  usages: [
    {
      word: "Quick",
      meaning:
        "Descreve algo que leva pouco tempo ou alguém que entende ou reage depressa.",
      pattern: "quick + ação / evento / resposta · quickly + verbo",
      examples: [
        { english: "Let's have a quick meeting.", portuguese: "Vamos fazer uma reunião rápida." },
        { english: "She gave me a quick answer.", portuguese: "Ela me deu uma resposta rápida." },
        { english: "He quickly finished the task.", portuguese: "Ele terminou a tarefa rapidamente." },
      ],
    },
    {
      word: "Fast",
      meaning:
        "Descreve alguém ou algo que se move ou funciona em alta velocidade. Pode ser adjetivo ou advérbio.",
      pattern: "fast + pessoa / veículo / máquina · verbo + fast",
      examples: [
        { english: "This is a fast car.", portuguese: "Este é um carro veloz." },
        { english: "She runs very fast.", portuguese: "Ela corre muito rápido." },
        {
          english: "We need a faster internet connection.",
          portuguese: "Precisamos de uma conexão de internet mais rápida.",
        },
      ],
    },
  ],
  quickRule:
    "Compare a quick meeting com a fast car. Como advérbios, use quickly ou fast, conforme o sentido.",
  image: {
    src: "/media/images/language/vocabulary/which-one/quick-vs-fast.avif?v=1",
    alt: "Uma estudante termina uma tarefa curta enquanto um ciclista pedala em alta velocidade.",
    width: 1774,
    height: 887,
  },
} satisfies VocabularyTopic;

