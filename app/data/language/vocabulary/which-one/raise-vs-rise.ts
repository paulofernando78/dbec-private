import { bold } from "@/helpers/content";
import type { VocabularyTopic } from "./types";

export const raiseVsRise = {
  id: "raise-vs-rise",
  title: "Raise vs. Rise",
  description: ["Aprenda a distinguir ", bold("raise"), " de ", bold("rise"), "."],
  introduction: [
    bold("Raise"),
    " indica que alguém ou algo faz outra coisa subir. ",
    bold("Rise"),
    " indica que o próprio sujeito sobe, aumenta ou se levanta.",
  ],
  usages: [
    {
      word: "Raise",
      meaning:
        "Significa levantar, elevar ou aumentar alguma coisa. É um verbo transitivo: precisa de um objeto que recebe a ação.",
      pattern: "raise + objeto · raise → raised → raised",
      examples: [
        {
          english: "Please raise your hand.",
          portuguese: "Por favor, levante a mão.",
        },
        {
          english: "The company raised its prices.",
          portuguese: "A empresa aumentou seus preços.",
        },
      ],
    },
    {
      word: "Rise",
      meaning:
        "Significa subir, aumentar ou levantar-se por conta própria. É um verbo intransitivo: não recebe objeto direto.",
      pattern: "sujeito + rise · rise → rose → risen",
      examples: [
        {
          english: "The sun rises in the east.",
          portuguese: "O sol nasce no leste.",
        },
        {
          english: "Prices rose sharply last year.",
          portuguese: "Os preços subiram muito no ano passado.",
        },
      ],
    },
  ],
  quickRule:
    "Raise precisa de objeto: someone raises something. Rise não recebe objeto: something rises by itself.",
  image: {
    src: "/media/images/language/vocabulary/which-one/raise-vs-rise.avif?v=1",
    alt: "Em dois painéis, uma mulher levanta uma bandeira e o sol sobe sozinho no horizonte; os painéis estão identificados como RAISE e RISE.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "Please ___ the window a little higher.", choices: ["raise", "rise"], answer: "raise" },
    { question: "The temperature will ___ tomorrow.", choices: ["raise", "rise"], answer: "rise" },
    { question: "She ___ her hand to ask a question.", choices: ["raised", "rose"], answer: "raised" },
    { question: "He ___ from his chair and left the room.", choices: ["raised", "rose"], answer: "rose" },
    { question: "They have ___ enough money for the project.", choices: ["raised", "risen"], answer: "raised" },
  ],
} as const satisfies VocabularyTopic;
