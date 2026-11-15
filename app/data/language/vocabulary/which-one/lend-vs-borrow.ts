import type { VocabularyTopic } from "./types";
import { bold } from "@/helpers/content";

export const lendVsBorrow = {
  id: "lend-vs-borrow",
  title: "Lend vs. Borrow",
  description: [
    "Escolha entre ",
    bold("lend"),
    " e ",
    bold("borrow"),
    " de acordo com quem entrega e quem recebe algo temporariamente.",
  ],
  introduction: [
    bold("Lend"),
    " e ",
    bold("borrow"),
    " descrevem a mesma transferência vista de lados diferentes. Use ",
    bold("lend"),
    " para quem entrega algo temporariamente e ",
    bold("borrow"),
    " para quem recebe esse item com a intenção de devolvê-lo.",
  ],
  usages: [
    {
      word: "Lend",
      meaning:
        "Significa emprestar: permitir que outra pessoa use algo seu por um período. O foco está em quem entrega.",
      pattern: "lend + pessoa + objeto · lend + objeto + to + pessoa",
      examples: [
        {
          english: "Can you lend me your pen?",
          portuguese: "Você pode me emprestar sua caneta?",
        },
        {
          english: "She lent her book to Daniel.",
          portuguese: "Ela emprestou o livro dela ao Daniel.",
        },
      ],
    },
    {
      word: "Borrow",
      meaning:
        "Significa pegar emprestado: receber algo para usar por um período e depois devolver. O foco está em quem recebe.",
      pattern: "borrow + objeto · borrow + objeto + from + pessoa / lugar",
      examples: [
        {
          english: "Can I borrow your pen?",
          portuguese: "Posso pegar sua caneta emprestada?",
        },
        {
          english: "I borrowed this book from the library.",
          portuguese: "Peguei este livro emprestado na biblioteca.",
        },
      ],
    },
  ],
  quickRule:
    "Quem entrega lends; quem recebe borrows. Use lend something to someone e borrow something from someone.",
  image: {
    src: "/media/images/language/vocabulary/which-one/lend-vs-borrow.avif?v=1",
    alt: "Em dois painéis, uma estudante empresta um livro a um colega e outro estudante pega um livro emprestado com uma bibliotecária; os painéis estão identificados como LEND e BORROW.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "Could you ___ me ten dollars?", choices: ["lend", "borrow"], answer: "lend" },
    { question: "I need to ___ a charger from Ana.", choices: ["lend", "borrow"], answer: "borrow" },
    { question: "The library ___ books to local students.", choices: ["lends", "borrows"], answer: "lends" },
    { question: "Who did you ___ that jacket from?", choices: ["lend", "borrow"], answer: "borrow" },
    { question: "She ___ her bicycle to her neighbor.", choices: ["lent", "borrowed"], answer: "lent" },
  ],
} as const satisfies VocabularyTopic;
