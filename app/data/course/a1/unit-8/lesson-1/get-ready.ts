import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-8/lesson-1-at-work/get-ready";

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
          { prompt: "What jobs do the people do?", support: ["The person is a ..."] },
          { prompt: "Where does each person work?", support: ["They work at/in ..."] },
        ],
      },

      image: `${imageRoot}/eric-is-a-designer.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What jobs do the people do?", support: ["The person is a ..."] },
          { prompt: "Where does each person work?", support: ["They work at/in ..."] },
        ],
      },

      image: `${imageRoot}/laura-works-at-a-hotel.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What jobs do the people do?", support: ["The person is a ..."] },
          { prompt: "Where does each person work?", support: ["They work at/in ..."] },
        ],
      },

      image: `${imageRoot}/pedro-is-a-student.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
