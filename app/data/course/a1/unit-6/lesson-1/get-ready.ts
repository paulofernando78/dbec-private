import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-6/lesson-1-getting-around/get-ready";

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
          { prompt: "Bus, train, or bike?", support: ["Bus.", "Train.", "Bike."] },
          { prompt: "Car or subway?", support: ["A car.", "The subway."] },
        ],
      },

      image: `${imageRoot}/pedro-takes-the-train.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Car or subway?", support: ["A car.", "The subway."] },
          { prompt: "Bus, train, or bike?", support: ["Bus.", "Train.", "Bike."] },
        ],
      },

      image: `${imageRoot}/laura-goes-by-bus.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Bus, train, or bike?", support: ["Bus.", "Train.", "Bike."] },
          { prompt: "Car or subway?", support: ["A car.", "The subway."] },
        ],
      },

      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
