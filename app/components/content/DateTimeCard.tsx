import { CalendarDays, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Contact } from "../layout/Contact";

type DateTimeCardProps = {
  className?: string;
  compact?: boolean;
};

export const DateTimeCard = ({
  className = "",
  compact = false,
}: DateTimeCardProps) => {
  const [now, setNow] = useState<Date | null>(null);

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

  if (!now) return null;

  const fullDate = new Intl.DateTimeFormat("en-US", {
    ...(compact
      ? ({ weekday: "short", month: "short", day: "numeric" } as const)
      : ({ dateStyle: "full" } as const)),
  }).format(now);
  const fullTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(now);

  return (
    <div className={`${compact ? "p-3!" : ""} ${className}`}>
      <div
        className={`flex items-center justify-end ${
          compact
            ? "flex-nowrap gap-3 whitespace-nowrap"
            : "flex-wrap gap-x-4 gap-y-3 rounded-xl bg-(--background)"
        }`}
      >
        <div className={`flex items-center ${compact ? "gap-1" : "gap-3"}`}>
          <CalendarDays size={22} className="shrink-0 text-gray-500" />
          <time dateTime={now.toISOString()}>
            <span className="font-bold">{fullDate}</span>
          </time>
        </div>
        {!compact && (
          <span
            aria-hidden="true"
            className="text-slate-400 max-[522px]:opacity-0 max-[391px]:hidden"
          >
            |
          </span>
        )}
        <div
          className={`flex items-center tabular-nums ${compact ? "gap-1" : "gap-3"}`}
        >
          <Clock size={22} className="shrink-0 text-gray-500" />
          <time dateTime={now.toISOString()}>
            <span className="font-bold">{fullTime}</span>
          </time>
        </div>
      </div>
    </div>
  );
};
