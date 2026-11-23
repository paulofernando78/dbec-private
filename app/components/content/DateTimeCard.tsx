import { useEffect, useState } from "react";

export const DateTimeCard = ({ className = "" }: { className?: string }) => {
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
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(now);
  const fullTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(now);

  return (
    <div className={`text-[clamp(0.875rem,calc(100cqw/13),1.5rem)] ${className}`}>
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
    </div>
  );
};
