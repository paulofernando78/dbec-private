import { canYou } from "./can-you";
import { conceptCheck } from "./concept-check";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";
import { tryIt } from "./try-it";
import { useIt } from "./use-it";
import { getReady } from "./get-ready";

export const a1Unit1Lesson1 = {
  level: "a1",
  unit: { number: 1, title: "Meeting People" },
  lesson: { number: 1, title: "Hello" },
  finalTask:
    "Meet a new classmate, exchange first and last names, and introduce that person to someone else.",
  successCriteria: [
    "greets the partner and says their name",
    "asks for and understands the partner's name",
    "introduces the partner clearly",
  ],
  steps: [
    getReady,
    listen,
    languageFocus,
    conceptCheck,
    tryIt,
    useIt,
    canYou,
  ],
};
