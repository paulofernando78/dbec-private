import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-5/lesson-1-what-time-is-it-there/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Point to the clock." },
          { prompt: "What number can you see?" },
        ],
      },

      image: `${imageRoot}/seven-oclock.avif?v=2`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Point to London." },
          { prompt: "Point to the clock." },
        ],
      },

      image: `${imageRoot}/sao-paulo-london.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Breakfast or lunch?" },
          { prompt: "Point to the clock." },
        ],
      },

      image: `${imageRoot}/lunch-at-twelve-thirty.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
