import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-13/lesson-1-shopping-around/get-ready";

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
          { prompt: "Drugstore or bookstore?", support: ["A drugstore.", "A bookstore."] },
          { prompt: "Next to or between?", support: ["Next to.", "Between."] },
        ],
      },

      image: `${imageRoot}/drugstore-next-to-bookstore.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Next to or between?", support: ["Next to.", "Between."] },
          { prompt: "Drugstore or bookstore?", support: ["A drugstore.", "A bookstore."] },
        ],
      },

      image: `${imageRoot}/post-office-between-shops.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Drugstore or bookstore?", support: ["A drugstore.", "A bookstore."] },
          { prompt: "Next to or between?", support: ["Next to.", "Between."] },
        ],
      },

      image: `${imageRoot}/coffee-shop-on-corner.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
