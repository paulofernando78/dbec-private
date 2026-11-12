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
          { prompt: "Does Eric look well or sick?", support: ["Sick."] },
          { prompt: "Pretend you're Eric. How do you feel?", support: ["I feel sick."] },
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
          { prompt: "Does Pedro feel well?", support: ["No, he doesn't."] },
          { prompt: "Pretend you're Pedro. Are you OK?", support: ["No. I feel sick."] },
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
          { prompt: "Can you point to your throat?", support: ["Here."] },
          { prompt: "Pretend you're Naomi. Are you OK?", support: ["No. My throat hurts."] },
        ],
      },

      image: `${imageRoot}/naomi-sore-throat.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
