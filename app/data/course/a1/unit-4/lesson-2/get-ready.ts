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
          { prompt: "What is the weather like in this scene?", support: ["It is ... and ..."] },
          { prompt: "What would you wear to go outside in this weather?", support: ["I would wear ... because ..."] },
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
          { prompt: "What is the weather like in this scene?", support: ["It is ... and ..."] },
          { prompt: "What would you wear to go outside in this weather?", support: ["I would wear ... because ..."] },
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
          { prompt: "What is the weather like in this scene?", support: ["It is ... and ..."] },
          { prompt: "What would you wear to go outside in this weather?", support: ["I would wear ... because ..."] },
        ],
      },

      image: `${imageRoot}/hot-sunny-afternoon.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
