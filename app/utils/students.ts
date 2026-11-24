// Forma mínima de aluno usada para listar, atribuir e transferir. Quem precisa
// de mais campos (email, phone, presença) tem o seu próprio tipo local — aqui é
// só o que aparece numa linha de roster.
export type RosterStudent = {
  studentId: string;
  name: string;
  username: string;
  schedule: string;
  time: string;
  plan: "free" | "plus";
  teacherId?: number | null;
};

export const matchesStudent = (
  student: RosterStudent,
  query: string,
  ownerName = "",
) =>
  `${student.name} ${student.username} ${student.schedule} ${student.plan} ${ownerName}`
    .toLowerCase()
    .includes(query);
