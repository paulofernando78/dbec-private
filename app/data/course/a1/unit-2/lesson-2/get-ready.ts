import type { GetReadyData } from "../../../lesson-step-types";

const image =
  "/media/images/course/a1/unit-2/lesson-2-where-is-it/get-ready/office-desk.avif?v=1";

const mobileImage =
  "/media/images/course/a1/unit-2/lesson-2-where-is-it/get-ready/office-desk-mobile.avif?v=1";

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
          { prompt: "Can you find the phone? (Point.)", support: ["Here!"] },
          { prompt: "Where is it?", support: ["It's on the desk."] },
        ],
      },

      image: mobileImage,
      },
  ],
} satisfies GetReadyData;
