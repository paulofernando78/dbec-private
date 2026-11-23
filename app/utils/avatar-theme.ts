export type AvatarRole = "teacher" | "student";

export const avatarColors: Record<
  AvatarRole,
  { background: string; border: string; dot: string }
> = {
  teacher: {
    background: "#dbeafe",
    border: "#3b82f6",
    dot: "#2563eb",
  },
  student: {
    background: "#dcfce7",
    border: "#22c55e",
    dot: "#16a34a",
  },
};

export const offlineStudentAvatarColors = {
  background: "#e5e7eb",
  border: "#d1d5db",
  dot: "#6b7280",
};
