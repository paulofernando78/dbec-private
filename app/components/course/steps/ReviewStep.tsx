import { Radio } from "@/features/exercises/Radio";
import { Unscramble } from "@/features/exercises/Unscramble";
import type { ReviewData } from "@/data/course/lesson-step-types";

export function ReviewStep({ data }: { data: ReviewData }) {
  return (
    <div className="rounded-2xl bg-(--surface) p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      {data.task && (
        <div className="mb-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700">
            Integrated task
          </p>
          <p className="mt-1 font-semibold text-slate-800">{data.task}</p>
          {data.successCriteria?.length ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {data.successCriteria.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
      <div className="grid gap-4">
        {data.sections.map((section) => (
          <section
            key={section.lessonTitle}
            className="rounded-xl bg-(--background) p-4"
          >
            <h4 className="mb-4 text-lg font-black">{section.lessonTitle}</h4>
            {section.questions.length > 0 && (
              <Radio
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
              <Unscramble
                instruction={`Rebuild key sentences from “${section.lessonTitle}.”`}
                exercise={{ items: section.sentences }}
              />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
