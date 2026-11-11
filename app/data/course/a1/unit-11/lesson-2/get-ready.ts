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
          { prompt: "What celebration is happening in these scenes?", support: ["They are celebrating ..."] },
          { prompt: "How did the guest arrive, and what might happen next?", support: ["They arrived by ...; next, ..."] },
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
          { prompt: "What celebration is happening in these scenes?", support: ["They are celebrating ..."] },
          { prompt: "How did the guest arrive, and what might happen next?", support: ["They arrived by ...; next, ..."] },
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
          { prompt: "What celebration is happening in these scenes?", support: ["They are celebrating ..."] },
          { prompt: "How did the guest arrive, and what might happen next?", support: ["They arrived by ...; next, ..."] },
        ],
      },

      image: `${imageRoot}/friends-watch-fireworks.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
