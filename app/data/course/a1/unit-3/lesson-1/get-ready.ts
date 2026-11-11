import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-3/lesson-1-where-are-you-from/get-ready";

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
          { prompt: "Brazil or Mexico?", support: ["Brazil.", "Mexico."] },
          { prompt: "Portuguese or English?", support: ["Portuguese.", "English."] },
        ],
      },

      image: `${imageRoot}/international-event.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Portuguese or English?", support: ["Portuguese.", "English."] },
          { prompt: "Brazil or Mexico?", support: ["Brazil.", "Mexico."] },
        ],
      },

      image: `${imageRoot}/laura-pedro-eric-naomi-clean-shaven.avif?v=3`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Brazil or Mexico?", support: ["Brazil.", "Mexico."] },
          { prompt: "Portuguese or English?", support: ["Portuguese.", "English."] },
        ],
      },

      image: `${imageRoot}/brazilian-participant.avif?v=3`,
      },
  ],
} satisfies GetReadyData;
