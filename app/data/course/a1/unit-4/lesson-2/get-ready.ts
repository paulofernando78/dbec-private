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
          { prompt: "Rain or sun?", support: ["Rain."] },
          { prompt: "Is Eric wearing a raincoat?", support: ["Yes, he is. / No, he isn't."] },
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
          { prompt: "Is it hot or cold?", support: ["Cold."] },
          { prompt: "What's Eric wearing? (Name one thing.)", support: ["A coat."] },
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
          { prompt: "Is it sunny?", support: ["Yes, it is."] },
          { prompt: "What are you wearing today? (Name one thing.)", support: ["A T-shirt."] },
        ],
      },

      image: `${imageRoot}/hot-sunny-afternoon.avif?v=2`,
      },
  ],
} satisfies GetReadyData;
