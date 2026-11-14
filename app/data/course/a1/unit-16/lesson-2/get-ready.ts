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
          { prompt: "Name one activity you can see." },
          { prompt: "Do you like movies?" },
        ],
      },

      image: `${imageRoot}/weekend-choices-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
