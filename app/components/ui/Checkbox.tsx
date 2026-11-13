import { Check } from "lucide-react";

type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
};

export const Checkbox = ({ checked, disabled, onCheckedChange, className }: CheckboxProps) => {
  return (
    <label className="group cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="peer sr-only"
      />

      <span
        className={`
          relative
          top-px
          flex
          h-5
          w-5
          min-w-5
          items-center
          justify-center
          rounded
          border
          border-slate-300
          bg-white
          peer-checked:bg-green-500
          peer-focus-visible:outline-2
          peer-disabled:opacity-60
          [&_svg]:opacity-0
          peer-checked:[&_svg]:opacity-100
          peer-checked:[&_svg]:text-white
          ${className}`}
      >
        <Check size={14} />
      </span>
    </label>
  );
};
