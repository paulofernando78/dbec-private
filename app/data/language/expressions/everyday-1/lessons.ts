import { mark, type RichContent } from "@/helpers/content";

type Entry = {
  id: string;
  label: string;
  title: string;
  group: number;
  dialogue?: { context: string; lines: { speaker: string; line: RichContent }[] };
  exercises: {
    instruction: string;
    questions: { question: string | RichContent; options: { option: string; isCorrect: boolean }[] }[];
  }[];
};

export const everydayOnePath = "/expressions/everyday-1";

export const everydayOneLessons = [
  ["Bob's Day At Work", "Bob works as a manager in a furniture store. Peter, his boss, is not happy about sales. Bob’s new advertising campaign hasn’t helped. Peter decides to fire him."],
  ["Bob Returns Home with Bad News", "Bob tells his wife Susan that he lost his job. Susan suggests that he start his own business."],
  ["Ted's Day at School", "Ted tells his parents he did poorly on his chemistry test. They tell him he needs to get serious and study more."],
  ["Nicole's Day at School", "Nicole tells Susan about her successful school presentation. Ted overhears and interrupts."],
  ["Ted Goes Out for the Evening", "Ted goes to visit his girlfriend Amber. Susan tells him how she feels about Amber and wishes him a good time anyway."],
  ["Susan Stays Home and Bakes Cookies", "Susan bakes cookies to cheer Bob up. Nicole suggests turning Susan’s baking into a business."],
  ["Susan Hires Bob to Run Her Business", "After a sleepless night thinking about the cookie business, Susan talks it over with Bob. He agrees to work for her."],
  ["Ted Forms a Rock Band", "Ted wants to borrow money for a new guitar. Susan suggests he earn it by baking cookies."],
  ["Nicole for President!", "Nicole runs for student body president. Ted agrees to ask his friends to vote for her if she helps with his homework."],
  ["Bob Visits the Village Market", "Bob asks Carol, the owner of the Village Market, to sell Susan’s cookies. Carol agrees, but the price is still undecided."],
  ["Bob Drives a Hard Bargain", "Carol calls Bob to negotiate how much the Village Market will pay for each cookie."],
  ["Bob's Big Cookie Order", "Bob tells the family about his deal with the Village Market and asks the kids to help bake the cookies."],
  ["Amber Comes Over to Bake Cookies", "Amber draws on her baking experience to help with the cookie order. Susan leaves Amber and Ted to work together."],
  ["Amber and Ted Heat up the Kitchen", "Amber asks Ted for a kiss while they bake. Ted says he’s busy, then has second thoughts."],
  ["Nicole Practices Her Election Speech", "Nicole stays up all night working on her speech for student body president and discusses it with Susan."],
  ["Bob Brings the Cookies to the Village Market", "Bob delivers the cookies to Carol and tells her how his family helped with the baking."],
  ["Carol Tells Bob the Good News", "Carol says the cookies are selling well and asks for 1,000 more by morning. Bob doubts he can make them that quickly."],
  ["Everyone Bakes Cookies", "Bob asks the family to help bake another batch for tomorrow, but Nicole says she’s too busy."],
  ["Nicole's Close Election", "Nicole narrowly loses the election and looks for excuses. Ted encourages her to accept the result and move on."],
  ["Bob Gets an Angry Call from Carol", "A customer finds a hair in a cookie. Carol takes the complaint seriously and refuses to buy any more from Bob."],
  ["Susan Gets a Surprise Call", "Donna from the National Cookie Company calls Susan with an offer to buy her cookie business."],
  ["Susan Shares the Good News", "Bob tells Susan the Village Market has stopped buying their cookies. Susan shares the National Cookie Company’s offer."],
  ["Bob Has a Surprise Visitor", "Peter offers Bob his old job at the furniture store. Bob turns him down."],
  ["Amber Writes a Song", "Amber tells Ted she wants to write songs for their band and sings him the opening lines of her first song."],
  ["Ted Brings Home More Good News", "A talent agent invites Ted and Amber to New York. Nicole announces that she’s been named president of the Spanish Club."],
] as const;

export const everydayOneCatalog = everydayOneLessons.flatMap(([title, description], index) => {
  const number = index + 1;
  const group = Math.ceil(number / 5);
  const lesson = { id: `lesson-${number}`, label: `Lesson ${number}`, title, description, group };
  if (number % 5 !== 0) return [lesson];
  return [lesson, {
    id: `review-${group}`,
    label: "Review",
    title: `Review for Lessons ${number - 4}–${number}`,
    description: `Practice the expressions from Lessons ${number - 4}–${number}.`,
    group,
  }];
});

export const everydayOneEntries: Entry[] = [
  {
    id: "lesson-1",
    label: "Lesson 1",
    title: "Bob’s Day at Work",
    group: 1,
    dialogue: {
      context: "Bob works as a manager in a furniture store. Peter, his boss, is not happy about sales. Bob’s new advertising campaign hasn’t helped. Peter decides to fire him.",
      lines: [
        { speaker: "Peter", line: ["Bob, I hate to ", mark("break the news"), ", but our sales were down again last month."] },
        { speaker: "Bob", line: ["Down again, Peter?"] },
        { speaker: "Peter", line: ["Yeah. These days, everybody’s shopping at our competition, Honest Abe’s Furniture Store."] },
        { speaker: "Bob", line: ["But everything in there ", mark("costs an arm and a leg"), "!"] },
        { speaker: "Peter", line: ["That’s true. They do charge ", mark("top dollar"), "."] },
        { speaker: "Bob", line: ["And their salespeople are very strange. They really ", mark("give me the creeps"), "!"] },
        { speaker: "Peter", line: ["Well, they must be doing something right over there. Meanwhile, we’re ", mark("about to go belly-up"), "."] },
        { speaker: "Bob", line: ["I’m sorry to hear that. I thought my new advertising campaign would ", mark("save the day"), "."] },
        { speaker: "Peter", line: [mark("Let’s face it"), ": your advertising campaign was ", mark("a real flop"), "."] },
        { speaker: "Bob", line: ["Well then I’ll ", mark("go back to the drawing board"), "."] },
        { speaker: "Peter", line: ["It’s too late for that. You’re fired!"] },
        { speaker: "Bob", line: ["What? You’re ", mark("giving me the ax"), "?"] },
        { speaker: "Peter", line: ["Yes. I’ve already found a new manager. She’s as ", mark("sharp as a tack"), "."] },
        { speaker: "Bob", line: ["Can’t we even ", mark("talk this over"), "? ", mark("After all"), ", I’ve been working here for 10 years!"] },
        { speaker: "Peter", line: ["There’s ", mark("no point in"), " arguing, Bob. I’ve already ", mark("made up my mind"), "."] },
        { speaker: "Bob", line: ["Oh well, ", mark("at least"), " I won’t have to ", mark("put up with"), " your nonsense anymore! Good-bye to you and good-bye to this ", mark("dead-end job"), "."] },
        { speaker: "Peter", line: ["Please leave before I ", mark("lose my temper"), "!"] },
      ],
    },
    exercises: [
      {
        instruction: "Fill in the blank with the missing word.",
        questions: [
          { question: "I can’t believe you bought a couch at Honest Abe’s. Everything in that store costs an arm and a ____.", options: choices(["foot", "leg", "hand"], 1) },
          { question: "After Bob found out that his advertising campaign failed, he wanted to go back to the drawing ____.", options: choices(["board", "table", "room"], 0) },
          { question: "When somebody isn’t listening to you, there’s no ____ in trying to argue with them.", options: choices(["edge", "tip", "point"], 2) },
          { question: "José is really smart. He’s as sharp as a ____.", options: choices(["tack", "nail", "screw"], 0) },
          { question: "The salespeople at Honest Abe’s always look angry and never speak to anybody. No wonder they ____ Bob the creeps.", options: choices(["take", "give", "allow"], 1) },
          { question: "Bob got fired. He isn’t looking forward to ____ the news to his family.", options: choices(["breaking", "cracking", "saying"], 0) },
          { question: "Bob thought his new advertisements would bring in lots of customers and save the ____.", options: choices(["morning", "night", "day"], 2) },
          { question: "Fortunately, Bob no longer has to put ____ with his stupid boss at the furniture store.", options: choices(["over", "in", "up"], 2) },
        ],
      },
    ],
  },
  {
    id: "lesson-2",
    label: "Lesson 2",
    title: "Bob Returns Home with Bad News",
    group: 1,
    dialogue: {
      context: "Bob tells his wife Susan that he lost his job. Susan suggests that he start his own business.",
      lines: [
        { speaker: "Susan", line: [mark("What’s the matter"), ", dear?"] },
        { speaker: "Bob", line: ["Susan, I ", mark("got canned"), " today at work."] },
        { speaker: "Susan", line: ["But Bob, you were Peter’s ", mark("right-hand man"), "!"] },
        { speaker: "Bob", line: ["Yes, and he ", mark("stabbed me in the back"), "."] },
        { speaker: "Susan", line: [mark("Keep your chin up"), ". Maybe he’ll ", mark("change his mind"), " and take you back."] },
        { speaker: "Bob", line: [mark("When pigs fly"), "! Once he ", mark("makes up his mind"), ", he never changes it. Besides, I ", mark("told him off"), "."] },
        { speaker: "Susan", line: [mark("Look on the bright side"), ": you won’t have to ", mark("set eyes"), " on Peter ever again."] },
        { speaker: "Bob", line: [mark("Thank goodness"), " for that!"] },
        { speaker: "Susan", line: [mark("Hang in there"), ". I’m sure you won’t be ", mark("out of work"), " for long."] },
        { speaker: "Bob", line: ["In the meantime, we’ll have to ", mark("live from hand to mouth"), "."] },
        { speaker: "Susan", line: ["Don’t get too ", mark("stressed out"), ", Bob. We’ll ", mark("make ends meet"), "."] },
      ],
    },
    exercises: [fillIn([
      ["What’s the ____? You look upset.", ["situation", "issue", "matter"], 2],
      ["I know I can trust you. You would never stab me in the ____.", ["leg", "back", "arm"], 1],
      ["If Bob and Susan run out of money, they can always borrow money from Susan’s sister as a ____ resort.", ["final", "first", "last"], 2],
      ["You look really stressed ____. Why don’t you sit down, relax, and have a cup of tea?", ["about", "in", "out"], 2],
      ["Bob, everything will be fine. You just need to keep your chin ____ and remember that tomorrow is another day.", ["up", "down", "above"], 0],
      ["I just can’t make up my ____ whether to order chicken or fish.", ["head", "brain", "mind"], 2],
      ["Nicole accidentally stepped on Ted’s guitar. Ted got really angry and told her ____.", ["off", "out", "away"], 0],
      ["Your husband left you for his psychologist? Hang ____ there! I’m sure he’ll realize she’s crazy and then come back to you.", ["up", "in", "out"], 1],
    ])],
  },
  {
    id: "review-1",
    label: "Review",
    title: "Review for Lessons 1–5",
    group: 1,
    exercises: [fillIn([
      ["After copying from his friend’s paper during the test, Ted was on ____ ice with his chemistry teacher.", ["thick", "thin", "dangerous"], 1],
      ["Ted’s teacher hit the ____ on the head. Ted should spend less time playing guitar and more time studying.", ["tack", "nail", "screw"], 1],
      ["I’m not really crazy about my friend’s husband. He talks too much, and he never listens to what anybody else is saying. He’s just not my cup of ____.", ["coffee", "cocoa", "tea"], 2],
      ["If Ted has his ____ set on going to New York University, he’s going to have to buckle down and start studying more.", ["life", "brain", "heart"], 2],
      ["It’s not surprising that Nicole gets such good grades. She’s as ____ as a tack.", ["smart", "sharp", "clever"], 1],
      ["When Peter ____ his temper, it’s very scary. He throws furniture everywhere.", ["loses", "finds", "opens"], 0],
      ["After Jane started hitting the ____, her grades started improving immediately.", ["work", "books", "teachers"], 1],
      ["Nicole said something ____ her breath, but I couldn’t hear it. When I asked her to repeat it, she refused.", ["on", "about", "under"], 2],
      ["Will Ted ever be the best student in his class? Sure, when ____ fly!", ["sheep", "goats", "pigs"], 2],
      ["A positive attitude leads to success. When things get difficult, it’s important to keep your ____ up.", ["chin", "neck", "head"], 0],
      ["Bob was all stressed ____ because the traffic was making him late for a doctor’s appointment.", ["over", "out", "up"], 1],
      ["Frank knew that the judge had already decided he was guilty. There was no point ____ arguing with him.", ["in", "around", "about"], 0],
      ["Some people think Nicole and Susan are sisters. That really ____ Nicole crazy!", ["does", "causes", "drives"], 2],
      ["Ted has been slacking ____ since the first day of high school, so it’s not surprising that he’s doing so poorly.", ["around", "off", "about"], 1],
      ["During the Depression in the 1930s, many families in America were living from hand to ____.", ["arm", "mouth", "hand"], 1],
    ])],
  },
];

function fillIn(items: [question: string, options: string[], correct: number][]) {
  return {
    instruction: "Fill in the blank with the missing word.",
    questions: items.map(([question, options, correct]) => ({
      question,
      options: choices(options, correct),
    })),
  };
}

function choices(options: string[], correct: number) {
  return options.map((option, index) => ({ option, isCorrect: index === correct }));
}
