import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const simplePast = {
  id: "simple-past",
  title: "Simple Past",
  description: "Fale sobre ações concluídas e situações encerradas no passado.",
  introduction:
    "O simple past situa uma ação ou estado em um período já encerrado no passado.",
  usages: [
    {
      title: "Ações concluídas no passado",
      meaning: "Use a forma do passado quando a ação estiver concluída.",
      pattern: "sujeito + verbo regular-ed / forma irregular do passado",
      examples: [
        { english: "We watched a movie last night.", portuguese: "Assistimos a um filme ontem à noite." },
        { english: "She went to Salvador in July.", portuguese: "Ela foi a Salvador em julho." },
      ],
    },
    {
      title: "Sequência de ações passadas",
      meaning: "Use para acontecimentos consecutivos em uma narrativa.",
      pattern: "ação passada + ação passada + ação passada",
      examples: [
        { english: "He opened the door and walked inside.", portuguese: "Ele abriu a porta e entrou." },
        { english: "I woke up, got dressed, and left.", portuguese: "Acordei, me vesti e saí." },
      ],
    },
    {
      title: "Negativas e perguntas",
      meaning: "Use did com a forma base do verbo principal.",
      pattern: "did + sujeito + verbo base? · sujeito + didn't + verbo base",
      examples: [
        { english: "Did you call her?", portuguese: "Você ligou para ela?" },
        { english: "They didn't arrive early.", portuguese: "Eles não chegaram cedo." },
      ],
    },
  ],
  quickRule:
    "Depois de did ou didn't, use o verbo na forma base: Did she go?, e não Did she went?",
} as const satisfies GrammarTopic;

export const simplePastExercises = [
  {
    id: "simple-past-use", title: "1. Ações concluídas", type: "radio",
    instruction: "Escolha a forma correta para ações concluídas em um tempo passado definido.",
    questions: [
      { question: "We ___ the museum last Saturday.", options: [{ option: "visit" }, { option: "visited", isCorrect: true }, { option: "have visited" }] },
      { question: "She ___ her keys two hours ago.", options: [{ option: "loses" }, { option: "lost", isCorrect: true }, { option: "has lost yesterday" }] },
      { question: "Which sequence is correct?", options: [{ option: "He woke up, ate breakfast and left.", isCorrect: true }, { option: "He wakes up, ate breakfast and left." }, { option: "He did woke up and left." }] },
      { question: "___ you see the film yesterday?", options: [{ option: "Did", isCorrect: true }, { option: "Do" }, { option: "Were" }] },
    ],
  },
  {
    id: "simple-past-form", title: "2. Verbos regulares e irregulares", type: "fill", showWordBank: false,
    instruction: "Complete com a forma correta do simple past.",
    blocks: [
      { block: [{ text: "They " }, { blank: "arrived" }, { text: " early yesterday. (arrive)" }] },
      { block: [{ text: "I " }, { blank: "went" }, { text: " to the library after class. (go)" }] },
      { block: [{ text: "Laura " }, { blank: ["did not buy", "didn't buy"] }, { text: " the book. (not buy)" }] },
      { block: [{ blank: "Did they finish" }, { text: " the project on time? (they / finish)" }] },
    ],
  },
  {
    id: "simple-past-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "Did you went to class yesterday?", answer: "Did you go to class yesterday?", explanation: "Depois de did, use a forma base do verbo." },
      { sentence: "She didn't understood the text.", answer: ["She did not understand the text.", "She didn't understand the text."], explanation: "Depois de didn't, use understand, não understood." },
      { sentence: "We studyed for the test.", answer: "We studied for the test.", explanation: "Em verbos terminados em consoante + y, troque y por i antes de -ed." },
      { sentence: "He buyed a new computer last month.", answer: "He bought a new computer last month.", explanation: "Buy é irregular: seu passado é bought." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
