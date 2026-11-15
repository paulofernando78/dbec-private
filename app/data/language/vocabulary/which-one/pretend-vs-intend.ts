import type { VocabularyTopic } from "./types";
import { bold } from "@/helpers/content";

export const pretendVsIntend = {
  id: "pretend-vs-intend",
  title: "Pretend vs. Intend",
  description: ["Diferencie ", bold("pretend"), " de ", bold("intend"), "."],
  introduction: [
    bold("Pretend"),
    " descreve algo imaginário ou uma aparência que não é verdadeira. ",
    bold("Intend"),
    " expressa uma intenção real: aquilo que alguém planeja ou deseja fazer.",
  ],
  usages: [
    {
      word: "Pretend",
      meaning:
        "Significa fingir ou fazer de conta. A pessoa age como se algo fosse verdade, embora saiba que não é.",
      pattern: "pretend + to + verbo · pretend (that) + oração",
      examples: [
        {
          english: "The children pretended to be astronauts.",
          portuguese: "As crianças fingiram ser astronautas.",
        },
        {
          english: "He pretended that he was asleep.",
          portuguese: "Ele fingiu que estava dormindo.",
        },
      ],
    },
    {
      word: "Intend",
      meaning:
        "Significa ter a intenção ou o plano de fazer algo. O objetivo é real, mesmo que ainda não tenha sido realizado.",
      pattern: "intend + to + verbo · intend something for someone",
      examples: [
        {
          english: "I intend to finish the course this year.",
          portuguese: "Pretendo terminar o curso este ano.",
        },
        {
          english: "She intends to study abroad.",
          portuguese: "Ela pretende estudar no exterior.",
        },
      ],
    },
  ],
  quickRule:
    "Pretend = fazer de conta; intend = planejar de verdade. Em português, “pretender fazer” normalmente corresponde a intend to do, não a pretend to do.",
  image: {
    src: "/media/images/language/vocabulary/which-one/pretend-vs-intend.avif?v=1",
    alt: "Em dois painéis, uma criança finge ser astronauta e uma jovem organiza planos concretos de estudo e viagem; os painéis estão identificados como PRETEND e INTEND.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "The children ___ to be superheroes.", choices: ["pretended", "intended"], answer: "pretended" },
    { question: "I ___ to call you tomorrow.", choices: ["pretend", "intend"], answer: "intend" },
    { question: "She ___ that she understood the joke.", choices: ["pretended", "intended"], answer: "pretended" },
    { question: "They ___ to open a new office next year.", choices: ["pretend", "intend"], answer: "intend" },
    { question: "He was only ___ to be angry.", choices: ["pretending", "intending"], answer: "pretending" },
  ],
} as const satisfies VocabularyTopic;
