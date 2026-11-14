import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const verbBePresentPast = {
  id: "verb-be-present-past",
  title: "Verb Be: Present and Past",
  description: "Use o verbo be para identificar, descrever e localizar pessoas e coisas.",
  introduction:
    "O verbo be muda de acordo com o sujeito e conforme a frase se refere ao presente ou ao passado.",
  usages: [
    {
      title: "Presente: am, is, are",
      meaning:
        "Use am com I, is com he, she e it, e are com you, we e they.",
      pattern: "sujeito + am/is/are + complemento",
      examples: [
        { english: "I am ready.", portuguese: "Eu estou pronto." },
        { english: "They are at school.", portuguese: "Eles estão na escola." },
      ],
    },
    {
      title: "Passado: was, were",
      meaning:
        "Use was com I, he, she e it. Use were com you, we e they.",
      pattern: "sujeito + was/were + complemento",
      examples: [
        { english: "She was tired yesterday.", portuguese: "Ela estava cansada ontem." },
        { english: "We were in Recife last week.", portuguese: "Nós estávamos em Recife na semana passada." },
      ],
    },
    {
      title: "Negativas e perguntas",
      meaning:
        "Acrescente not nas negativas. Coloque be antes do sujeito para formar perguntas.",
      pattern: "sujeito + be + not · be + sujeito + complemento?",
      examples: [
        { english: "He isn't busy.", portuguese: "Ele não está ocupado." },
        { english: "Were you at home?", portuguese: "Você estava em casa?" },
      ],
    },
  ],
  quickRule:
    "O verbo be não usa do ou did: diga Is she ready? e Was he there?",
} as const satisfies GrammarTopic;

export const verbBePresentPastExercises = [
  {
    id: "be-context", title: "1. Presente ou passado?", type: "radio",
    instruction: "Escolha a forma correta do verbo be de acordo com o sujeito e o contexto.",
    questions: [
      { question: "My parents ___ at work now.", options: [{ option: "is" }, { option: "are", isCorrect: true }, { option: "was" }] },
      { question: "The test ___ very difficult yesterday.", options: [{ option: "is" }, { option: "were" }, { option: "was", isCorrect: true }] },
      { question: "I ___ nervous before the presentation last week.", options: [{ option: "am" }, { option: "was", isCorrect: true }, { option: "were" }] },
      { question: "Where ___ the students this morning?", options: [{ option: "was" }, { option: "were", isCorrect: true }, { option: "are being" }] },
    ],
  },
  {
    id: "be-form", title: "2. Formação", type: "fill", showWordBank: false,
    instruction: "Complete com am, is, are, was ou were. Use a forma negativa quando necessário.",
    blocks: [
      { block: [{ text: "Julia " }, { blank: "is" }, { text: " my best friend. (be)" }] },
      { block: [{ text: "We " }, { blank: ["were not", "weren't"] }, { text: " at school yesterday. (not be)" }] },
      { block: [{ blank: "Are" }, { text: " you ready for the exam? (be)" }] },
      { block: [{ text: "The books " }, { blank: "were" }, { text: " on the desk this morning. (be)" }] },
    ],
  },
  {
    id: "be-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "She are very tired today.", answer: "She is very tired today.", explanation: "Com she, use is." },
      { sentence: "Did he be at home yesterday?", answer: "Was he at home yesterday?", explanation: "O verbo be não usa did; ele próprio vai para o início da pergunta." },
      { sentence: "They wasn't late for class.", answer: ["They were not late for class.", "They weren't late for class."], explanation: "Com they no passado, use were ou weren't." },
      { sentence: "I is responsible for the project.", answer: "I am responsible for the project.", explanation: "Com I no presente, use am." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
