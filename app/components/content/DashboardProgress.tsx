import { useEffect, useState } from "react";
import { BookOpen, Check, Flame } from "lucide-react";
import { Link } from "react-router";

import { Card } from "@/components/ui/Card";
import { authenticContentTedEdLessons } from "@/data/learn/ted-ed/ted-ed-lessons-card-data";
import { travel } from "@/data/learn/specific-purposes/travel";
import { isLessonCompleted, XP_BY_LEVEL, type CourseProgressSummary } from "@/utils/course-progress";

export function DashboardProgress({ progress }: { progress: CourseProgressSummary }) {
  const [tedEdCount, setTedEdCount] = useState<number | null>(null);
  const [tedEdLoading, setTedEdLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    void (async () => {
      try {
        const response = await fetch("/api/lesson-progress", { signal: controller.signal });
        if (!response.ok) return;
        const { lessons } = await response.json();
        if (!controller.signal.aborted) {
          setTedEdCount(authenticContentTedEdLessons.filter(({ href }) => lessons?.[href] === true).length);
        }
      } catch {
        // The total is still available when saved progress cannot be loaded.
      } finally {
        if (!controller.signal.aborted) setTedEdLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  const travelLessons = travel.units.flatMap((unit) =>
    unit.lessons.map((_, index) => ({ unit: unit.number, lesson: index + 1 })),
  );
  const travelXpLessons = travelLessons.filter(({ lesson }) => lesson <= 2);
  const travelEarnedXp = travelXpLessons.filter(({ unit, lesson }) =>
    isLessonCompleted(travel.slug, unit, lesson),
  ).length * XP_BY_LEVEL.travel;
  const travelTotalXp = travelXpLessons.length * XP_BY_LEVEL.travel;
  const items = [
    {
      title: "Course",
      subtitle: "Beginner to Advanced (A1–C1)",
      href: "/course",
      completed: progress.completedLessons,
      total: progress.totalLessons,
    },
    {
      title: "Travel English",
      subtitle: "Practical English for Travel · Recommended from A2",
      href: "/travel",
      completed: travelLessons.filter(({ unit, lesson }) => isLessonCompleted(travel.slug, unit, lesson)).length,
      total: travelLessons.length,
    },
    { title: "TED-Ed", href: "/authentic-content", completed: tedEdCount, total: authenticContentTedEdLessons.length },
  ];

  return (
    <Card title="Progress" className="min-w-0 p-0!">
      <div className="mb-4 flex flex-col items-center gap-1 rounded-xl bg-(--background) p-4 text-center">
        <Flame aria-hidden="true" className="mb-2 size-7 text-orange-600" />
        <span className="font-bold">Day Streak</span>
        <strong className="text-xl">{progress.dayStreak}</strong>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map(({ title, subtitle, href, completed, total }) => {
          const Icon = total > 0 && completed === total ? Check : BookOpen;
          return (
            <Link
              key={href}
              to={href}
              className="flex min-w-0 flex-col items-center gap-1 rounded-xl bg-(--background) p-4 text-center focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Icon aria-hidden="true" className="mb-2 size-7 text-green-600" />
              <span className="font-bold">{title}</span>
              {subtitle && <span className="text-sm text-slate-500">{subtitle}</span>}
              <strong className="text-xl">
                {completed === null
                  ? tedEdLoading ? "…" : `— of ${total}`
                  : `${completed} of ${total}`}
              </strong>
              <span className="text-sm">
                {completed === null ? tedEdLoading ? "Loading progress" : "Progress unavailable" : "Lessons completed"}
              </span>
              {href === "/course" && (
                <span className="text-sm">{progress.earnedXp} of {progress.totalXp} XP</span>
              )}
              {href === "/travel" && (
                <span className="text-sm">{travelEarnedXp} of {travelTotalXp} XP</span>
              )}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
