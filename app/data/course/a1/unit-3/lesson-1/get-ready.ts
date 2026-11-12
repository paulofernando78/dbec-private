import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-3/lesson-1-where-are-you-from/get-ready";

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
          { prompt: "What country are you from?", support: ["I'm from Brazil."] },
          { prompt: "Do you speak English or Portuguese?", support: ["I speak Portuguese."] },
        ],
      },

      image: `${imageRoot}/international-event.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Are you from Brazil?", support: ["Yes, I am. / No, I'm not."] },
          { prompt: "Where are you from?", support: ["I'm from Brazil."] },
        ],
      },

      image: `${imageRoot}/laura-pedro-eric-naomi-clean-shaven.avif?v=3`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Where is Pedro from? (Use the Brazil clue if you see it.)", support: ["He's from Brazil."] },
          { prompt: "Are you from Brazil, too?", support: ["Yes, I am. / No, I'm not."] },
        ],
      },

      image: `${imageRoot}/brazilian-participant.avif?v=3`,
      },
  ],
} satisfies GetReadyData;
