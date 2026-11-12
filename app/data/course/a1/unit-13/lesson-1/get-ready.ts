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
          { prompt: "Where is the drugstore? (Point to the bookstore first.)", support: ["Next to the bookstore."] },
          { prompt: "Where do you buy books?", support: ["At a bookstore."] },
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
          { prompt: "Where is the post office? (Point.)", support: ["Between the stores."] },
          { prompt: "Is there a post office near your home?", support: ["Yes, there is. / No, there isn't."] },
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
          { prompt: "Where is the coffee shop?", support: ["On the corner."] },
          { prompt: "What do you buy at a coffee shop?", support: ["Coffee. / Tea."] },
        ],
      },

      image: `${imageRoot}/coffee-shop-on-corner.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
