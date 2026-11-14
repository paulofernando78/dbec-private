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
          { prompt: "Is Naomi at work?" },
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
          { prompt: "Does Laura look busy?" },
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
          { prompt: "Name one thing you can see at Eric’s workplace." },
        ],
      },

      image: `${imageRoot}/erics-job-is-interesting.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
