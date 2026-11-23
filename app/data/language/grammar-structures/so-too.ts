import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const soToo = {
  id: "so-too",
  title: "So + Auxiliary + Subject",
  description: "Concorde com uma afirmação positiva usando so ou too.",
  introduction:
    "Para dizer que uma afirmação positiva também vale para outra pessoa, use so antes do auxiliar e do sujeito. Você também pode repetir a ideia e colocar too no fim.",
  usages: [
    {
      title: "So + auxiliar + sujeito",
      meaning:
        "Escolha o mesmo auxiliar ou verbo modal da primeira frase. Com o verbo be, use am, is, are, was ou were. No simple present, use do ou does; no simple past, use did.",
      pattern: "So + auxiliar/modal + sujeito.",
      examples: [
        { english: "I am happy. — So am I.", portuguese: "Estou feliz. — Eu também." },
        { english: "She likes pizza. — So does Mary.", portuguese: "Ela gosta de pizza. — Mary também." },
        { english: "We watched a movie. — So did I.", portuguese: "Assistimos a um filme. — Eu também." },
        { english: "She can sing. — So can I.", portuguese: "Ela sabe cantar. — Eu também." },
      ],
      image: {
        src: "/media/images/language/grammar-structures/so-too/so-auxiliary-subject.avif?v=1",
        alt: "Duas pessoas concordam: 'I am happy.' e 'So am I.', com exemplos usando do e can.",
        width: 1536,
        height: 1024,
      },
    },
    {
      title: "Alternativa com too",
      meaning:
        "Com too, mantenha a ordem normal da frase e coloque a palavra no final. O significado de concordância positiva é o mesmo.",
      pattern: "sujeito + verbo + ... + too.",
      examples: [
        { english: "I am happy too.", portuguese: "Eu também estou feliz." },
        { english: "Mary likes pizza too.", portuguese: "Mary também gosta de pizza." },
        { english: "I can sing too.", portuguese: "Eu também sei cantar." },
      ],
    },
  ],
  quickRule:
    "So exige inversão: So do I. Com too, use a ordem comum: I do too. O auxiliar acompanha o tempo verbal da primeira frase.",
} as const satisfies GrammarTopic;

export const soTooExercises = [
  {
    id: "so-too-auxiliary",
    title: "Escolha o auxiliar",
    type: "radio",
    instruction: "Complete a resposta de concordância positiva.",
    questions: [
      { question: "I like coffee. — So ___ I.", options: [{ option: "do", isCorrect: true }, { option: "am" }, { option: "did" }] },
      { question: "She was tired. — So ___ I.", options: [{ option: "do" }, { option: "was", isCorrect: true }, { option: "did" }] },
      { question: "They have finished. — So ___ we.", options: [{ option: "have", isCorrect: true }, { option: "do" }, { option: "are" }] },
      { question: "He can swim. — So ___ she.", options: [{ option: "does" }, { option: "can", isCorrect: true }, { option: "is" }] },
    ],
  },
] as const satisfies readonly GrammarExercise[];
