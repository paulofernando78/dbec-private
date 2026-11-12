import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-14/lesson-1-last-weekend/get-ready";

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
          { prompt: "Are they at home or at a picnic?", support: ["At a picnic."] },
          { prompt: "What did you do last weekend? (Choose an example or give your own answer.)", support: ["I watched TV. / I cooked."] },
        ],
      },

      image: `${imageRoot}/weekend-picnic-discussion.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
