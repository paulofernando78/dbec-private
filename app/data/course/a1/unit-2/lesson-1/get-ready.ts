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
          { prompt: "One object or several?", support: ["One object.", "Several objects."] },
          { prompt: "Desk item or personal item?", support: ["A desk item.", "A personal item."] },
        ],
      },

      image: `${imagePath}/desk-objects.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
