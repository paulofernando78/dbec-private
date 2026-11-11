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
          { prompt: "What might the people remember from their school days?", support: ["They may remember ..."] },
          { prompt: "What could you ask someone at a school reunion?", support: ["I could ask, “Did you ...?”"] },
        ],
      },

      image: `${imageRoot}/school-reunion-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
