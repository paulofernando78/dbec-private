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
          { prompt: "One lamp or two?", support: ["One lamp.", "Two lamps."] },
          { prompt: "Sofa or dishwasher?", support: ["A sofa.", "A dishwasher."] },
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
          { prompt: "Sofa or dishwasher?", support: ["A sofa.", "A dishwasher."] },
          { prompt: "One lamp or two?", support: ["One lamp.", "Two lamps."] },
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
          { prompt: "One lamp or two?", support: ["One lamp.", "Two lamps."] },
          { prompt: "Sofa or dishwasher?", support: ["A sofa.", "A dishwasher."] },
        ],
      },

      image: `${imageRoot}/pedro-opens-the-dishwasher.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
