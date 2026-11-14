import type { ConceptCheckData } from "../../../lesson-step-types";

export const conceptCheck = {
  type: "concept-check",
  slug: "check-meaning",
  label: "Check meaning",
  instruction: "Check the meaning. Choose the answer that matches the situation.",
  questions: [
    {
      context: "What’s your phone number?",
      question: "Name or number?",
      options: ["A name", "A number"],
      answer: "A number",
    },
    {
      context: "It’s 5510-8246.",
      question: "Is the speaker giving information or asking for it?",
      options: ["Asking for information", "Giving information"],
      answer: "Giving information",
    },
    {
      context: "sofia@example.com",
      question: "@ =",
      options: ["At", "Dot"],
      answer: "At",
    },
    {
      context: "Goodbye. See you soon.",
      question: "Start or end?",
      options: ["Starting", "Ending"],
      answer: "Ending",
    },
  ],
} satisfies ConceptCheckData;
