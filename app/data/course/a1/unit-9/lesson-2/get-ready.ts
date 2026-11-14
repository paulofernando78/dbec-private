import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-9/lesson-2-eating-habits/get-ready";

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
          { prompt: "Breakfast or dinner?" },
          { prompt: "What do you eat for breakfast?" },
        ],
      },

      image: `${imageRoot}/laura-eats-breakfast.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "At home or at a restaurant?" },
        ],
      },

      image: `${imageRoot}/pedro-cooks-at-home.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Tea or milk?" },
        ],
      },

      image: `${imageRoot}/eric-drinks-tea.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
