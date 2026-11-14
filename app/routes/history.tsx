import { PageHeader } from "@/components/content/PageHeader";
import { Link } from "react-router";
import { ukGreatBritainAndIreland } from "@/data/content/culture/history/uk-great-britain-and-ireland";

export default function History() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Content • Culture" title="History" />
      <ul>
        <li>
          <Link
            to={ukGreatBritainAndIreland.href}
            className="block rounded-xl bg-(--background) p-4 hover:bg-(--surface)"
          >
            <span className="block font-bold underline underline-offset-4">
              {ukGreatBritainAndIreland.title}
            </span>
            <span lang="pt-BR">
              {ukGreatBritainAndIreland.description}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
