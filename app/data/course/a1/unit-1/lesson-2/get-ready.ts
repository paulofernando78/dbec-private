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
          { prompt: "Phone number or email?", support: ["Phone number.", "Email."] },
          { prompt: "Phone call or message?", support: ["A phone call.", "A message."] },
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
          { prompt: "Phone call or message?", support: ["A phone call.", "A message."] },
          { prompt: "Phone number or email?", support: ["Phone number.", "Email."] },
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
          { prompt: "Phone number or email?", support: ["Phone number.", "Email."] },
          { prompt: "Phone call or message?", support: ["A phone call.", "A message."] },
        ],
      },

      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/goodbye.avif?v=1",
      },
  ],
} satisfies GetReadyData;
