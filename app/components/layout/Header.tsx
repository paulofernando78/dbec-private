import { useSession } from "@/hooks/useSession";
import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router";

import { Button } from "@/components/ui/Button/Button";

import { X } from "lucide-react";
import { AccountSummary } from "./AccountSummary";
import {
  DASHBOARD_PATH_STORAGE_KEY,
  SELECTED_STUDENT_STORAGE_KEY,
} from "@/utils/session-storage";

type SelectedStudent = {
  studentId: string;
  name: string;
  schedule: string;
  time: string;
  lastSeenMs?: number;
};

export const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const session = useSession();
  const [selectedStudent, setSelectedStudent] =
    useState<SelectedStudent | null>(null);
  const [connectedStudentCount, setConnectedStudentCount] = useState(0);

  const location = useLocation();

  const isPresentationPage =
    location.pathname === "/" || location.pathname === "/about";
  const loginParams = new URLSearchParams(location.search);
  const sessionExpired = loginParams.get("login") === "expired";

  useEffect(() => {
    if (
      sessionExpired ||
      new URLSearchParams(location.search).get("login") === "required"
    ) {
      setIsLoginOpen(true);
    }
  }, [location.search, sessionExpired]);

  useEffect(() => {
    const openLogin = () => {
      setLoginError("");
      setIsLoginOpen(true);
    };

    window.addEventListener("dbec:open-login", openLogin);
    return () => window.removeEventListener("dbec:open-login", openLogin);
  }, []);

  useEffect(() => {
    let isCurrent = true;

    if (session?.role !== "teacher") {
      setSelectedStudent(null);
      setConnectedStudentCount(0);
      return;
    }

    const selectedStudentId = localStorage.getItem(
      SELECTED_STUDENT_STORAGE_KEY,
    );
    if (!selectedStudentId) setSelectedStudent(null);

    const loadStudents = () =>
      fetch("/api/students", { headers: { Accept: "application/json" } })
        .then(async (response) => {
          if (!response.ok) return null;
          const result = (await response.json()) as {
            students?: SelectedStudent[];
          };
          return result.students ?? [];
        })
        .then((students) => {
          if (!isCurrent || !students) return;
          const now = Date.now();
          setConnectedStudentCount(
            students.filter(
              (student) =>
                student.lastSeenMs && now - student.lastSeenMs < 90_000,
            ).length,
          );
          setSelectedStudent(
            students.find(
              (student) => student.studentId === selectedStudentId,
            ) ?? null,
          );
        })
        .catch(() => {});

    void loadStudents();
    const intervalId = window.setInterval(() => void loadStudents(), 30_000);
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void loadStudents();
    };
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      isCurrent = false;
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [session?.role, location.pathname]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError("");

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
      }),
    });

    if (response.ok) {
      const result = (await response.json()) as { redirectTo?: string };
      const redirectTo = result.redirectTo ?? "/dashboard";
      localStorage.setItem(DASHBOARD_PATH_STORAGE_KEY, redirectTo);
      const next = loginParams.get("next");
      const destination = next?.startsWith("/")
        ? URL.parse(next, window.location.origin)
        : null;
      window.location.assign(
        sessionExpired && destination?.origin === window.location.origin
          ? destination.href
          : redirectTo,
      );
      return;
    }

    const result = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    setLoginError(result?.error ?? "Não foi possível entrar.");
    setIsSubmitting(false);
  };

  return (
    <>
      {(!isPresentationPage || session) && (
        <div className="w-full shrink-0 overflow-hidden rounded-xl bg-(--surface) p-4">
          <div
            className={`grid min-h-10 items-center ${
              isPresentationPage
                ? "grid-cols-[auto_minmax(0,1fr)] gap-4"
                : "grid-cols-1"
            }`}
          >
            <div
              className={`flex min-w-0 items-center gap-4 justify-self-start ${isPresentationPage ? "" : "w-full overflow-x-auto overflow-y-hidden"}`}
            >
              {!isPresentationPage && session && (
                <>
                  <AccountSummary
                    name={session.displayName}
                    role={session.role}
                    online={session.role === "student"}
                    subtitle={
                      session.role === "student" ? "Full access" : "Teacher"
                    }
                    className={
                      selectedStudent
                        ? "border-r border-gray-300 pr-4 dark:border-gray-600"
                        : ""
                    }
                  />
                  {session.role === "teacher" && (
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${connectedStudentCount > 0 ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"}`}
                      aria-label={`${connectedStudentCount} alunos conectados`}
                      title={`${connectedStudentCount} alunos conectados`}
                    >
                      {connectedStudentCount}
                    </span>
                  )}
                  {selectedStudent && (
                    <AccountSummary
                      name={selectedStudent.name}
                      role="student"
                      online={Boolean(
                        selectedStudent.lastSeenMs &&
                        Date.now() - selectedStudent.lastSeenMs < 90_000,
                      )}
                      subtitle={`${selectedStudent.schedule} · ${selectedStudent.time}`}
                    />
                  )}
                </>
              )}
            </div>
            <div className="flex min-w-0 items-center gap-4 justify-self-end">
              {session && isPresentationPage && (
                <AccountSummary
                  name={session.displayName}
                  role={session.role}
                  online={session.role === "student"}
                  subtitle={
                    session.role === "student" ? "Full access" : "Teacher"
                  }
                />
              )}
            </div>
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsLoginOpen(false);
          }}
        >
          <div className="pointer-events-none flex w-full justify-center">
            <form
              onSubmit={handleLogin}
              className="pointer-events-auto w-full max-w-sm rounded-lg border border-gray-300 bg-white p-4 text-gray-900 shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="login-title"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 id="login-title" className="text-xl font-bold">
                  Login
                </h2>
                <Button
                  onClick={() => setIsLoginOpen(false)}
                  ariaLabel="Fechar login"
                  icon={<X />}
                />
              </div>

              {sessionExpired && (
                <p className="mb-4 text-sm" role="status">
                  Você foi desconectado após 10 minutos de inatividade. Faça
                  login novamente para continuar.
                </p>
              )}

              <label className="mb-3 block">
                <span className="mb-1 block font-semibold">Usuário</span>
                <input
                  name="username"
                  autoComplete="username"
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </label>

              <label className="mb-4 block">
                <span className="mb-1 block font-semibold">Senha</span>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </label>

              {loginError && (
                <p
                  className="mb-3 text-sm font-semibold text-red-600"
                  role="alert"
                >
                  {loginError}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="list"
                className="w-full! bg-gray-900! px-4 py-2 font-bold text-white! hover:bg-gray-700! [&>span>span]:justify-center"
              >
                {isSubmitting ? "Entrando…" : "Entrar"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
