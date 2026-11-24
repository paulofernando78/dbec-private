import { useState } from "react";
import { ChevronDown, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/SearchField";
import {
  canAcceptStudents,
  teacherOptionLabel,
  type Teacher,
} from "@/utils/teachers";
import { matchesStudent, type RosterStudent } from "@/utils/students";

type UnassignedStudentsProps = {
  students: RosterStudent[];
  teachers: Teacher[];
  /** Id do professor logado, usado pelo atalho "atribuir todos a mim". */
  viewerId?: number;
  onAssign: (studentId: string, teacherId: number) => Promise<void>;
  onAssignAll: (teacherId: number) => Promise<void>;
};

// A partir deste tamanho, a fila ganha campo de busca.
const searchThreshold = 10;

export const UnassignedStudents = ({
  students,
  teachers,
  viewerId,
  onAssign,
  onAssignAll,
}: UnassignedStudentsProps) => {
  const [query, setQuery] = useState("");
  const [pendingStudentId, setPendingStudentId] = useState<string | null>(null);
  const [isAssigningAll, setIsAssigningAll] = useState(false);
  const [error, setError] = useState("");

  // Sem fila de pendências, nada aparece — o grupo não vira ruído.
  if (students.length === 0) return null;

  const availableTeachers = teachers.filter((teacher) => teacher.active !== 0);
  const isBusy = isAssigningAll || pendingStudentId !== null;
  const canAssignAll = Number.isInteger(viewerId) && !isBusy;
  const showSearch = students.length > searchThreshold;
  const normalizedQuery = query.trim().toLowerCase();
  const visibleStudents =
    showSearch && normalizedQuery
      ? students.filter((student) => matchesStudent(student, normalizedQuery))
      : students;

  const runAssignment = async (
    studentId: string,
    assign: () => Promise<void>,
  ) => {
    setError("");
    setPendingStudentId(studentId);
    try {
      await assign();
    } catch (assignmentError) {
      setError(
        assignmentError instanceof Error
          ? assignmentError.message
          : "Não foi possível atribuir o aluno.",
      );
    } finally {
      setPendingStudentId(null);
    }
  };

  const handleAssignAll = (teacherId: number | undefined) => {
    if (teacherId === undefined || isBusy) return;

    setError("");
    setIsAssigningAll(true);
    onAssignAll(teacherId)
      .catch((assignmentError) =>
        setError(
          assignmentError instanceof Error
            ? assignmentError.message
            : "Não foi possível atribuir os alunos.",
        ),
      )
      .finally(() => setIsAssigningAll(false));
  };

  return (
    <section
      aria-labelledby="unassigned-students-title"
      className="mb-4 grid gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3
          id="unassigned-students-title"
          className="flex items-center gap-2 text-sm font-bold text-amber-950"
        >
          Sem professor
          <span className="rounded-full bg-amber-200 px-2 py-0.5 text-xs font-bold text-amber-950">
            {students.length}
          </span>
        </h3>

        <div className="flex flex-wrap items-center gap-2">
          {showSearch && (
            <SearchField
              value={query}
              onChange={setQuery}
              placeholder="Buscar aluno…"
              ariaLabel="Buscar aluno sem professor"
              className="w-44 border-amber-300 bg-white"
            />
          )}

          <Button
            icon={<UserPlus />}
            disabled={!canAssignAll}
            onClick={() => handleAssignAll(viewerId)}
          >
            {isAssigningAll ? "Atribuindo..." : "Atribuir todos a mim"}
          </Button>

          {availableTeachers.length > 0 && (
            <div className="relative min-w-0">
              <select
                value=""
                disabled={isBusy}
                aria-label="Atribuir todos os alunos sem professor a um professor"
                onChange={(event) => {
                  const teacherId = Number(event.target.value);
                  if (!Number.isInteger(teacherId)) return;
                  handleAssignAll(teacherId);
                }}
                className="w-full min-w-44 appearance-none rounded-lg border border-amber-300 bg-white py-2 pr-10 pl-3 text-sm disabled:opacity-55"
              >
                <option value="">Atribuir todos a…</option>

                {availableTeachers.map((teacher) => (
                  <option
                    key={teacher.id}
                    value={teacher.id}
                    disabled={!canAcceptStudents(teacher)}
                  >
                    {teacherOptionLabel(teacher)}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-amber-700"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-amber-800">
        Estes alunos existem com todo o histórico e apenas aguardam um
        responsável.
        {availableTeachers.length === 0
          ? " Nenhum professor cadastrado ainda — crie um em Teacher Registration."
          : " Escolha o professor responsável por cada um."}
      </p>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      {Number.isInteger(viewerId) ? null : (
        <p className="text-xs font-semibold text-amber-800">
          Entre novamente para habilitar a atribuição em massa.
        </p>
      )}

      <ul className="grid gap-1">
        {visibleStudents.map((student) => (
          <li
            key={student.studentId}
            className="flex min-w-0 flex-wrap items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-amber-100"
          >
            <span className="flex min-w-0 flex-1 flex-col">
              <span
                className="truncate text-sm font-semibold text-amber-950"
                title={student.name}
              >
                {student.name}
              </span>
              <span className="truncate text-xs text-amber-800">
                @{student.username} · {student.plan} · {student.schedule} ·{" "}
                {student.time}
              </span>
            </span>

            <div className="relative min-w-0 shrink-0">
              <select
                value=""
                disabled={isBusy}
                aria-label={`Atribuir ${student.name} a um professor`}
                onChange={(event) => {
                  const teacherId = Number(event.target.value);
                  if (!Number.isInteger(teacherId)) return;
                  void runAssignment(student.studentId, () =>
                    onAssign(student.studentId, teacherId),
                  );
                }}
                className="w-full min-w-44 appearance-none rounded-lg border border-amber-300 bg-white py-2 pr-10 pl-3 text-sm disabled:opacity-55"
              >
                <option value="">
                  {pendingStudentId === student.studentId
                    ? "Atribuindo…"
                    : "Atribuir a…"}
                </option>

                {availableTeachers.map((teacher) => (
                  <option
                    key={teacher.id}
                    value={teacher.id}
                    disabled={!canAcceptStudents(teacher)}
                  >
                    {teacherOptionLabel(teacher)}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-amber-700"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>

      {visibleStudents.length === 0 && (
        <p className="text-sm font-semibold text-amber-900">
          Nenhum aluno encontrado para “{query.trim()}”.
        </p>
      )}
    </section>
  );
};
