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
          { prompt: "Which direction does the person need to go?", support: ["They should go ..."] },
          { prompt: "How would you give directions from this street corner?", support: ["Go ... and then ..."] },
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
          { prompt: "Which direction does the person need to go?", support: ["They should go ..."] },
          { prompt: "How would you give directions from this street corner?", support: ["Go ... and then ..."] },
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
          { prompt: "Which direction does the person need to go?", support: ["They should go ..."] },
          { prompt: "How would you give directions from this street corner?", support: ["Go ... and then ..."] },
        ],
      },

      image: `${imageRoot}/naomi-turns-right.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
