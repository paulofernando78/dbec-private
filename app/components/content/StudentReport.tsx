import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";

type Answer = { question: string; response: string; correctAnswer: string; correct: boolean };
type Visit = { id: number; path: string; title: string; startedAtMs: number; lastSeenMs: number };
type Attempt = { id: number; path: string; exercise: string; answers: Answer[]; score: number; total: number; checkedAtMs: number };
type Report = { visits: Visit[]; attempts: Attempt[] };

const formatDate = (value: number) => new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short", timeStyle: "short",
}).format(value);

export function StudentReport({ studentId }: { studentId: string }) {
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setReport(null);
    setError("");
    fetch(`/api/student-report?studentId=${encodeURIComponent(studentId)}`, {
      signal: controller.signal, cache: "no-store",
    }).then(async (response) => {
      if (!response.ok) throw new Error("Não foi possível carregar o relatório.");
      return response.json() as Promise<Report>;
    }).then(setReport).catch(() => {
      if (!controller.signal.aborted) setError("Não foi possível carregar o relatório.");
    });
    return () => controller.abort();
  }, [studentId]);

  const latestByExercise = new Map<string, Attempt>();
  for (const attempt of report?.attempts ?? []) {
    const key = `${attempt.path}:${attempt.exercise}`;
    if (!latestByExercise.has(key)) latestByExercise.set(key, attempt);
  }

  return (
    <Card title="Report">
      {error && <p className="rounded-lg bg-(--background) p-3 text-red-600">{error}</p>}
      {!report && !error && <p className="text-gray-500">Carregando relatório…</p>}
      {report && (
        <div className="grid gap-6">
          <div className="grid gap-2 sm:grid-cols-3">
            <p><strong>{report.visits.length}</strong> visitas</p>
            <p><strong>{report.attempts.length}</strong> tentativas</p>
            <p><strong>{[...latestByExercise.values()].reduce((sum, attempt) => sum + attempt.score, 0)} / {[...latestByExercise.values()].reduce((sum, attempt) => sum + attempt.total, 0)}</strong> acertos nas últimas tentativas</p>
          </div>

          <section>
            <h3 className="mb-2 text-lg font-bold">Páginas acessadas</h3>
            {report.visits.length === 0 ? <p className="text-gray-500">Nenhuma visita registrada ainda.</p> : (
              <div className="grid gap-2">
                {report.visits.map((visit) => (
                  <div key={visit.id} className="min-w-0 rounded-lg bg-(--background) p-3">
                    <p className="truncate font-semibold" title={visit.title}>{visit.title}</p>
                    <p className="truncate text-xs text-gray-500" title={visit.path}>{visit.path}</p>
                    <p className="text-sm text-gray-600">{formatDate(visit.startedAtMs)} · cerca de {Math.max(1, Math.ceil((visit.lastSeenMs - visit.startedAtMs) / 60_000))} min</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h3 className="mb-2 text-lg font-bold">Exercícios</h3>
            {report.attempts.length === 0 ? <p className="text-gray-500">Nenhuma tentativa registrada ainda.</p> : (
              <div className="grid gap-2">
                {report.attempts.map((attempt) => (
                  <details key={attempt.id} className="min-w-0 rounded-lg bg-(--background) p-3">
                    <summary className="cursor-pointer font-semibold">
                      {attempt.exercise} · {attempt.score}/{attempt.total} · {formatDate(attempt.checkedAtMs)}
                      <span className="block truncate text-xs font-normal text-gray-500">{attempt.path}</span>
                    </summary>
                    <ol className="mt-3 grid gap-2">
                      {attempt.answers.map((answer, index) => (
                        <li key={index} className={`rounded-lg border-l-4 p-2 ${answer.correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}>
                          <p className="font-medium">{index + 1}. {answer.question}</p>
                          <p className="text-sm">Resposta: {answer.response}</p>
                          {!answer.correct && <p className="text-sm">Correta: {answer.correctAnswer}</p>}
                        </li>
                      ))}
                    </ol>
                  </details>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </Card>
  );
}
