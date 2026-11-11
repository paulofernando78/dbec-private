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
          { prompt: "Where is the phone or another object in the picture?", support: ["The ... is ... the ..."] },
          { prompt: "How could you help someone find a misplaced item on this desk?", support: ["Look ... the ..."] },
        ],
      },

      image: mobileImage,
      },
  ],
} satisfies GetReadyData;
