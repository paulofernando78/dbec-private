import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-14/lesson-2-vacation-stories/get-ready";

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
          { prompt: "Beach or city?", support: ["The beach.", "The city."] },
          { prompt: "By plane or by bus?", support: ["By plane.", "By bus."] },
        ],
      },

      image: `${imageRoot}/recife-vacation-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
