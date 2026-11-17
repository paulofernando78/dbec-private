import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import type { Unit } from "@/data/learn/course";
import { extraListeningByUnit } from "@/data/learn/course/extra-listening";
import { isLessonCompleted, resetLesson } from "@/utils/course-progress";
import type { LevelTheme } from "@/utils/level-theme";

type UnitCardProps = {
  unit: Unit;
  levelSlug: string;
  levelTheme?: LevelTheme;
  isAuthenticated: boolean | null;
  basePath?: string;
};

export function UnitCard({
  unit,
  levelSlug,
  levelTheme,
  isAuthenticated,
  basePath = `/course/${levelSlug}`,
}: UnitCardProps) {
  const navigate = useNavigate();
  const extraListening = extraListeningByUnit[`${levelSlug}/${unit.number}`];
  const isFreeLesson = levelSlug === "a1" && unit.number <= 3;
  const isLocked = isAuthenticated === false && !isFreeLesson;
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(
    new Set(),
  );

  useEffect(() => {
    setCompletedLessons(
      new Set(
        unit.lessons
          .map((_, index) => index + 1)
          .filter((lessonNumber) =>
            isLessonCompleted(levelSlug, unit.number, lessonNumber),
          ),
      ),
    );
  }, [levelSlug, unit.number, unit.lessons]);

  const resetUnit = () => {
    unit.lessons.forEach((_, index) =>
      resetLesson(levelSlug, unit.number, index + 1),
    );
    setCompletedLessons(new Set());
  };

  return (
    <ProgressCollectionCard
      eyebrow={`Unit ${unit.number}`}
      title={unit.title}
      description={unit.description}
      completedCount={completedLessons.size}
      totalCount={unit.lessons.length}
      resetAriaLabel={`Reset unit ${unit.number}`}
      resetConfirmationMessage={`Are you sure you want to reset all lesson progress for Unit ${unit.number}?`}
      onReset={resetUnit}
      levelTheme={levelTheme}
      items={[...unit.lessons.map((lesson, index) => {
        const lessonNumber = index + 1;
        const isCheckpoint = index >= 2;
        const isCompleted = completedLessons.has(lessonNumber);

        return {
          id: `${unit.number}-${index}`,
          eyebrow: `Lesson ${lessonNumber}`,
          title: lesson.title,
          description: lesson.description.replace(
            /^By the end of this lesson, students will be able to ([a-z])/,
            (_, initial: string) => initial.toUpperCase(),
          ),
          isCompleted,
          isLocked,
          ariaLabel: isCheckpoint
            ? `${isLocked ? "Locked" : isCompleted ? "Completed" : "Open"} checkpoint review ${unit.number}`
            : `${isLocked ? "Locked" : isCompleted ? "Completed" : "Open"} lesson ${lessonNumber}`,
          onClick: () => {
            if (isAuthenticated === false && !isFreeLesson) {
              window.dispatchEvent(new Event("dbec:open-login"));
              return;
            }

            navigate(
              isCheckpoint
                ? `${basePath}/unit/${unit.number}/lesson/3/review`
                : `${basePath}/unit/${unit.number}/lesson/${lessonNumber}/get-ready`,
            );
          },
        };
      }), ...(extraListening ? [{
        id: `${unit.number}-extra-listening`,
        eyebrow: "Extra Listening",
        title: extraListening.title,
        description: "Listen to two short conversations and check your understanding.",
        isCompleted: false,
        isLocked,
        listening: true,
        ariaLabel: `${isLocked ? "Locked" : "Open"} extra listening for Unit ${unit.number}`,
        onClick: () => {
          if (isLocked) window.dispatchEvent(new Event("dbec:open-login"));
          else navigate(`${basePath}/unit/${unit.number}/extra-listening`);
        },
      }] : [])]}
    />
  );
}
