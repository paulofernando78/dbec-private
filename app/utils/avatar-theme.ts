export type AvatarRole = "teacher" | "student";

export type AvatarColorClasses = {
  container: string;
  icon: string;
};

// Avatar de quem está logado: azul para professor, verde para aluno.
export const onlineAvatarClasses: Record<AvatarRole, AvatarColorClasses> = {
  teacher: {
    container: "bg-blue-100",
    icon: "text-blue-600",
  },
  student: {
    container: "bg-green-100",
    icon: "text-green-600",
  },
};

// Cinza para quem não está logado (ou está inativo), em qualquer papel.
export const offlineAvatarClasses: AvatarColorClasses = {
  container: "bg-gray-200",
  icon: "text-gray-500",
};

// Cores em hex dos blocos de nota, que usam estilos inline (fundo e borda).
export const noteAuthorColors: Record<
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
