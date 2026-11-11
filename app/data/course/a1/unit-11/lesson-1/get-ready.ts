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
          { prompt: "What plans are the people making?", support: ["They are planning to ..."] },
          { prompt: "How could you ask about their plans for the weekend?", support: ["You could ask, “Are you ...?”"] },
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
          { prompt: "What plans are the people making?", support: ["They are planning to ..."] },
          { prompt: "How could you ask about their plans for the weekend?", support: ["You could ask, “Are you ...?”"] },
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
          { prompt: "What plans are the people making?", support: ["They are planning to ..."] },
          { prompt: "How could you ask about their plans for the weekend?", support: ["You could ask, “Are you ...?”"] },
        ],
      },

      image: `${imageRoot}/naomi-takes-bus.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
