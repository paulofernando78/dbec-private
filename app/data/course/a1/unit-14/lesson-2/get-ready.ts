import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-14/lesson-2-vacation-stories/get-ready";

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
          { prompt: "Where did the people go on vacation?", support: ["They went to ..."] },
          { prompt: "How did they travel, and what might they do there?", support: ["They went by ... and ..."] },
        ],
      },

      image: `${imageRoot}/recife-vacation-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
