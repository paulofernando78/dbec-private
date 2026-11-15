import { bold } from "@/helpers/content";
import type { VocabularyTopic } from "./types";

export const seeVsWatch = {
  id: "see-vs-watch",
  title: "See vs. Watch",
  description: ["Aprenda a distinguir ", bold("see"), " de ", bold("watch"), "."],
  introduction: [
    bold("See"),
    " costuma indicar que algo entra no seu campo de visão. ",
    bold("Watch"),
    " indica que você observa algo com atenção durante algum tempo.",
  ],
  usages: [
    {
      word: "See",
      meaning:
        "Significa ver ou perceber visualmente. Em geral, não destaca esforço nem atenção contínua; algo simplesmente fica visível para você.",
      pattern: "see + pessoa / objeto · see → saw → seen",
      examples: [
        {
          english: "I can see a bird outside the window.",
          portuguese: "Consigo ver um pássaro do lado de fora da janela.",
        },
        {
          english: "Did you see that sign?",
          portuguese: "Você viu aquela placa?",
        },
      ],
    },
    {
      word: "Watch",
      meaning:
        "Significa assistir ou observar com atenção por um período, especialmente quando aquilo que você acompanha está em movimento ou mudando.",
      pattern: "watch + pessoa / evento / tela · watch → watched → watched",
      examples: [
        {
          english: "We watched the soccer match on TV.",
          portuguese: "Assistimos ao jogo de futebol na televisão.",
        },
        {
          english: "She watched the children play.",
          portuguese: "Ela observou as crianças brincarem.",
        },
      ],
    },
  ],
  quickRule:
    "See = perceber com os olhos; watch = acompanhar com atenção. Compare see a bird de repente com watch a game durante algum tempo.",
  image: {
    src: "/media/images/language/vocabulary/which-one/see-vs-watch.avif?v=1",
    alt: "Em dois painéis, uma mulher percebe um pássaro pela janela e um homem acompanha atentamente um jogo na televisão; os painéis estão identificados como SEE e WATCH.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "Can you ___ the mountains from here?", choices: ["see", "watch"], answer: "see" },
    { question: "We ___ a documentary last night.", choices: ["saw", "watched"], answer: "watched" },
    { question: "I ___ Maria at the station yesterday.", choices: ["saw", "watched"], answer: "saw" },
    { question: "He likes to ___ the birds in his garden.", choices: ["see", "watch"], answer: "watch" },
    { question: "Have you ever ___ snow?", choices: ["seen", "watched"], answer: "seen" },
  ],
} as const satisfies VocabularyTopic;
