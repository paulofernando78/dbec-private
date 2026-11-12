import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-6/lesson-2-every-day/get-ready";

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
          { prompt: "Is it morning or night?", support: ["Morning."] },
          { prompt: "What time do you get up?", support: ["I get up at seven."] },
        ],
      },

      image: `${imageRoot}/pedro-gets-up-at-seven.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Is Laura having breakfast or dinner?", support: ["Breakfast."] },
          { prompt: "Do you eat breakfast at home?", support: ["Yes, I do. / No, I don't."] },
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
          { prompt: "Is Eric walking or riding a bike?", support: ["Riding a bike."] },
          { prompt: "Do you ride a bike every day?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
