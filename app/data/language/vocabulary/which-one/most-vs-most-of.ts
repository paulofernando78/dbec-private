import { bold } from "@/helpers/content";
import type { VocabularyTopic } from "./types";

export const mostVsMostOf = {
  id: "most-vs-most-of",
  title: "Most vs. Most of",
  description: ["Aprenda quando usar ", bold("most"), " e ", bold("most of"), "."],
  introduction: [
    bold("Most"),
    " apresenta uma maioria de modo geral. ",
    bold("Most of"),
    " apresenta a maioria de um grupo ou quantidade específica.",
  ],
  usages: [
    {
      word: "Most",
      meaning:
        "Significa a maioria ou a maior parte em uma afirmação geral. É usado diretamente antes de um substantivo, sem the, my, these ou outro determinante.",
      pattern: "most + substantivo · most people · most information",
      examples: [
        {
          english: "Most children enjoy games.",
          portuguese: "A maioria das crianças gosta de jogos.",
        },
        {
          english: "Most information is available online.",
          portuguese: "A maior parte das informações está disponível online.",
        },
      ],
    },
    {
      word: "Most of",
      meaning:
        "Significa a maioria ou a maior parte de um grupo definido. É seguido por um determinante, como the, my, these, ou por um pronome, como us e them.",
      pattern: "most of + determinante + substantivo · most of + pronome",
      examples: [
        {
          english: "Most of the students passed the exam.",
          portuguese: "A maioria dos alunos passou na prova.",
        },
        {
          english: "I've read most of this book.",
          portuguese: "Li a maior parte deste livro.",
        },
      ],
    },
  ],
  quickRule:
    "Use most + substantivo para generalizar. Use most of antes de the, my, these, us, them etc. Compare most people com most of the people.",
  image: {
    src: "/media/images/language/vocabulary/which-one/most-vs-most-of.avif?v=1",
    alt: "Em dois painéis, a maioria de uma multidão geral escuta música e a maioria dos alunos de uma turma específica levanta a mão; os painéis estão identificados como MOST e MOST OF.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "___ people need about eight hours of sleep.", choices: ["Most", "Most of"], answer: "Most" },
    { question: "___ my friends live nearby.", choices: ["Most", "Most of"], answer: "Most of" },
    { question: "I spent ___ the day studying.", choices: ["most", "most of"], answer: "most of" },
    { question: "___ restaurants close late in this city.", choices: ["Most", "Most of"], answer: "Most" },
    { question: "___ them agreed with the plan.", choices: ["Most", "Most of"], answer: "Most of" },
  ],
} as const satisfies VocabularyTopic;
