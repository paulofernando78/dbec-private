export type DashboardPayload = {
  student?: { name?: string; studentId?: string; [key: string]: unknown };
  notes?: Record<string, string>;
  calendar?: Array<{
    lessonDate: string;
    status: string;
    replacementDate?: string | null;
  }>;
  [key: string]: unknown;
};

type CacheEntry = {
  payload: DashboardPayload;
  cachedAt: number;
};

// O dashboard do aluno muda pouco entre aberturas; guardar por um minuto deixa
// a troca de aluno instantânea sem deixar o painel velho por muito tempo.
const CACHE_TTL_MS = 60_000;

const cache = new Map<string, CacheEntry>();
const pending = new Map<string, Promise<DashboardPayload>>();

const isFresh = (entry: CacheEntry) =>
  Date.now() - entry.cachedAt < CACHE_TTL_MS;

export const getCachedDashboard = (
  studentId: string,
): DashboardPayload | null => {
  const entry = cache.get(studentId);
  return entry && isFresh(entry) ? entry.payload : null;
};

/**
 * Busca o dashboard do aluno reaproveitando a requisição em voo. É o que faz
 * o prefetch no hover e a abertura do modal compartilharem um único request.
 */
export const fetchDashboard = (studentId: string): Promise<DashboardPayload> => {
  const inFlight = pending.get(studentId);
  if (inFlight) return inFlight;

  const request = fetch(
    `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
    { headers: { Accept: "application/json" } },
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Dashboard HTTP ${response.status}`);
      }

      const payload = (await response.json()) as DashboardPayload;
      cache.set(studentId, { payload, cachedAt: Date.now() });
      return payload;
    })
    .finally(() => {
      pending.delete(studentId);
    });

  pending.set(studentId, request);
  return request;
};

/** Aquece o cache quando o professor passa o mouse (ou o foco) no aluno. */
export const prefetchDashboard = (studentId: string) => {
  if (!studentId || getCachedDashboard(studentId)) return;
  void fetchDashboard(studentId).catch(() => {});
};

/** Descarta o cache de um aluno depois de editar notas ou calendário. */
export const invalidateDashboard = (studentId: string) => {
  cache.delete(studentId);
};
