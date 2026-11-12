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
          { prompt: "Where is the person looking? (Point.)", support: ["In the fridge."] },
          { prompt: "What do you drink at breakfast?", support: ["Milk. / Coffee. / Water."] },
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
          { prompt: "Can you see milk?", support: ["Yes, I can."] },
          { prompt: "Do you drink milk?", support: ["Yes, I do. / No, I don't."] },
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
          { prompt: "What are these, tomatoes or apples?", support: ["Tomatoes."] },
          { prompt: "Do you like tomatoes?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imagePath}/a-few-tomatoes.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
