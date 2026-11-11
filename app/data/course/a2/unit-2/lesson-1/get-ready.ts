import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a2/unit-2/lesson-1-what-do-you-do/get-ready";

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
            prompt: "What job could the person in this setting have? Which detail gives you a clue?",
            support: ["They could be a ... because ..."],
          },
          {
            prompt: "What would you ask to learn where this person works?",
            support: ["I would ask ..."],
          },
        ],
      },

      image: `${imageRoot}/what-do-you-do.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
