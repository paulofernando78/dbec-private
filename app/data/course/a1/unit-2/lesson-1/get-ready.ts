import type { GetReadyData } from "../../../lesson-step-types";

const imagePath =
  "/media/images/course/a1/unit-2/lesson-1-whats-this/get-ready";

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
            prompt: "What can you see in the picture?",
            support: ["I can see ..."],
          },
        ],
      },

      image: `${imagePath}/desk-objects.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
