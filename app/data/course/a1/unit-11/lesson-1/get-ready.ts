import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-11/lesson-1-weekend-plans/get-ready";

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
          { prompt: "Birthday or dinner?", support: ["A birthday party.", "Dinner."] },
          { prompt: "Tonight or the weekend?", support: ["Tonight.", "The weekend."] },
        ],
      },

      image: `${imageRoot}/laura-plans-birthday.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Tonight or the weekend?", support: ["Tonight.", "The weekend."] },
          { prompt: "Birthday or dinner?", support: ["A birthday party.", "Dinner."] },
        ],
      },

      image: `${imageRoot}/pedro-plans-pasta.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Birthday or dinner?", support: ["A birthday party.", "Dinner."] },
          { prompt: "Tonight or the weekend?", support: ["Tonight.", "The weekend."] },
        ],
      },

      image: `${imageRoot}/naomi-takes-bus.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
