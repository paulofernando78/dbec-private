import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-10/lesson-1-game-day/get-ready";

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
          { prompt: "Is Pedro playing volleyball or tennis?", support: ["Volleyball."] },
          { prompt: "What sport do you play?", support: ["I play volleyball. / I don't play sports."] },
        ],
      },

      image: `${imageRoot}/pedro-plays-volleyball.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What sport is Naomi playing?", support: ["Tennis."] },
          { prompt: "Do you play tennis?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/naomi-plays-tennis.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What sport is Eric watching?", support: ["Soccer."] },
          { prompt: "What sport do you watch?", support: ["I watch soccer. / I don't watch sports."] },
        ],
      },

      image: `${imageRoot}/eric-watches-soccer.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
