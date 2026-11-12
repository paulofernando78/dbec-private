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
          { prompt: "Is Laura asking for directions?", support: ["Yes, she is."] },
          { prompt: "Ask me where the bus stop is.", support: ["Excuse me. Where's the bus stop?"] },
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
          { prompt: "Is Pedro going straight or turning?", support: ["Going straight."] },
          { prompt: "What can you say to Pedro?", support: ["Go straight."] },
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
          { prompt: "Is Naomi turning left or right?", support: ["Right."] },
          { prompt: "What can you say to Naomi?", support: ["Turn right."] },
        ],
      },

      image: `${imageRoot}/naomi-turns-right.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
