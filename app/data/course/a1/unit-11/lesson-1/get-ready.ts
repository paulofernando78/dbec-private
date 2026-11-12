import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-11/lesson-1-weekend-plans/get-ready";

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
          { prompt: "What is Laura planning, a birthday party or a trip?", support: ["A birthday party."] },
          { prompt: "What are you going to do this weekend? (Choose an idea.)", support: ["I'm going to see my friends. / I'm going to stay home."] },
        ],
      },

      image: `${imageRoot}/laura-plans-birthday.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Pasta or pizza?", support: ["Pasta."] },
          { prompt: "Are you going to cook this weekend?", support: ["Yes, I am. / No, I'm not."] },
        ],
      },

      image: `${imageRoot}/pedro-plans-pasta.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Bus or train?", support: ["Bus."] },
          { prompt: "Are you going to take the bus this weekend?", support: ["Yes, I am. / No, I'm not."] },
        ],
      },

      image: `${imageRoot}/naomi-takes-bus.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
