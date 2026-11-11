import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-16/lesson-1-leave-a-message/get-ready";

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
          { prompt: "Why might Laura have missed a call?", support: ["She might have been ..."] },
          { prompt: "What information should she leave in a clear message?", support: ["She should say ..."] },
        ],
      },

      image: `${imageRoot}/missed-call-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
