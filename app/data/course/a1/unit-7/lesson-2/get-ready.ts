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
          { prompt: "What is each person doing at home?", support: ["They are ..."] },
          { prompt: "Where would you look for a lamp or a clean plate in this home?", support: ["I would look ..."] },
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
          { prompt: "What is each person doing at home?", support: ["They are ..."] },
          { prompt: "Where would you look for a lamp or a clean plate in this home?", support: ["I would look ..."] },
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
          { prompt: "What is each person doing at home?", support: ["They are ..."] },
          { prompt: "Where would you look for a lamp or a clean plate in this home?", support: ["I would look ..."] },
        ],
      },

      image: `${imageRoot}/pedro-opens-the-dishwasher.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
