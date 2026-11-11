import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-6/lesson-2-every-day/get-ready";

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
          { prompt: "What daily activity is the person doing?", support: ["They are ..."] },
          { prompt: "When do you usually do this activity?", support: ["I usually ... in the ..."] },
        ],
      },

      image: `${imageRoot}/pedro-gets-up-at-seven.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What daily activity is the person doing?", support: ["They are ..."] },
          { prompt: "When do you usually do this activity?", support: ["I usually ... in the ..."] },
        ],
      },

      image: `${imageRoot}/laura-eats-breakfast.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What daily activity is the person doing?", support: ["They are ..."] },
          { prompt: "When do you usually do this activity?", support: ["I usually ... in the ..."] },
        ],
      },

      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
