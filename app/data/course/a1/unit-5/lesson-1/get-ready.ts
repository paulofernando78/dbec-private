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
          { prompt: "What number is on the clock?", support: ["Seven."] },
          { prompt: "What time is it?", support: ["It's seven o'clock."] },
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
          { prompt: "Can you find London? (Point.)", support: ["Here!"] },
          { prompt: "What time is it in London? (Read the clock.)", support: ["It's … in London."] },
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
          { prompt: "Is it breakfast or lunch?", support: ["Lunch."] },
          { prompt: "What time is it? (Read the clock.)", support: ["It's twelve thirty."] },
        ],
      },

      image: `${imageRoot}/lunch-at-twelve-thirty.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
