import type { GetReadyData } from "../../../lesson-step-types";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: "/media/images/course/a2/unit-4/lesson-1-what-do-you-watch/get-ready/lead-in.avif?v=1",
      audio: false,
      quote: "",
      questions: [
        { prompt: "What do you notice in the picture?", support: ["I can see ..."] },
        { prompt: "What do you think is happening?", support: ["I think ..."] },
      ],
    },
  ],
} satisfies GetReadyData;
