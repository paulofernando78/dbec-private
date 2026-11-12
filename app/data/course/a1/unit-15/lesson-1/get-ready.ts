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
          { prompt: "Are these family photos?", support: ["Yes, they are."] },
          { prompt: "Who is in one of your family photos? (You can invent one.)", support: ["My dad. / My sister."] },
        ],
      },

      image: `${imageRoot}/family-album-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
