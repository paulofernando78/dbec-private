import { b2 } from "../b2";
import type { LessonContent } from "../a1/skeleton-lessons";
import type { ConceptCheckData, LessonStepData } from "../lesson-step-types";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

const seeds: readonly LessonSeed[] = [
  { unit: 1, lesson: 1, phrases: ["She's remarkably open-minded and tends to bring out the best in people.", "I've always enjoyed working with people who challenge my assumptions.", "He used to be rather reserved, but he's become far more assertive.", "I'd like to stop overthinking decisions and trust my instincts more."] },
  { unit: 1, lesson: 2, phrases: ["What sets my family apart is how openly we discuss disagreements.", "One similarity is that both households place a high value on independence.", "The main advantage of a close-knit family is having a reliable support system.", "What can be challenging is balancing family expectations with individual goals."] },
  { unit: 2, lesson: 1, phrases: ["We were supposed to back up the files, but nobody followed the procedure.", "I should have spoken up instead of assuming someone else would handle it.", "The team had to comply with rules that weren't clearly explained.", "Looking back, we ought to have addressed the underlying problem much sooner."] },
  { unit: 2, lesson: 2, phrases: ["The lights might have been caused by a military aircraft.", "Some witnesses believe the evidence was deliberately concealed.", "There must be a logical explanation, even if we haven't found it yet.", "The object could have been mistaken for something unusual because of the weather."] },
  { unit: 3, lesson: 1, phrases: ["Lisbon, which is known for its hills, offers a fascinating mix of tradition and innovation.", "It's a city whose neighborhoods each have a distinct character.", "The riverside district is where many cultural events are held.", "What appeals to me most is the way historic spaces have been reimagined."] },
  { unit: 3, lesson: 2, phrases: ["It's a well-connected coastal city with remarkably affordable public services.", "Although the housing market is competitive, overall living costs remain manageable.", "The city is considerably greener than its industrial reputation suggests.", "On the other hand, employment opportunities are somewhat limited outside the center."] },
  { unit: 4, lesson: 1, phrases: ["Once fully awake, I try to deal with demanding tasks before checking messages.", "Whenever feeling overwhelmed, I step away briefly rather than work less effectively.", "Cutting back on caffeine has helped me wind down more easily at night.", "Before going to bed, avoid anything likely to keep your mind alert."] },
  { unit: 4, lesson: 2, phrases: ["I tend to sleep poorly unless I've exercised during the day.", "Because stress interferes with deep sleep, a regular routine can make a difference.", "Provided that I avoid screens late at night, I usually fall asleep quickly.", "Recurring dreams may reflect concerns that haven't been fully acknowledged."] },
  { unit: 5, lesson: 1, phrases: ["Approaching someone new can feel awkward, but commenting on the situation often works.", "Showing genuine curiosity is more effective than trying to sound impressive.", "To keep a conversation going, build on something the other person has mentioned.", "Avoid asking overly personal questions until a sense of trust has developed."] },
  { unit: 5, lesson: 2, phrases: ["She admitted that she had underestimated how complicated the issue was.", "He mentioned having raised the concern several times before.", "They warned us not to disclose the information until the announcement was official.", "According to Maya, the negotiations had been progressing more smoothly than expected."] },
  { unit: 6, lesson: 1, phrases: ["The investigation began last month, but several key findings have only just emerged.", "Officials initially denied the report before confirming its main conclusions yesterday.", "Since the story broke, independent experts have questioned the available evidence.", "The latest update has clarified the timeline without resolving the central dispute."] },
  { unit: 6, lesson: 2, phrases: ["I'd been trying to solve the problem for hours when I noticed one tiny detail.", "By then, everyone else had left and the building was almost completely dark.", "Unexpectedly, the alarm went off just as I was opening the final door.", "In the end, what had seemed disastrous turned into a story we still laugh about."] },
  { unit: 7, lesson: 1, phrases: ["Artificial intelligence is being integrated into services that were once entirely human-led.", "Vast amounts of personal data have been collected without meaningful public oversight.", "Routine tasks will increasingly be automated, while new forms of work will be created.", "More transparent standards are expected to be introduced over the next few years."] },
  { unit: 7, lesson: 2, phrases: ["Isn't constant connectivity making sustained concentration more difficult?", "Social platforms encourage participation; nevertheless, they can amplify unreliable claims.", "We have access to more information than ever, don't we?", "Moreover, the pressure to respond immediately can undermine thoughtful communication."] },
  { unit: 8, lesson: 1, phrases: ["People driven by curiosity often notice possibilities overlooked by others.", "A designer working across disciplines can combine ideas in unexpected ways.", "The candidates selected for the program demonstrated both persistence and imagination.", "Creative work requires technical ability as well as a willingness to tolerate uncertainty."] },
  { unit: 8, lesson: 2, phrases: ["The device reduces water waste, which makes it particularly valuable in dry regions.", "The team came up with a low-cost solution to a long-standing distribution problem.", "The printing press transformed access to knowledge, which reshaped entire societies.", "Successful products often emerge when developers redefine the problem rather than refine an old answer."] },
  { unit: 9, lesson: 1, phrases: ["Although punctuality is highly valued, arrival times are interpreted more flexibly in some contexts.", "People tend to avoid direct disagreement, whereas close friends may speak quite openly.", "Apart from formal occasions, dress codes are generally becoming less restrictive.", "Even though customs differ, showing consideration is almost universally appreciated."] },
  { unit: 9, lesson: 2, phrases: ["I used to resist unfamiliar situations, but repeated changes taught me to stay flexible.", "Whenever setbacks occurred, she would keep focused on what she could control.", "Maintaining familiar routines can help, provided they don't prevent you from adapting.", "The key is to stay connected while allowing yourself enough time to adjust."] },
  { unit: 10, lesson: 1, phrases: ["What drives me absolutely mad is being transferred repeatedly without an explanation.", "I get frustrated when companies make it difficult to speak to an actual person.", "People who complain calmly are often taken more seriously than those who become aggressive.", "The fact that the issue keeps recurring makes the lack of action especially irritating."] },
  { unit: 10, lesson: 2, phrases: ["Could you clarify why the additional charge wasn't disclosed in advance?", "I'd appreciate it if you could explain how you intend to resolve this.", "What would prevent the same problem from occurring again?", "We can issue a refund immediately and review the procedure with our staff."] },
  { unit: 11, lesson: 1, phrases: ["Even if nobody discovered the truth, I wouldn't take credit for someone else's work.", "I would only disclose the information if remaining silent put someone at risk.", "Unless the evidence were convincing, I'd avoid making a public accusation.", "A responsible decision may still have negative consequences for the person making it."] },
  { unit: 11, lesson: 2, phrases: ["I value reliability because trust is difficult to rebuild once it's been broken.", "I wish I'd been more willing to question advice that conflicted with my principles.", "If only the company had acknowledged the mistake before customers lost confidence.", "What matters most to me is dealing with people who act consistently and transparently."] },
  { unit: 12, lesson: 1, phrases: ["By the time I've lived there for a year, I'll have developed a much deeper understanding of local customs.", "By next summer, I'll have been working abroad long enough to evaluate the experience fairly.", "There are subtle expectations that newcomers may not immediately be aware of.", "How well you adapt often depends on whom you can turn to when difficulties arise."] },
  { unit: 12, lesson: 2, phrases: ["If I'd planned the route more carefully, I wouldn't be dealing with this exhausting detour now.", "I'd choose a slower, more environmentally friendly journey if time weren't so limited.", "Had we checked the weather forecast, we'd have packed more suitable clothing.", "For a multi-stop trip, flexible tickets are often worth the additional cost."] },
];

const getReadyDiscuss: Record<string, readonly [string, string]> = {
  "1/1": ["What first impression do the people make through their posture and clothing?", "Which visible behavior gives you the strongest clue about their personalities?"],
  "1/2": ["What family relationship or shared activity can you infer from the scene?", "Which detail suggests a similarity or difference between the people?"],
  "2/1": ["What mistake or problem might have led to this situation?", "What should someone have done earlier to prevent it?"],
  "2/2": ["What explanations could account for the mystery in this scene?", "Which clue makes one explanation more convincing than the others?"],
  "3/1": ["What makes this destination worth visiting?", "Which feature would matter most to a traveler with limited time?"],
  "3/2": ["What quality of life might the people be comparing between cities?", "Which trade-off would matter most when choosing where to live?"],
  "4/1": ["What might be affecting this person's energy at this time of day?", "Which small routine change could improve the situation?"],
  "4/2": ["What might be disrupting this person's sleep?", "Which detail could suggest a cause or a possible solution?"],
  "5/1": ["How might the people start a conversation in this setting?", "What opening would feel natural without making assumptions?"],
  "5/2": ["What information might one person be reporting to the others?", "Which part should be presented as confirmed, and which might need checking?"],
  "6/1": ["What news event might the people be following?", "How could they check whether the information is reliable?"],
  "6/2": ["What makes this moment worth telling as a story?", "Which detail might be the turning point or the most surprising part?"],
  "7/1": ["What technology is changing the way people work or communicate here?", "Who might benefit from this change, and who could be affected?"],
  "7/2": ["What signs suggest the people are dealing with information overload?", "What could help them communicate more thoughtfully?"],
  "8/1": ["What creative qualities might these people bring to their work?", "Which detail in the scene suggests how they develop or test ideas?"],
  "8/2": ["What problem are the people trying to solve with this invention or idea?", "How could you judge whether the proposed solution would make a real difference?"],
  "9/1": ["What custom or social expectation might be visible in this scene?", "How might the same behavior be interpreted differently in another place?"],
  "9/2": ["What change might the person be adjusting to?", "Which past habit could help or make the adjustment harder?"],
  "10/1": ["What is causing frustration in this situation?", "How could someone raise the issue firmly without escalating it?"],
  "10/2": ["What complaint needs to be resolved here?", "What remedy would address both the immediate problem and its cause?"],
  "11/1": ["What ethical choice might the people be facing?", "What principle could guide a fair decision, even if it has a cost?"],
  "11/2": ["What personal value seems most important in this scene?", "What experience might have shaped that value?"],
  "12/1": ["What might someone need to adapt to while living abroad?", "Which challenge could become easier with time or support?"],
  "12/2": ["What travel problem might have caused the situation shown?", "What alternative plan could reduce the risk or improve the trip?"],
};

const words = (sentence: string) => sentence.split(" ");

const outcomes: Record<string, string> = {
  "1/1": "Produce a nuanced four-trait personal profile supported by observed behavior and change over time.",
  "1/2": "Create a balanced family comparison with two similarities, two differences, and a qualified conclusion.",
  "2/1": "Produce an incident review identifying expectation, failure, responsibility, and corrective action.",
  "2/2": "Rank three explanations for a mystery by certainty and identify the missing evidence.",
  "3/1": "Select one destination and document three relevant features and one reservation.",
  "3/2": "Produce a weighted city comparison and a qualified final recommendation.",
  "4/1": "Create a four-part energy-management plan with anticipated effects.",
  "4/2": "Produce a conditional sleep plan linking causes, conditions, and likely outcomes.",
  "5/1": "Complete two contrasting networking scenarios and record the most effective opening and follow-up.",
  "5/2": "Produce an accurate reported account distinguishing confirmed information, rumor, warning, and promise.",
  "6/1": "Produce a sourced news timeline separating finished events from developments relevant now.",
  "6/2": "Tell a structured five-stage story and record the turning point and final significance.",
  "7/1": "Produce a technology forecast with three passive developments and one implication for people.",
  "7/2": "Record a debate conclusion supported by two formal connections and one acknowledged counterargument.",
  "8/1": "Select a candidate for a creative role and justify the decision with four evidenced qualities.",
  "8/2": "Produce a problem-solution analysis identifying impact, feasibility, and one broader consequence.",
  "9/1": "Create a qualified customs comparison with two contrasts, one exception, and one shared principle.",
  "9/2": "Produce an adaptation plan connecting past habits, repeated responses, and current strategies.",
  "10/1": "Produce an annoyance profile distinguishing trigger, emotional response, recurrence, and impact.",
  "10/2": "Resolve a formal complaint and record the cause, remedy, prevention measure, and agreed follow-up.",
  "11/1": "Reach and justify decisions for two ethical dilemmas while testing exceptions and conditions.",
  "11/2": "Produce a values statement supported by one wish, one regret, and one present principle.",
  "12/1": "Create a future adaptation forecast including achievement, duration, support, and uncertainty.",
  "12/2": "Produce a travel decision that connects a past cause to a present result and evaluates an alternative.",
};

const ccqs: Record<string, ConceptCheckData["questions"]> = {
  "1/1": [
    { context: "She tends to bring out the best in people.", question: "Does this describe a usual tendency?", options: ["Yes", "No"], answer: "Yes" },
    { context: "He's become far more assertive.", question: "Has his behavior changed?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "1/2": [
    { context: "What sets my family apart is...", question: "Does this introduce a distinctive feature?", options: ["Yes", "No"], answer: "Yes" },
    { context: "What can be challenging is balancing expectations.", question: "Does this foreground the difficulty?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "2/1": [
    { context: "We were supposed to back up the files.", question: "Was backing up expected?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I should have spoken up.", question: "Did the speaker speak up?", options: ["Yes", "No"], answer: "No" },
  ],
  "2/2": [
    { context: "The lights might have been caused by an aircraft.", question: "Is this explanation certain?", options: ["Yes", "No"], answer: "No" },
    { context: "There must be a logical explanation.", question: "Does the speaker express strong certainty?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "3/1": [
    { context: "Lisbon, which is known for its hills, ...", question: "Is the clause additional information about Lisbon?", options: ["Yes", "No"], answer: "Yes" },
    { context: "a city whose neighborhoods have distinct characters", question: "Does whose connect the neighborhoods to the city?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "3/2": [
    { context: "Although housing is competitive, costs are manageable.", question: "Does although signal contrast?", options: ["Yes", "No"], answer: "Yes" },
    { context: "On the other hand, opportunities are limited.", question: "Does this introduce a contrasting disadvantage?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "4/1": [
    { context: "Once fully awake, I do demanding tasks.", question: "Does once refer to after becoming fully awake?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Cutting back on caffeine has helped.", question: "Does cut back mean reduce?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "4/2": [
    { context: "I sleep poorly unless I've exercised.", question: "Is exercise presented as a condition for better sleep?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Provided that I avoid screens, I fall asleep quickly.", question: "Must the screen condition be met?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "5/1": [
    { context: "Approaching someone new can feel awkward.", question: "Is the activity the topic of the statement?", options: ["Yes", "No"], answer: "Yes" },
    { context: "To keep a conversation going, build on their point.", question: "Does the opening phrase express purpose?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "5/2": [
    { context: "She admitted that she had underestimated the issue.", question: "Is the speaker reporting her admission?", options: ["Yes", "No"], answer: "Yes" },
    { context: "They warned us not to disclose it.", question: "Did they advise against disclosure?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "6/1": [
    { context: "The investigation began last month, but findings have just emerged.", question: "Did the beginning occur at a finished past time?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Since the story broke, experts have questioned the evidence.", question: "Does the questioning connect the past event to now?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "6/2": [
    { context: "I'd been trying for hours when I noticed one detail.", question: "Which began first?", options: ["Trying", "Noticing"], answer: "Trying" },
    { context: "By then, everyone else had left.", question: "Had they left before that point?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "7/1": [
    { context: "AI is being integrated into services.", question: "Is the integration ongoing?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Personal data have been collected.", question: "Is the present result important?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "7/2": [
    { context: "Isn't connectivity making concentration harder?", question: "Does the speaker invite a reaction to an opinion?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Platforms encourage participation; nevertheless, they amplify claims.", question: "Does nevertheless introduce contrast?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "8/1": [
    { context: "People driven by curiosity...", question: "Are the people driven by curiosity?", options: ["Yes", "No"], answer: "Yes" },
    { context: "A designer working across disciplines...", question: "Is the designer currently described by the activity?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "8/2": [
    { context: "The device reduces waste, which makes it valuable.", question: "Does which comment on the whole previous idea?", options: ["Yes", "No"], answer: "Yes" },
    { context: "The team came up with a solution.", question: "Did the team create an idea?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "9/1": [
    { context: "Although punctuality is valued, times are flexible.", question: "Are the two ideas contrasted?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Apart from formal occasions, dress codes are less restrictive.", question: "Are formal occasions an exception?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "9/2": [
    { context: "I used to resist unfamiliar situations.", question: "Was this a past habit or state?", options: ["Yes", "No"], answer: "Yes" },
    { context: "She would keep focused when setbacks occurred.", question: "Does this describe repeated past behavior?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "10/1": [
    { context: "What drives me mad is being transferred repeatedly.", question: "Does this identify the cause of annoyance?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I get frustrated when companies make it difficult.", question: "Does frustrated describe the speaker's feeling?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "10/2": [
    { context: "Could you clarify why the charge wasn't disclosed?", question: "Is this a direct command or a polite indirect question?", options: ["Direct command", "Polite indirect question"], answer: "Polite indirect question" },
    { context: "I'd appreciate it if you could explain.", question: "Is the register polite and formal?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "11/1": [
    { context: "Even if nobody discovered it, I wouldn't take credit.", question: "Would discovery change the decision?", options: ["Yes", "No"], answer: "No" },
    { context: "Unless the evidence were convincing, I'd avoid an accusation.", question: "Is convincing evidence required for an accusation?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "11/2": [
    { context: "I wish I'd questioned the advice.", question: "Did the speaker question it enough?", options: ["Yes", "No"], answer: "No" },
    { context: "If only the company had acknowledged the mistake.", question: "Did the company acknowledge it at the desired time?", options: ["Yes", "No"], answer: "No" },
  ],
  "12/1": [
    { context: "By next summer, I'll have been working abroad...", question: "Does the speaker emphasize duration up to a future point?", options: ["Yes", "No"], answer: "Yes" },
    { context: "By the time I've lived there for a year, I'll have developed...", question: "Will the development be achieved by that future point?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "12/2": [
    { context: "If I'd planned better, I wouldn't be dealing with this now.", question: "Does a past decision affect the present?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Had we checked the forecast, we'd have packed better.", question: "Did we check the forecast?", options: ["Yes", "No"], answer: "No" },
  ],
};

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = b2.units[unit - 1];
  const lessonData = unitData.lessons[lesson - 1];
  const leadInSlug = lessonData.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const lessonObjective = lessonData.description.replace(
    /^By the end of this lesson, students will be (?:better )?able to /,
    "",
  );

  const steps: readonly LessonStepData[] = [
    {
      type: "get-ready",
      slug: "get-ready",
      label: "Get ready",
      slides: [
        {
          image: `/media/images/course/b2/unit-${unit}/lesson-${lesson}-${leadInSlug}/get-ready/lead-in.avif?v=1`,
          audio: false,
          quote: "",
          discuss: {
            interaction: ["pairs", "teacher-class"],
            questions: getReadyDiscuss[`${unit}/${lesson}`].map((prompt, index) => ({
              prompt,
              support: [index === 0
                ? "I can see ... / This might suggest ..."
                : "In my view, ... because ..."],
            })),
          },
        },
      ],
    },
    {
      type: "listen",
      slug: "listen",
      label: "Listen",
      instruction: `Listen to an extended discussion about ${lessonData.title.toLowerCase()}.`,
      audio: "",
      dialogue: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", [line]] as const),
      questionInstruction: "Listen for the speakers' overall position. Choose the correct answer.",
      question: `The discussion primarily focuses on ${lessonData.title.toLowerCase()}.`,
      options: ["True", "False"],
      answer: "True",
      followUpInstruction: "Listen again and answer using evidence from the discussion.",
      followUp: [
        { question: "What position or issue does speaker A introduce?", answer: phrases[0] },
        { question: "How does speaker B qualify or extend that point?", answer: phrases[1] },
        { question: "What supporting perspective is added?", answer: phrases[2] },
        { question: "What conclusion or implication closes the exchange?", answer: phrases[3] },
      ],
    },
    {
      type: "language-focus",
      slug: "language-focus",
      label: "Language focus",
      instruction: lessonObjective,
      items: phrases.map((phrase) => [
        phrase,
        `Use this language to ${lessonData.description.charAt(0).toLowerCase()}${lessonData.description.slice(1)}`,
        "Use contrastive stress, natural chunking, weak forms, and linking to show relationships between ideas.",
        "Analyze the target pattern, its discourse function, register, and interchangeable elements.",
        undefined,
        undefined,
      ] as const),
    },
    {
      type: "concept-check",
      slug: "check-meaning",
      label: "Check meaning",
      instruction: "Choose the answer. Use meaning, stance, and context—not only the grammar form.",
      questions: ccqs[`${unit}/${lesson}`],
    },
    {
      type: "try-it",
      slug: "try-it",
      label: "Try it",
      instruction: "Reconstruct each sentence in the correct order.",
      items: phrases.map((phrase) => {
        const answer = words(phrase);
        return { words: [...answer].reverse(), answer };
      }),
    },
    {
      type: "use-it",
      slug: "use-it",
      label: "Use it",
      instruction: `Discuss, evaluate, and reach a documented conclusion about ${lessonData.title.toLowerCase()}.`,
      prompts: [
        "Round 1: use the model to develop a position with a reason, evidence, and an example.",
        "Respond to the other position, acknowledge one valid point, and qualify your own claim.",
        "Round 2: close the model and discuss a new case using your own or supplied evidence.",
        outcomes[`${unit}/${lesson}`],
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Your progress",
      instruction: "Evaluate your communicative performance.",
      checks: [
        `Target: ${outcomes[`${unit}/${lesson}`]}`,
        `I identify attitudes, supporting details, and implications in a discussion about ${lessonData.title.toLowerCase()}.`,
        "I use the target language accurately and appropriately for the register.",
        "I defend and qualify a position, engage with another view, and record a conclusion.",
      ],
    },
  ];

  return {
    level: "b2",
    unit: { number: unitData.number, title: unitData.title },
    lesson: { number: lesson, title: lessonData.title },
    finalTask: outcomes[`${unit}/${lesson}`],
    successCriteria: [
      "supports a position with relevant evidence",
      "responds to or qualifies another perspective",
      "records a clear conclusion or decision",
    ],
    celtaPlan: {
      objective: outcomes[`${unit}/${lesson}`],
      evidence: "The learner defends a position, responds to another view, and records a qualified conclusion.",
      stages: [
        { name: "Lead-in", interaction: "pairs, then class", purpose: "Elicit assumptions and establish the issue." },
        { name: "Input and inference", interaction: "individual, then pairs", purpose: "Interpret stance, evidence, and implications." },
        { name: "Language analysis", interaction: "teacher-class", purpose: "Analyse discourse function, register, and reformulation." },
        { name: "Preparation", interaction: "individual or groups", purpose: "Develop a position with evidence and a counterargument." },
        { name: "Debate or decision task", interaction: "groups", purpose: "Negotiate, evaluate alternatives, and reach a conclusion." },
        { name: "Feedback and retry", interaction: "groups", purpose: "Refine one argument or language choice and restate the conclusion." },
      ],
      feedbackFocus: "Prioritize clarity of reasoning, appropriate register, and effective interaction.",
    },
    steps,
  };
};

export const b2SkeletonLessons = Object.fromEntries(
  seeds.map((seed) => [`${seed.unit}/${seed.lesson}`, createLesson(seed)]),
) as Record<string, LessonContent>;
