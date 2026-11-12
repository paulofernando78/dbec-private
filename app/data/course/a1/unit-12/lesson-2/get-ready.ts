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
          { prompt: "Is Eric resting or working?", support: ["Resting."] },
          { prompt: "What do you do when you feel sick?", support: ["I rest. / I drink water."] },
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
          { prompt: "Is Naomi drinking tea or juice?", support: ["Tea."] },
          { prompt: "What do you drink when you feel sick?", support: ["I drink tea. / I drink water."] },
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
          { prompt: "Is Pedro exercising now?", support: ["No, he isn't."] },
          { prompt: "Do you exercise every day?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/pedro-does-not-exercise.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
