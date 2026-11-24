import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";

// Ação só de ícone: o tooltip (title) e o aria-label dizem o que ela faz, porque
// o ícone sozinho não é óbvio.
export const IconAction = ({
  icon,
  label,
  disabled,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) => (
  <span title={label} className="inline-flex">
    <Button
      icon={icon}
      ariaLabel={label}
      disabled={disabled}
      onClick={onClick}
    />
  </span>
);
