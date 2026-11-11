import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-3/lesson-1-where-are-you-from/get-ready";

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
          { prompt: "Where might the people at this event come from?", support: ["They might be from ... because ..."] },
          { prompt: "What language could you ask someone about at an international event?", support: ["I could ask, “Do you speak ...?”"] },
        ],
      },

      image: `${imageRoot}/international-event.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Where might the people at this event come from?", support: ["They might be from ... because ..."] },
          { prompt: "What language could you ask someone about at an international event?", support: ["I could ask, “Do you speak ...?”"] },
        ],
      },

      image: `${imageRoot}/laura-pedro-eric-naomi-clean-shaven.avif?v=3`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Where might the people at this event come from?", support: ["They might be from ... because ..."] },
          { prompt: "What language could you ask someone about at an international event?", support: ["I could ask, “Do you speak ...?”"] },
        ],
      },

      image: `${imageRoot}/brazilian-participant.avif?v=3`,
      },
  ],
} satisfies GetReadyData;
