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
          { prompt: "Which objects can you identify on the desk?", support: ["There is a laptop, and there are some books."] },
          { prompt: "What might someone use one of these objects for?", support: ["They might use the ... to ..."] },
        ],
      },

      image: `${imagePath}/desk-objects.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
