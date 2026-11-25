import type { ReactNode } from "react";

const pulse = "animate-pulse rounded-md bg-slate-200 dark:bg-slate-700";

const SkeletonPanel = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={`w-full min-w-0 rounded-xl bg-(--surface) p-4 ${className}`}
  >
    {children}
  </div>
);

const SkeletonLine = ({ className = "" }: { className?: string }) => (
  <div className={`${pulse} h-3 ${className}`} />
);

/**
 * Placeholder do dashboard do aluno. Reproduz as proporções das seções reais
 * (cadastro, calendário, report e Notes/AI Tutor) para que o painel não mude
 * de tamanho quando os dados chegam.
 */
export const DashboardSkeleton = () => (
  <div
    className="grid gap-4"
    role="status"
    aria-busy="true"
    aria-label="Carregando dados do aluno"
  >
    <SkeletonPanel>
      <SkeletonLine className="mb-4 w-32" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="grid gap-2">
            <SkeletonLine className="w-20" />
            <div className={`${pulse} h-9`} />
          </div>
        ))}
      </div>
    </SkeletonPanel>

    <SkeletonPanel>
      <SkeletonLine className="mb-4 w-24" />
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 21 }, (_, index) => (
          <div key={index} className={`${pulse} h-8`} />
        ))}
      </div>
    </SkeletonPanel>

    <SkeletonPanel>
      <SkeletonLine className="mb-4 w-20" />
      <div className="grid gap-3">
        <SkeletonLine className="w-full" />
        <SkeletonLine className="w-11/12" />
        <SkeletonLine className="w-4/5" />
        <SkeletonLine className="w-2/3" />
      </div>
    </SkeletonPanel>

    <div className="grid min-h-0 w-full grid-cols-2 items-stretch gap-4 max-[900px]:grid-cols-1">
      <SkeletonPanel className="h-[min(44rem,calc(100dvh-12rem))]">
        <div className="mb-4 flex gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={`${pulse} size-8 rounded-full`} />
          ))}
        </div>
        <div className="grid gap-3">
          <SkeletonLine className="w-full" />
          <SkeletonLine className="w-11/12" />
          <SkeletonLine className="w-3/4" />
        </div>
      </SkeletonPanel>

      <SkeletonPanel className="h-[min(44rem,calc(100dvh-12rem))]">
        <div className="mb-4 flex items-center gap-3">
          <div className={`${pulse} size-10 rounded-lg`} />
          <div className="grid gap-2">
            <SkeletonLine className="w-40" />
            <SkeletonLine className="w-56" />
          </div>
        </div>
        <div className={`${pulse} h-20 w-3/4 rounded-lg`} />
      </SkeletonPanel>
    </div>
  </div>
);
