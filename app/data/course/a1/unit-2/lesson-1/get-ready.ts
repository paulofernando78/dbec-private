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
          { prompt: "What's this? (Point to one thing on the desk.)", support: ["It's a book."] },
          { prompt: "What are these? (Point to two things.)", support: ["They're books."] },
        ],
      },

      image: `${imagePath}/desk-objects.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
