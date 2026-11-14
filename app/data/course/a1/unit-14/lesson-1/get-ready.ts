import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-14/lesson-1-last-weekend/get-ready";

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
          { prompt: "At home or at a picnic?" },
          { prompt: "What do you like to eat at a picnic?" },
        ],
      },

      image: `${imageRoot}/weekend-picnic-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
