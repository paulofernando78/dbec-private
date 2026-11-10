import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-12/lesson-1-feeling-sick/get-ready";

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

      image: `${imageRoot}/eric-has-cold.avif?v=1`,
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

      image: `${imageRoot}/pedro-has-fever.avif?v=1`,
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

      image: `${imageRoot}/naomi-sore-throat.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
