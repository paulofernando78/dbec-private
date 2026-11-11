import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-12/lesson-2-feel-better/get-ready";

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
          { prompt: "What is each person doing to feel better?", support: ["They are ..."] },
          { prompt: "What healthy habit could help the person in the last picture?", support: ["They could ..."] },
        ],
      },

      image: `${imageRoot}/eric-rests-at-home.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What is each person doing to feel better?", support: ["They are ..."] },
          { prompt: "What healthy habit could help the person in the last picture?", support: ["They could ..."] },
        ],
      },

      image: `${imageRoot}/naomi-drinks-tea.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What is each person doing to feel better?", support: ["They are ..."] },
          { prompt: "What healthy habit could help the person in the last picture?", support: ["They could ..."] },
        ],
      },

      image: `${imageRoot}/pedro-does-not-exercise.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
