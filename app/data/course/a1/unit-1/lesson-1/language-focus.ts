import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

const imageBase =
  "/media/images/course/a1/unit-1/lesson-1-hello/language-focus/";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  supportLanguage: "pt-BR",
  instruction:
    "Listen, repeat, and notice how people greet and introduce themselves.",
  items: [
    [
      "Hi, my name’s Laura.",
      "Use Hi to greet someone. My name’s introduces your name.",
      [
        bold("Hi"),
        ", my name’s ",
      ],
      "greeting + my name’s + name",
      undefined,
      "Oi, meu nome é Laura.",
      undefined,
      [{ image: `${imageBase}laura.avif`, caption: "Hi, my name’s Laura." }],
    ],
    [
      "Hello, I’m Eric.",
      "Hello is a friendly greeting. I’m is the short form of I am.",
      [bold("Hello"), ", ", bold("I’m"), " Eric."],
      "greeting + I’m + name",
      undefined,
      "Olá, eu sou Eric.",
      undefined,
      [{ image: `${imageBase}eric.avif`, caption: "Hello, I’m Eric." }],
    ],
    [
      "How are you? I’m Tony. I’m the manager.",
      "Ask How are you? to greet someone. Use I’m + job to introduce your role.",
      [bold("How are you"), "? I’m Tony. I’m the ", bold("manager"), "."],
      "How are you? + I’m + name + I’m + a/the + job",
      undefined,
      "Como vai? Eu sou Tony. Sou o gerente.",
      undefined,
      [
        {
          image: `${imageBase}tony.avif?v=2`,
          caption: "How are you? I’m Tony. I’m the manager.",
        },
      ],
    ],
    [
      "How’s it going? I’m Naomi. I’m the receptionist.",
      "How’s it going? is an informal greeting. Use I’m + job to introduce your role.",
      [bold("How’s it going"), "? I’m Naomi. I’m the ", bold("receptionist"), "."],
      "How’s it going? + I’m + name + I’m + a/the + job",
      undefined,
      "Como vão as coisas? Eu sou Naomi. Sou a recepcionista.",
      undefined,
      [
        {
          image: `${imageBase}naomi.avif?v=2`,
          caption: "How’s it going? I’m Naomi. I’m the receptionist.",
        },
      ],
    ],
  ],
} satisfies LanguageFocusData;
