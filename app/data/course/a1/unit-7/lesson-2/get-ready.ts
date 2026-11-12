import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-7/lesson-2-dream-home/get-ready";

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
          { prompt: "Where is Laura?", support: ["On the sofa."] },
          { prompt: "Is there a sofa in your home?", support: ["Yes, there is. / No, there isn't."] },
        ],
      },

      image: `${imageRoot}/laura-on-the-sofa.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "How many lamps can you see?", support: ["Two."] },
          { prompt: "Is there a lamp in your room?", support: ["Yes, there is. / No, there isn't."] },
        ],
      },

      image: `${imageRoot}/naomi-and-two-lamps.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Is Pedro in the kitchen?", support: ["Yes, he is."] },
          { prompt: "What can you see in your kitchen? (Name one thing.)", support: ["A table."] },
        ],
      },

      image: `${imageRoot}/pedro-opens-the-dishwasher.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
