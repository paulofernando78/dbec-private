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
          { prompt: "Rewarding or stressful?", support: ["Rewarding.", "Stressful."] },
          { prompt: "Interesting or difficult?", support: ["Interesting.", "Difficult."] },
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
          { prompt: "Interesting or difficult?", support: ["Interesting.", "Difficult."] },
          { prompt: "Rewarding or stressful?", support: ["Rewarding.", "Stressful."] },
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
          { prompt: "Rewarding or stressful?", support: ["Rewarding.", "Stressful."] },
          { prompt: "Interesting or difficult?", support: ["Interesting.", "Difficult."] },
        ],
      },

      image: `${imageRoot}/erics-job-is-interesting.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
