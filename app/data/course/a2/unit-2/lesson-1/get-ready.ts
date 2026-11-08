import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a2/unit-2/lesson-1-what-do-you-do/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/what-do-you-do.avif?v=1`,
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
    },
  ],
} satisfies GetReadyData;
