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
          { prompt: "Which contact detail would help them stay in touch?", support: ["They could share their ..."] },
          { prompt: "Would you contact this person by phone call or message? Why?", support: ["I would ... because ..."] },
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
          { prompt: "Which contact detail would help them stay in touch?", support: ["They could share their ..."] },
          { prompt: "Would you contact this person by phone call or message? Why?", support: ["I would ... because ..."] },
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
          { prompt: "Which contact detail would help them stay in touch?", support: ["They could share their ..."] },
          { prompt: "Would you contact this person by phone call or message? Why?", support: ["I would ... because ..."] },
        ],
      },

      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/goodbye.avif?v=1",
      },
  ],
} satisfies GetReadyData;
