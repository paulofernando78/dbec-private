import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-4/lesson-1-whose-is-it/get-ready";

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
          { prompt: "What color is the jacket?" },
        ],
      },

      image: `${imageRoot}/whose-blue-jacket.avif?v=3`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "A jacket or a scarf?" },
        ],
      },

      image: `${imageRoot}/is-this-your-scarf.avif?v=2`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Gloves or shoes?" },
        ],
      },

      image: `${imageRoot}/whose-gloves.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
