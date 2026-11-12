import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-9/lesson-2-eating-habits/get-ready";

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
          { prompt: "What meal is Laura having?", support: ["Breakfast."] },
          { prompt: "What do you eat for breakfast?", support: ["I eat bread. / I eat fruit."] },
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
          { prompt: "Is Pedro cooking at home?", support: ["Yes, he is."] },
          { prompt: "Do you cook at home every day?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/pedro-cooks-at-home.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Is Eric drinking tea or milk?", support: ["Tea."] },
          { prompt: "When do you drink tea?", support: ["In the morning. / I don't drink tea."] },
        ],
      },

      image: `${imageRoot}/eric-drinks-tea.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
