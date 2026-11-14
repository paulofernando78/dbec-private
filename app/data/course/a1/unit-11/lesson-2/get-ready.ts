import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-11/lesson-2-lets-celebrate/get-ready";

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
          { prompt: "What can you see in the picture?" },
        ],
      },

      image: `${imageRoot}/laura-prepares-party.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Bus or taxi?" },
        ],
      },

      image: `${imageRoot}/naomi-arrives-by-taxi.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Fireworks or a movie?" },
        ],
      },

      image: `${imageRoot}/friends-watch-fireworks.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
