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
          {
            prompt: "What do you notice in the picture?",
            support: ["I can see ..."],
          },
          {
            prompt: "What do you think is happening?",
            support: ["I think ..."],
          },
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
          {
            prompt: "What do you notice in the picture?",
            support: ["I can see ..."],
          },
          {
            prompt: "What do you think is happening?",
            support: ["I think ..."],
          },
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
          {
            prompt: "What do you notice in the picture?",
            support: ["I can see ..."],
          },
          {
            prompt: "What do you think is happening?",
            support: ["I think ..."],
          },
        ],
      },

      image: `${imageRoot}/erics-job-is-interesting.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
