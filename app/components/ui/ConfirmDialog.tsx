import { useState, type ReactNode } from "react";
import { Check, LoaderCircle, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type ConfirmDialogProps = {
  title: string;
  description: ReactNode;
  /** Também vira o aria-label do botão de confirmar (que é só ícone). */
  confirmLabel: string;
  /**
   * Quando informado, o check só habilita depois que o usuário digitar
   * exatamente este texto (padrão de exclusão de repositório do GitHub).
   */
  confirmationText?: string;
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
  confirmationText,
  isPending = false,
  tone = "danger",
  error,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const [typed, setTyped] = useState("");
  const isMatched = !confirmationText || typed.trim() === confirmationText;

  return (
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

        {confirmationText && (
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">
              Type “{confirmationText}” to confirm
            </span>
            <input
              type="text"
              value={typed}
              onChange={(event) => setTyped(event.target.value)}
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                // O modal do aluno fica dentro do form do card: Enter não pode
                // submeter o formulário de aluno.
                event.preventDefault();
                if (isMatched && !isPending) onConfirm();
              }}
              autoComplete="off"
              spellCheck={false}
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
            />
          </label>
        )}

        <div className="flex gap-2">
          <Button
            disabled={isPending || !isMatched}
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
};
