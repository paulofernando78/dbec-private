import { Check } from "lucide-react";

interface CheckTextProps {
  text: string;
  plan?: "free" | "plus";
}

const planColors = {
  free: `text-amber-500`,
  plus: `text-violet-500`,
} as const;

export const CheckText = ({ text, plan = "free" }: CheckTextProps) => {
  return (
    <div className="flex gap-2">
      <Check className={`size-5 shrink-0 ${planColors[plan]}`} aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
};
