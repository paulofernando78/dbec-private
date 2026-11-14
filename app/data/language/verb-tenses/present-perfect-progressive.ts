import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const presentPerfectProgressive = {
  id: "present-perfect-progressive",
  title: "Present Perfect Progressive",
  description: "Descreva ações que começaram no passado e continuam ou apresentam resultado no presente.",
  introduction:
    "O present perfect progressive usa have ou has been mais um verbo terminado em -ing.",
  usages: [
    {
      title: "Ações que continuam até agora",
      meaning: "Use quando uma atividade começou no passado e ainda está em andamento.",
      pattern: "sujeito + have/has been + verbo-ing + since/for",
      examples: [
        { english: "I've been studying for two hours.", portuguese: "Estou estudando há duas horas." },
        { english: "She's been working here since May.", portuguese: "Ela trabalha aqui desde maio." },
      ],
    },
    {
      title: "Atividade recente com resultado presente",
      meaning: "Use quando uma atividade recente explica algo que podemos observar agora.",
      pattern: "sujeito + have/has been + verbo-ing",
      examples: [
        { english: "It's been raining.", portuguese: "Tem chovido." },
        { english: "You've been running.", portuguese: "Você esteve correndo." },
      ],
    },
  ],
  quickRule: "Use have/has been + verbo-ing e destaque a atividade ou sua duração.",
} as const satisfies GrammarTopic;

export const presentPerfectProgressiveExercises = [
  {
    id: "present-perfect-progressive-use", title: "1. Duração e atividade recente", type: "radio",
    instruction: "Escolha a forma que destaca duração ou uma atividade recente com efeito presente.",
    questions: [
      { question: "She ___ for the exam for three hours.", options: [{ option: "has been studying", isCorrect: true }, { option: "studied yesterday" }, { option: "is study" }] },
      { question: "Your clothes are wet. ___ in the rain?", options: [{ option: "Did you walk yesterday" }, { option: "Have you been walking", isCorrect: true }, { option: "Are you walked" }] },
      { question: "We ___ here since 8 a.m.", options: [{ option: "have been waiting", isCorrect: true }, { option: "waited last week" }, { option: "are wait" }] },
      { question: "Which marker normally introduces the starting point?", options: [{ option: "for" }, { option: "since", isCorrect: true }, { option: "ago" }] },
    ],
  },
  {
    id: "present-perfect-progressive-form", title: "2. Formação", type: "fill", showWordBank: false,
    instruction: "Complete com have/has been + verbo em -ing.",
    blocks: [
      { block: [{ text: "I " }, { blank: ["have been reading", "'ve been reading"] }, { text: " this book all afternoon. (read)" }] },
      { block: [{ text: "He " }, { blank: "has been working" }, { text: " here since January. (work)" }] },
      { block: [{ text: "They " }, { blank: ["have not been sleeping", "haven't been sleeping"] }, { text: " well lately. (not sleep)" }] },
      { block: [{ blank: "Has she been practicing" }, { text: " the piano? (she / practice)" }] },
    ],
  },
  {
    id: "present-perfect-progressive-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "She has studying since noon.", answer: "She has been studying since noon.", explanation: "A estrutura exige has been + verbo em -ing." },
      { sentence: "I have been waiting since two hours.", answer: "I have been waiting for two hours.", explanation: "Use for com duração e since com ponto inicial." },
      { sentence: "They has been working all day.", answer: "They have been working all day.", explanation: "Com they, use have." },
      { sentence: "Have you been study for long?", answer: "Have you been studying for long?", explanation: "Depois de been, use o verbo em -ing." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
