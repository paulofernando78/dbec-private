import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-7/lesson-2-dream-home/get-ready";

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
          { prompt: "Where is Laura?" },
        ],
      },

      image: `${imageRoot}/laura-on-the-sofa.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Point to a lamp." },
        ],
      },

      image: `${imageRoot}/naomi-and-two-lamps.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What room is this?" },
        ],
      },

      image: `${imageRoot}/pedro-opens-the-dishwasher.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
