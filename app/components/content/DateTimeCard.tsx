import { useEffect, useState } from "react";

import { useSession } from "@/hooks/useSession";

type NextLesson = {
  studentId: string;
  name: string;
  time: string | null;
  lessonDate: string;
  status: string;
};

const getDateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;

const formatLessonDate = (lessonDate: string) => {
  const [year, month, day] = lessonDate.split("-").map(Number);

  if (!year || !month || !day) return lessonDate;

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(year, month - 1, day));
};

// "15:00 - 16:00" → "15:00". O card já mostra a hora atual por extenso; ao lado
// da data da aula basta o horário de início.
const formatLessonTime = (time: string | null) =>
  time?.match(/\d{1,2}:\d{2}/)?.[0] ?? null;

export const DateTimeCard = ({ className = "" }: { className?: string }) => {
  const session = useSession();
  const isTeacher = session?.role === "teacher";
  const teacherId = session?.userId;
  const [now, setNow] = useState<Date | null>(null);
  const [nextLesson, setNextLesson] = useState<NextLesson | null>(null);
  const [isLessonLoading, setIsLessonLoading] = useState(true);
  const [lessonError, setLessonError] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    const currentTime = new Date();
    setNow(currentTime);
    const millisecondsUntilNextMinute =
      (60 - currentTime.getSeconds()) * 1_000 - currentTime.getMilliseconds();
    const timeoutId = window.setTimeout(() => {
      setNow(new Date());
      intervalId = window.setInterval(() => setNow(new Date()), 60_000);
    }, millisecondsUntilNextMinute);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  // A aula pendente mais próxima entre os alunos do professor. Só o professor
  // enxerga outro aluno no topo; para o aluno a linha não faz sentido.
  useEffect(() => {
    if (!isTeacher) {
      setNextLesson(null);
      setIsLessonLoading(false);
      setLessonError(false);
      return;
    }

    let cancelled = false;

    const loadNextLesson = async () => {
      try {
        const response = await fetch(
          `/api/next-lesson?today=${getDateKey(new Date())}`,
          { headers: { Accept: "application/json" }, cache: "no-store" },
        );

        if (cancelled) return;

        if (!response.ok) {
          setLessonError(true);
          return;
        }

        const result = (await response.json()) as {
          lesson?: NextLesson | null;
        };

        if (!cancelled) {
          setNextLesson(result.lesson ?? null);
          setLessonError(false);
        }
      } catch {
        // Mantém o último valor conhecido em vez de piscar vazio.
        if (!cancelled) setLessonError(true);
      } finally {
        if (!cancelled) setIsLessonLoading(false);
      }
    };

    setIsLessonLoading(true);
    void loadNextLesson();

    // O calendário muda enquanto a página está aberta; confere a cada minuto e
    // na volta para a aba.
    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") void loadNextLesson();
    }, 60_000);

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void loadNextLesson();
    };

    window.addEventListener("focus", refreshWhenVisible);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshWhenVisible);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [isTeacher, teacherId]);

  if (!now) return null;

  const today = getDateKey(now);
  const fullDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(now);
  const fullTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(now);
  const lessonTime = formatLessonTime(nextLesson?.time ?? null);
  const lessonDate =
    nextLesson && nextLesson.lessonDate !== today
      ? formatLessonDate(nextLesson.lessonDate)
      : null;
  const lessonDetails = [lessonDate, lessonTime].filter(Boolean);

  return (
    <div className={`text-[clamp(0.875rem,calc(100cqw/13),1rem)] text-center ${className}`}>
      <div className="flex flex-nowrap items-center justify-center gap-3 whitespace-nowrap
      max-[450px]:flex-col
      max-[450px]:gap-0
      max-[450px]:text-sm">
        <time dateTime={now.toISOString()} className="font-bold">
          {fullDate}
        </time>
        <span aria-hidden="true" className="max-[450px]:hidden">|</span>
        <time dateTime={now.toISOString()} className="tabular-nums font-bold">
          {fullTime}
        </time>
      </div>
      {isTeacher && !lessonError && (
        <p
          className="flex flex-wrap items-center justify-center gap-x-1.5"
          aria-live="polite"
        >
          {isLessonLoading ? (
            <span className="text-gray-500">…</span>
          ) : nextLesson ? (
            <>
              <span>upcoming student:</span>
              <span className="font-semibold">{nextLesson.name}</span>
              {lessonDetails.length > 0 && (
                <span className="whitespace-nowrap tabular-nums">
                  ({lessonDetails.join(" · ")})
                </span>
              )}
            </>
          ) : (
            <span className="text-gray-500">no pending lessons</span>
          )}
        </p>
      )}
    </div>
  );
};
