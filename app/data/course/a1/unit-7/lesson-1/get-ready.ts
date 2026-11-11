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
          { prompt: "What can you tell about the homes in these pictures?", support: ["This home has ..."] },
          { prompt: "Which feature would you like in your home, and why?", support: ["I would like ... because ..."] },
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
          { prompt: "What can you tell about the homes in these pictures?", support: ["This home has ..."] },
          { prompt: "Which feature would you like in your home, and why?", support: ["I would like ... because ..."] },
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
          { prompt: "What can you tell about the homes in these pictures?", support: ["This home has ..."] },
          { prompt: "Which feature would you like in your home, and why?", support: ["I would like ... because ..."] },
        ],
      },

      image: `${imageRoot}/naomi-shows-her-apartment.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
