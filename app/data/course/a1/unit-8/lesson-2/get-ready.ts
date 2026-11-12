import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-8/lesson-2-job-talk/get-ready";

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
          { prompt: "Is Naomi at work?", support: ["Yes, she is."] },
          { prompt: "Do you like working with people?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/naomis-job-is-rewarding.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Does Laura look busy?", support: ["Yes, she does. / No, she doesn't."] },
          { prompt: "Is your day busy today?", support: ["Yes, it is. / No, it isn't."] },
        ],
      },

      image: `${imageRoot}/lauras-job-is-stressful.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What does Eric do?", support: ["He's a designer."] },
          { prompt: "Is his job interesting to you?", support: ["Yes, it is. / No, it isn't."] },
        ],
      },

      image: `${imageRoot}/erics-job-is-interesting.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
