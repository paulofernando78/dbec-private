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
          { prompt: "What is Laura looking at?", support: ["Her phone."] },
          { prompt: "What can you say at the end of a phone message?", support: ["Please call me back."] },
        ],
      },

      image: `${imageRoot}/missed-call-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
