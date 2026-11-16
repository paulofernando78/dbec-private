import type { ReactNode } from "react";

type ActionTextRowProps = {
  action: ReactNode;
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
  actionSize?: "size-10" | "size-15";
  gap?: "gap-2" | "gap-3" | "gap-4";
  textAtTop?: boolean;
};

export function ActionTextRow({
  action,
  children,
  className = "",
  as: Tag = "li",
  actionSize = "size-10",
  gap = "gap-3",
  textAtTop = false,
}: ActionTextRowProps) {
  const textPadding = actionSize === "size-15"
    ? "pt-[max(0rem,calc((3.75rem-1lh)/2))]"
    : "pt-[max(0rem,calc((2.5rem-1lh)/2))]";

  return (
    <Tag className={`flex items-start ${gap} ${className}`}>
      {action != null && <div className="shrink-0">{action}</div>}
      <div className={`min-w-0 flex-1 ${action == null || textAtTop ? "" : textPadding}`}>
        {children}
      </div>
    </Tag>
  );
}
