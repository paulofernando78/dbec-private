import type { ReactNode } from "react";

export function QuickRule({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p id={id} className="scroll-mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100">
      <strong>Regra rápida:</strong> {children}
    </p>
  );
}
