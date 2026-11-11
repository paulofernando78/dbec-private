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
          { prompt: "Designer, hotel worker, or student?", support: ["A designer.", "A hotel worker.", "A student."] },
          { prompt: "Office, hotel, or school?", support: ["An office.", "A hotel.", "A school."] },
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
          { prompt: "Office, hotel, or school?", support: ["An office.", "A hotel.", "A school."] },
          { prompt: "Designer, hotel worker, or student?", support: ["A designer.", "A hotel worker.", "A student."] },
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
          { prompt: "Designer, hotel worker, or student?", support: ["A designer.", "A hotel worker.", "A student."] },
          { prompt: "Office, hotel, or school?", support: ["An office.", "A hotel.", "A school."] },
        ],
      },

      image: `${imageRoot}/pedro-is-a-student.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
