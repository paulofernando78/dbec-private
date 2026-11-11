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
          { prompt: "Cold or sore throat?", support: ["A cold.", "A sore throat."] },
          { prompt: "Headache or fever?", support: ["A headache.", "A fever."] },
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
          { prompt: "Headache or fever?", support: ["A headache.", "A fever."] },
          { prompt: "Cold or sore throat?", support: ["A cold.", "A sore throat."] },
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
          { prompt: "Cold or sore throat?", support: ["A cold.", "A sore throat."] },
          { prompt: "Headache or fever?", support: ["A headache.", "A fever."] },
        ],
      },

      image: `${imageRoot}/naomi-sore-throat.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
