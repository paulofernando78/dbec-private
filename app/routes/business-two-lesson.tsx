import { Link, Navigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { businessTwoGroups, businessTwoPath, businessTwoReviewElevenToFifteen, businessTwoReviewOneToFive, businessTwoReviewSixteenToTwenty, businessTwoReviewSixToTen, businessTwoReviewTwentyOneToTwentyFive, businessTwoReviewTwentySixToThirty } from "@/data/expressions/business-two";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";

export default function BusinessTwoLesson() {
  const { lesson } = useParams();
  const entry = businessTwoGroups.flatMap(({ entries }) => entries)
    .find(({ slug }) => slug === lesson);
  if (!entry) return <Navigate to={businessTwoPath} replace />;
  const { content } = entry;
  const reviewExercise = entry.slug === "review-1-5"
    ? businessTwoReviewOneToFive
    : entry.slug === "review-6-10"
      ? businessTwoReviewSixToTen
      : entry.slug === "review-11-15"
        ? businessTwoReviewElevenToFifteen
        : entry.slug === "review-16-20"
          ? businessTwoReviewSixteenToTwenty
          : entry.slug === "review-21-25"
            ? businessTwoReviewTwentyOneToTwentyFive
            : entry.slug === "review-26-30"
              ? businessTwoReviewTwentySixToThirty
      : undefined;

  return (
    <div>
      <PageHeader
        eyebrow={`Language • Expressions • Business 2 • ${entry.label}`}
        title={entry.title}
      />
      {!content && !reviewExercise ? (
        <Card>
          <p className="mb-4">Coming soon.</p>
          <Link to={businessTwoPath} className="font-bold underline">Back to Business 2</Link>
        </Card>
      ) : reviewExercise ? (
        <Card title="Practice the Idioms">
          <Radio instruction={reviewExercise.instruction} exercise={reviewExercise} questionClassName="rounded-xl bg-(--background) p-4" />
        </Card>
      ) : (
        <>
          <Card>
            <Dialogue
              instruction="Listen to the dialogue."
              audioSrc=""
              context={content!.context}
              lines={content!.lines}
              segmented
            />
          </Card>
          {content!.exercise && (
            <Card title="Practice the Idioms" className="mt-4">
              <Radio
                instruction={content!.exercise.instruction ?? "Choose the most appropriate response to each question."}
                exercise={content!.exercise}
                questionClassName="rounded-xl bg-(--background) p-4"
              />
            </Card>
          )}
        </>
      )}
    </div>
  );
}
