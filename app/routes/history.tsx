import { PageHeader } from "@/components/content/PageHeader";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";
import { ukGreatBritainAndIreland } from "@/data/content/culture/history/uk-great-britain-and-ireland";

export default function History() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Content • Culture" title="History" />
      <ul role="list" className="grid gap-2">
        <li>
          <Link
            to={ukGreatBritainAndIreland.href}
            className="group flex min-h-10 items-start gap-3 rounded-xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-xl border border-(--button-border) bg-linear-to-b from-(--button-outer-start) to-(--button-outer-end) p-1 shadow-sm"
            >
              <span className="grid size-full place-items-center rounded-lg bg-linear-to-b from-(--button-inner-start) to-(--button-inner-end)">
                <BookOpen className="size-4.5 text-(--button-icon)" />
              </span>
            </span>
            <span className="min-w-0 py-1.5">
              <span className="block group-hover:underline group-focus-visible:underline">
                {ukGreatBritainAndIreland.title}
              </span>
              <span lang="pt-BR" className="block font-normal text-slate-600">
                {ukGreatBritainAndIreland.description}
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
