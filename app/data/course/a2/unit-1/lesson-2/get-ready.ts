import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a2/unit-1/lesson-2-getting-to-know-you/get-ready";

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
          {
            prompt: "What might these students have in common?",
            support: ["They might both ..."],
          },
          {
            prompt: "How could one person politely join this conversation?",
            support: ["They could say ..."],
          },
        ],
      },

      image: `${imageRoot}/getting-to-know-you.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
