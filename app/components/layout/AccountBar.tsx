import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { AccountSummary } from "./AccountSummary";
import { useSession } from "@/hooks/useSession";
import { SELECTED_STUDENT_STORAGE_KEY } from "@/utils/session-storage";

type SelectedStudent = {
  studentId: string;
  name: string;
  schedule: string;
  time: string;
  lastSeenMs?: number;
};

// O admin também entra como role "teacher"; só o rótulo diferencia os dois.
const accountSubtitle = (session: {
  role: "teacher" | "student";
  isAdmin?: boolean;
}) => {
  if (session.role === "student") return "Full access";
  return session.isAdmin ? "Admin" : "Teacher";
};

// Faixa da conta no topo: avatar, professores e alunos conectados.
export const AccountBar = ({ className }: { className?: string }) => {
  const session = useSession();
  const location = useLocation();
  const [selectedStudent, setSelectedStudent] =
    useState<SelectedStudent | null>(null);
  const [connectedStudentCount, setConnectedStudentCount] = useState(0);
  const [connectedTeacherCount, setConnectedTeacherCount] = useState(0);

  useEffect(() => {
    let isCurrent = true;

    if (session?.role !== "teacher") {
      setSelectedStudent(null);
      setConnectedStudentCount(0);
      setConnectedTeacherCount(0);
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

    const loadTeachers = () =>
      fetch("/api/teachers", { headers: { Accept: "application/json" } })
        .then(async (response) => {
          if (!response.ok) return null;
          const result = (await response.json()) as {
            teachers?: { id?: number; lastSeenMs?: number }[];
          };
          return result.teachers ?? [];
        })
        .then((teachers) => {
          if (!isCurrent || !teachers) return;
          const now = Date.now();
          // O próprio professor não conta: o número mostra só os outros online.
          setConnectedTeacherCount(
            teachers.filter(
              (teacher) =>
                teacher.id !== session?.userId &&
                teacher.lastSeenMs &&
                now - teacher.lastSeenMs < 90_000,
            ).length,
          );
        })
        .catch(() => {});

    const loadPresence = () => {
      void loadStudents();
      void loadTeachers();
    };

    void loadPresence();
    const intervalId = window.setInterval(() => void loadPresence(), 30_000);
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void loadPresence();
    };
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      isCurrent = false;
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [session?.role, location.pathname]);

  if (!session) return null;

  return (
    <div
      className={`flex min-w-0 items-center gap-2 overflow-x-auto overflow-y-hidden ${className ?? ""}`}
    >
      <AccountSummary
        name={session.displayName}
        role={session.role}
        online
        subtitle={accountSubtitle(session)}
        className={
          selectedStudent
            ? "border-r border-gray-300 pr-4 dark:border-gray-600"
            : ""
        }
      />
      {session.role === "teacher" && (
        <>
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${connectedTeacherCount > 0 ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"}`}
            aria-label={`${connectedTeacherCount} professores logados`}
            title={`${connectedTeacherCount} professores logados`}
          >
            {connectedTeacherCount}
          </span>
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${connectedStudentCount > 0 ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"}`}
            aria-label={`${connectedStudentCount} alunos conectados`}
            title={`${connectedStudentCount} alunos conectados`}
          >
            {connectedStudentCount}
          </span>
        </>
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
    </div>
  );
};
