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
          { prompt: "How do you think these people know each other?", support: ["They may be ... because ..."] },
          { prompt: "What could one person say to start a friendly conversation?", support: ["They could say ..."] },
        ],
      },

      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/characters-together.avif?v=2",
      },
  ],
} satisfies GetReadyData;
