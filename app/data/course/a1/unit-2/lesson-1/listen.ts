import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to Tony show Pedro around his desk. Where are the objects?",
  image: "/media/images/course/a1/unit-2/lesson-1-whats-this/listen/desk-objects.avif?v=5",
  imageAlt: "",
  audio: "/media/audio/course/a1/unit-2/lesson-1-whats-this/listen/listen.mp3",
  dialogue: [
    ["Tony", ["Welcome, Pedro. We're ", mark("in"), " the office. This is your desk."]],
    ["Pedro", ["Thanks! Is this laptop ", mark("on"), " the desk?"]],
    ["Tony", ["Yes. The laptop is ", mark("on"), " the desk, and the adapter is ", mark("next to"), " it."]],
    ["Pedro", ["And the notebooks? Are they new?"]],
    ["Tony", ["Yes. And look: the blue headset is ", mark("in front of"), " the laptop."]],
    ["Pedro", ["And the chair?"]],
    ["Tony", ["It's ", mark("under"), " the desk. The plants are ", mark("behind"), " it."]],
    ["Pedro", ["Great. And the keys are ", mark("on"), " the desk, ", mark("in front of"), " the notebooks."]],
    ["Tony", ["That's right. Your things are all here."]],
    ["Pedro", ["Thank you!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where is the blue headset?",
  options: ["In front of the laptop", "Behind the desk", "Under the chair"],
  answer: "In front of the laptop",
  followUpInstruction: "Listen again. Where are the objects?",
  followUp: [
    {
      question: "Where is the laptop?",
      answer: "On the desk.",
    },
    {
      question: "Where is the adapter?",
      answer: "Next to the laptop.",
    },
    {
      question: "What is in front of the laptop?",
      answer: "The blue headset.",
    },
    {
      question: "Where is the chair?",
      answer: "Under the desk.",
    },
  ],
} satisfies ListenData;
