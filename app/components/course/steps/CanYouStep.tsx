import { useState } from "react";

import { Checkbox } from "@/components/ui/Checkbox";
import type { CanYouData } from "@/data/course/lesson-step-types";

export function CanYouStep({
  data,
  onCompletionChange,
}: {
  data: CanYouData;
  onCompletionChange: (complete: boolean) => void;
}) {
  const [checks, setChecks] = useState(() => data.checks.map(() => false));

  return (
    <div className="rounded-2xl bg-(--surface) p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-3 rounded-xl bg-(--background) p-4">
        {data.checks.map((label, index) => (
          <div key={label} className="flex items-start gap-3">
            <Checkbox
              checked={checks[index]}
              onCheckedChange={(checked) => {
                const nextChecks = checks.map((value, currentIndex) =>
                  currentIndex === index ? checked : value,
                );
                setChecks(nextChecks);
                onCompletionChange(nextChecks.every(Boolean));
              }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
