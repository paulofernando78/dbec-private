export type Teacher = {
  id: number;
  username: string;
  displayName: string;
  /** Admin não tem cota de alunos e não é editado pela interface. */
  isAdmin: boolean;
  isUnlimited: boolean;
  studentLimit: number;
  studentCount: number;
  active: number;
};

export const defaultStudentLimit = 10;

export const teacherCapacityLabel = (teacher: Teacher) =>
  teacher.isUnlimited
    ? "sem limite"
    : `${teacher.studentCount} / ${teacher.studentLimit}`;

export const teacherOptionLabel = (teacher: Teacher) =>
  `${teacher.displayName} (${teacherCapacityLabel(teacher)})`;

export const canAcceptStudents = (teacher: Teacher) =>
  teacher.isUnlimited || teacher.studentCount < teacher.studentLimit;

export const matchesTeacher = (teacher: Teacher, query: string) =>
  `${teacher.displayName} ${teacher.username}`.toLowerCase().includes(query);
