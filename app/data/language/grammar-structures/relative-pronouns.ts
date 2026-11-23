import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const relativePronouns = {
  id: "relative-pronouns",
  title: "Relative Pronouns",
  description: "Ligue uma pessoa, coisa ou ideia a uma informação que a identifica ou descreve.",
  introduction:
    "Uma oração relativa acrescenta informação a um substantivo: 'the student who called' identifica o aluno. Who, whom, whose, which e that são pronomes relativos. Where, when e why introduzem ideias semelhantes, mas são advérbios relativos. What pode significar 'the thing that'.",
  usages: [
    {
      title: "Who e whom · pessoas",
      meaning:
        "Use who para pessoas, especialmente quando é o sujeito da oração relativa. Whom marca o objeto e é mais formal; na conversa cotidiana, who costuma aparecer também como objeto.",
      pattern: "pessoa + who/whom + oração relativa",
      examples: [
        { english: "The woman who teaches English lives here.", portuguese: "A mulher que ensina inglês mora aqui." },
        { english: "The woman whom I met in Greece is a teacher.", portuguese: "A mulher que conheci na Grécia é professora." },
        { english: "The woman who I met in Greece is a teacher.", portuguese: "A mulher que conheci na Grécia é professora (uso comum)." },
      ],
    },
    {
      title: "Whose · posse",
      meaning: "Use whose para ligar alguém ou algo a aquilo que lhe pertence. Ele vem antes do substantivo possuído.",
      pattern: "pessoa/coisa + whose + substantivo + oração relativa",
      examples: [
        { english: "The student whose keys are missing called me.", portuguese: "O aluno cujas chaves desapareceram me ligou." },
        { english: "I visited a house whose roof was damaged.", portuguese: "Visitei uma casa cujo telhado estava danificado." },
      ],
    },
    {
      title: "Which e that · coisas e animais",
      meaning:
        "Use which para coisas e animais. That também pode retomar pessoas, coisas ou animais em orações que identificam de quem ou do que se fala. Em orações explicativas entre vírgulas, use which ou who, não that.",
      pattern: "coisa/animal + which/that + oração relativa",
      examples: [
        { english: "The book which I borrowed is on the desk.", portuguese: "O livro que peguei emprestado está sobre a mesa." },
        { english: "The dog that lives next door is friendly.", portuguese: "O cachorro que mora ao lado é amigável." },
        { english: "My car, which is old, still works well.", portuguese: "Meu carro, que é velho, ainda funciona bem." },
      ],
    },
    {
      title: "Where, when e why · lugar, tempo e razão",
      meaning:
        "Essas palavras são advérbios relativos. Where retoma um lugar, when retoma um momento e why retoma uma razão.",
      pattern: "lugar + where · tempo + when · reason + why",
      examples: [
        { english: "This is the café where we met.", portuguese: "Este é o café onde nos conhecemos." },
        { english: "I remember the day when we arrived.", portuguese: "Lembro o dia em que chegamos." },
        { english: "Tell me the reason why you left.", portuguese: "Conte-me o motivo pelo qual você saiu." },
      ],
    },
    {
      title: "What · 'the thing that'",
      meaning:
        "What já inclui a ideia da coisa a que se refere. Por isso, não o coloque logo depois de um substantivo antecedente para dizer 'que'.",
      pattern: "what + oração = the thing that + oração",
      examples: [
        { english: "I didn't hear what you said.", portuguese: "Não ouvi o que você disse." },
        { english: "This is the book that I want.", portuguese: "Este é o livro que eu quero." },
      ],
    },
  ],
  quickRule:
    "Who/whom: pessoas; whose: posse; which: coisas e animais; that: pessoas, coisas e animais em orações que identificam; where/when/why: lugar, tempo e razão; what: 'the thing that'.",
} as const satisfies GrammarTopic;

export const relativePronounsExercises = [
  {
    id: "relative-pronouns-use",
    title: "Escolha a palavra relativa",
    type: "radio",
    instruction: "Escolha a palavra que liga as duas partes da frase.",
    questions: [
      { question: "The woman ___ called you is my teacher.", options: [{ option: "who", isCorrect: true }, { option: "where" }, { option: "whose" }] },
      { question: "The boy ___ bike was stolen is my friend.", options: [{ option: "which" }, { option: "whose", isCorrect: true }, { option: "when" }] },
      { question: "This is the place ___ we met.", options: [{ option: "where", isCorrect: true }, { option: "who" }, { option: "whose" }] },
      { question: "I remember the day ___ we arrived.", options: [{ option: "when", isCorrect: true }, { option: "whom" }, { option: "which" }] },
      { question: "I didn't understand ___ she said.", options: [{ option: "what", isCorrect: true }, { option: "whose" }, { option: "where" }] },
      { question: "My car, ___ is old, still works well.", options: [{ option: "that" }, { option: "which", isCorrect: true }, { option: "who" }] },
    ],
  },
] as const satisfies readonly GrammarExercise[];
