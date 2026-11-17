import { Radio } from "@/features/exercises/Radio";
import { useEffect, useRef, useState } from "react";
import { Unscramble } from "@/features/exercises/Unscramble";
import type { ReviewData } from "@/data/learn/course/lesson-step-types";

export function ReviewStep({ data, onComplete }: { data: ReviewData; onComplete: () => void }) {
  const [results, setResults] = useState<Record<string, boolean>>({});
  const endRef = useRef<HTMLDivElement>(null);
  const expected = data.sections.flatMap((section, index) => [
    ...(section.questions.length ? [`${index}-questions`] : []),
    ...(section.sentences.length ? [`${index}-sentences`] : []),
  ]);
  const allCorrect = expected.length > 0 && expected.every((key) => results[key]);

  useEffect(() => {
    const end = endRef.current;
    if (!allCorrect || !end) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        onComplete();
      }
    }, { threshold: 1 });
    observer.observe(end);
    return () => observer.disconnect();
  }, [allCorrect, onComplete]);

  const updateResult = (key: string, complete: boolean) => {
    setResults((current) => ({ ...current, [key]: complete }));
  };

  return (
    <div className="rounded-2xl bg-(--surface) p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-4">
        {data.sections.map((section, index) => (
          <section
            key={section.lessonTitle}
            className="rounded-xl bg-(--background) p-4"
          >
            <h4 className="mb-4 text-lg font-black">{section.lessonTitle}</h4>
            {section.questions.length > 0 && (
              <Radio
                onCompletionChange={(complete) => updateResult(`${index}-questions`, complete)}
                exercise={{
                  questions: section.questions.map((item) => ({
                    question: item.context
                      ? `${item.context} — ${item.question}`
                      : item.question,
                    options: item.options.map((option) => ({
                      option,
                      isCorrect: option === item.answer,
                    })),
                  })),
                }}
              />
            )}
            {section.sentences.length > 0 && (
              <div className={section.questions.length > 0 ? "mt-4" : undefined}>
                <Unscramble
                  onCompletionChange={(complete) => updateResult(`${index}-sentences`, complete)}
                  instruction={`Rebuild key sentences from “${section.lessonTitle}.”`}
                  exercise={{ items: section.sentences }}
                />
              </div>
            )}
          </section>
        ))}
      </div>
      {data.task && (
        <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700">
            Final task
          </p>
          <p className="mt-1 font-semibold text-slate-800">{data.task}</p>
          {data.taskSteps?.length ? (
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-700">
              {data.taskSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          ) : null}
          {data.taskExample && (
            <p className="mt-3 text-sm text-slate-700">
              <strong>Questions you can ask</strong>
              <span className="mt-1 block">{data.taskExample}</span>
            </p>
          )}
          {data.successCriteria?.length ? (
            <>
              <p className="mt-3 text-sm font-bold text-slate-700">Success criteria</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {data.successCriteria.map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      )}
      <div ref={endRef} className="h-px" aria-hidden="true" />
    </div>
  );
}
