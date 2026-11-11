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
          { prompt: "Breakfast or dinner?", support: ["Breakfast.", "Dinner."] },
          { prompt: "Every day or sometimes?", support: ["Every day.", "Sometimes."] },
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
          { prompt: "Every day or sometimes?", support: ["Every day.", "Sometimes."] },
          { prompt: "Breakfast or dinner?", support: ["Breakfast.", "Dinner."] },
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
          { prompt: "Breakfast or dinner?", support: ["Breakfast.", "Dinner."] },
          { prompt: "Every day or sometimes?", support: ["Every day.", "Sometimes."] },
        ],
      },

      image: `${imageRoot}/eric-drinks-tea.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
