import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  supportLanguage: "pt-BR",
  instruction:
    "Listen, repeat, and notice four useful expressions for meeting someone.",
  visuals: [
     {
      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif?v=2",
      caption: "Hi, my name’s Laura.",
      audio: "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-1.mp3",
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-2.avif?v=3",
      caption: "Hello, I’m Eric.",
      audio:
        "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-2.mp3",
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/tony-manager.avif?v=4",
      caption: "This is Tony. He’s the manager.",
      audio:
        "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-3.mp3",
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/naomi-receptionist.avif?v=2",
      caption: "This is Naomi. She’s the receptionist.",
      audio:
        "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-4.mp3",
    },
  ],
  items: [
    [
      "Hello. I’m Laura. — Hi. I’m Eric.",
      "Use Hello ou Hi para cumprimentar alguém. Use I’m seguido do seu nome para se apresentar.",
      ["I’m ", bold("Lau"), "ra. I’m ", bold("Er"), "ic."],
      [
        {
          columns: [
            { header: "saudação", example: "Hello." },
            { header: "sujeito", example: "I" },
            { header: "verbo be", example: "’m" },
            { header: "nome", example: "Laura." },
          ],
        },
        {
          columns: [
            { header: "saudação", example: "Hi." },
            { header: "sujeito", example: "I" },
            { header: "verbo be", example: "’m" },
            { header: "nome", example: "Eric." },
          ],
        },
      ],
      undefined,
      "Olá. Eu sou Laura. — Oi. Eu sou Eric.",
    ],
    [
      "What’s your name?",
      "Use esta pergunta para saber o nome de outra pessoa.",
      [bold("What’s"), " your ", bold("name?")],
      [
        {
          columns: [
            { header: "palavra interrogativa", example: "What" },
            { header: "verbo be", example: "’s" },
            { header: "adjetivo possessivo", example: "your" },
            { header: "substantivo", example: "name?" },
          ],
        },
      ],
      undefined,
      "Qual é o seu nome?",
    ],
    [
      "My name is Laura.",
      "Use My name is seguido do seu nome para responder.",
      ["My name is ", bold("Lau"), "ra."],
      [
        {
          columns: [
            { header: "adjetivo possessivo", example: "My" },
            { header: "substantivo", example: "name" },
            { header: "verbo be", example: "is" },
            { header: "nome", example: "Laura." },
          ],
        },
      ],
      undefined,
      "Meu nome é Laura.",
    ],
    [
      "Nice to meet you. — Nice to meet you, too.",
      "Use esta expressão quando conhecer alguém. Na resposta, too mostra que o sentimento é recíproco.",
      [bold("Nice"), " to ", bold("meet"), " you. ", bold("Nice"), " to ", bold("meet"), " you, too."],
      [
        {
          columns: [
            {
              header: "expressão fixa",
              example: "Nice to meet",
            },
            { header: "pronome objeto", example: "you." },
          ],
        },
        {
          columns: [
            {
              header: "expressão fixa",
              example: "Nice to meet",
            },
            { header: "pronome objeto", example: "you," },
            { header: "também", example: "too." },
          ],
        },
      ],
      undefined,
      "Prazer em conhecer você. — Prazer em conhecer você também.",
    ],
  ],
} satisfies LanguageFocusData;
