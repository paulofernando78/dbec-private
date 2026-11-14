import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-10/lesson-2-show-your-talent/get-ready";

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
          { prompt: "Dancing or singing?" },
        ],
      },

      image: `${imageRoot}/laura-can-dance.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "A guitar or a piano?" },
        ],
      },

      image: `${imageRoot}/eric-can-play-guitar.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Drawing or reading?" },
        ],
      },

      image: `${imageRoot}/naomi-can-draw.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
