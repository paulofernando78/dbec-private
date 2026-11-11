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
          { prompt: "Studying or sleeping?", support: ["Studying.", "Sleeping."] },
          { prompt: "Daytime or nighttime?", support: ["Daytime.", "Nighttime."] },
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
          { prompt: "Daytime or nighttime?", support: ["Daytime.", "Nighttime."] },
          { prompt: "Studying or sleeping?", support: ["Studying.", "Sleeping."] },
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
          { prompt: "Studying or sleeping?", support: ["Studying.", "Sleeping."] },
          { prompt: "Daytime or nighttime?", support: ["Daytime.", "Nighttime."] },
        ],
      },

      image: `${imageRoot}/mia-leo-watching-tv.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
