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
          { prompt: "Who is Pedro pointing to?", support: ["Camila."] },
          { prompt: "Is her hair long or short?", support: ["Long. / Short."] },
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
          { prompt: "Is Camila a child or an adult?", support: ["An adult."] },
          { prompt: "How old are you? (You can use a pretend age.)", support: ["I'm twenty."] },
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
          { prompt: "Is Camila smiling?", support: ["Yes, she is. / No, she isn't."] },
          { prompt: "Are you quiet or talkative?", support: ["I'm quiet. / I'm talkative."] },
        ],
      },

      image: `${imageRoot}/camila-friendly-and-quiet.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
