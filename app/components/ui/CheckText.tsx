import { Check } from "lucide-react";

interface CheckTextProps {
  text: string;
}

export const CheckText = ({ text }: CheckTextProps) => {
  return (
    <div className="flex gap-2">
      <Check className="size-5 text-emerald-500" aria-hidden="true"/>
      <span>{text}</span>
    </div>
  );
};
