import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AudiobookQuestions({ questions, answers }: {
  questions: readonly string[];
  answers: readonly string[];
}) {
  const [showAnswers, setShowAnswers] = useState(false);

  if (questions.length === 0) return null;

  return (
    <div className="mt-3 rounded-lg bg-(--background) p-3">
      <h3 className="mb-2 text-lg font-black">Answer</h3>
      <ul className="space-y-1">
        {questions.map((question, index) => (
          <li key={question}>
            {index + 1}. {question}
            {showAnswers && answers[index] && (
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
