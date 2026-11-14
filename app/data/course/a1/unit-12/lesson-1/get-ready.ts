import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-12/lesson-1-feeling-sick/get-ready";

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
          { prompt: "Does Eric look well or sick?" },
        ],
      },

      image: `${imageRoot}/eric-has-cold.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Does Pedro look well or sick?" },
        ],
      },

      image: `${imageRoot}/pedro-has-fever.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Point to your throat." },
        ],
      },

      image: `${imageRoot}/naomi-sore-throat.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
