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
          { prompt: "Is Laura dancing or singing?", support: ["Dancing."] },
          { prompt: "Can you dance?", support: ["Yes, I can. / No, I can't."] },
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
          { prompt: "What's this, a guitar or a piano?", support: ["A guitar."] },
          { prompt: "Can you play the guitar?", support: ["Yes, I can. / No, I can't."] },
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
          { prompt: "Is Naomi drawing or reading?", support: ["Drawing."] },
          { prompt: "Can you draw?", support: ["Yes, I can. / No, I can't."] },
        ],
      },

      image: `${imageRoot}/naomi-can-draw.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
