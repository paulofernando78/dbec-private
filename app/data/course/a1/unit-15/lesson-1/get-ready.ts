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
          { prompt: "A child or an adult?", support: ["A child.", "An adult."] },
          { prompt: "Brazil or another country?", support: ["Brazil.", "Another country."] },
        ],
      },

      image: `${imageRoot}/family-album-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
