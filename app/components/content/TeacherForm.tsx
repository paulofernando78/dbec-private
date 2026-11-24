import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Eye, Trash2, UserCheck, UserRound, Users, UserX, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { IconAction } from "@/components/ui/IconAction";
import { Modal } from "@/components/ui/Modal";
import { avatarColors } from "@/utils/avatar-theme";
import {
  canAcceptStudents,
  teacherCapacityLabel,
  type Teacher,
} from "@/utils/teachers";
import type { RosterStudent } from "@/utils/students";

type TeacherFormProps = {
  teachers: Teacher[];
  /** Todos os alunos, para o olho mostrar o roster de cada professor. */
  students: RosterStudent[];
  selectedTeacherId: number | null;
  onTeacherSelect: (teacherId: number | null) => void;
  onTeacherSaved: () => void | Promise<void>;
};

type TeacherFormState = {
  displayName: string;
  username: string;
  password: string;
  studentLimit: string;
};

const initialForm: TeacherFormState = {
  displayName: "",
  username: "",
  password: "",
  studentLimit: "10",
};

const maxStudentLimit = 500;

const request = async (method: string, body: unknown) => {
  const response = await fetch("/api/teachers", {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = (await response.json().catch(() => ({}))) as {
    error?: string;
    unassignedStudents?: number;
  };

  if (!response.ok) {
    throw new Error(result.error ?? "Could not save the teacher.");
  }

  return result;
};

export const TeacherForm = ({
  teachers,
  students,
  selectedTeacherId,
  onTeacherSelect,
  onTeacherSaved,
}: TeacherFormProps) => {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [pendingTeacherId, setPendingTeacherId] = useState<number | null>(null);
  const [deletingTeacherId, setDeletingTeacherId] = useState<number | null>(null);
  const [viewingTeacher, setViewingTeacher] = useState<Teacher | null>(null);

  const viewedStudents = viewingTeacher
    ? students.filter((student) => student.teacherId === viewingTeacher.id)
    : [];

  const selectedTeacher = teachers.find(
    (teacher) => teacher.id === selectedTeacherId,
  );
  const isEditing = Boolean(selectedTeacher);

  // Só recarrega o formulário quando a seleção muda: a lista se renova a cada 30s
  // e não pode apagar o que está sendo digitado.
  const formTeacherId = useRef<number | null>(null);

  useEffect(() => {
    if (formTeacherId.current === selectedTeacherId) return;

    formTeacherId.current = selectedTeacherId;
    setForm(
      selectedTeacher
        ? {
            displayName: selectedTeacher.displayName,
            username: selectedTeacher.username,
            password: "",
            studentLimit: String(selectedTeacher.studentLimit),
          }
        : initialForm,
    );
  }, [selectedTeacherId, selectedTeacher]);

  const runAction = async (
    teacherId: number | null,
    action: () => Promise<string>,
  ) => {
    setError("");
    setMessage("");
    setPendingTeacherId(teacherId);

    try {
      setMessage(await action());
    } catch (actionError) {
      setError(
        actionError instanceof Error
          ? actionError.message
          : "Could not save the teacher.",
      );
    } finally {
      setPendingTeacherId(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const teacherId = selectedTeacher?.id ?? null;

    setIsSaving(true);
    await runAction(teacherId, async () => {
      await request(isEditing ? "PUT" : "POST", {
        teacherId,
        displayName: form.displayName,
        username: form.username,
        password: form.password,
        studentLimit: Number(form.studentLimit),
      });
      await onTeacherSaved();

      if (!isEditing) {
        // O professor criado entra na lista; o formulário volta a "novo".
        formTeacherId.current = null;
        setForm(initialForm);
        return "Teacher created.";
      }

      return "Teacher updated.";
    });
    setIsSaving(false);
  };

  const handleToggleActive = (teacher: Teacher) =>
    runAction(teacher.id, async () => {
      await request("PUT", {
        teacherId: teacher.id,
        displayName: teacher.displayName,
        username: teacher.username,
        password: "",
        studentLimit: teacher.studentLimit,
        active: teacher.active ? 0 : 1,
      });
      await onTeacherSaved();

      return teacher.active ? "Teacher deactivated." : "Teacher activated.";
    });

  const handleDelete = (teacher: Teacher) =>
    runAction(teacher.id, async () => {
      const result = await request("DELETE", { teacherId: teacher.id });

      setDeletingTeacherId(null);
      if (selectedTeacherId === teacher.id) {
        formTeacherId.current = null;
        onTeacherSelect(null);
      }
      await onTeacherSaved();

      const unassigned = result.unassignedStudents ?? 0;

      return unassigned > 0
        ? `Teacher removed. ${unassigned} student(s) are now without a teacher.`
        : "Teacher removed.";
    });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 max-[1130px]:grid-cols-1 max-[920px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[710px]:grid-cols-1"
    >
      <div className="grid gap-4 rounded-xl bg-(--background) p-4">
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Name</span>
          <input
            type="text"
            value={form.displayName}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                displayName: event.target.value,
              }))
            }
            required
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>

        <div className="grid grid-cols-2 gap-4 max-[300px]:grid-cols-1">
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

          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Password</span>
            <input
              type="password"
              name="teacher-password"
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

        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Student limit</span>
          <input
            type="number"
            value={form.studentLimit}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                studentLimit: event.target.value,
              }))
            }
            required
            min={0}
            max={maxStudentLimit}
            inputMode="numeric"
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>

        {selectedTeacher &&
          Number(form.studentLimit) < selectedTeacher.studentCount && (
            <p className="text-xs font-semibold text-amber-800">
              {selectedTeacher.displayName} has {selectedTeacher.studentCount}{" "}
              student(s). A lower limit blocks new assignments but never removes
              anyone.
            </p>
          )}

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

        {selectedTeacher && (
          <div
            role="status"
            className="flex flex-col items-stretch gap-4 rounded-lg border border-blue-300 bg-blue-50 p-3"
          >
            <div>
              <p className="text-sm font-bold text-blue-950">
                Editing {selectedTeacher.displayName} —{" "}
                {teacherCapacityLabel(selectedTeacher)} students.
              </p>
              <p className="text-xs text-blue-800">
                Leave the password blank to keep the current password.
              </p>
            </div>

            <Button
              type="button"
              onClick={() => {
                setMessage("");
                setError("");
                onTeacherSelect(null);
              }}
              className="shrink-0!"
            >
              Cancel editing
            </Button>
          </div>
        )}

        <div>
          <Button
            type="submit"
            disabled={isSaving}
            className="w-full"
          >
            {isEditing ? "Update teacher" : "Add teacher"}
          </Button>
        </div>
      </div>

      <div className="min-w-0 rounded-xl bg-(--background) p-4">
        <div className="min-w-0 space-y-4">
          <span className="block text-sm font-semibold">Teachers</span>

          {teachers.length === 0 && (
            <p className="text-sm text-gray-500">
              No teachers yet. Create one so students can be assigned to someone
              other than you.
            </p>
          )}

          {teachers.map((teacher) => {
            const isSelected = selectedTeacherId === teacher.id;
            const isPending = pendingTeacherId === teacher.id;
            const isInactive = teacher.active === 0;

            return (
              <div key={teacher.id} className="min-w-0">
                <div
                  className={`flex w-full min-w-0 flex-wrap items-center gap-x-1 gap-y-2 rounded-xl px-2 transition-colors hover:bg-(--surface) ${
                    isSelected ? "bg-(--surface)" : ""
                  }`}
                >
                  {teacher.isAdmin ? (
                    <div className="flex min-w-40 flex-1 items-center gap-3 py-2 pr-2">
                      <TeacherAvatar
                        background={avatarColors.teacher.background}
                        foreground={avatarColors.teacher.dot}
                        title="Admin"
                        isAdmin
                      />
                      <span className="block min-w-0 flex-1">
                        <span
                          className="block max-w-full truncate text-sm font-semibold"
                          title={teacher.displayName}
                        >
                          {teacher.displayName}
                        </span>
                        <span className="block max-w-full truncate text-xs text-gray-500">
                          @{teacher.username} · admin · no student limit
                        </span>
                      </span>
                    </div>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setMessage("");
                          setError("");
                          onTeacherSelect(teacher.id);
                        }}
                        className="flex min-w-40 flex-1 items-center gap-3 rounded-xl py-2 pr-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        <TeacherAvatar
                          background={
                            isInactive
                              ? avatarColors.teacher.background
                              : avatarColors.student.background
                          }
                          foreground={
                            isInactive
                              ? avatarColors.teacher.dot
                              : avatarColors.student.dot
                          }
                          title={isInactive ? "Inactive" : "Active"}
                        />
                        <span className="block min-w-0 flex-1">
                          <span
                            className="block max-w-full truncate text-sm font-semibold"
                            title={teacher.displayName}
                          >
                            {teacher.displayName}
                          </span>
                          <span className="block max-w-full truncate text-xs text-gray-500">
                            @{teacher.username} ·{" "}
                            {teacherCapacityLabel(teacher)} students
                            {isInactive ? " · inactive" : ""}
                            {canAcceptStudents(teacher) ? "" : " · full"}
                          </span>
                        </span>
                      </button>

                      <div className="flex shrink-0 items-center gap-1">
                        <IconAction
                          icon={<Eye />}
                          label={`View students of ${teacher.displayName}`}
                          onClick={() => setViewingTeacher(teacher)}
                        />

                        <IconAction
                          icon={teacher.active ? <UserX /> : <UserCheck />}
                          label={
                            teacher.active
                              ? `Deactivate ${teacher.displayName}`
                              : `Activate ${teacher.displayName}`
                          }
                          disabled={isPending}
                          onClick={() => void handleToggleActive(teacher)}
                        />

                        <IconAction
                          icon={<Trash2 />}
                          label={`Delete ${teacher.displayName}`}
                          disabled={isPending}
                          onClick={() => setDeletingTeacherId(teacher.id)}
                        />
                      </div>
                    </>
                  )}

                  {teacher.isAdmin && (
                    <IconAction
                      icon={<Eye />}
                      label="View my students"
                      onClick={() => setViewingTeacher(teacher)}
                    />
                  )}
                </div>

                {deletingTeacherId === teacher.id && (
                  <div className="ml-2 rounded-lg border border-red-200 bg-red-50 p-2 text-xs text-red-900">
                    <p>
                      Remove {teacher.displayName}? Their{" "}
                      {teacher.studentCount} student(s) stay in the course and go
                      back to “no teacher”. Nothing is deleted.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <Button
                        disabled={isPending}
                        onClick={() => void handleDelete(teacher)}
                        icon={<Trash2 />}
                      >
                        Remove teacher
                      </Button>
                      <Button
                        disabled={isPending}
                        onClick={() => setDeletingTeacherId(null)}
                        icon={<X />}
                        ariaLabel="Cancel removal"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {viewingTeacher && (
        <Modal
          onClose={() => setViewingTeacher(null)}
          title={
            viewingTeacher.isAdmin
              ? "My students"
              : `Students of ${viewingTeacher.displayName}`
          }
          subtitle={`@${viewingTeacher.username} · ${
            viewingTeacher.isUnlimited
              ? `${viewedStudents.length} students · no limit`
              : `${viewedStudents.length} / ${viewingTeacher.studentLimit} students`
          }`}
        >
          <ul className="grid gap-2">
            {viewedStudents.length === 0 && (
              <li className="rounded-lg bg-(--background) px-3 py-2 text-sm text-gray-500">
                {viewingTeacher.isAdmin
                  ? "You have no students yet."
                  : "This teacher has no students yet."}
              </li>
            )}

            {viewedStudents.map((student) => (
              <li
                key={student.studentId}
                className="flex min-w-0 items-center gap-3 rounded-lg bg-(--background) px-3 py-2"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: avatarColors.student.background,
                    color: avatarColors.student.dot,
                  }}
                  aria-hidden="true"
                >
                  <Users className="size-5" />
                </span>

                <span className="block min-w-0 flex-1">
                  <span
                    className="block truncate text-sm font-semibold"
                    title={student.name}
                  >
                    {student.name}
                  </span>
                  <span className="block truncate text-xs text-gray-500">
                    @{student.username} · {student.plan} · {student.schedule} ·{" "}
                    {student.time}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </form>
  );
};

const TeacherAvatar = ({
  background,
  foreground,
  title,
  isAdmin = false,
}: {
  background: string;
  foreground: string;
  title: string;
  isAdmin?: boolean;
}) => (
  <span
    className="flex size-10 shrink-0 items-center justify-center rounded-full"
    style={{ backgroundColor: background, color: foreground }}
    title={title}
    aria-label={title}
  >
    {isAdmin ? (
      <UserRound className="size-5" aria-hidden="true" />
    ) : (
      <Users className="size-5" aria-hidden="true" />
    )}
  </span>
);
