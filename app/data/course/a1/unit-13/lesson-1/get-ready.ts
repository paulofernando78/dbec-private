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
          { prompt: "Point to the bookstore." },
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
          { prompt: "Point to the post office." },
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
          { prompt: "Point to the coffee shop." },
        ],
      },

      image: `${imageRoot}/coffee-shop-on-corner.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
