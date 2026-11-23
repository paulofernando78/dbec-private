import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Card } from "@/components/ui/Card";

type Answer = { question: string; response: string; correctAnswer: string; correct: boolean };
type Visit = { id: number; path: string; title: string; startedAtMs: number; lastSeenMs: number };
type Attempt = { id: number; path: string; exercise: string; answers: Answer[]; score: number; total: number; checkedAtMs: number };
type Report = { visits: Visit[]; attempts: Attempt[] };
type PageActivity = { path: string; title: string; visits: Visit[]; attempts: Attempt[]; lastActivityAtMs: number };

const formatDate = (value: number) => new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short", timeStyle: "short",
}).format(value);

function groupByPage(report: Report) {
  const pages = new Map<string, PageActivity>();
  const getPage = (path: string) => {
    let page = pages.get(path);
    if (!page) {
      page = { path, title: path, visits: [], attempts: [], lastActivityAtMs: 0 };
      pages.set(path, page);
    }
    return page;
  };

  for (const visit of report.visits) {
    const page = getPage(visit.path);
    page.visits.push(visit);
    if (visit.startedAtMs > page.lastActivityAtMs) {
      page.title = visit.title || visit.path;
      page.lastActivityAtMs = visit.startedAtMs;
    }
  }
  for (const attempt of report.attempts) {
    const page = getPage(attempt.path);
    page.attempts.push(attempt);
    page.lastActivityAtMs = Math.max(page.lastActivityAtMs, attempt.checkedAtMs);
  }
  return [...pages.values()].sort((a, b) => b.lastActivityAtMs - a.lastActivityAtMs);
}

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

  const pages = report ? groupByPage(report) : [];

  return (
    <Card title="Report">
      {error && <p className="rounded-lg bg-(--background) p-3 text-red-600">{error}</p>}
      {!report && !error && <p className="text-gray-500">Carregando relatório…</p>}
      {report && pages.length === 0 && (
        <p className="rounded-lg bg-(--background) p-3 text-gray-500">Nenhuma página acessada ou exercício verificado ainda.</p>
      )}
      {pages.length > 0 && (
        <div className="grid gap-4">
          {pages.map((page) => {
            const latestByExercise = new Map<string, Attempt>();
            for (const attempt of page.attempts) {
              if (!latestByExercise.has(attempt.exercise)) latestByExercise.set(attempt.exercise, attempt);
            }
            const latestAttempts = [...latestByExercise.values()];
            const correct = latestAttempts.reduce((sum, attempt) => sum + attempt.score, 0);
            const total = latestAttempts.reduce((sum, attempt) => sum + attempt.total, 0);

            return (
              <section key={page.path} className="min-w-0 rounded-lg bg-(--background) p-4">
                <h3 className="font-bold"><Link to={page.path} className="hover:underline focus-visible:outline-2">{page.title}</Link></h3>
                <p className="truncate text-xs text-gray-500" title={page.path}>{page.path}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  <p><strong>{page.visits.length}</strong> acessos a esta página</p>
                  <p><strong>{page.attempts.length}</strong> verificações de exercícios</p>
                  <p><strong>{correct} acertos · {total - correct} erros</strong> nas últimas verificações de cada exercício</p>
                </div>

                {page.visits.length > 0 && (
                  <details className="mt-3">
                    <summary className="cursor-pointer font-semibold">Quando acessou</summary>
                    <ul className="mt-2 grid gap-1 text-sm">
                      {page.visits.map((visit) => (
                        <li key={visit.id}>{formatDate(visit.startedAtMs)} · cerca de {Math.max(1, Math.ceil((visit.lastSeenMs - visit.startedAtMs) / 60_000))} min</li>
                      ))}
                    </ul>
                  </details>
                )}

                {page.attempts.length > 0 && (
                  <div className="mt-3 grid gap-2">
                    <h4 className="font-semibold">Exercícios verificados nesta página</h4>
                    {page.attempts.map((attempt) => (
                      <details key={attempt.id} className="min-w-0 rounded-lg bg-(--surface) p-3">
                        <summary className="cursor-pointer font-semibold">
                          {attempt.exercise} · {attempt.score}/{attempt.total} · {formatDate(attempt.checkedAtMs)}
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
            );
          })}
        </div>
      )}
    </Card>
  );
}
