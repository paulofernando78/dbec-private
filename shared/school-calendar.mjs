// Calendário letivo fixo: o Calendar renderiza os doze meses deste ano.
//
// O mesmo módulo alimenta a sincronização de aulas pendentes no servidor
// (functions/api/students.js) e no dev server, para que o mapa de datas gerado
// ao cadastrar o aluno seja idêntico nos dois ambientes.

export const CALENDAR_YEAR = 2026;

export const SCHOOL_WEEKDAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

// O professor está no fuso do Brasil, mas o servidor roda em UTC: sem forçar o
// fuso, à noite o "hoje" já seria amanhã e a aula de hoje não ficaria pendente.
const brazilDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const todayDateKey = () => {
  const parts = Object.fromEntries(
    brazilDateFormatter
      .formatToParts(new Date())
      .map(({ type, value }) => [type, value]),
  );

  return `${parts.year}-${parts.month}-${parts.day}`;
};

// Feriados e férias de 2026. O Calendar os mostra como "H" e a geração
// automática de aulas pendentes não marca aula nesses dias.
export const HOLIDAY_DATES = [
  "2026-01-01", // Janeiro: Confraternização Universal
  "2026-02-16", // Fevereiro: Carnaval (Segunda)
  "2026-02-17", // Fevereiro: Carnaval (Terça)
  "2026-04-03", // Abril: Paixão de Cristo (Sexta-feira Santa)
  "2026-04-21", // Abril: Tiradentes
  "2026-05-01", // Maio: Dia do Trabalhador
  "2026-06-04", // Junho: Corpus Christi
  "2026-09-07", // Setembro: Independência do Brasil
  "2026-10-12", // Outubro: Nossa Senhora Aparecida / Dia das Crianças
  "2026-10-15", // Outubro: Dia do Professor (Feriado Escolar)
  "2026-11-02", // Novembro: Finados
  "2026-11-15", // Novembro: Proclamação da República
  "2026-11-20", // Novembro: Dia da Consciência Negra
  "2026-12-24", // Dezembro: Pre-Natal
  "2026-12-25", // Dezembro: Natal
  "2026-12-26", // Dezembro: Férias
  "2026-12-27", // Dezembro: Férias
  "2026-12-28", // Dezembro: Férias
  "2026-12-29", // Dezembro: Férias
  "2026-12-30", // Dezembro: Férias
  "2026-12-31", // Dezembro: Férias
];

const holidayDateSet = new Set(HOLIDAY_DATES);

export const isHoliday = (dateKey) => holidayDateSet.has(dateKey);

// "Tue / Fri" → Set { "Tue", "Fri" }. Ignora espaços e entradas vazias.
export const parseScheduleDays = (schedule) =>
  new Set(
    String(schedule ?? "")
      .split("/")
      .map((day) => day.trim())
      .filter(Boolean),
  );

// Todas as datas do calendário que caem nos dias de aula do aluno, de `from`
// (inclusive) até 31 de dezembro. O calendário é só do CALENDAR_YEAR, então
// nada fora dele é gerado.
export const lessonDateKeys = (schedule, from) => {
  const days = parseScheduleDays(schedule);

  if (days.size === 0) return [];

  const firstDay = Date.UTC(CALENDAR_YEAR, 0, 1);
  const lastDay = Date.UTC(CALENDAR_YEAR, 11, 31);
  const requestedStart = Date.parse(`${from}T00:00:00Z`);
  const cursor = new Date(
    Number.isFinite(requestedStart) ? Math.max(requestedStart, firstDay) : firstDay,
  );
  const keys = [];

  while (cursor.getTime() <= lastDay) {
    const key = cursor.toISOString().slice(0, 10);

    if (days.has(SCHOOL_WEEKDAYS[cursor.getUTCDay()]) && !isHoliday(key)) {
      keys.push(key);
    }

    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return keys;
};
