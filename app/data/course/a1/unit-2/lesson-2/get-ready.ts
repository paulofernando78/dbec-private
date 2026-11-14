import type { GetReadyData } from "../../../lesson-step-types";

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
          { prompt: "Point to the phone." },
        ],
      },

      image: mobileImage,
      },
  ],
} satisfies GetReadyData;
