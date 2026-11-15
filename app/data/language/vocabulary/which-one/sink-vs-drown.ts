import { bold } from "@/helpers/content";
import type { VocabularyTopic } from "./types";

export const sinkVsDrown = {
  id: "sink-vs-drown",
  title: "Sink vs. Drown",
  description: ["Aprenda a distinguir ", bold("sink"), " de ", bold("drown"), "."],
  introduction: [
    bold("Sink"),
    " descreve algo que desce para o fundo da água. ",
    bold("Drown"),
    " descreve uma pessoa ou um animal que não consegue respirar por estar submerso.",
  ],
  usages: [
    {
      word: "Sink",
      meaning:
        "Significa afundar ou ir para o fundo. É usado principalmente para objetos, embarcações e outras coisas que descem na água.",
      pattern: "sink → sank → sunk · objeto + sink",
      examples: [
        {
          english: "The boat sank in a few minutes.",
          portuguese: "O barco afundou em poucos minutos.",
        },
        {
          english: "Heavy stones sink in water.",
          portuguese: "Pedras pesadas afundam na água.",
        },
      ],
    },
    {
      word: "Drown",
      meaning:
        "Significa afogar-se ou morrer por não conseguir respirar debaixo da água. É usado para seres vivos, não para objetos.",
      pattern: "drown → drowned → drowned · drown in + lugar",
      examples: [
        {
          english: "The swimmer almost drowned in the lake.",
          portuguese: "O nadador quase se afogou no lago.",
        },
        {
          english: "The lifeguard saved him from drowning.",
          portuguese: "A salva-vidas impediu que ele se afogasse.",
        },
      ],
    },
  ],
  quickRule:
    "Objetos sink; pessoas e animais drown. Uma pessoa pode sink fisicamente, mas drown descreve a falta de ar causada pela submersão.",
  image: {
    src: "/media/images/language/vocabulary/which-one/sink-vs-drown.avif?v=1",
    alt: "Em dois painéis, um barco vazio afunda em um lago e uma salva-vidas resgata um nadador em risco de afogamento; os painéis estão identificados como SINK e DROWN.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "The damaged ship began to ___.", choices: ["sink", "drown"], answer: "sink" },
    { question: "He could not swim and nearly ___.", choices: ["sank", "drowned"], answer: "drowned" },
    { question: "This piece of metal will ___ in water.", choices: ["sink", "drown"], answer: "sink" },
    { question: "The rescue team saved the dog from ___.", choices: ["sinking", "drowning"], answer: "drowning" },
    { question: "The old boat ___ to the bottom of the river.", choices: ["sank", "drowned"], answer: "sank" },
  ],
} as const satisfies VocabularyTopic;
