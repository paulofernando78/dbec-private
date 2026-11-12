import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-7/lesson-1-home-tour/get-ready";

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
          { prompt: "Is this a house or an apartment?", support: ["An apartment."] },
          { prompt: "Do you live in an apartment?", support: ["Yes, I do. / No, I don't."] },
        ],
      },

      image: `${imageRoot}/laura-lives-in-an-apartment.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Can you see a balcony? (Point.)", support: ["Yes, here."] },
          { prompt: "Does your home have a balcony?", support: ["Yes, it does. / No, it doesn't."] },
        ],
      },

      image: `${imageRoot}/pedro-has-a-balcony.avif?v=1`,
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "What room can you see? (Name one.)", support: ["A living room."] },
          { prompt: "Does your home have a living room?", support: ["Yes, it does. / No, it doesn't."] },
        ],
      },

      image: `${imageRoot}/naomi-shows-her-apartment.avif?v=1`,
      },
  ],
} satisfies GetReadyData;
