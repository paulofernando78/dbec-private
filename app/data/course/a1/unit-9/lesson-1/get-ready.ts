import type { GetReadyData } from "../../../lesson-step-types";

const imagePath =
  "/media/images/course/a1/unit-9/lesson-1-whats-in-the-kitchen/get-ready";

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
          { prompt: "What food or drinks can you find in the kitchen?", support: ["There is some ... / There are a few ..."] },
          { prompt: "What could someone make with the ingredients shown?", support: ["They could make ..."] },
        ],
      },

      image: `${imagePath}/checking-for-milk.avif?v=2`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What food or drinks can you find in the kitchen?", support: ["There is some ... / There are a few ..."] },
          { prompt: "What could someone make with the ingredients shown?", support: ["They could make ..."] },
        ],
      },

      image: `${imagePath}/some-milk.avif?v=2`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What food or drinks can you find in the kitchen?", support: ["There is some ... / There are a few ..."] },
          { prompt: "What could someone make with the ingredients shown?", support: ["They could make ..."] },
        ],
      },

      image: `${imagePath}/a-few-tomatoes.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
