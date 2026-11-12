import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-4/lesson-1-whose-is-it/get-ready";

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
          { prompt: "What color is the jacket?", support: ["Blue."] },
          { prompt: "Is this your jacket? (Point to a jacket or pretend.)", support: ["Yes, it is. / No, it isn't."] },
        ],
      },

      image: `${imageRoot}/whose-blue-jacket.avif?v=3`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What's this, a jacket or a scarf?", support: ["A scarf."] },
          { prompt: "Is this your scarf? (Pretend.)", support: ["Yes, it's mine."] },
        ],
      },

      image: `${imageRoot}/is-this-your-scarf.avif?v=2`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What are these, gloves or shoes?", support: ["Gloves."] },
          { prompt: "Are these your gloves? (Pretend.)", support: ["No, they aren't mine."] },
        ],
      },

      image: `${imageRoot}/whose-gloves.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
