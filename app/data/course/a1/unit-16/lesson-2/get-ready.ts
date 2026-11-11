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
          { prompt: "What weekend activities are the people considering?", support: ["They are thinking about ..."] },
          { prompt: "Which invitation would you accept, and what would you say?", support: ["I would ...; I would say ..."] },
        ],
      },

      image: `${imageRoot}/weekend-choices-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
