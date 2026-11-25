import { AlertTriangle, Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type FeedbackModalProps = {
  /** Mensagem devolvida pela ação ou pela API (ex.: “Teacher created.”). */
  message: string;
  /** Verde para sucesso, vermelho para erro. */
  tone?: "success" | "error";
  onClose: () => void;
};

const toneStyles = {
  success: {
    title: "Done",
    box: "border-green-200 bg-green-50 text-green-900",
    icon: <Check className="size-5 shrink-0 text-green-600" />,
  },
  error: {
    title: "Something went wrong",
    box: "border-red-200 bg-red-50 text-red-900",
    icon: <AlertTriangle className="size-5 shrink-0 text-red-600" />,
  },
};

// Aviso em modal: substitui as mensagens que apareciam embaixo do formulário e
// empurravam o layout. Fecha pelo check verde, pelo X ou com Esc.
export const FeedbackModal = ({
  message,
  tone = "success",
  onClose,
}: FeedbackModalProps) => {
  const styles = toneStyles[tone];

  return (
    <Modal title={styles.title} onClose={onClose}>
      <div className="grid gap-4">
        <div
          className={`flex items-start gap-3 rounded-lg border p-3 text-sm ${styles.box}`}
        >
          {styles.icon}
          <p
            role={tone === "error" ? "alert" : "status"}
            className="min-w-0 break-words"
          >
            {message}
          </p>
        </div>

        <Button
          fullWidth
          onClick={onClose}
          icon={
            <Check
              className="text-green-600"
              style={{ stroke: "currentColor" }}
            />
          }
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};
