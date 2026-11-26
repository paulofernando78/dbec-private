import { GraduationCap, Presentation } from "lucide-react";
import {
  offlineAvatarClasses,
  onlineAvatarClasses,
  type AvatarRole,
} from "@/utils/avatar-theme";

type AccountSummaryProps = {
  name: string;
  subtitle: string;
  role: AvatarRole;
  online?: boolean;
  className?: string;
};

export const AccountSummary = ({ name, subtitle, role, online = false, className }: AccountSummaryProps) => {
  // Professor logado fica azul e aluno logado fica verde; quem não está
  // logado fica cinza, independentemente do papel.
  const colors = online ? onlineAvatarClasses[role] : offlineAvatarClasses;

  return (
    <div className={`flex min-w-max shrink-0 items-center gap-3 ${className}`}>
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-full ${colors.container} ${colors.icon}`}
        aria-hidden="true"
      >
        {role === "teacher" ? <Presentation className="size-5" /> : <GraduationCap className="size-5" />}
      </span>

      <div className="leading-tight whitespace-nowrap">
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
