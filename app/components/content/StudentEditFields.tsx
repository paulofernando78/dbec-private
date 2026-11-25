import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  formatBrazilianPhone,
  scheduleOptions,
  timeOptions,
} from "@/utils/students";

export type StudentEditRecord = {
  studentId: string;
  username: string;
  name: string;
  email?: string;
  phone?: string;
  schedule: string;
  time: string;
  plan: "free" | "plus";
};

type StudentEditState = {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  schedule: string;
  time: string;
  plan: "free" | "plus";
};

/**
 * Edição do cadastro do aluno dentro do modal, no topo. Montado com
 * `key={student.studentId}`: o roster é recarregado a cada ciclo, mas o
 * componente não remonta e o que está sendo digitado não é apagado.
 */
export const StudentEditFields = ({
  student,
  onSaved,
}: {
  student: StudentEditRecord;
  onSaved: () => void | Promise<void>;
}) => {
  const [form, setForm] = useState<StudentEditState>({
    name: student.name,
    email: student.email ?? "",
    phone: formatBrazilianPhone(student.phone ?? ""),
    username: student.username,
    password: "",
    schedule: student.schedule,
    time: student.time,
    plan: student.plan,
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const update = (patch: Partial<StudentEditState>) => {
    setMessage("");
    setError("");
    setForm((current) => ({ ...current, ...patch }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setIsSaving(true);

    try {
      const response = await fetch("/api/students", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: student.studentId, ...form }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Could not save the student.");
      }

      setForm((current) => ({ ...current, password: "" }));
      setMessage("Student updated.");
      await onSaved();
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Could not save the student.",
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
          value={form.name}
          onChange={(event) => update({ name: event.target.value })}
          required
          className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
        />
      </label>

      <div className="grid grid-cols-2 gap-4 max-[420px]:grid-cols-1">
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => update({ email: event.target.value })}
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
              update({ phone: formatBrazilianPhone(event.target.value) })
            }
            placeholder="(  ) _____-____"
            inputMode="numeric"
            maxLength={15}
            autoComplete="tel"
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 max-[420px]:grid-cols-1">
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Username</span>
          <input
            type="text"
            value={form.username}
            onChange={(event) => update({ username: event.target.value })}
            required
            autoComplete="username"
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>

        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Password</span>
          <input
            type="password"
            name="student-password"
            value={form.password}
            onChange={(event) => update({ password: event.target.value })}
            minLength={8}
            autoComplete="off"
            placeholder="Leave blank to keep"
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 max-[420px]:grid-cols-1">
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Schedule</span>
          <div className="relative min-w-0">
            <select
              value={form.schedule}
              onChange={(event) => update({ schedule: event.target.value })}
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

        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Time</span>
          <div className="relative min-w-0">
            <select
              value={form.time}
              onChange={(event) => update({ time: event.target.value })}
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

      <Button type="submit" fullWidth disabled={isSaving}>
        Update student
      </Button>
    </form>
  );
};
