import { LockKeyhole } from "lucide-react";
import { ActionTextRow } from "@/components/content/ActionTextRow";

import { PageHeader } from "@/components/content/PageHeader";
import { Button } from "@/components/ui/Button";


const everydayTwoLessons = [
  "Gourmet International Gets New Competition",
  "Mark Discusses His Regrets",
  "Mark and Cindy Chat on the Phone",
  "Mark Calls Cindy Back",
  "Mark Cancels His Date with Sara",
  "Review for Lessons 1–5",
  "Mark and Cindy Make Dinner Plans",
  "Cindy Asks Mark to Get Back Together",
  "Cindy Invites Mark to Her Place",
  "Monday Morning at the Office",
  "Sara Confronts Mark",
  "Review for Lessons 6–10",
  "Gourmet International Talks Strategy",
  "Ron and Mark Discuss Plan B",
  "Mark and Sara Fly to China",
  "Mark and Sara Visit the Great Wall",
  "Mark and Sara Discover Delicious Dumplings",
  "Review for Lessons 11–15",
  "Two Tough Cookies",
  "Mark Gets a Surprise Call",
  "Mark and Sara on the Dumpling Trail",
  "Mark and Sara Make Plans",
  "Mark Has a Surprise Visitor",
  "Review for Lessons 16–20",
  "Mark Tells Ron About the Dumplings",
  "The Team Makes Plans to Woo Madame Chu",
  "Mark Pops the Question",
  "Madame Chu: Round Two",
  "One Year Later",
  "Review for Lessons 21–25",
] as const;

export default function EverydayCollection() {
  const lessons = everydayTwoLessons;

  return (
    <div>
      <PageHeader eyebrow="Language • Expressions" title="Everyday English 2" />
      <div className="overflow-hidden rounded-xl bg-gray-50 dark:bg-(--surface)">
        <ol className="px-4 py-4">
          {lessons.map((title, index) => {
            const number = index + 1;
            const isReview = title.startsWith("Review");
            return (
              <ActionTextRow
                key={number}
                className="relative min-h-36 pb-5 last:min-h-15 last:pb-0"
                gap="gap-4"
                actionSize="size-15"
                textAtTop
                action={<>
                {number < lessons.length && (
                  <span className="absolute -bottom-5 left-6.5 top-13 z-0 w-2 bg-slate-300 dark:bg-slate-600" />
                )}
                <Button
                  ariaLabel={`Locked Lesson ${number}`}
                  ariaDisabled
                  disabled
                  icon={<LockKeyhole aria-hidden="true" />}
                  className="z-10 size-15!"
                />
                </>}
              >
                <div>
                  <span className="block text-xs font-bold uppercase text-orange-700!">
                    {isReview ? "Review" : `Lesson ${number}`}
                  </span>
                  <h2 className="text-xl font-black text-black dark:text-(--text-color)">
                    {title}
                  </h2>
                  <p className="text-base italic md:text-lg">This content is not available yet.</p>
                </div>
              </ActionTextRow>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
