import type { GetReadyData } from "../../../lesson-step-types";

const imagePath =
  "/media/images/course/a2-b1/unit-1/lesson-1-asking-about-the-past/get-ready";

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
            prompt: "What do you notice in the picture?",
            support: ["I can see ..."],
          },
          {
            prompt: "What do you think is happening?",
            support: ["I think ..."],
          },
        ],
      },

      image: `${imagePath}/laura-eric-looking-back.avif?v=4`,
      },
  ],
} satisfies GetReadyData;
