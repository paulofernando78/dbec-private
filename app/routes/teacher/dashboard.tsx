import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { DashboardNotes } from "@/components/content/DashboardNotes";
import { AiTutor } from "@/components/content/AiTutor";
import { DashboardProgress } from "@/components/content/DashboardProgress";
import { Calendar } from "@/components/content/Calendar";
import { PageHeader } from "@/components/content/PageHeader";
import { StudentForm } from "@/components/content/StudentForm";
import { StudentEditFields } from "@/components/content/StudentEditFields";
import { StudentReport } from "@/components/content/StudentReport";
import { TeacherForm } from "@/components/content/TeacherForm";
import { UnassignedStudents } from "@/components/content/UnassignedStudents";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { useNotesRealtime } from "@/hooks/useNotesRealtime";
import { combineNotes } from "@/utils/shared-notes";
import type { Teacher } from "@/utils/teachers";
import {
  getCourseProgressSummary,
  type CourseProgressSummary,
} from "@/utils/course-progress";

import { students as developmentStudents } from "@/data/students";
import { ROSTER_POLL_MS } from "../../../shared/roster-version.mjs";
import { SELECTED_STUDENT_STORAGE_KEY } from "@/utils/session-storage";

const localStudents = Object.entries(developmentStudents).map(
  ([studentId, student]) => ({
    studentId,
    username: studentId.split("-")[0],
    name: student.name,
    schedule: student.schedule,
    time: student.time,
    plan: "free" as const,
  }),
);

function getLocalStudent(studentId: string) {
  const student =
    developmentStudents[studentId as keyof typeof developmentStudents];

  if (!student) return null;

  return {
    student: {
      studentId,
      name: student.name,
      schedule: student.schedule,
      time: student.time,
      plan: "free" as const,
    },
    notes: { teacher: "", student: "" },
    calendar: [] as Array<{
      date: string;
      status: string;
      replacementDate?: string;
    }>,
  };
}

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [students, setStudents] = useState<any[]>([]);
  const [data, setData] = useState<any>(null);
  const [notes, setNotes] = useState({ teacher: "", student: "" });
  const [teacherDisplayName, setTeacherDisplayName] = useState("Professor");
  const [isAdmin, setIsAdmin] = useState(false);
  const [viewerId, setViewerId] = useState<number | undefined>(undefined);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [calendar, setCalendar] = useState<Record<string, string>>({});
  const [replacementDates, setReplacementDates] = useState<
    Record<string, string>
  >({});
  const calendarSaves = useRef(new Map<string, Promise<void>>());
  const [isLoadingStudent, setIsLoadingStudent] = useState(false);
  const [studentError, setStudentError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const [progress, setProgress] = useState<CourseProgressSummary | null>(null);
  // Última assinatura conhecida da lista; comparada no ciclo curto.
  const rosterVersionRef = useRef<string | null>(null);
  const student = data?.student;
  // O cadastro completo (username, email, phone) vem do roster; o
  // /api/dashboard devolve só o necessário para calendário e notas.
  const rosterStudent =
    students.find((entry) => entry.studentId === studentId) ?? null;
  const modalStudentName = rosterStudent?.name ?? student?.name;
  const modalStudentSchedule = rosterStudent?.schedule ?? student?.schedule;
  const modalStudentTime = rosterStudent?.time ?? student?.time;
  // Alunos sem professor ficam numa fila de reatribuição; os demais pertencem a
  // alguém (o próprio professor logado ou, no caso do admin, a outro professor).
  const unassignedStudents = students.filter(
    (entry) => entry.teacherId == null,
  );
  const assignedStudents = students.filter((entry) => entry.teacherId != null);

  useEffect(() => {
    setProgress(getCourseProgressSummary());
  }, []);

  useEffect(() => {
    let active = true;
    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then((response) => (response.ok ? response.json() : null))
      .then((session) => {
        if (!active || !session) return;
        if (session.displayName) setTeacherDisplayName(session.displayName);
        setIsAdmin(session.isAdmin === true);
        setViewerId(Number.isInteger(session.userId) ? session.userId : undefined);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const { sendNote } = useNotesRealtime(
    studentId,
    "teacher",
    (noteType, content) => {
      setNotes((current) =>
        current[noteType] === content
          ? current
          : { ...current, [noteType]: content },
      );
    },
  );

  const loadStudents = async () => {
    try {
      const response = await fetch("/api/students");

      if (!response.ok) {
        throw new Error(`Students HTTP ${response.status}`);
      }

      const result = await response.json();
      setStudents(result.students ?? []);
    } catch (error) {
      if (import.meta.env.DEV) {
        setStudents(localStudents);
        return;
      }

      console.error(error);
    }
  };

  const loadTeachers = async () => {
    try {
      const response = await fetch("/api/teachers");

      // Professor não-admin não recebe a lista de colegas.
      if (!response.ok) {
        setTeachers([]);
        return;
      }

      const result = await response.json();
      setTeachers(result.teachers ?? []);
    } catch (error) {
      setTeachers([]);
      console.error(error);
    }
  };

  // Assinatura da lista: consultada a cada poucos segundos, só baixa a lista
  // completa quando muda. É o que faz um aluno criado por outro professor
  // aparecer em segundos sem trafegar a lista inteira a cada ciclo.
  const loadRosterVersion = async () => {
    try {
      const response = await fetch("/api/roster-version");

      if (!response.ok) return null;

      const result = (await response.json()) as { version?: string };
      return typeof result.version === "string" ? result.version : null;
    } catch {
      return null;
    }
  };

  const refreshRoster = async () => {
    const [students, teachers, version] = await Promise.all([
      loadStudents(),
      loadTeachers(),
      loadRosterVersion(),
    ]);

    if (version) rosterVersionRef.current = version;
  };

  // Atribuir, transferir ou desvincular é um único PATCH em users.teacher_id.
  const requestAssignment = async (
    assignmentStudentId: string,
    teacherId: number | null,
  ) => {
    const response = await fetch("/api/students", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId: assignmentStudentId, teacherId }),
    });
    const result = (await response.json().catch(() => ({}))) as {
      error?: string;
    };

    if (!response.ok) {
      throw new Error(result.error ?? "Não foi possível atribuir o aluno.");
    }
  };

  const assignStudent = async (
    assignmentStudentId: string,
    teacherId: number | null,
  ) => {
    await requestAssignment(assignmentStudentId, teacherId);
    await refreshRoster();
  };

  const assignAllStudents = async (teacherId: number) => {
    for (const entry of unassignedStudents) {
      await requestAssignment(entry.studentId, teacherId);
    }

    await refreshRoster();
  };

  useEffect(() => {
    void refreshRoster();

    // A lista se atualiza sozinha para pegar o que outra pessoa fez (outro
    // professor cadastrou um aluno, o admin atribuiu, presença online):
    //
    // - ciclo curto: consulta só a assinatura; se mudou, baixa a lista completa
    //   (é isto que faz um aluno novo aparecer em segundos);
    // - ciclo longo: baixa a lista de qualquer forma, para manter a presença
    //   (online/offline) e servir de rede de segurança.
    const versionInterval = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;

      void loadRosterVersion().then((version) => {
        if (!version || version === rosterVersionRef.current) return;

        rosterVersionRef.current = version;
        void refreshRoster();
      });
    }, ROSTER_POLL_MS);

    const fullInterval = window.setInterval(() => {
      if (document.visibilityState === "visible") void refreshRoster();
    }, 30_000);

    // Ao voltar para a aba/janela, busca na hora em vez de esperar o ciclo.
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void refreshRoster();
    };

    document.addEventListener("visibilitychange", refreshWhenVisible);
    window.addEventListener("focus", refreshWhenVisible);

    return () => {
      window.clearInterval(versionInterval);
      window.clearInterval(fullInterval);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      window.removeEventListener("focus", refreshWhenVisible);
    };
  }, []);

  useEffect(() => {
    if (studentId) {
      localStorage.setItem(SELECTED_STUDENT_STORAGE_KEY, studentId);
    }
  }, [studentId]);

  useEffect(() => {
    let cancelled = false;

    if (!studentId) {
      setData(null);
      setIsLoadingStudent(false);
      setStudentError("");
      return;
    }

    setData(null);
    setIsLoadingStudent(true);
    setStudentError("");

    const loadStudent = async () => {
      let lastError: unknown;

      for (let attempt = 0; attempt < 2; attempt += 1) {
        try {
          const response = await fetch(
            `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
          );
          if (!response.ok)
            throw new Error(`Dashboard HTTP ${response.status}`);

          const result = await response.json();
          if (cancelled) return;

          setData(result);
          setNotes({
            teacher: "",
            student: combineNotes(result.notes ?? {}, {
              id: studentId,
              name: result.student?.name,
            }),
          });
          setCalendar(
            Object.fromEntries(
              (result.calendar ?? []).map((entry: any) => [
                entry.lessonDate,
                entry.status,
              ]),
            ),
          );
          setReplacementDates(
            Object.fromEntries(
              (result.calendar ?? [])
                .filter((entry: any) => entry.replacementDate)
                .map((entry: any) => [entry.lessonDate, entry.replacementDate]),
            ),
          );
          setIsLoadingStudent(false);
          return;
        } catch (error) {
          lastError = error;

          if (import.meta.env.DEV) {
            const localData = getLocalStudent(studentId);
            if (localData && !cancelled) {
              setData(localData);
              setNotes({
                teacher: "",
                student: combineNotes(localData.notes, {
                  id: studentId,
                  name: localData.student.name,
                }),
              });
              setCalendar(
                Object.fromEntries(
                  localData.calendar.map((entry) => [entry.date, entry.status]),
                ),
              );
              setReplacementDates(
                Object.fromEntries(
                  localData.calendar
                    .filter((entry) => entry.replacementDate)
                    .map((entry) => [
                      entry.date,
                      entry.replacementDate as string,
                    ]),
                ),
              );
              setIsLoadingStudent(false);
              return;
            }
          }

          if (attempt === 0) {
            await new Promise((resolve) => setTimeout(resolve, 500));
          }
        }
      }

      if (!cancelled) {
        console.error(lastError);
        setIsLoadingStudent(false);
        setStudentError("Não foi possível carregar o aluno.");
      }
    };

    void loadStudent();

    return () => {
      cancelled = true;
    };
  }, [studentId, reloadKey]);

  const saveSharedNote = () =>
    fetch("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        noteType: "student",
        content: notes.student,
        shared: true,
      }),
    });

  const persistCalendarEntry = (
    lessonDate: string,
    status: string,
    replacementDate: string | null,
  ) => {
    if (!studentId) return;
    const key = `${studentId}:${lessonDate}`;
    const previous = calendarSaves.current.get(key) ?? Promise.resolve();
    const save = previous
      .then(async () => {
        const response = await fetch("/api/calendar", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId,
            lessonDate,
            status,
            replacementDate,
          }),
        });
        if (!response.ok) throw new Error(`Calendar HTTP ${response.status}`);
      })
      .catch((error) => console.error("Calendar save failed", error));

    calendarSaves.current.set(key, save);
    void save.then(() => {
      if (calendarSaves.current.get(key) === save)
        calendarSaves.current.delete(key);
    });
  };

  const saveCalendar = (lessonDate: string, status: string) => {
    setCalendar((current) => ({ ...current, [lessonDate]: status }));
    persistCalendarEntry(
      lessonDate,
      status,
      replacementDates[lessonDate] ?? null,
    );
  };

  const saveReplacementDate = (lessonDate: string, replacementDate: string) => {
    setReplacementDates((current) => ({
      ...current,
      [lessonDate]: replacementDate,
    }));
    persistCalendarEntry(
      lessonDate,
      calendar[lessonDate] ?? "R",
      replacementDate || null,
    );
  };

  const handleStudentChange = (nextStudentId: string) => {
    if (nextStudentId) {
      localStorage.setItem(SELECTED_STUDENT_STORAGE_KEY, nextStudentId);
    } else {
      localStorage.removeItem(SELECTED_STUDENT_STORAGE_KEY);
    }

    navigate(
      nextStudentId
        ? `/teacher/dashboard/${nextStudentId}`
        : "/teacher/dashboard",
    );
  };

  return (
    <>
      <PageHeader
        title={isAdmin ? "Admin Dashboard" : "Teacher's Dashboard"}
        variant="dashboard"
      />

      <div className="grid gap-4">
        {isAdmin && (
          <div id="teacher-registration" className="scroll-mt-4">
            <Card title="Teacher Registration">
              <TeacherForm
                teachers={teachers}
                students={students}
                onTeacherSaved={refreshRoster}
              />
            </Card>
          </div>
        )}

        <div id="student-registration" className="scroll-mt-4">          <Card title="Student Registration">
            {isAdmin && (
              <UnassignedStudents
                students={unassignedStudents}
                teachers={teachers}
                viewerId={viewerId}
                onAssign={assignStudent}
                onAssignAll={assignAllStudents}
              />
            )}

            <StudentForm
              students={assignedStudents}
              teachers={teachers}
              viewer={{ isAdmin, teacherId: viewerId }}
              selectedStudentId={studentId ?? ""}
              onStudentSelect={handleStudentChange}
              onStudentSaved={refreshRoster}
              onStudentAssign={assignStudent}
            />
          </Card>
        </div>

      </div>

      {/* O aluno selecionado abre em modal: é exatamente o que antes aparecia
          abaixo na página (calendário, progresso, report e notas/AI Tutor). */}
      {studentId && (
        <Modal
          className="max-w-6xl"
          onClose={() => handleStudentChange("")}
          title={modalStudentName ?? "Aluno"}
          subtitle={
            modalStudentSchedule
              ? `${modalStudentSchedule} · ${modalStudentTime}`
              : undefined
          }
        >
          {isLoadingStudent && <p className="text-gray-500">Carregando aluno…</p>}

          {studentError && (
            <div className="flex items-center gap-3">
              <p className="text-red-600">{studentError}</p>
              <Button onClick={() => setReloadKey((current) => current + 1)}>
                Tentar novamente
              </Button>
            </div>
          )}

          {student && (
          <div className="grid gap-4">
            {rosterStudent && (
              <StudentEditFields
                key={rosterStudent.studentId}
                student={rosterStudent}
                onSaved={refreshRoster}
              />
            )}

            <div id="calendar" className="scroll-mt-4">
              <Calendar
                key={studentId}
                studentId={studentId}
                schedule={modalStudentSchedule ?? student.schedule}
                statuses={calendar}
                replacementDates={replacementDates}
                onStatusChange={saveCalendar}
                onReplacementDateChange={saveReplacementDate}
              />
            </div>

            {progress && (
              <div id="progress" className="scroll-mt-4">
                <DashboardProgress progress={progress} />
              </div>
            )}

            <div id="report" className="scroll-mt-4">
              <Card title="Report" className="p-0!">
                <StudentReport studentId={studentId} />
              </Card>
            </div>

            <div id="notes" className="relative scroll-mt-4">
              <span id="teacher-notes" className="absolute top-0" />
              <span id="student-notes" className="absolute top-0" />
              <Card title="Notes" className="p-0!">
                <div className="grid min-h-0 w-full grid-cols-2 items-stretch gap-4 max-[900px]:grid-cols-1">
                  <DashboardNotes
                    value={notes.student}
                    author={{
                      id: "teacher",
                      name: teacherDisplayName,
                      role: "teacher",
                    }}
                    participants={[
                      {
                        id: "teacher",
                        name: teacherDisplayName,
                        role: "teacher",
                      },
                      ...(modalStudentName
                        ? [
                            {
                              id: studentId ?? modalStudentName,
                              name: modalStudentName,
                              role: "student" as const,
                            },
                          ]
                        : []),
                    ]}
                    onChange={(value) => {
                      setNotes((current) => ({ ...current, student: value }));
                      sendNote("student", value, true);
                    }}
                    onSave={saveSharedNote}
                  />
                  <AiTutor
                    className="mt-0 h-[min(44rem,calc(100dvh-12rem))] min-h-[32rem]"
                    fill
                  />
                </div>
              </Card>
            </div>
          </div>
          )}
        </Modal>
      )}
    </>
  );
}
