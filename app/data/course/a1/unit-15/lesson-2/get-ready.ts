import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-15/lesson-2-school-days/get-ready";

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
          { prompt: "School or work?", support: ["School.", "Work."] },
          { prompt: "English or art?", support: ["English.", "Art."] },
        ],
      },

      image: `${imageRoot}/school-reunion-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
