import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-15/lesson-1-family-history/get-ready";

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
          { prompt: "Who do you think is in this family album?", support: ["It may show ..."] },
          { prompt: "Which detail could tell you how the people are related?", support: ["They might be ... because ..."] },
        ],
      },

      image: `${imageRoot}/family-album-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
