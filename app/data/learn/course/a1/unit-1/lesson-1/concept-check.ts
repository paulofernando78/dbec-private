import type { ConceptCheckData } from "../../../lesson-step-types";

export const conceptCheck = {
  type: "concept-check",
  slug: "check-meaning",
  label: "Check meaning",
  instruction: "Check the meaning. Choose the answer that matches the situation.",
  questions: [
    {
      context: "Hello. I’m Laura.",
      question: "Laura’s name:",
      options: ["Laura", "Eric"],
      answer: "Laura",
    },
    {
      context: "What’s your name?",
      question: "Who should answer: Laura or the other person?",
      options: ["Laura", "The other person"],
      answer: "The other person",
    },
    {
      context: "Eric: My name is Eric.",
      question: "Who is saying the name?",
      options: ["Eric’s", "Laura’s"],
      answer: "Eric’s",
    },
    {
      context: "Nice to meet you.",
      question: "First meeting or goodbye?",
      options: ["A first meeting", "A goodbye"],
      answer: "A first meeting",
    },
  ],
} satisfies ConceptCheckData;
