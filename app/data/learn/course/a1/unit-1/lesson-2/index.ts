import { canYou } from "./can-you";
import { conceptCheck } from "./concept-check";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";
import { tryIt } from "./try-it";
import { useIt } from "./use-it";
import { getReady } from "./get-ready";

export const a1Unit1Lesson2 = {
  level: "a1",
  unit: { number: 1, title: "Meeting People" },
  lesson: { number: 2, title: "Stay in Touch" },
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
