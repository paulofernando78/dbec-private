import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-7/lesson-1-home-tour/get-ready";

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
          { prompt: "House or apartment?", support: ["A house.", "An apartment."] },
          { prompt: "Balcony or no balcony?", support: ["A balcony.", "No balcony."] },
        ],
      },

      image: `${imageRoot}/laura-lives-in-an-apartment.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Balcony or no balcony?", support: ["A balcony.", "No balcony."] },
          { prompt: "House or apartment?", support: ["A house.", "An apartment."] },
        ],
      },

      image: `${imageRoot}/pedro-has-a-balcony.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "House or apartment?", support: ["A house.", "An apartment."] },
          { prompt: "Balcony or no balcony?", support: ["A balcony.", "No balcony."] },
        ],
      },

      image: `${imageRoot}/naomi-shows-her-apartment.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
