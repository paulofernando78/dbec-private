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
          { prompt: "Picnic or concert?", support: ["A picnic.", "A concert."] },
          { prompt: "Yesterday or today?", support: ["Yesterday.", "Today."] },
        ],
      },

      image: `${imageRoot}/weekend-picnic-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
