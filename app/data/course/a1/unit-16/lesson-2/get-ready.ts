import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-16/lesson-2-youre-invited/get-ready";

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
          { prompt: "Party or dinner?", support: ["A party.", "Dinner."] },
          { prompt: "Coffee or a movie?", support: ["Coffee.", "A movie."] },
        ],
      },

      image: `${imageRoot}/weekend-choices-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
