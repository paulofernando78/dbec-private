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
          { prompt: "Where is the drugstore in relation to the bookstore?", support: ["It is ... the ..."] },
          { prompt: "Which shop would you visit, and how would you explain where it is?", support: ["I would go to ... It is ..."] },
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
          { prompt: "Where is the drugstore in relation to the bookstore?", support: ["It is ... the ..."] },
          { prompt: "Which shop would you visit, and how would you explain where it is?", support: ["I would go to ... It is ..."] },
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
          { prompt: "Where is the drugstore in relation to the bookstore?", support: ["It is ... the ..."] },
          { prompt: "Which shop would you visit, and how would you explain where it is?", support: ["I would go to ... It is ..."] },
        ],
      },

      image: `${imageRoot}/coffee-shop-on-corner.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
