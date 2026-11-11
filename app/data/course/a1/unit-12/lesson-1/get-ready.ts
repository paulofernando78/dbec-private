import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-12/lesson-1-feeling-sick/get-ready";

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
          { prompt: "What health problem might each person have?", support: ["They may have ..."] },
          { prompt: "What could someone say to describe how they feel?", support: ["“I have a ...” / “My ... hurts.”"] },
        ],
      },

      image: `${imageRoot}/eric-has-cold.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What health problem might each person have?", support: ["They may have ..."] },
          { prompt: "What could someone say to describe how they feel?", support: ["“I have a ...” / “My ... hurts.”"] },
        ],
      },

      image: `${imageRoot}/pedro-has-fever.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What health problem might each person have?", support: ["They may have ..."] },
          { prompt: "What could someone say to describe how they feel?", support: ["“I have a ...” / “My ... hurts.”"] },
        ],
      },

      image: `${imageRoot}/naomi-sore-throat.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
