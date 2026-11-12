import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-16/lesson-2-youre-invited/get-ready";

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
          { prompt: "What activity can you see? (Name one.)", support: ["A movie. / A game."] },
          { prompt: "Do you want to see a movie this weekend?", support: ["Yes, I'd love to. / Sorry, I can't."] },
        ],
      },

      image: `${imageRoot}/weekend-choices-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
