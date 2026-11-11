import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-3/lesson-2-what-are-they-like/get-ready";

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
          { prompt: "How would you describe the person Pedro is pointing to?", support: ["She looks ... and ..."] },
          { prompt: "Which detail helps you identify the person in the group?", support: ["I think it is ... because ..."] },
        ],
      },

      image: `${imageRoot}/pedro-points-to-camila.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "How would you describe the person Pedro is pointing to?", support: ["She looks ... and ..."] },
          { prompt: "Which detail helps you identify the person in the group?", support: ["I think it is ... because ..."] },
        ],
      },

      image: `${imageRoot}/how-old-is-camila.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "How would you describe the person Pedro is pointing to?", support: ["She looks ... and ..."] },
          { prompt: "Which detail helps you identify the person in the group?", support: ["I think it is ... because ..."] },
        ],
      },

      image: `${imageRoot}/camila-friendly-and-quiet.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
