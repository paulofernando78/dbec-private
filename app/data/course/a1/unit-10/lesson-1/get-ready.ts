import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-10/lesson-1-game-day/get-ready";

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
          { prompt: "Volleyball or tennis?" },
        ],
      },

      image: `${imageRoot}/pedro-plays-volleyball.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What sport is this?" },
        ],
      },

      image: `${imageRoot}/naomi-plays-tennis.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What sport is on TV?" },
        ],
      },

      image: `${imageRoot}/eric-watches-soccer.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
