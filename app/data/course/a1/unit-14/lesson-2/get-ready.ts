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
          { prompt: "Is this a vacation or a day at work?", support: ["A vacation."] },
          { prompt: "Did you go on vacation last year?", support: ["Yes, I did. / No, I didn't."] },
        ],
      },

      image: `${imageRoot}/recife-vacation-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
