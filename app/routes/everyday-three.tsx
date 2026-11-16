import { PageHeader } from "@/components/content/PageHeader";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { everydayThreeAudioUrl, everydayThreeLessons } from "@/data/language/expressions/everyday-3/everyday-three";

export default function EverydayThree() {
  return (
    <div>
      <PageHeader eyebrow="Language • Expressions" title="Everyday English 3" />
      <ProgressCollectionCard
        title="Lessons 1–25"
        completedCount={0}
        totalCount={everydayThreeLessons.length}
        resetAriaLabel="Reset Everyday English 3 progress"
        onReset={() => {}}
        disableResetWhenEmpty
        items={everydayThreeLessons.map(([number, title]) => ({
          id: `everyday-3-lesson-${number}`,
          eyebrow: `Lesson ${number}`,
          title,
          description: "Listen to this lesson.",
          isCompleted: false,
          ariaLabel: `Open Lesson ${number}: ${title}`,
          onClick: () => {
            window.location.href = everydayThreeAudioUrl(number);
          },
        }))}
      />
    </div>
  );
}
