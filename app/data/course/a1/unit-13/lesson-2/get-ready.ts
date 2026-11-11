import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-13/lesson-2-which-way/get-ready";

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
          { prompt: "Left or right?", support: ["Left.", "Right."] },
          { prompt: "Straight or turn?", support: ["Straight.", "Turn."] },
        ],
      },

      image: `${imageRoot}/laura-asks-directions.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Straight or turn?", support: ["Straight.", "Turn."] },
          { prompt: "Left or right?", support: ["Left.", "Right."] },
        ],
      },

      image: `${imageRoot}/pedro-walks-straight.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Left or right?", support: ["Left.", "Right."] },
          { prompt: "Straight or turn?", support: ["Straight.", "Turn."] },
        ],
      },

      image: `${imageRoot}/naomi-turns-right.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
