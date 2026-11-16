import { Check } from "lucide-react";

type CheckboxProps = {
  checked: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
};

export const Checkbox = ({ checked, ariaLabel, disabled, onCheckedChange, className }: CheckboxProps) => {
  return (
    <label className="group relative inline-flex cursor-pointer">
      <input
        type="checkbox"
        aria-label={ariaLabel}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="peer absolute inset-0 z-10 size-full cursor-inherit opacity-0"
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
