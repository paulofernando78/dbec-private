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
          { prompt: "Hello or goodbye?", support: ["Hello!"] },
          { prompt: "What's your name?", support: ["I'm Ana. (Use your name.)"] },
        ],
      },

      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/characters-together.avif?v=2",
      },
  ],
} satisfies GetReadyData;
