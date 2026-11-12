import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-6/lesson-1-getting-around/get-ready";

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
          { prompt: "Bus or train?", support: ["Train."] },
          { prompt: "How do you go to work or school?", support: ["I go by bus. / I walk."] },
        ],
      },

      image: `${imageRoot}/pedro-takes-the-train.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Is Laura on a bus or a train?", support: ["A bus."] },
          { prompt: "Do you take the bus?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/laura-goes-by-bus.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What is Eric riding?", support: ["A bike."] },
          { prompt: "Do you ride a bike?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
