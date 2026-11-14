import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const conditionals = {
  id: "conditionals",
  title: "Conditionals",
  description: "Descreva fatos, possibilidades, situações imaginárias e arrependimentos do passado.",
  introduction:
    "As orações condicionais relacionam uma condição, apresentada pela oração com if, ao seu resultado.",
  usages: [
    {
      title: "Zero e first conditional",
      meaning: "Use a zero conditional para fatos gerais e a first conditional para possibilidades futuras reais.",
      pattern: "if + presente, presente · if + presente, will + verbo base",
      examples: [
        { english: "If you heat ice, it melts.", portuguese: "Se você aquece gelo, ele derrete." },
        { english: "If it rains, we'll stay home.", portuguese: "Se chover, ficaremos em casa." },
      ],
    },
    {
      title: "Second conditional",
      meaning: "Use para situações presentes ou futuras imaginárias ou improváveis.",
      pattern: "if + simple past, would + verbo base",
      examples: [
        { english: "If I had more time, I'd travel more.", portuguese: "Se eu tivesse mais tempo, viajaria mais." },
        { english: "What would you do if you won?", portuguese: "O que você faria se ganhasse?" },
      ],
    },
    {
      title: "Third conditional",
      meaning: "Use para uma condição irreal no passado e seu resultado imaginado.",
      pattern: "if + past perfect, would have + particípio passado",
      examples: [
        { english: "If we'd left earlier, we wouldn't have missed the train.", portuguese: "Se tivéssemos saído antes, não teríamos perdido o trem." },
        { english: "She would have passed if she'd studied.", portuguese: "Ela teria passado se tivesse estudado." },
      ],
    },
  ],
  quickRule:
    "Normalmente, não use will diretamente depois de if em uma oração condicional.",
} as const satisfies GrammarTopic;

export const conditionalsExercises = [
  {
    id: "conditionals-identify", title: "1. Tipos de conditional", type: "radio",
    instruction: "Escolha a estrutura adequada para fatos, possibilidades, hipóteses e situações passadas irreais.",
    questions: [
      { question: "If you heat ice, it ___.", options: [{ option: "melts", isCorrect: true }, { option: "will melt" }, { option: "would melt" }] },
      { question: "If it rains tomorrow, we ___ at home.", options: [{ option: "stay" }, { option: "will stay", isCorrect: true }, { option: "would have stayed" }] },
      { question: "If I had more time, I ___ another language.", options: [{ option: "will learn" }, { option: "would learn", isCorrect: true }, { option: "learned" }] },
      { question: "If she had studied, she ___ the exam.", options: [{ option: "would pass" }, { option: "would have passed", isCorrect: true }, { option: "will have passed" }] },
    ],
  },
  {
    id: "conditionals-form", title: "2. Formação", type: "fill", showWordBank: false,
    instruction: "Complete cada período condicional com a forma verbal correta.",
    blocks: [
      { block: [{ text: "If people " }, { blank: "do not drink" }, { text: " water, they get thirsty. (not drink)" }] },
      { block: [{ text: "If you study, you " }, { blank: "will improve" }, { text: " your grades. (improve)" }] },
      { block: [{ text: "If I " }, { blank: "were" }, { text: " you, I would accept the offer. (be)" }] },
      { block: [{ text: "If they had left earlier, they " }, { blank: ["would have caught", "'d have caught"] }, { text: " the train. (catch)" }] },
    ],
  },
  {
    id: "conditionals-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "If it will rain, we will cancel the game.", answer: "If it rains, we will cancel the game.", explanation: "No first conditional, a oração com if usa simple present." },
      { sentence: "If I was you, I would apologize.", answer: "If I were you, I would apologize.", explanation: "Em hipóteses formais com o verbo be, use were para todas as pessoas." },
      { sentence: "If she studied, she would have passed.", answer: "If she had studied, she would have passed.", explanation: "O third conditional usa if + past perfect." },
      { sentence: "If he had more money, he will travel.", answer: "If he had more money, he would travel.", explanation: "No second conditional, use would + verbo na oração principal." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
