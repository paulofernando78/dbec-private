import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-11/lesson-2-lets-celebrate/get-ready";

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
          { prompt: "Is Laura getting ready for a party?", support: ["Yes, she is."] },
          { prompt: "Are you going to have a party on your next birthday?", support: ["Yes, I am. / No, I'm not."] },
        ],
      },

      image: `${imageRoot}/laura-prepares-party.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "How is Naomi getting there, by bus or by taxi?", support: ["By taxi."] },
          { prompt: "How do you go to a party?", support: ["I go by car. / I walk."] },
        ],
      },

      image: `${imageRoot}/naomi-arrives-by-taxi.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What are the friends watching, fireworks or a movie?", support: ["Fireworks."] },
          { prompt: "Do you like fireworks?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/friends-watch-fireworks.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
