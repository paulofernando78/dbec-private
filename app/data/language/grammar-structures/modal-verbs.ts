import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const modalVerbs = {
  id: "modal-verbs",
  title: "Modal Verbs",
  description: "Expresse capacidade, possibilidade, permissão, conselho e obrigação.",
  introduction:
    "Os modal verbs aparecem antes da forma base e não mudam com he, she ou it.",
  usages: [
    {
      title: "Capacidade e possibilidade",
      meaning: "Use can para capacidade e may, might ou could para possibilidade.",
      pattern: "sujeito + can/may/might/could + verbo base",
      examples: [
        { english: "She can swim.", portuguese: "Ela sabe nadar." },
        { english: "It might rain later.", portuguese: "Talvez chova mais tarde." },
      ],
    },
    {
      title: "Conselho e obrigação",
      meaning: "Use should para conselhos e must ou have to para obrigação forte.",
      pattern: "sujeito + should/must + verbo base",
      examples: [
        { english: "You should get some rest.", portuguese: "Você deveria descansar." },
        { english: "Employees must wear an ID badge.", portuguese: "Os funcionários devem usar crachá." },
      ],
    },
    {
      title: "Permissão e pedidos",
      meaning: "Use can, could ou may para pedir permissão ou fazer pedidos.",
      pattern: "can/could/may + sujeito + verbo base?",
      examples: [
        { english: "Could you open the window?", portuguese: "Você poderia abrir a janela?" },
        { english: "May I come in?", portuguese: "Posso entrar?" },
      ],
    },
  ],
  warnings: [
    {
      title: "Maybe × may be",
      explanation:
        "Maybe é uma única palavra e significa talvez. May be é o modal may seguido do verbo be na forma base.",
      examples: [
        {
          english: "Maybe she is busy.",
          portuguese: "Talvez ela esteja ocupada.",
        },
        {
          english: "She may be busy.",
          portuguese: "Ela talvez esteja ocupada.",
        },
      ],
    },
  ],
  quickRule:
    "Use o verbo na forma base depois de um modal: She can drive, e não She can drives.",
} as const satisfies GrammarTopic;

export const modalVerbsExercises = [
  {
    id: "modals-meaning", title: "1. Sentido e intenção", type: "radio",
    instruction: "Escolha o modal que expressa corretamente capacidade, conselho, obrigação ou possibilidade.",
    questions: [
      { question: "You ___ wear a seat belt. It is required by law.", options: [{ option: "might" }, { option: "must", isCorrect: true }, { option: "could" }] },
      { question: "You look tired. You ___ rest.", options: [{ option: "should", isCorrect: true }, { option: "mustn't" }, { option: "can" }] },
      { question: "It ___ rain later, but the forecast is uncertain.", options: [{ option: "must" }, { option: "might", isCorrect: true }, { option: "shouldn't" }] },
      { question: "When she was five, she ___ read very well.", options: [{ option: "could", isCorrect: true }, { option: "can" }, { option: "must" }] },
    ],
  },
  {
    id: "modals-form", title: "2. Estrutura dos modais", type: "fill", showWordBank: false,
    instruction: "Complete com o modal indicado e o verbo na forma base.",
    blocks: [
      { block: [{ text: "Students " }, { blank: "must follow" }, { text: " the rules. (obrigação / follow)" }] },
      { block: [{ text: "You " }, { blank: ["should not skip", "shouldn't skip"] }, { text: " breakfast. (conselho negativo / skip)" }] },
      { block: [{ blank: "Could you help" }, { text: " me, please? (pedido educado / help)" }] },
      { block: [{ text: "She " }, { blank: "may be" }, { text: " at home now. (possibilidade / be)" }] },
    ],
  },
  {
    id: "modals-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "He can to swim very fast.", answer: "He can swim very fast.", explanation: "Depois de um modal, use o verbo sem to." },
      { sentence: "She musts finish the work.", answer: "She must finish the work.", explanation: "Modais não recebem -s na terceira pessoa." },
      { sentence: "You don't should worry.", answer: ["You should not worry.", "You shouldn't worry."], explanation: "A negativa é formada diretamente com modal + not." },
      { sentence: "Maybe he late for class.", answer: "Maybe he is late for class.", explanation: "Maybe é advérbio; a oração ainda precisa de verbo. May be são duas palavras quando funcionam como verbo." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
