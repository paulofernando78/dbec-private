import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const whoAndWhatQuestions = {
  id: "who-and-what-questions",
  title: "Who and What Questions",
  description: "Aprenda a fazer perguntas sobre o sujeito e o objeto com who e what.",
  introduction:
    "Use who para perguntar sobre uma pessoa e what para perguntar sobre uma coisa ou um acontecimento. Nesta prática, observe quando usar do, does ou did no presente e no passado simples. Para saber se você precisa de do, does ou did, descubra qual parte da frase a resposta completa.",
  usages: [
    {
      title: "Perguntas sobre o sujeito",
      meaning:
        "Quando who ou what ocupa o lugar do sujeito, mantenha a ordem da frase afirmativa. No presente e no passado simples afirmativos, use a forma normal do verbo, sem acrescentar do, does ou did.",
      pattern: "who/what + verbo + restante da frase?",
      examples: [
        { english: "Who called you? — Paola called me.", portuguese: "Quem ligou para você? — A Paola ligou para mim." },
        { english: "What broke the window? — A ball broke it.", portuguese: "O que quebrou a janela? — Uma bola quebrou a janela." },
        { english: "Who opens the door? — Mrs. White opens it.", portuguese: "Quem abre a porta? — A Sra. White abre a porta." },
      ],
    },
    {
      title: "Perguntas sobre o objeto",
      meaning:
        "Quando a frase já tem um sujeito, como you ou Jessica, e a pergunta é sobre o objeto, use do ou does no presente simples e did no passado simples. Depois do auxiliar e do sujeito, use o verbo na forma base.",
      pattern: "who/what + do/does/did + sujeito + verbo na forma base?",
      examples: [
        { english: "Who did you call? — I called Paola.", portuguese: "Para quem você ligou? — Liguei para a Paola." },
        { english: "What did the ball break? — It broke the window.", portuguese: "O que a bola quebrou? — Quebrou a janela." },
        { english: "What does Jessica find? — She finds a phone.", portuguese: "O que Jessica encontra? — Ela encontra um celular." },
      ],
    },
  ],
  quickRule:
    "Complete a resposta primeiro. Em «___ called you», falta o sujeito: Who called you? Em «You called ___», falta o objeto: Who did you call?",
} as const satisfies GrammarTopic;

export const whoAndWhatQuestionsExercises = [
  {
    id: "who-what-subject-object",
    title: "Perguntas sobre o sujeito e o objeto",
    type: "radio",
    instruction: "Escolha a pergunta sobre o trecho entre colchetes.",
    questions: [
      { question: "[Paola] called me.", options: [{ option: "Who called you?", isCorrect: true }, { option: "Who did you call?" }] },
      { question: "I called [Paola].", options: [{ option: "Who called you?" }, { option: "Who did you call?", isCorrect: true }] },
      { question: "[A ball] broke the window.", options: [{ option: "What did the ball break?" }, { option: "What broke the window?", isCorrect: true }] },
      { question: "Jessica finds [a phone].", options: [{ option: "What does Jessica find?", isCorrect: true }, { option: "Who finds a phone?" }] },
    ],
  },
  {
    id: "who-what-present-word-order",
    title: "Monte as perguntas no presente",
    type: "word-order",
    instruction: "Arraste ou toque nas palavras para perguntar sobre o trecho entre colchetes. Use do ou does quando necessário. Sobram palavras.",
    items: [
      {
        prompt: "[Maya] feeds the cats.",
        words: ["the", "does", "feeds", "Who", "cats?", "feed"],
        answer: ["Who", "feeds", "the", "cats?"],
      },
      {
        prompt: "Maya feeds [the cats].",
        words: ["Maya", "feeds", "does", "What", "feed?"],
        answer: ["What", "does", "Maya", "feed?"],
      },
      {
        prompt: "[Heavy rain] causes floods.",
        words: ["floods?", "cause", "What", "does", "causes"],
        answer: ["What", "causes", "floods?"],
      },
      {
        prompt: "The twins collect [stamps].",
        words: ["twins", "does", "What", "collect?", "the", "do"],
        answer: ["What", "do", "the", "twins", "collect?"],
      },
    ],
  },
  {
    id: "who-what-past-word-order",
    title: "Monte as perguntas no passado",
    type: "word-order",
    instruction: "Arraste ou toque nas palavras para perguntar sobre o trecho entre colchetes. Use did quando necessário. Sobram palavras.",
    items: [
      {
        prompt: "[Leo] found the keys.",
        words: ["keys?", "Who", "find", "did", "the", "found"],
        answer: ["Who", "found", "the", "keys?"],
      },
      {
        prompt: "Leo found [the keys].",
        words: ["find?", "found", "Leo", "What", "did"],
        answer: ["What", "did", "Leo", "find?"],
      },
      {
        prompt: "[A storm] damaged the roof.",
        words: ["roof?", "did", "What", "damage", "damaged", "the"],
        answer: ["What", "damaged", "the", "roof?"],
      },
      {
        prompt: "Nina invited [Leo].",
        words: ["invited", "Nina", "did", "invite?", "Who"],
        answer: ["Who", "did", "Nina", "invite?"],
      },
    ],
  },
] as const satisfies readonly GrammarExercise[];
