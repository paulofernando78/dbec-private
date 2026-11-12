import type { ListenData } from "../../../lesson-step-types";
import { bold, mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction:
    "Listen to Laura and Eric.",
  image: "/media/images/course/a1/unit-1/lesson-1-hello/listen/meeting.avif?v=4",
  imageAlt: "Laura and Eric greeting each other with a handshake",
  audio: "/media/audio/course/a1/unit-1/lesson-1-hello/listen/listen.mp3",
  dialogue: [
    ["Laura",[mark("Hello. My name is"), " Laura Palmer. ", mark("What's your name?")]],
    ["Eric", [mark("Hi. My name is"), " Eric Silva."]],
    ["Laura", [mark("It’s nice to meet you, Eric.")]],
    ["Eric", [mark("Nice to meet you, too."), " I’m sorry. What’s your last name again?"]],
    ["Laura", ["It’s Palmer."]],
    ["Eric", [mark("How do you spell it?")]],
    ["Laura", ["It’s ", mark("P-A-L-M-E-R"), ". And your first name is spelled with K?"]],
    ["Eric", ["No, it’s with C."]],
    ["", [bold("...")]],
    ["Laura", ["Who is that man? What’s his name?"]],
    ["Eric", ["His name’s Tony. He’s the manager."]],
    ["Laura", ["And who is that woman? What’s her name?"]],
    ["Eric", ["Her name’s Naomi. She’s the receptionist."]],
  ],
  questionInstruction: "Choose the pair who are meeting.",
  question: "The first meeting:",
  options: ["Laura and Eric", "Tony and Naomi", "Laura and Tony"],
  answer: "Laura and Eric",
  followUpInstruction: "Listen again. Answer with one name.",
  followUp: [
    {
      question: "Man’s name:",
      answer: "Eric.",
    },
    {
      question: "Woman’s name:",
      answer: "Laura.",
    },
  ],
} satisfies ListenData;
