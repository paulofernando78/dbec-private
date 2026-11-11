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
          { prompt: "Friends or family?", support: ["Friends.", "Family."] },
          { prompt: "Cake or fireworks?", support: ["Cake.", "Fireworks."] },
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
          { prompt: "Cake or fireworks?", support: ["Cake.", "Fireworks."] },
          { prompt: "Friends or family?", support: ["Friends.", "Family."] },
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
          { prompt: "Friends or family?", support: ["Friends.", "Family."] },
          { prompt: "Cake or fireworks?", support: ["Cake.", "Fireworks."] },
        ],
      },

      image: `${imageRoot}/friends-watch-fireworks.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
