export const thingsAroundUsListening = {
  title: "What’s in the Box? & Where Are My Keys?",
  dialogues: [
    {
      title: "What’s in the Box?",
      lines: [
        { speaker: "Mia", text: "What's this?" },
        { speaker: "Noah", text: "It's a notebook." },
        { speaker: "Mia", text: "And what are these?" },
        { speaker: "Noah", text: "They're pencils. There are three." },
        { speaker: "Mia", text: "Are those pens?" },
        { speaker: "Noah", text: "No, they're markers. They're for the whiteboard." },
      ],
      questions: [
        { question: "What is the first object?", choices: ["A notebook", "A marker", "A pen"], correct: 0 },
        { question: "How many pencils are there?", choices: ["Two", "Three", "Four"], correct: 1 },
      ],
    },
    {
      title: "Where Are My Keys?",
      lines: [
        { speaker: "Lena", text: "Where are my keys? Are they on the table?" },
        { speaker: "Owen", text: "Let me look. No, they aren't on the table." },
        { speaker: "Lena", text: "Are they in my bag?" },
        { speaker: "Owen", text: "No. Look, they're under your notebook." },
        { speaker: "Lena", text: "The blue notebook next to the door?" },
        { speaker: "Owen", text: "Yes, that one." },
      ],
      questions: [
        { question: "Where does Owen look first?", choices: ["In the bag", "Under the notebook", "On the table"], correct: 2 },
        { question: "Where are Lena's keys?", choices: ["Under the notebook", "In her bag", "On the table"], correct: 0 },
      ],
    },
  ],
};
