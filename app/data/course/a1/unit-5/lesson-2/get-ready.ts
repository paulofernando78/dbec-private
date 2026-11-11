import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-5/lesson-2-what-are-they-doing/get-ready";

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
          { prompt: "What are the people doing at this moment?", support: ["They are ..."] },
          { prompt: "Which activity do you usually do in the morning or evening?", support: ["I usually ..."] },
        ],
      },

      image: `${imageRoot}/studying-english-evening.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What are the people doing at this moment?", support: ["They are ..."] },
          { prompt: "Which activity do you usually do in the morning or evening?", support: ["I usually ..."] },
        ],
      },

      image: `${imageRoot}/eva-sleeping-at-night.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What are the people doing at this moment?", support: ["They are ..."] },
          { prompt: "Which activity do you usually do in the morning or evening?", support: ["I usually ..."] },
        ],
      },

      image: `${imageRoot}/mia-leo-watching-tv.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
