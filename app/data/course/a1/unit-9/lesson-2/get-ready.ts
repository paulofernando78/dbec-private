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
          { prompt: "What are the people eating or drinking?", support: ["They are having ..."] },
          { prompt: "Which meal or drink would you choose, and when do you have it?", support: ["I would choose ... for ..."] },
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
          { prompt: "What are the people eating or drinking?", support: ["They are having ..."] },
          { prompt: "Which meal or drink would you choose, and when do you have it?", support: ["I would choose ... for ..."] },
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
          { prompt: "What are the people eating or drinking?", support: ["They are having ..."] },
          { prompt: "Which meal or drink would you choose, and when do you have it?", support: ["I would choose ... for ..."] },
        ],
      },

      image: `${imageRoot}/eric-drinks-tea.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
