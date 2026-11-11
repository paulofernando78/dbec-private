import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a2/unit-1/lesson-1-meet-and-connect/get-ready";

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
          {
            prompt: "What clues show these people are meeting for the first time?",
            support: ["They seem to be ... because ..."],
          },
          {
            prompt: "What could each person ask to get to know the other better?",
            support: ["They could ask ..."],
          },
        ],
      },

      image: `${imageRoot}/meet-and-connect.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
