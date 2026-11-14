import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-8/lesson-1-at-work/get-ready";

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
          { prompt: "Name one thing you can see." },
        ],
      },

      image: `${imageRoot}/eric-is-a-designer.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "A hotel or a school?" },
        ],
      },

      image: `${imageRoot}/laura-works-at-a-hotel.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "At home or at school?" },
        ],
      },

      image: `${imageRoot}/pedro-is-a-student.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
