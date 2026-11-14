import { Navigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";
import * as businessLessons from "@/data/language/expressions/business-1/lessons";

export default function BusinessExpression() {
  const { lesson } = useParams();

  if (!["lesson-1", "lesson-2", "lesson-3", "lesson-4", "lesson-5", "lesson-6", "lesson-7", "lesson-8", "lesson-9", "lesson-10", "lesson-11", "lesson-12", "lesson-13", "lesson-14", "lesson-15", "lesson-16", "lesson-17", "lesson-18", "lesson-19", "lesson-20", "lesson-21", "lesson-22", "lesson-23", "lesson-24", "lesson-25", "lesson-26", "lesson-27", "lesson-28", "lesson-29", "lesson-30"].includes(lesson ?? "")) {
    return <Navigate to="/expressions/business" replace />;
  }

  const isLessonOne = lesson === "lesson-1";
  const isLessonTwo = lesson === "lesson-2";
  const isLessonThree = lesson === "lesson-3";
  const isLessonFour = lesson === "lesson-4";
  const isLessonFive = lesson === "lesson-5";
  const isLessonSix = lesson === "lesson-6";
  const isLessonSeven = lesson === "lesson-7";
  const isLessonEight = lesson === "lesson-8";
  const isLessonNine = lesson === "lesson-9";
  const isLessonTen = lesson === "lesson-10";
  const isLessonEleven = lesson === "lesson-11";
  const isLessonTwelve = lesson === "lesson-12";
  const isLessonThirteen = lesson === "lesson-13";
  const isLessonFourteen = lesson === "lesson-14";
  const isLessonFifteen = lesson === "lesson-15";
  const isLessonSixteen = lesson === "lesson-16";
  const isLessonSeventeen = lesson === "lesson-17";
  const isLessonEighteen = lesson === "lesson-18";
  const isLessonNineteen = lesson === "lesson-19";
  const isLessonTwenty = lesson === "lesson-20";
  const isLessonTwentyOne = lesson === "lesson-21";
  const isLessonTwentyTwo = lesson === "lesson-22";
  const isLessonTwentyThree = lesson === "lesson-23";
  const isLessonTwentyFour = lesson === "lesson-24";
  const isLessonTwentyFive = lesson === "lesson-25";
  const isLessonTwentySix = lesson === "lesson-26";
  const isLessonTwentySeven = lesson === "lesson-27";
  const isLessonTwentyEight = lesson === "lesson-28";
  const isLessonTwentyNine = lesson === "lesson-29";
  const isLessonThirty = lesson === "lesson-30";
  const lessonNumber = isLessonThirty ? 30 : isLessonTwentyNine ? 29 : isLessonTwentyEight ? 28 : isLessonTwentySeven ? 27 : isLessonTwentySix ? 26 : isLessonTwentyFive ? 25 : isLessonTwentyFour ? 24 : isLessonTwentyThree ? 23 : isLessonTwentyTwo ? 22 : isLessonTwentyOne ? 21 : isLessonTwenty ? 20 : isLessonNineteen ? 19 : isLessonEighteen ? 18 : isLessonSeventeen ? 17 : isLessonSixteen ? 16 : isLessonFifteen ? 15 : isLessonFourteen ? 14 : isLessonThirteen ? 13 : isLessonTwelve ? 12 : isLessonEleven ? 11 : isLessonTen ? 10 : isLessonNine ? 9 : isLessonEight ? 8 : isLessonSeven ? 7 : isLessonSix ? 6 : isLessonFive ? 5 : isLessonFour ? 4 : isLessonThree ? 3 : isLessonTwo ? 2 : 1;
  const title = isLessonThirty
    ? "Negotiating a Salary Offer"
    : isLessonTwentyNine
    ? "Job Interview 2"
    : isLessonTwentyEight
    ? "Job Interview 1"
    : isLessonTwentySeven
    ? "Firing Somebody"
    : isLessonTwentySix
    ? "Promoting an Employee"
    : isLessonTwentyFive
    ? "Conducting a Performance Review"
    : isLessonTwentyFour
    ? "Negotiating a Purchase"
    : isLessonTwentyThree
    ? "Requesting a Bank Loan"
    : isLessonTwentyTwo
    ? "Calling in Sick"
    : isLessonTwentyOne
    ? "Explaining That You're Feeling Overworked"
    : isLessonTwenty
    ? "Talking About a Brown Noser"
    : isLessonNineteen
    ? "Complaining About a Co-Worker"
    : isLessonEighteen
    ? "Discussing Office Scandals"
    : isLessonSeventeen
    ? "Telling Somebody Off"
    : isLessonSixteen
    ? "Politely Disagreeing with Someone"
    : isLessonFifteen
    ? "Shifting Blame"
    : isLessonFourteen
    ? "Taking Credit for Good Results"
    : isLessonThirteen
    ? "Discussing a Mistake"
    : isLessonTwelve
    ? "Running a Meeting"
    : isLessonEleven
    ? "Motivating Co-Workers"
    : isLessonTen
    ? "Discussing a Difficult Request"
    : isLessonNine
    ? "Dealing with a Dissatisfied Customer"
    : isLessonEight
    ? "Discussing a Difficult Decision"
    : isLessonSeven
      ? "Discussing Bad Results"
      : isLessonSix
        ? "Discussing Good Results"
        : isLessonFive
          ? "Talking About Company Strategy"
          : isLessonFour
            ? "Talking About Manufacturing"
            : isLessonThree
              ? "Discussing a New Ad Campaign"
              : isLessonTwo
                ? "Talking About Financial Issues"
                : "Talking About a New Project";
  const context = isLessonThirty
    ? "Donna calls Marina to tell her the good news — she got the job. Marina wisely decides to negotiate for a higher salary."
    : isLessonTwentyNine
      ? "Sam currently runs his own company selling used office furniture online. He's tired of running his own business and wants to get a job with a big company."
      : isLessonTwentyEight
      ? "Donna, a Human Resources Manager, is interviewing Marina for a sales position."
      : isLessonTwentySeven
      ? "Kurt has the difficult task of firing Dan. Dan's been with the company since the beginning and is a friend of Kurt's. Dan is surprised and upset with the news."
      : isLessonTwentySix
      ? "Steve is meeting with his boss, Kurt, to review his performance. Kurt promotes Steve to the position of marketing director."
      : isLessonTwentyFive
      ? "It's annual performance review time. John meets with his boss to go over his performance for the past year, hear about his strengths and weaknesses, and find out about his salary increase."
      : isLessonTwentyFour
      ? "Jack, owner of Jack's Party Store, is negotiating to buy an advertisement in the Newport Times. Dave is an ad salesman with the newspaper."
      : isLessonTwentyThree
      ? "Ivan meets with Gina, a loan officer at L&S Bank, about getting a loan to start a new coffee shop. When Gina reviews his financial forecasts and suggests some changes, Ivan is angry at first but then decides to go along with it."
      : isLessonTwentyTwo
      ? "Maria calls her boss, Scott, to tell him she's not feeling well, and she's going to have to take a sick day. Fortunately, Scott is an understanding boss."
      : isLessonTwentyOne
      ? "Mary is feeling overwhelmed between commitments at home and at work. Dan advises her to be patient and stay focused. Things will improve once their busy period at the office is over."
      : isLessonTwenty
      ? "Nearly every office has one: the brown noser. He or she will do just about anything to win favor with the boss. Here Tony, Karen, and Nancy complain about their local brown noser, Mitch."
      : isLessonNineteen
      ? "Justin, from the marketing department, is complaining to Mary about Joe. Joe is always nasty to Justin and Justin is sick of it. Mary advises Justin not to let Joe bother him."
      : isLessonEighteen
      ? "With his naughty behavior, Bill Swing provides plenty of material for office gossip. Cindy and Steve discuss his latest move and review his other recent insensitive behavior."
      : isLessonSeventeen
      ? "Doug and Joe work at the reception desk of the Boston Empire Hotel, a large hotel. Kara, the hotel manager, yells at Doug for being late to work every day."
      : isLessonSixteen
      ? "If Kroll Enterprises doesn't take action soon, the company is going to be in financial trouble. Joel and Kathy have different opinions on how to cut costs at the company."
      : isLessonFifteen
      ? "Rick and Ellen work for Attic Treasures Antiques, an antique shop. Max is the owner of the shop. Recently, a woman came in and sold them $10,000 worth of “antique” jewelry. Max takes one look at the jewelry and realizes it's fake."
      : isLessonFourteen
      ? "When United Supply Company launches their website three weeks ahead of schedule, there's more than one person ready to take credit."
      : isLessonThirteen
      ? "Chris and Todd work for Alpine Design, a furniture manufacturer. When Todd accidentally orders the wrong amount of wood, his boss Chris warns him to be more careful in the future."
      : isLessonTwelve
      ? "Julia is running a meeting. When Larry and Sally start arguing, Julia has to bring the meeting back under control."
      : isLessonEleven
      ? "Greg, Stan, and Donna work for Pack-It, a maker of trash bags and other consumer goods. After disappointing sales results, they discuss exiting the trash bag business. But a fresh new idea gives them hope for the future."
      : isLessonTen
      ? "Tanya is a head of R&D in a laboratory for Sudsco, a company that makes shampoo. Here she meets with colleagues John and Andy to discuss a request from the marketing department."
      : isLessonNine
      ? "John hired Kevin's web design firm to design a website for his company, but John is not satisfied with the end result."
      : isLessonEight
      ? "Anna, Lynn, and Jeff are thinking about moving their manufacturing facilities from the United States to China. Jeff is having trouble deciding what to do."
      : isLessonSeven
      ? "Ron, Alex, and Pam work for Brooklyn Brewski, a company that brews and distributes beer throughout New York. The company's recent results have been terrible."
      : isLessonSix
        ? "Peter, Linda, and Todd work as managers at Capital City Bank, a retail bank. Linda's creative idea for attracting new customers to the bank has generated lots of new business."
        : isLessonFive
          ? "Andy and Laura work for Saltonica, a maker of cell phones. Sales have been slow lately, so Andy is recommending that the company adopt a new strategy."
          : isLessonFour
            ? "Mike and Dan work for Swift Shoes, a manufacturer of sneakers. Mike is in charge of manufacturing. Dan is trying to push Mike to get some new shoes ready quickly."
            : isLessonThree
              ? "Ted works for an advertising agency. He's presenting to Sam and Lisa, who work for Pacific Beer Company."
              : isLessonTwo
                ? "Juan and Diane work in the finance department of Delicious Delights, a company that makes snack foods. Here, they're discussing the financial projections for a new product line."
                : "Carl, Greg, and Anne work for WaterSonic Corporation. Recently, the company has come up with an idea for a new electric toothbrush.";
  const lines = isLessonThirty
    ? businessLessons.lessonThirtyLines
    : isLessonTwentyNine
      ? businessLessons.lessonTwentyNineLines
      : isLessonTwentyEight
      ? businessLessons.lessonTwentyEightLines
      : isLessonTwentySeven
      ? businessLessons.lessonTwentySevenLines
      : isLessonTwentySix
      ? businessLessons.lessonTwentySixLines
      : isLessonTwentyFive
      ? businessLessons.lessonTwentyFiveLines
      : isLessonTwentyFour
      ? businessLessons.lessonTwentyFourLines
      : isLessonTwentyThree
      ? businessLessons.lessonTwentyThreeLines
      : isLessonTwentyTwo
      ? businessLessons.lessonTwentyTwoLines
      : isLessonTwentyOne
      ? businessLessons.lessonTwentyOneLines
      : isLessonTwenty
      ? businessLessons.lessonTwentyLines
      : isLessonNineteen
      ? businessLessons.lessonNineteenLines
      : isLessonEighteen
      ? businessLessons.lessonEighteenLines
      : isLessonSeventeen
      ? businessLessons.lessonSeventeenLines
      : isLessonSixteen
      ? businessLessons.lessonSixteenLines
      : isLessonFifteen
      ? businessLessons.lessonFifteenLines
      : isLessonFourteen
      ? businessLessons.lessonFourteenLines
      : isLessonThirteen
      ? businessLessons.lessonThirteenLines
      : isLessonTwelve
      ? businessLessons.lessonTwelveLines
      : isLessonEleven
      ? businessLessons.lessonElevenLines
      : isLessonTen
      ? businessLessons.lessonTenLines
      : isLessonNine
      ? businessLessons.lessonNineLines
      : isLessonEight
      ? businessLessons.lessonEightLines
      : isLessonSeven
      ? businessLessons.lessonSevenLines
      : isLessonSix
        ? businessLessons.lessonSixLines
        : isLessonFive
          ? businessLessons.lessonFiveLines
          : isLessonFour
            ? businessLessons.lessonFourLines
            : isLessonThree
              ? businessLessons.lessonThreeLines
              : isLessonTwo
                ? businessLessons.lessonTwoLines
                : businessLessons.lessonOneLines;

  return (
    <div>
      <PageHeader
        eyebrow={`Language • Expressions • Business 1 • Lesson ${lessonNumber}`}
        title={title}
      />

      <Card>
        <section>
          <Dialogue
            instruction="Listen to the..."
            audioSrc={`/media/audio/language/expressions/business-1/lesson-${lessonNumber}.mp3`}
            context={context}
            lines={lines}
            segmented
          />
        </section>

        {isLessonTwo && (
          <section className="rounded-xl bg-(--background) p-4">
            <h2 className="mb-3 text-lg font-black">Abbreviations</h2>
            <dl className="grid gap-2">
              <div><dt className="inline font-bold">P&amp;L</dt><dd className="inline"> = Profit and Loss</dd></div>
              <div><dt className="inline font-bold">CFO</dt><dd className="inline"> = Chief Financial Officer</dd></div>
              <div><dt className="inline font-bold">CEO</dt><dd className="inline"> = Chief Executive Officer (Managing Director)</dd></div>
            </dl>
          </section>
        )}

        {isLessonEleven && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* c'mon — This casual expression is short for “come on” and here means “listen to me.”</p>
            <p>(to) work one's tail off</p>
          </section>
        )}

        {isLessonFifteen && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* grand — thousand</p>
          </section>
        )}

        {isLessonSeventeen && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* reference — a recommendation by a past employer to a future employer regarding a person's character and qualifications</p>
          </section>
        )}

        {isLessonEighteen && (
          <section className="grid gap-2 rounded-xl bg-(--background) p-4">
            <p>* sexual harassment — unwelcome verbal or physical contact of a sexual nature that affects one's employment or creates an unpleasant work environment</p>
            <p>* company offsite — a trip in which employees of a company leave the office together and go to another location, frequently for fun or to discuss broad company goals for the future</p>
            <p>* strip joint — a bar in which women remove their clothes on stage for the entertainment of male clientele</p>
          </section>
        )}

        {isLessonNineteen && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* This is a nice way of saying: Many of the people working here have strange and/or unusual personalities, and it may be difficult to work with them.</p>
          </section>
        )}

        {isLessonTwentySix && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* perks — short for perquisites: benefits other than salary</p>
          </section>
        )}

        {isLessonTwentySeven && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* severance package — the benefits offered to an employee being laid off</p>
          </section>
        )}

        {isLessonThirty && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* base salary — the salary not including bonuses or any other benefits</p>
          </section>
        )}
      </Card>

      {isLessonOne && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonOneExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonTwo && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the most appropriate response to each sentence."
            exercise={businessLessons.lessonTwoExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonThree && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonThreeExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonFour && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonFourExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonFive && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonFiveExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonSix && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the most appropriate response to each sentence."
            exercise={businessLessons.lessonSixExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonSeven && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonSevenExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonEight && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonEightExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonNine && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonNineExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonTen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonTenExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonEleven && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonElevenExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonTwelve && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={businessLessons.lessonTwelveExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonThirteen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonThirteenExercise} questionClassName="rounded-xl bg-(--background) p-4" />
        </Card>
      )}

      {isLessonFourteen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonFourteenExercise} questionClassName="rounded-xl bg-(--background) p-4" />
        </Card>
      )}

      {isLessonFifteen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio instruction="Choose the most appropriate response to the following." exercise={businessLessons.lessonFifteenExercise} questionClassName="rounded-xl bg-(--background) p-4" />
        </Card>
      )}

      {isLessonSixteen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonSixteenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonSeventeen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonSeventeenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonEighteen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonEighteenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonNineteen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonNineteenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwenty && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the most appropriate response to the following." exercise={businessLessons.lessonTwentyExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyOne && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentyOneExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyTwo && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentyTwoExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyThree && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentyThreeExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyFour && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentyFourExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyFive && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentyFiveExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentySix && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentySixExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentySeven && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentySevenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyEight && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonTwentyEightExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyNine && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the most appropriate response to each sentence." exercise={businessLessons.lessonTwentyNineExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonThirty && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={businessLessons.lessonThirtyExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}

    </div>
  );
}
