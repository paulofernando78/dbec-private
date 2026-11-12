import { a1 } from "../a1";
import type { LessonStepData } from "../lesson-step-types";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

export type LessonContent = {
  level: string;
  unit: { number: number; title: string };
  lesson: { number: number; title: string };
  finalTask?: string;
  successCriteria?: readonly string[];
  celtaPlan?: {
    objective: string;
    evidence: string;
    stages: readonly {
      name: string;
      interaction: string;
      purpose: string;
    }[];
    feedbackFocus: string;
  };
  steps: readonly LessonStepData[];
  isCheckpoint?: boolean;
};

const seeds: readonly LessonSeed[] = [
  {
    unit: 1,
    lesson: 2,
    phrases: [
      "Goodbye. See you soon.",
      "What's your phone number?",
      "My email address is maria@example.com.",
      "Are you on social media?",
    ],
  },
  {
    unit: 2,
    lesson: 1,
    phrases: [
      "What's this?",
      "It's a notebook.",
      "What are these?",
      "They're keys.",
    ],
  },
  {
    unit: 2,
    lesson: 2,
    phrases: [
      "Where is the phone?",
      "It's on the desk.",
      "Is it under the chair?",
      "Yes, it is.",
    ],
  },
  {
    unit: 3,
    lesson: 1,
    phrases: [
      "Where are you from?",
      "I'm from Brazil.",
      "Are you Brazilian?",
      "Yes, I am.",
    ],
  },
  {
    unit: 3,
    lesson: 2,
    phrases: [
      "Who's that?",
      "She's my cousin.",
      "What's she like?",
      "She's tall and friendly.",
    ],
  },
  {
    unit: 4,
    lesson: 1,
    phrases: [
      "Whose jacket is this?",
      "It's Eric's.",
      "This is my jacket.",
      "The jacket is mine.",
    ],
  },
  {
    unit: 4,
    lesson: 2,
    phrases: [
      "Are you wearing a raincoat?",
      "Yes, I am.",
      "It's raining.",
      "It isn't snowing.",
    ],
  },
  {
    unit: 5,
    lesson: 1,
    phrases: [
      "What time is it?",
      "It's nine o'clock.",
      "It's seven fifteen A.M.",
      "It's noon.",
    ],
  },
  {
    unit: 5,
    lesson: 2,
    phrases: [
      "What are you doing?",
      "I'm studying English.",
      "What's Eva doing?",
      "She's sleeping.",
    ],
  },
  {
    unit: 6,
    lesson: 1,
    phrases: [
      "I take the train.",
      "She goes by bus.",
      "He rides his bike.",
      "They use the subway.",
    ],
  },
  {
    unit: 6,
    lesson: 2,
    phrases: [
      "What time do you get up?",
      "I get up at seven.",
      "Do you study every day?",
      "Yes, I do.",
    ],
  },
  {
    unit: 7,
    lesson: 1,
    phrases: [
      "Do you live in a house?",
      "No, I don't.",
      "Does it have a balcony?",
      "Yes, it does.",
    ],
  },
  {
    unit: 7,
    lesson: 2,
    phrases: [
      "There is a sofa in the living room.",
      "There are two lamps by the bed.",
      "Is there a dishwasher?",
      "Yes, there is.",
    ],
  },
  {
    unit: 8,
    lesson: 1,
    phrases: [
      "What do you do?",
      "I'm a designer.",
      "Where do you work?",
      "I work in an office.",
    ],
  },
  {
    unit: 8,
    lesson: 2,
    phrases: [
      "Being a nurse is rewarding.",
      "It's a stressful job.",
      "The hours are flexible.",
      "That sounds interesting.",
    ],
  },
  {
    unit: 9,
    lesson: 1,
    phrases: [
      "Is there any milk?",
      "Yes, there is some milk.",
      "We need a few tomatoes.",
      "I don't have any rice.",
    ],
  },
  {
    unit: 9,
    lesson: 2,
    phrases: [
      "I usually eat breakfast.",
      "She often cooks at home.",
      "We rarely order takeout.",
      "He never drinks coffee.",
    ],
  },
  {
    unit: 10,
    lesson: 1,
    phrases: [
      "What sports do you play?",
      "I play volleyball.",
      "Do you watch soccer?",
      "Yes, I watch it every weekend.",
    ],
  },
  {
    unit: 10,
    lesson: 2,
    phrases: [
      "I can play the guitar.",
      "She can dance very well.",
      "Can you draw?",
      "No, I can't.",
    ],
  },
  {
    unit: 11,
    lesson: 1,
    phrases: [
      "What are you going to do tonight?",
      "I'm going to watch a movie.",
      "Are you going to travel this weekend?",
      "No, I'm going to stay home.",
    ],
  },
  {
    unit: 11,
    lesson: 2,
    phrases: [
      "How are you going to celebrate?",
      "We're going to have a party.",
      "Who is going to come?",
      "Our friends and family are coming.",
    ],
  },
  {
    unit: 12,
    lesson: 1,
    phrases: [
      "What's wrong?",
      "I have a headache.",
      "I feel tired.",
      "My back hurts.",
    ],
  },
  {
    unit: 12,
    lesson: 2,
    phrases: [
      "Get some rest.",
      "Drink plenty of water.",
      "Take this medicine.",
      "Don't go to work today.",
    ],
  },
  {
    unit: 13,
    lesson: 1,
    phrases: [
      "Where can I buy a charger?",
      "There's an electronics store near here.",
      "It's across from the bank.",
      "The pharmacy is next to the supermarket.",
    ],
  },
  {
    unit: 13,
    lesson: 2,
    phrases: [
      "How do I get to the station?",
      "Go straight for two blocks.",
      "Turn left at the corner.",
      "It's on your right.",
    ],
  },
  {
    unit: 14,
    lesson: 1,
    phrases: [
      "What did you do last weekend?",
      "I visited my grandparents.",
      "We went to a concert.",
      "I stayed home and relaxed.",
    ],
  },
  {
    unit: 14,
    lesson: 2,
    phrases: [
      "Did you enjoy your vacation?",
      "Yes, I did.",
      "Where did you stay?",
      "We stayed at a small hotel.",
    ],
  },
  {
    unit: 15,
    lesson: 1,
    phrases: [
      "Where were you born?",
      "I was born in Recife.",
      "My grandparents were farmers.",
      "We were a big family.",
    ],
  },
  {
    unit: 15,
    lesson: 2,
    phrases: [
      "What was your favorite subject?",
      "I loved history.",
      "Did you like your teachers?",
      "Yes, they were very kind.",
    ],
  },
  {
    unit: 16,
    lesson: 1,
    phrases: [
      "Can I speak to Julia, please?",
      "She's not here right now.",
      "Can I leave her a message?",
      "Please ask her to call me.",
    ],
  },
  {
    unit: 16,
    lesson: 2,
    phrases: [
      "Would you like to come to my party?",
      "I'd love to.",
      "Do you want to have dinner on Friday?",
      "Sorry, I can't make it.",
    ],
  },
];

const ccqs: Record<
  string,
  readonly { context?: string; question: string; answer: string }[]
> = {
  "1/2": [
    {
      context: "Goodbye. See you soon.",
      question: "Start or end?",
      answer: "End",
    },
    {
      context: "What’s your phone number?",
      question: "Name or number?",
      answer: "Number",
    },
  ],
  "2/1": [
    { context: "this", question: "One or more than one?", answer: "One" },
    {
      context: "these",
      question: "One or more than one?",
      answer: "More than one",
    },
  ],
  "2/2": [
    { context: "on the desk", question: "On top or below?", answer: "On top" },
    {
      context: "under the chair",
      question: "Above or below?",
      answer: "Below",
    },
  ],
  "3/1": [
    { context: "I’m from Brazil.", question: "Country?", answer: "Brazil" },
    {
      context: "I’m Brazilian.",
      question: "Country or nationality?",
      answer: "Nationality",
    },
  ],
  "3/2": [
    {
      context: "What’s she like?",
      question: "Name or description?",
      answer: "Description",
    },
    {
      context: "How old is he?",
      question: "Appearance or age?",
      answer: "Age",
    },
  ],
  "4/1": [
    {
      context: "It’s mine.",
      question: "My jacket or another person’s jacket?",
      answer: "My jacket",
    },
    { context: "It’s Eric’s.", question: "Owner?", answer: "Eric" },
  ],
  "4/2": [
    {
      context: "It’s cold and windy.",
      question: "Weather now or yesterday?",
      answer: "Now",
    },
    {
      context: "I’m wearing a coat.",
      question: "Now or every day?",
      answer: "Now",
    },
  ],
  "5/1": [
    {
      context: "What time is it?",
      question: "Time now or yesterday?",
      answer: "Now",
    },
    {
      context: "Tokyo: 9 p.m.",
      question: "Morning or evening?",
      answer: "Evening",
    },
  ],
  "5/2": [
    {
      context: "They’re having lunch.",
      question: "Now or every day?",
      answer: "Now",
    },
    {
      context: "He’s taking a break.",
      question: "Working or not working now?",
      answer: "Not working",
    },
  ],
  "6/1": [
    { context: "I take the bus.", question: "Transport?", answer: "Bus" },
    { context: "My sister drives.", question: "Bus or car?", answer: "Car" },
  ],
  "6/2": [
    {
      context: "I get up at seven every day.",
      question: "One time or routine?",
      answer: "Routine",
    },
    {
      context: "every day",
      question: "One day or all days?",
      answer: "All days",
    },
  ],
  "7/1": [
    {
      context: "I live in an apartment.",
      question: "House or apartment?",
      answer: "Apartment",
    },
    {
      context: "There are two bedrooms.",
      question: "One or two?",
      answer: "Two",
    },
  ],
  "7/2": [
    {
      context: "There is a sofa.",
      question: "One or more than one?",
      answer: "One",
    },
    {
      context: "There are two lamps.",
      question: "One or more than one?",
      answer: "More than one",
    },
  ],
  "8/1": [
    { context: "What do you do?", question: "Job or name?", answer: "Job" },
    {
      context: "I work in an office.",
      question: "Workplace?",
      answer: "Office",
    },
  ],
  "8/2": [
    {
      context: "Being a nurse is rewarding.",
      question: "Positive or negative?",
      answer: "Positive",
    },
    {
      context: "It’s stressful.",
      question: "Relaxed or under pressure?",
      answer: "Under pressure",
    },
  ],
  "9/1": [
    {
      context: "There is some milk.",
      question: "Milk available?",
      answer: "Yes",
    },
    {
      context: "I don’t have any rice.",
      question: "Rice available?",
      answer: "No",
    },
  ],
  "9/2": [
    {
      context: "usually",
      question: "Most days or zero days?",
      answer: "Most days",
    },
    {
      context: "never",
      question: "Some days or zero days?",
      answer: "Zero days",
    },
  ],
  "10/1": [
    {
      context: "I play volleyball.",
      question: "Play or watch?",
      answer: "Play",
    },
    {
      context: "I watch soccer every weekend.",
      question: "Play or watch?",
      answer: "Watch",
    },
  ],
  "10/2": [
    {
      context: "I can play the guitar.",
      question: "Ability: yes or no?",
      answer: "Yes",
    },
    { context: "I can’t draw.", question: "Ability: yes or no?", answer: "No" },
  ],
  "11/1": [
    {
      context: "I’m going to watch a movie tonight.",
      question: "Past, now, or future?",
      answer: "Future",
    },
    {
      context: "I’m going to watch a movie.",
      question: "Plan or surprise?",
      answer: "Plan",
    },
  ],
  "11/2": [
    {
      context: "We’re going to have a party.",
      question: "Past or future?",
      answer: "Future",
    },
    {
      context: "Friends and family are coming.",
      question: "Guests?",
      answer: "Friends and family",
    },
  ],
  "12/1": [
    {
      context: "I have a headache.",
      question: "Well or sick?",
      answer: "Sick",
    },
    { context: "a headache", question: "Head or back?", answer: "Head" },
  ],
  "12/2": [
    {
      context: "Get some rest.",
      question: "Problem or advice?",
      answer: "Advice",
    },
    {
      context: "Don’t go to work.",
      question: "Go or stay home?",
      answer: "Stay home",
    },
  ],
  "13/1": [
    {
      context: "a charger",
      question: "Electronics store or pharmacy?",
      answer: "Electronics store",
    },
    {
      context: "The pharmacy is next to the supermarket.",
      question: "Near or far?",
      answer: "Near",
    },
  ],
  "13/2": [
    {
      context: "Go straight.",
      question: "Forward or back?",
      answer: "Forward",
    },
    { context: "Turn left.", question: "Left or right?", answer: "Left" },
  ],
  "14/1": [
    {
      context: "I visited my grandparents last weekend.",
      question: "Past or future?",
      answer: "Past",
    },
    {
      context: "last weekend",
      question: "Finished or not finished?",
      answer: "Finished",
    },
  ],
  "14/2": [
    {
      context: "Did you enjoy your vacation?",
      question: "Vacation: finished or future?",
      answer: "Finished",
    },
    { context: "a small hotel", question: "Small or large?", answer: "Small" },
  ],
  "15/1": [
    {
      context: "I was born in Recife.",
      question: "Birthplace?",
      answer: "Recife",
    },
    {
      context: "My grandparents were farmers.",
      question: "Past or present?",
      answer: "Past",
    },
  ],
  "15/2": [
    {
      context: "My favorite subject was history.",
      question: "Past or present?",
      answer: "Past",
    },
    {
      context: "The teachers were kind.",
      question: "Kind or unkind?",
      answer: "Kind",
    },
  ],
  "16/1": [
    {
      context: "She’s not here right now.",
      question: "Julia available now?",
      answer: "No",
    },
    {
      context: "Please ask her to call me.",
      question: "Call now or later?",
      answer: "Later",
    },
  ],
  "16/2": [
    {
      context: "Would you like to come to my party?",
      question: "Invitation or information?",
      answer: "Invitation",
    },
    {
      context: "Sorry, I can’t make it.",
      question: "Accept or decline?",
      answer: "Decline",
    },
  ],
};

const words = (sentence: string) => sentence.split(" ");

const finalTasks: Record<string, string> = {
  "1/2": "Exchange phone numbers and email addresses, then say goodbye politely.",
  "2/1": "Ask a partner about three objects and identify each one as singular or plural.",
  "2/2": "Ask where three objects are and place them correctly in a simple room scene.",
  "3/1": "Interview a partner about their country, nationality, and language, then report one detail.",
  "3/2": "Identify two people in a picture and describe their appearance and personality.",
  "4/1": "Choose clothes for two situations and explain whose items they are.",
  "4/2": "Look at a weather scene and describe the weather and what two people are wearing.",
  "5/1": "Ask a partner what time it is in two cities and record the answers.",
  "5/2": "Ask what two people are doing now and report their activities.",
  "6/1": "Interview a partner about how they travel and report two regular transportation habits.",
  "6/2": "Ask a partner about their daily routine and record three times and activities.",
  "7/1": "Ask and answer questions about a home, then identify two rooms or features.",
  "7/2": "Describe a dream room using there is/there are and at least four items.",
  "8/1": "Ask a partner what they do and where they work, then introduce them.",
  "8/2": "Compare two jobs and state which one sounds more interesting and why.",
  "9/1": "Plan a simple shopping list and ask what food is available or needed.",
  "9/2": "Interview a partner about eating habits and report two frequency patterns.",
  "10/1": "Ask a partner about sports they watch or play and find one shared interest.",
  "10/2": "Find out which skills two partners have and identify one skill to practise.",
  "11/1": "Ask a partner about weekend plans and find one plan you could do together.",
  "11/2": "Plan a small celebration and agree on the event, people, and activity.",
  "12/1": "Ask about a person's symptoms and identify the main health problem.",
  "12/2": "Give three simple pieces of advice for a common health problem.",
  "13/1": "Ask where to buy two items and identify their locations in a town map.",
  "13/2": "Give directions from one place to another using at least three steps.",
  "14/1": "Tell a partner about two things you did last weekend.",
  "14/2": "Ask a partner about a past vacation and report where they went and what they did.",
  "15/1": "Ask a partner about family history and report two past facts.",
  "15/2": "Ask about a school memory and report who, where, and what happened.",
  "16/1": "Make a short phone call and leave a clear message for someone who is unavailable.",
  "16/2": "Invite a partner to an event, respond to the invitation, and agree on the details.",
};

const ccqPairs: Record<string, readonly string[]> = {
  End: ["Start", "End"],
  Number: ["Name", "Number"],
  One: ["One", "More than one"],
  "More than one": ["One", "More than one"],
  "On top": ["On top", "Below"],
  Below: ["Above", "Below"],
  Brazil: ["Brazil", "Mexico"],
  Nationality: ["Country", "Nationality"],
  Appearance: ["Appearance", "Age"],
  Description: ["Name", "Description"],
  Age: ["Appearance", "Age"],
  "My jacket": ["My jacket", "Another person’s jacket"],
  "A woman’s scarf": ["A woman’s scarf", "A man’s scarf"],
  Eric: ["Eric", "Laura"],
  Now: ["Now", "Yesterday"],
  Evening: ["Morning", "Evening"],
  "Not working": ["Working", "Not working"],
  Bus: ["Bus", "Car"],
  Car: ["Bus", "Car"],
  Routine: ["One time", "Routine"],
  "All days": ["One day", "All days"],
  Apartment: ["House", "Apartment"],
  Two: ["One", "Two"],
  Job: ["Job", "Name"],
  Office: ["Office", "Home"],
  Positive: ["Positive", "Negative"],
  "Under pressure": ["Relaxed", "Under pressure"],
  "Most days": ["Most days", "Zero days"],
  "Zero days": ["Some days", "Zero days"],
  Play: ["Play", "Watch"],
  Watch: ["Play", "Watch"],
  Future: ["Past", "Now", "Future"],
  Plan: ["Plan", "Surprise"],
  "Friends and family": ["Friends and family", "Nobody"],
  Sick: ["Well", "Sick"],
  Head: ["Head", "Back"],
  Advice: ["Problem", "Advice"],
  "Stay home": ["Go", "Stay home"],
  "Electronics store": ["Electronics store", "Pharmacy"],
  Near: ["Near", "Far"],
  Forward: ["Forward", "Back"],
  Left: ["Left", "Right"],
  Past: ["Past", "Present"],
  Finished: ["Finished", "Not finished"],
  Small: ["Small", "Large"],
  Recife: ["Recife", "Rio"],
  Kind: ["Kind", "Unkind"],
  Later: ["Now", "Later"],
  Invitation: ["Invitation", "Information"],
  Decline: ["Accept", "Decline"],
};

const ccqOptions = (answer: string) => {
  const plainAnswer = answer.replace(/\.$/, "");
  if (plainAnswer === "Yes") return ["Yes", "No"];
  if (plainAnswer === "No") return ["Yes", "No"];
  if (plainAnswer === "We don't know") return ["Yes", "No", "We don't know"];
  const options = ccqPairs[plainAnswer];
  if (!options)
    throw new Error(`Missing planned CCQ options for: ${plainAnswer}`);
  return options;
};

const createLesson = ({
  unit,
  lesson,
  phrases,
}: LessonSeed): LessonContent => {
  const unitData = a1.units[unit - 1];
  const lessonData = unitData.lessons[lesson - 1];
  const lessonObjective = lessonData.description.replace(
    /^By the end of this lesson, students will be (?:better )?able to /,
    "",
  );
  const finalTask = finalTasks[`${unit}/${lesson}`] ?? `Complete a short exchange about ${lessonData.title.toLowerCase()} and communicate one clear result.`;
  const steps: readonly LessonStepData[] = [
    {
      type: "get-ready",
      slug: "get-ready",
      label: "Get ready",
      slides: [
        {
          image: "",
          audio: false,
          quote: "",
        },
      ],
    },
    {
      type: "listen",
      slug: "listen",
      label: "Listen",
      instruction: `Listen to a short conversation about ${lessonData.title.toLowerCase()}.`,
      audio: "",
      dialogue: phrases.map(
        (line, index) => [index % 2 === 0 ? "A" : "B", [line]] as const,
      ),
      questionInstruction: "Choose the correct answer.",
      question: `The speakers are talking about ${lessonData.title.toLowerCase()}.`,
      options: ["True", "False"],
      answer: "True",
      followUpInstruction: "Answer the open questions.",
      followUp: [
        { question: `Which expression from the audio helps you start the ${lessonData.title.toLowerCase()} task?`, answer: phrases[0] },
        { question: `Which response gives useful information for ${lessonData.title.toLowerCase()}?`, answer: phrases[1] },
        { question: `Which second expression can you reuse in the ${lessonData.title.toLowerCase()} task?`, answer: phrases[2] },
        { question: `Which final response completes the exchange about ${lessonData.title.toLowerCase()}?`, answer: phrases[3] },
      ],
    },
    {
      type: "language-focus",
      slug: "language-focus",
      label: "Language focus",
      instruction: lessonObjective,
      items: phrases.map(
        (phrase) =>
          [
            phrase,
            `Use this expression to communicate about ${lessonData.title.toLowerCase()}.`,
            "Stress the key content word and say the phrase in one clear chunk.",
            "Notice the word order and replace the changing detail in the model.",
            undefined,
            undefined,
          ] as const,
      ),
    },
    {
      type: "concept-check",
      slug: "check-meaning",
      label: "Check meaning",
      instruction: "Check the meaning. Choose the answer that matches the situation, not only the words.",
      questions: (ccqs[`${unit}/${lesson}`] ?? []).map(
        ({ context, question, answer }) => ({
          context,
          question,
          options: ccqOptions(answer),
          answer: answer.replace(/\.$/, ""),
        }),
      ),
    },
    {
      type: "try-it",
      slug: "try-it",
      label: "Try it",
      instruction: "Put the words in order, say the sentence aloud, and change one detail using the model.",
      items: phrases.map((phrase) => {
        const answer = words(phrase);
        return { words: [...answer].reverse(), answer };
      }),
    },
    {
      type: "use-it",
      slug: "use-it",
      label: "Use it",
      instruction: finalTask,
      prompts: [
        "Read the model once and identify the information you need to exchange.",
        `Complete this task: ${finalTask}`,
        "Change roles and check that your partner understood the result.",
        "Repeat without the model and improve one unclear expression.",
      ],
      model: phrases.map(
        (line, index) => [index % 2 === 0 ? "A" : "B", line] as const,
      ),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Your progress",
      instruction:
        "Complete the mini-task without the model. Check each expression you use.",
      checks: [...phrases],
    },
  ];

  return {
    level: "a1",
    unit: { number: unitData.number, title: unitData.title },
    lesson: { number: lesson, title: lessonData.title },
    finalTask,
    successCriteria: [
      "uses at least two target expressions",
      "responds to the partner's meaning",
      "communicates the intended result clearly",
    ],
    celtaPlan: {
      objective: finalTask,
      evidence: "The learner completes the task and communicates the result to a partner.",
      stages: [
        { name: "Context", interaction: "pairs", purpose: "Activate the situation and essential vocabulary." },
        { name: "Input", interaction: "individual, then pairs", purpose: "Listen for gist and useful details." },
        { name: "Language focus", interaction: "teacher-class, then individual", purpose: "Notice meaning, form, and pronunciation." },
        { name: "Controlled practice", interaction: "individual", purpose: "Build accurate target-language sentences." },
        { name: "Communicative task", interaction: "pairs", purpose: "Complete the final task with a real information gap." },
        { name: "Feedback and retry", interaction: "teacher-class, then pairs", purpose: "Address one priority issue and repeat the task." },
      ],
      feedbackFocus: "Prioritize intelligibility and the language needed to complete the task.",
    },
    steps,
  };
};

export const a1SkeletonLessons = Object.fromEntries(
  seeds.map((seed) => [`${seed.unit}/${seed.lesson}`, createLesson(seed)]),
) as Record<string, LessonContent>;
