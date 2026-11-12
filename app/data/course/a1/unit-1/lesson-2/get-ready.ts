import type { GetReadyData } from "../../../lesson-step-types";

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
          { prompt: "What's your name?", support: ["I'm Ana."] },
          { prompt: "Phone number or email?", support: ["Phone number."] },
        ],
      },

      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/phone-number.avif?v=1",
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Phone number or email?", support: ["Phone number."] },
          { prompt: "What's your phone number? (Use a pretend number.)", support: ["It's 555-0132."] },
        ],
      },

      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/contact-exchange.avif?v=1",
      },
    {
      audio: false,
      quote: "",
      discuss: {
        interaction: ["pairs", "teacher-class"],
        questions: [
          { prompt: "Hello or goodbye?", support: ["Goodbye!"] },
          { prompt: "Can you say goodbye to your partner?", support: ["Bye! See you!"] },
        ],
      },

      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/goodbye.avif?v=1",
      },
  ],
} satisfies GetReadyData;
