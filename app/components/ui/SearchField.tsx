import { Search } from "lucide-react";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
  /** Sobrescreve as cores do container (ex.: dentro do bloco âmbar). */
  className?: string;
};

// Mesma linguagem visual do GlobalSearch (ícone em slate-400 + input sem borda).
// O type="search" dá o botão de limpar nativo do navegador.
export const SearchField = ({
  value,
  onChange,
  placeholder,
  ariaLabel,
  className = "border-slate-200 bg-(--background) dark:border-slate-700",
}: SearchFieldProps) => (
  <div
    className={`flex min-w-0 items-center gap-3 rounded-xl border px-3 ${className}`}
  >
    <Search className="size-4 shrink-0 text-slate-400" aria-hidden="true" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
    />
  </div>
);
