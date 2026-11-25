import type { ReactNode } from "react";
import { Check, LoaderCircle, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type ConfirmDialogProps = {
  title: string;
  description: ReactNode;
  /** Também vira o aria-label do botão de confirmar (que é só ícone). */
  confirmLabel: string;
  isPending?: boolean;
  /** Vermelho para exclusão definitiva, âmbar para desvincular. */
  tone?: "danger" | "warning";
  /** Erro devolvido pela ação, mostrado dentro do próprio modal. */
  error?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const toneClasses = {
  danger: "border-red-200 bg-red-50 text-red-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
};

// Confirmação em modal: substitui as caixas inline que empurravam a lista.
// Os botões são só ícone — check verde confirma, X vermelho cancela.
export const ConfirmDialog = ({
  title,
  description,
  confirmLabel,
  isPending = false,
  tone = "danger",
  error,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => (
  <Modal title={title} onClose={onCancel}>
    <div className="grid gap-4">
      <p className={`rounded-lg border p-3 text-sm ${toneClasses[tone]}`}>
        {description}
      </p>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-2">
        <Button
          disabled={isPending}
          onClick={onConfirm}
          ariaLabel={confirmLabel}
          icon={
            isPending ? (
              <LoaderCircle
                className="animate-spin text-green-600"
                style={{ stroke: "currentColor" }}
              />
            ) : (
              <Check
                className="text-green-600"
                style={{ stroke: "currentColor" }}
              />
            )
          }
        />
        <Button
          disabled={isPending}
          onClick={onCancel}
          ariaLabel="Cancel"
          icon={
            <X className="text-red-600" style={{ stroke: "currentColor" }} />
          }
        />
      </div>
    </div>
  </Modal>
);
