import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-5/lesson-1-what-time-is-it-there/get-ready";

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
          { prompt: "What time can you read on the clock?", support: ["It is ..."] },
          { prompt: "What might people be doing at this time of day?", support: ["They might be ..."] },
        ],
      },

      image: `${imageRoot}/seven-oclock.avif?v=2`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What time can you read on the clock?", support: ["It is ..."] },
          { prompt: "What might people be doing at this time of day?", support: ["They might be ..."] },
        ],
      },

      image: `${imageRoot}/sao-paulo-london.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What time can you read on the clock?", support: ["It is ..."] },
          { prompt: "What might people be doing at this time of day?", support: ["They might be ..."] },
        ],
      },

      image: `${imageRoot}/lunch-at-twelve-thirty.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
