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
          { prompt: "What can you see where Eric works? (Name one thing.)", support: ["A desk. / A computer."] },
          { prompt: "Do you work or study?", support: ["I work. / I study."] },
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
          { prompt: "Where does Laura work, at a hotel or at a school?", support: ["At a hotel."] },
          { prompt: "Where do you work or study?", support: ["I work at a hotel. / I study at home."] },
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
          { prompt: "Is Pedro a student?", support: ["Yes, he is."] },
          { prompt: "What do you study?", support: ["I study English."] },
        ],
      },

      image: `${imageRoot}/pedro-is-a-student.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
