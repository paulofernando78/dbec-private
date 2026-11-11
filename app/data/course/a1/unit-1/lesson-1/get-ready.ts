import type { GetReadyData } from "../../../lesson-step-types";

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
          { prompt: "At work or at home?", support: ["At work."] },
          { prompt: "A first meeting or old friends?", support: ["A first meeting."] },
        ],
      },

      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/characters-together.avif?v=2",
      },
  ],
} satisfies GetReadyData;
