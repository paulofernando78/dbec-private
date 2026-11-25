import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ChevronDown,
  Eye,
  GraduationCap,
  Trash2,
  UserMinus,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { IconAction } from "@/components/ui/IconAction";
import { SearchField } from "@/components/ui/SearchField";
import { avatarColors, offlineStudentAvatarColors } from "@/utils/avatar-theme";
import { canAcceptStudents, teacherOptionLabel, type Teacher } from "@/utils/teachers";
import { matchesStudent } from "@/utils/students";

type StudentPlan = "free" | "plus";

type StudentFormProps = {
  students: Student[];
  teachers: Teacher[];
  viewer: { isAdmin: boolean; teacherId?: number };
  selectedStudentId: string;
  onStudentSelect: (studentId: string) => void;
  onStudentSaved: () => void | Promise<void>;
  /** teacherId null devolve o aluno para a fila "sem professor". */
  onStudentAssign: (
    studentId: string,
    teacherId: number | null,
  ) => Promise<void>;
};

type Student = {
  studentId: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  schedule: string;
  time: string;
  plan: StudentPlan;
  teacherId?: number | null;
  lastSeenMs?: number;
};

type StudentFormState = {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  schedule: string;
  time: string;
  plan: StudentPlan;
};

const scheduleOptions = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Mon / Wed",
  "Tue / Fri",
  "Tue / Thu",
  "Wed / Fri",
  "Mon / Wed / Fri",
];

const timeOptions = [
  "06:00 - 07:00",
  "06:30 - 07:30",
  "07:00 - 08:00",
  "07:30 - 08:30",
  "08:00 - 09:00",
  "08:30 - 09:30",
  "09:00 - 10:00",
  "09:30 - 10:30",
  "10:00 - 11:00",
  "10:30 - 11:30",
  "12:00 - 13:00",
  "12:30 - 13:30",
  "13:00 - 14:00",
  "13:30 - 14:30",
  "14:00 - 15:00",
  "14:30 - 15:30",
  "15:00 - 16:00",
  "15:30 - 16:30",
  "16:00 - 17:00",
  "16:30 - 17:30",
  "17:00 - 18:00",
  "17:30 - 18:30",
  "18:00 - 19:00",
  "18:30 - 19:30",
  "19:00 - 20:00",
  "19:30 - 20:30",
  "20:00 - 21:00",
  "20:30 - 21:30",
  "21:30 - 22:30",
];

const initialForm: StudentFormState = {
  name: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  schedule: "",
  time: "",
  plan: "free",
};

const teacherName = (teachers: Teacher[], teacherId: number) =>
  teachers.find((teacher) => teacher.id === teacherId)?.displayName ??
  "another teacher";

const formatBrazilianPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  if (digits.length < 3) return `(${digits}`;

  const areaCode = digits.slice(0, 2);
  const number = digits.slice(2);
  const prefixLength = number.length > 8 ? 5 : 4;
  const prefix = number.slice(0, prefixLength);
  const suffix = number.slice(prefixLength);

  return `(${areaCode}) ${prefix}${suffix ? `-${suffix}` : ""}`;
};

export const StudentForm = ({
  students,
  teachers,
  viewer,
  selectedStudentId,
  onStudentSelect,
  onStudentSaved,
  onStudentAssign,
}: StudentFormProps) => {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [deletingStudentId, setDeletingStudentId] = useState<string | null>(null);
  const [unassigningStudentId, setUnassigningStudentId] = useState<
    string | null
  >(null);
  const [pendingStudentId, setPendingStudentId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [query, setQuery] = useState("");
  const isEditing = Boolean(selectedStudentId);
  const selectedStudent = students.find(
    (student) => student.studentId === selectedStudentId,
  );
  // O admin não tem cota; o professor vê a própria cota.
  const viewerTeacher = teachers.find(
    (teacher) => teacher.id === viewer.teacherId,
  );
  const isViewerFull = viewerTeacher ? !canAcceptStudents(viewerTeacher) : false;
  const quotaLabel = viewerTeacher
    ? viewerTeacher.isUnlimited
      ? `${students.length} students · no limit`
      : `${students.length} / ${viewerTeacher.studentLimit} students`
    : `${students.length} students`;
  const normalizedQuery = query.trim().toLowerCase();
  const visibleStudents = normalizedQuery
    ? students.filter((student) => {
        const owner = teachers.find(
          (teacher) => teacher.id === student.teacherId,
        );
        return matchesStudent(student, normalizedQuery, owner?.displayName ?? "");
      })
    : students;
  const deletingStudent =
    students.find((student) => student.studentId === deletingStudentId) ?? null;
  const unassigningStudent =
    students.find((student) => student.studentId === unassigningStudentId) ??
    null;

  // Só recarrega o formulário quando a seleção muda: a lista se renova a cada
  // 30s e não pode apagar o que está sendo digitado.
  const formStudentId = useRef<string | null>(null);

  useEffect(() => {
    const student = students.find(
      (currentStudent) => currentStudent.studentId === selectedStudentId,
    );

    // A seleção pode chegar pela URL antes da lista; espera o aluno existir.
    if (selectedStudentId && !student) return;

    if (formStudentId.current === selectedStudentId) return;

    formStudentId.current = selectedStudentId;
    setForm(
      student
        ? {
            name: student.name,
            email: student.email ?? "",
            phone: formatBrazilianPhone(student.phone ?? ""),
            username: student.username,
            password: "",
            schedule: student.schedule,
            time: student.time,
            plan: student.plan,
          }
        : initialForm,
    );
  }, [selectedStudentId, students]);

  useEffect(() => {
    const username = form.username.trim().toLowerCase();

    if (!username) return;

    const timeout = window.setTimeout(() => {
      const existingStudent = students.find(
        (student) => student.username.trim().toLowerCase() === username,
      );

      if (
        existingStudent &&
        existingStudent.studentId !== selectedStudentId
      ) {
        setMessage("");
        setError("");
        onStudentSelect(existingStudent.studentId);
      }
    }, 400);

    return () => window.clearTimeout(timeout);
  }, [form.username, onStudentSelect, selectedStudentId, students]);

  const handleStudentSelection = (studentId: string) => {
    setMessage("");
    setError("");
    onStudentSelect(studentId);
  };

  const handleDeleteStudent = async (studentId: string) => {
    setIsDeleting(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/students", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Could not delete the student.");
      if (selectedStudentId === studentId) onStudentSelect("");
      await onStudentSaved();
      setMessage("Student deleted.");
      setDeletingStudentId(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Could not delete the student.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleRosterChange = async (
    studentId: string,
    teacherId: number | null,
    successMessage: string,
  ) => {
    setError("");
    setMessage("");
    setPendingStudentId(studentId);

    try {
      await onStudentAssign(studentId, teacherId);
      setUnassigningStudentId(null);
      setMessage(successMessage);
    } catch (assignError) {
      setError(
        assignError instanceof Error
          ? assignError.message
          : "Could not update the student.",
      );
    } finally {
      setPendingStudentId(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setMessage("");
    setIsSaving(true);

    try {
      const response = await fetch("/api/students", {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          studentId: selectedStudentId,
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";

      if (!contentType.includes("application/json")) {
        throw new Error("A API de estudantes retornou uma resposta inválida.");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Could not save the student.");
      }

      await onStudentSaved();
      setMessage(isEditing ? "Student updated." : "Student created.");

      if (!isEditing) {
        onStudentSelect(result.student.studentId);
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Could not save the student.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 max-[1130px]:grid-cols-1 max-[920px]:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] max-[710px]:grid-cols-1"
    >
    <div className="grid content-start gap-4 rounded-xl bg-(--background) p-4">
        {/* Name */}
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                name: event.target.value,
              }))
            }
            required
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>

        <div className="grid grid-cols-2 gap-4 max-[300px]:grid-cols-1">
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              autoComplete="email"
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
            />
          </label>

          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Phone</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  phone: formatBrazilianPhone(event.target.value),
                }))
              }
              placeholder="(  ) _____-____"
              inputMode="numeric"
              maxLength={15}
              autoComplete="tel"
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[300px]:grid-cols-1">
          {/* Username */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Username</span>
            <input
              type="text"
              value={form.username}
              onChange={(event) => {
                setMessage("");
                setError("");
                setForm((current) => ({
                  ...current,
                  username: event.target.value,
                }));
              }}
              required
              autoComplete="username"
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
            />
          </label>

          {/* Password */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Password</span>
            <input
              type="password"
              name="student-password"
              value={form.password}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
              required={!isEditing}
              minLength={8}
              autoComplete="off"
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[300px]:grid-cols-1">
          {/* Schedule */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Schedule</span>

            <div className="relative min-w-0">
              <select
                value={form.schedule}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    schedule: event.target.value,
                  }))
                }
                required
                className="w-full min-w-0 appearance-none rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-3"
              >
                <option value="">...</option>

                {scheduleOptions.map((schedule) => (
                  <option key={schedule} value={schedule}>
                    {schedule}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-500" />
            </div>
          </label>

          {/* Time */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Time</span>

            <div className="relative min-w-0">
              <select
                value={form.time}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    time: event.target.value,
                  }))
                }
                required
                className="w-full min-w-0 appearance-none rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-3"
              >
                <option value="">...</option>

                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-500" />
            </div>
          </label>
        </div>

        {error && (
          <p role="alert" className="text-sm font-semibold text-red-600">
            {error}
          </p>
        )}

        {message && (
          <p role="status" className="text-sm font-semibold text-green-700">
            {message}
          </p>
        )}

        {selectedStudent && (
          <div
            role="status"
            className="flex flex-col items-stretch gap-4 rounded-lg border border-amber-300 bg-amber-50 p-3"
          >
            <div>
              <p className="text-sm font-bold text-amber-950">
                Existing student found — editing {selectedStudent.name}.
              </p>
              <p className="text-xs text-amber-800">
                Leave the password blank to keep the current password.
              </p>
            </div>

            <Button
              type="button"
              onClick={() => handleStudentSelection("")}
              className="shrink-0!"
            >
              Cancel editing
            </Button>
          </div>
        )}

        <div>
          {!isEditing && isViewerFull && (
            <p className="mb-2 text-xs font-semibold text-amber-800">
              You reached your limit of {viewerTeacher?.studentLimit} students.
              Ask the admin to raise it.
            </p>
          )}

          <Button
            type="submit"
            fullWidth
            disabled={isSaving || (!isEditing && isViewerFull)}
          >
            {isSaving
              ? isEditing
                ? "Updating student..."
                : "Adding student..."
              : isEditing
                ? "Update student"
                : "Add student"}
          </Button>
        </div>
      </div>

      <div className="min-w-0 rounded-xl bg-(--background) p-4">
        <div className="min-w-0 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="block text-sm font-semibold">Students</span>
            <span className="text-xs font-semibold text-gray-500">
              {quotaLabel}
            </span>
          </div>

          <SearchField
            value={query}
            onChange={setQuery}
            placeholder="Search students…"
            ariaLabel="Search students"
          />

          {/* A lista rola dentro do card: não deixa o formulário esticar junto. */}
          <div className="grid max-h-[70vh] gap-4 overflow-y-auto pr-1">
          {students.length > 0 && visibleStudents.length === 0 && (
            <p className="text-sm text-gray-500">
              No students match “{query.trim()}”.
            </p>
          )}

          {visibleStudents.map((student) => {
            const isSelected = selectedStudentId === student.studentId;
            const isOnline = Boolean(student.lastSeenMs && Date.now() - student.lastSeenMs < 90_000);
            const isPending = pendingStudentId === student.studentId;
            const transferTargets = teachers.filter(
              (teacher) =>
                teacher.active !== 0 && teacher.id !== student.teacherId,
            );
            // O admin vê alunos de outros professores, então mostra o responsável.
            const owner = viewer.isAdmin
              ? teachers.find((teacher) => teacher.id === student.teacherId)
              : undefined;

            return (
              <div key={student.studentId} className="min-w-0">
                <div className={`flex w-full min-w-0 flex-wrap items-center gap-x-1 gap-y-2 px-2 rounded-xl transition-colors hover:bg-(--surface) ${isSelected ? "bg-(--surface)" : ""}`}>
                  <button
                    type="button"
                    onClick={() => handleStudentSelection(student.studentId)}
                    className="flex min-w-64 flex-1 items-center gap-3 rounded-xl py-2 pr-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: (isOnline ? avatarColors.student : offlineStudentAvatarColors).background,
                        color: (isOnline ? avatarColors.student : offlineStudentAvatarColors).dot,
                      }}
                      title={isOnline ? "Online" : "Offline"}
                      aria-label={isOnline ? "Online" : "Offline"}
                    >
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </span>

                    <span className="block min-w-0 flex-1">
                      <span className="block max-w-full truncate text-sm font-semibold" title={student.name}>{student.name}</span>
                      <span className="block max-w-full truncate text-xs font-normal text-gray-500" title={`${student.schedule} · ${student.time}`}>
                        {student.schedule} · {student.time}
                        {owner ? ` · ${owner.displayName}` : ""}
                      </span>
                    </span>
                  </button>

                  <div className="flex shrink-0 items-center gap-1">
                    <IconAction
                      icon={<Eye />}
                      label={`View ${student.name}`}
                      onClick={() => handleStudentSelection(student.studentId)}
                    />

                    {transferTargets.length > 0 && (
                      <div className="relative w-36 shrink-0">
                        <select
                          value=""
                          disabled={isPending}
                          aria-label={`Transfer ${student.name} to another teacher`}
                          onChange={(event) => {
                            const teacherId = Number(event.target.value);
                            if (!Number.isInteger(teacherId)) return;
                            void handleRosterChange(
                              student.studentId,
                              teacherId,
                              `Student transferred to ${teacherName(teachers, teacherId)}.`,
                            );
                          }}
                          className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-3 text-sm disabled:opacity-55"
                        >
                          <option value="">Transfer to…</option>

                          {transferTargets.map((teacher) => (
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
                          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}

                    <IconAction
                      icon={<UserMinus />}
                      label={`Remove ${student.name} from the list`}
                      disabled={isPending}
                      onClick={() => {
                        setMessage("");
                        setError("");
                        setUnassigningStudentId(student.studentId);
                      }}
                    />

                    {viewer.isAdmin && (
                      <IconAction
                        icon={<Trash2 />}
                        label={`Delete ${student.name}`}
                        disabled={isPending}
                        onClick={() => {
                          setMessage("");
                          setError("");
                          setDeletingStudentId(student.studentId);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {unassigningStudent && (
        <ConfirmDialog
          title={`Remove ${unassigningStudent.name} from your list?`}
          description="Their notes, calendar and progress stay in the course; the student goes back to “no teacher”."
          confirmLabel="Remove from list"
          isPending={pendingStudentId === unassigningStudent.studentId}
          tone="warning"
          error={error}
          onConfirm={() =>
            void handleRosterChange(
              unassigningStudent.studentId,
              null,
              "Student moved to “no teacher”.",
            )
          }
          onCancel={() => setUnassigningStudentId(null)}
        />
      )}

      {deletingStudent && (
        <ConfirmDialog
          title={`Delete ${deletingStudent.name}?`}
          description="The student and their saved data will be deleted."
          confirmLabel="Delete student"
          isPending={isDeleting}
          error={error}
          onConfirm={() => void handleDeleteStudent(deletingStudent.studentId)}
          onCancel={() => setDeletingStudentId(null)}
        />
      )}
    </form>
  );
};
