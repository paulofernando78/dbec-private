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

export const scheduleOptions = [
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

export const timeOptions = [
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

/** Formata só os dígitos de um telefone brasileiro como (11) 91234-5678. */
export const formatBrazilianPhone = (value: string) => {
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
