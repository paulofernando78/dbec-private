import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-4/lesson-2-weather-watch/get-ready";

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
          { prompt: "Rainy or sunny?", support: ["Rainy.", "Sunny."] },
          { prompt: "Raincoat or T-shirt?", support: ["A raincoat.", "A T-shirt."] },
        ],
      },

      image: `${imageRoot}/rainy-morning-eric.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Raincoat or T-shirt?", support: ["A raincoat.", "A T-shirt."] },
          { prompt: "Rainy or sunny?", support: ["Rainy.", "Sunny."] },
        ],
      },

      image: `${imageRoot}/cold-windy-day-eric.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Rainy or sunny?", support: ["Rainy.", "Sunny."] },
          { prompt: "Raincoat or T-shirt?", support: ["A raincoat.", "A T-shirt."] },
        ],
      },

      image: `${imageRoot}/hot-sunny-afternoon.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
