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
          { prompt: "Hello or hi?", support: ["Hello.", "Hi."] },
          { prompt: "First meeting or goodbye?", support: ["First meeting.", "Goodbye."] },
        ],
      },

      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/characters-together.avif?v=2",
      },
  ],
} satisfies GetReadyData;
