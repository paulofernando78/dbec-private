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
          { prompt: "What did the people do together last weekend?", support: ["They ..."] },
          { prompt: "Which detail helps you tell when or where they were?", support: ["I think they were ... because ..."] },
        ],
      },

      image: `${imageRoot}/weekend-picnic-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
