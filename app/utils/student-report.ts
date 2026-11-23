export type ExerciseAnswerReport = {
  question: string;
  response: string;
  correctAnswer: string;
  correct: boolean;
};

export function recordExerciseAttempt(exercise: string, answers: ExerciseAnswerReport[]) {
  if (typeof window === "undefined" || answers.length === 0) return;
  void fetch("/api/student-report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      kind: "attempt",
      path: window.location.pathname + window.location.hash,
      exercise,
      answers,
    }),
  }).catch(() => {});
}
