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
          { prompt: "Are they studying or sleeping?", support: ["Studying."] },
          { prompt: "What are you doing now?", support: ["I'm studying English."] },
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
          { prompt: "Is Eva sleeping?", support: ["Yes, she is."] },
          { prompt: "What are you doing now?", support: ["I'm sitting."] },
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
          { prompt: "Are Mia and Leo watching TV?", support: ["Yes, they are."] },
          { prompt: "Do you watch TV at night?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/mia-leo-watching-tv.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
