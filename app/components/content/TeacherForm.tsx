import { useState, type FormEvent } from "react";
import { Eye, Trash2, UserCheck, UserRound, Users, UserX } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { FeedbackModal } from "@/components/ui/FeedbackModal";
import { IconAction } from "@/components/ui/IconAction";
import { Modal } from "@/components/ui/Modal";
import { SearchField } from "@/components/ui/SearchField";
import { useElementHeight } from "@/hooks/useElementHeight";
import {
  offlineAvatarClasses,
  onlineAvatarClasses,
  type AvatarRole,
} from "@/utils/avatar-theme";
import {
  canAcceptStudents,
  matchesTeacher,
  teacherCapacityLabel,
  type Teacher,
} from "@/utils/teachers";
import type { RosterStudent } from "@/utils/students";
import { Card } from "../ui/Card";

type TeacherFormProps = {
  teachers: Teacher[];
  /** Todos os alunos, para o modal mostrar o roster de cada professor. */
  students: RosterStudent[];
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
  onTeacherSaved,
}: TeacherFormProps) => {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [pendingTeacherId, setPendingTeacherId] = useState<number | null>(null);
  const [deletingTeacherId, setDeletingTeacherId] = useState<number | null>(null);
  const [viewingTeacherId, setViewingTeacherId] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  // No mobile as colunas empilham: a lista usa a altura do formulário para não
  // ficar mais alta do que ficaria no layout lado a lado.
  const [formRef, formHeight] = useElementHeight<HTMLFormElement>();

  const normalizedQuery = query.trim().toLowerCase();
  const visibleTeachers = normalizedQuery
    ? teachers.filter((teacher) => matchesTeacher(teacher, normalizedQuery))
    : teachers;

  // O professor vem sempre da lista (e não de uma cópia): o modal acompanha a
  // atualização do roster e some sozinho se o professor for removido.
  const viewingTeacher =
    teachers.find((teacher) => teacher.id === viewingTeacherId) ?? null;
  const viewedStudents = viewingTeacher
    ? students.filter((student) => student.teacherId === viewingTeacher.id)
    : [];

  const deletingTeacher =
    teachers.find((teacher) => teacher.id === deletingTeacherId) ?? null;

  const openTeacher = (teacher: Teacher) => {
    setMessage("");
    setError("");
    setViewingTeacherId(teacher.id);
  };

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

  // A coluna da esquerda só cria professores: a edição acontece no modal.
  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setIsSaving(true);

    try {
      await request("POST", {
        teacherId: null,
        displayName: form.displayName,
        username: form.username,
        password: form.password,
        studentLimit: Number(form.studentLimit),
      });
      // O professor criado entra na lista; o formulário volta a "novo".
      setForm(initialForm);
      setMessage("Teacher created.");
      await onTeacherSaved();
    } catch (createError) {
      setError(
        createError instanceof Error
          ? createError.message
          : "Could not save the teacher.",
      );
    } finally {
      setIsSaving(false);
    }
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
      if (viewingTeacherId === teacher.id) setViewingTeacherId(null);
      await onTeacherSaved();

      const unassigned = result.unassignedStudents ?? 0;

      return unassigned > 0
        ? `Teacher removed. ${unassigned} student(s) are now without a teacher.`
        : "Teacher removed.";
    });

  return (
    <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-stretch gap-4 max-[1130px]:grid-cols-1 max-[920px]:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] max-[710px]:grid-cols-1">
      {/* O form fecha antes da lista: o modal tem um form próprio e forms
          aninhados são inválidos. */}
      <form
        ref={formRef}
        onSubmit={handleCreate}
        autoComplete="off"
        className="grid content-start gap-4 rounded-xl bg-(--background) p-4"
      >
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
              required
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

        <div>
          <Button
            type="submit"
            fullWidth
            disabled={isSaving}
          >
            Add teacher
          </Button>
        </div>
      </form>

      {/* A coluna da direita acompanha a altura da esquerda: em telas largas ela
          é posicionada sobre a linha do grid (que tem a altura do formulário) e,
          empilhada no mobile, recebe essa mesma altura. Assim a lista rola
          dentro dela e nunca estica o card. */}
      <div
        className="relative min-w-0 max-[710px]:static min-[921px]:max-[1130px]:static"
        style={formHeight ? { height: formHeight } : undefined}
      >
        <div className="absolute inset-0 flex min-h-0 min-w-0 flex-col gap-4 overflow-hidden rounded-xl bg-(--background) p-4 max-[710px]:static max-[710px]:h-full min-[921px]:max-[1130px]:static min-[921px]:max-[1130px]:h-full">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="block text-sm font-semibold">Teachers</span>
          </div>

          <SearchField
            value={query}
            onChange={setQuery}
            placeholder="Search teachers…"
            ariaLabel="Search teachers"
          />

          {/* A lista rola dentro do card: não deixa o formulário esticar junto. */}
          <div className="grid min-h-0 flex-1 content-start gap-4 overflow-y-auto pr-1">
          {teachers.length === 0 && (
            <p className="text-sm text-gray-500">
              No teachers yet. Create one so students can be assigned to someone
              other than you.
            </p>
          )}

          {teachers.length > 0 && visibleTeachers.length === 0 && (
            <p className="text-sm text-gray-500">
              No teachers match “{query.trim()}”.
            </p>
          )}

          {visibleTeachers.map((teacher) => {
            const isPending = pendingTeacherId === teacher.id;
            const isInactive = teacher.active === 0;
            const isOnline = Boolean(
              teacher.lastSeenMs && Date.now() - teacher.lastSeenMs < 90_000,
            );

            return (
              <div key={teacher.id} className="min-w-0">
                <Card className="flex w-full min-w-0 flex-wrap items-center gap-x-1 gap-y-2 rounded-xl transition-colors bg-(--surface)">
                  {teacher.isAdmin ? (
                    <div className="flex min-w-64 flex-1 items-center gap-3">
                      <TeacherAvatar
                        role="teacher"
                        online={isOnline}
                        title={isOnline ? "Online" : "Offline"}
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
                      {/* O nome não é clicável: só o olho abre o modal. O hover
                          cinza continua na linha inteira. */}
                      <div className="flex min-w-64 flex-1 items-center gap-3 rounded-xl">
                        <TeacherAvatar
                          role="teacher"
                          online={isOnline}
                          title={isOnline ? "Online" : "Offline"}
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
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        <IconAction
                          icon={<Eye />}
                          label={`View ${teacher.displayName}`}
                          onClick={() => openTeacher(teacher)}
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
                          onClick={() => {
                            setMessage("");
                            setError("");
                            setDeletingTeacherId(teacher.id);
                          }}
                        />
                      </div>
                    </>
                  )}

                  {teacher.isAdmin && (
                    <IconAction
                      icon={<Eye />}
                      label="View my students"
                      onClick={() => openTeacher(teacher)}
                    />
                  )}
                </Card>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {deletingTeacher && (
        <ConfirmDialog
          title={`Remove ${deletingTeacher.displayName}?`}
          description={
            <>
              Their {deletingTeacher.studentCount} student(s) stay in the
              course and go back to “no teacher”. Nothing is deleted.
            </>
          }
          confirmLabel="Remove teacher"
          confirmationText={deletingTeacher.username}
          isPending={pendingTeacherId === deletingTeacher.id}
          error={error}
          onConfirm={() => void handleDelete(deletingTeacher)}
          onCancel={() => setDeletingTeacherId(null)}
        />
      )}

      {/* Avisos em modal: nada aparece embaixo do formulário, então o layout
          não se desloca ao criar, ativar ou remover um professor. O erro de
          exclusão continua dentro do ConfirmDialog. */}
      {!deletingTeacher && (error || message) && (
        <FeedbackModal
          tone={error ? "error" : "success"}
          message={error || message}
          onClose={() => {
            setError("");
            setMessage("");
          }}
        />
      )}

      {viewingTeacher && (
        <Modal
          className="max-w-xs"
          onClose={() => setViewingTeacherId(null)}
          title={viewingTeacher.isAdmin ? "My students" : viewingTeacher.displayName}
          subtitle={`@${viewingTeacher.username} · ${
            viewingTeacher.isUnlimited
              ? `${viewedStudents.length} students · no limit`
              : `${viewedStudents.length} / ${viewingTeacher.studentLimit} students`
          }`}
        >
          <div className="grid gap-4">
            {!viewingTeacher.isAdmin && (
              <TeacherEditFields
                key={viewingTeacher.id}
                teacher={viewingTeacher}
                onSaved={onTeacherSaved}
              />
            )}

            <div className="grid gap-2">
              <h4 className="text-sm font-semibold">
                Students{" "}
                <span className="font-normal text-gray-500">
                  ({viewedStudents.length})
                </span>
              </h4>

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
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${onlineAvatarClasses.student.container} ${onlineAvatarClasses.student.icon}`}
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
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

/**
 * Edição do cadastro dentro do modal. Montado com `key={teacher.id}`: como o
 * roster é recarregado a cada ciclo, o componente não remonta e o que está
 * sendo digitado não é apagado.
 */
const TeacherEditFields = ({
  teacher,
  onSaved,
}: {
  teacher: Teacher;
  onSaved: () => void | Promise<void>;
}) => {
  const [form, setForm] = useState<TeacherFormState>({
    displayName: teacher.displayName,
    username: teacher.username,
    password: "",
    studentLimit: String(teacher.studentLimit),
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setIsSaving(true);

    try {
      await request("PUT", {
        teacherId: teacher.id,
        displayName: form.displayName,
        username: form.username,
        password: form.password,
        studentLimit: Number(form.studentLimit),
      });
      setForm((current) => ({ ...current, password: "" }));
      setMessage("Teacher updated.");
      await onSaved();
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Could not save the teacher.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="grid gap-3 rounded-xl bg-(--background) p-4"
    >
      <label className="grid min-w-0 gap-1">
        <span className="text-sm font-semibold">Name</span>
        <input
          type="text"
          value={form.displayName}
          onChange={(event) => {
            setMessage("");
            setError("");
            setForm((current) => ({
              ...current,
              displayName: event.target.value,
            }));
          }}
          required
          className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
        />
      </label>

      <div className="grid grid-cols-2 gap-4 max-[420px]:grid-cols-1">
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
            onChange={(event) => {
              setMessage("");
              setError("");
              setForm((current) => ({
                ...current,
                password: event.target.value,
              }));
            }}
            minLength={8}
            autoComplete="off"
            placeholder="Leave blank to keep"
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>
      </div>

      <label className="grid min-w-0 gap-1">
        <span className="text-sm font-semibold">Student limit</span>
        <input
          type="number"
          value={form.studentLimit}
          onChange={(event) => {
            setMessage("");
            setError("");
            setForm((current) => ({
              ...current,
              studentLimit: event.target.value,
            }));
          }}
          required
          min={0}
          max={maxStudentLimit}
          inputMode="numeric"
          className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
        />
      </label>

      {Number(form.studentLimit) < teacher.studentCount && (
        <p className="text-xs font-semibold text-amber-800">
          {teacher.displayName} has {teacher.studentCount} student(s). A lower
          limit blocks new assignments but never removes anyone.
        </p>
      )}

      <Button type="submit" fullWidth disabled={isSaving}>
        Update teacher
      </Button>

      {(error || message) && (
        <FeedbackModal
          tone={error ? "error" : "success"}
          message={error || message}
          onClose={() => {
            setError("");
            setMessage("");
          }}
        />
      )}
    </form>
  );
};

const TeacherAvatar = ({
  role,
  online,
  title,
  isAdmin = false,
}: {
  role: AvatarRole;
  online: boolean;
  title: string;
  isAdmin?: boolean;
}) => {
  const colors = online ? onlineAvatarClasses[role] : offlineAvatarClasses;

  return (
    <span
      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${colors.container} ${colors.icon}`}
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
};
