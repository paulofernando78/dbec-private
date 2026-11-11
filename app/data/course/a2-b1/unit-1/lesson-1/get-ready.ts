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
            prompt: "Which details in the picture could help you ask about Laura and Eric’s past?",
            support: ["The ... might remind them of ..."],
          },
          {
            prompt: "What past question would you ask them first, and what answer might you expect?",
            support: ["I would ask ... They might say ..."],
          },
        ],
      },

      image: `${imagePath}/laura-eric-looking-back.avif?v=4`,
      },
  ],
} satisfies GetReadyData;
