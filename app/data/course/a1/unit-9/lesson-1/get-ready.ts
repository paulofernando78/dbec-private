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
          { prompt: "Milk or juice?", support: ["Milk.", "Juice."] },
          { prompt: "Tomatoes or rice?", support: ["Tomatoes.", "Rice."] },
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
          { prompt: "Tomatoes or rice?", support: ["Tomatoes.", "Rice."] },
          { prompt: "Milk or juice?", support: ["Milk.", "Juice."] },
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
          { prompt: "Milk or juice?", support: ["Milk.", "Juice."] },
          { prompt: "Tomatoes or rice?", support: ["Tomatoes.", "Rice."] },
        ],
      },

      image: `${imagePath}/a-few-tomatoes.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
