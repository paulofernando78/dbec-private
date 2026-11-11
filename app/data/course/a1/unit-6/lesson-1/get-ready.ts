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
          { prompt: "How is each person getting around the city?", support: ["The person is going by ..."] },
          { prompt: "Which way would you choose for this trip, and why?", support: ["I would go by ... because ..."] },
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
          { prompt: "How is each person getting around the city?", support: ["The person is going by ..."] },
          { prompt: "Which way would you choose for this trip, and why?", support: ["I would go by ... because ..."] },
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
          { prompt: "How is each person getting around the city?", support: ["The person is going by ..."] },
          { prompt: "Which way would you choose for this trip, and why?", support: ["I would go by ... because ..."] },
        ],
      },

      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
