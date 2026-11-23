import { GraduationCap, Presentation } from "lucide-react";
import { avatarColors, type AvatarRole } from "@/utils/avatar-theme";

type AccountSummaryProps = {
  name: string;
  subtitle: string;
  role: AvatarRole;
  className?: string;
};

export const AccountSummary = ({ name, subtitle, role, className }: AccountSummaryProps) => (
  <div className={`flex min-w-max shrink-0 items-center gap-3 ${className}`}>
    <span
      className="flex size-10 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: avatarColors[role].background, color: avatarColors[role].dot }}
      aria-hidden="true"
    >
      {role === "teacher" ? <Presentation className="size-5" /> : <GraduationCap className="size-5" />}
    </span>

    <div className="leading-tight whitespace-nowrap">
      <p className="text-sm font-semibold text-gray-800">
        {name}
      </p>
      <p className="text-xs text-gray-500">
        {subtitle}
      </p>
    </div>
  </div>
);
