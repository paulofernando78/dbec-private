import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";

type ModalProps = {
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
  /** Largura máxima do painel, em classes do Tailwind. */
  className?: string;
};

// Painel modal com fundo escurecido. Fecha com Esc, com o X ou clicando no fundo.
export const Modal = ({
  title,
  subtitle,
  onClose,
  children,
  className = "max-w-lg",
}: ModalProps) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 cursor-default bg-black/40"
        onClick={onClose}
      />

      <div
        className={`relative z-10 max-h-[85vh] w-full overflow-y-auto rounded-xl bg-(--surface) p-4 shadow-xl ${className}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold" title={title}>
              {title}
            </h3>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>

          <Button icon={<X />} ariaLabel="Close" onClick={onClose} />
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
