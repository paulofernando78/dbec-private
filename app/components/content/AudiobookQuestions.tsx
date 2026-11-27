import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Radio } from "@/features/exercises/Radio";
import type { AudiobookQuestion } from "@/data/skills/listening/audiobooks/index";

type AudiobookQuestionEntry = string | AudiobookQuestion;

const hasOptions = (
  question: AudiobookQuestionEntry,
): question is AudiobookQuestion =>
  typeof question !== "string" && Array.isArray(question.options);

const shuffle = <T,>(items: readonly T[]): T[] => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

export function AudiobookQuestions({ questions, answers }: {
  questions: readonly AudiobookQuestionEntry[];
  answers?: readonly string[];
}) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [choiceQuestions] = useState(() =>
    questions.filter(hasOptions).map((question) => ({
      question: question.question,
      options: shuffle(question.options),
    })),
  );

  if (questions.length === 0) return null;

  if (questions.every(hasOptions)) {
    return (
      <div className="mt-3 rounded-lg bg-(--background) p-3">
        <h3 className="mb-2 text-lg font-black">Answer</h3>
        <Radio
          exercise={{
            questions: choiceQuestions.map((question) => ({
              question: question.question,
              options: question.options.map((option) => ({
                option: option.option,
                isCorrect: option.isCorrect,
              })),
            })),
          }}
        />
      </div>
    );
  }

  return (
    <div className="mt-3 rounded-lg bg-(--background) p-3">
      <h3 className="mb-2 text-lg font-black">Answer</h3>
      <ul className="space-y-1">
        {questions.map((question, index) => (
          <li key={index}>
            {index + 1}. {typeof question === "string" ? question : question.question}
            {showAnswers && answers?.[index] && (
              <span className="text-slate-600"> — {answers[index]}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <Button
          ariaLabel={showAnswers ? "Hide answers" : "Show answers"}
          pressed={showAnswers}
          icon={showAnswers ? <EyeClosed /> : <Eye />}
          onClick={() => setShowAnswers((current) => !current)}
        />
      </div>
    </div>
  );
}
