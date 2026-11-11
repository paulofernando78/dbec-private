import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-6/lesson-2-every-day/get-ready";

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
          { prompt: "Seven or eight o’clock?", support: ["Seven o’clock.", "Eight o’clock."] },
          { prompt: "Morning or evening?", support: ["Morning.", "Evening."] },
        ],
      },

      image: `${imageRoot}/pedro-gets-up-at-seven.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Morning or evening?", support: ["Morning.", "Evening."] },
          { prompt: "Seven or eight o’clock?", support: ["Seven o’clock.", "Eight o’clock."] },
        ],
      },

      image: `${imageRoot}/laura-eats-breakfast.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Seven or eight o’clock?", support: ["Seven o’clock.", "Eight o’clock."] },
          { prompt: "Morning or evening?", support: ["Morning.", "Evening."] },
        ],
      },

      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
