import { PageHeader } from "@/components/content/PageHeader";
import { Link } from "react-router";
import { ukGreatBritainAndIreland } from "@/data/content/culture/history/uk-great-britain-and-ireland";

export default function UKGreatBritainAndIreland() {
  return (
    <article className="space-y-6">
      <PageHeader eyebrow="Culture • History" title={ukGreatBritainAndIreland.title} />
      <Link lang="pt-BR" to="/culture/history" className="inline-block underline underline-offset-4">
        Voltar para History
      </Link>

      <section lang="pt-BR" className="space-y-3">
        <h2 className="text-xl font-bold">Inglaterra, Grã-Bretanha, Reino Unido e Irlanda</h2>
        <figure className="space-y-2">
          <img
            {...ukGreatBritainAndIreland.map}
            className="mx-auto h-auto max-w-full rounded-lg"
          />
          <figcaption className="text-sm">
            Adaptado de um{" "}
            <a className="underline" href="https://commons.wikimedia.org/wiki/File:British_Isles_map.svg">
              mapa de G. Allen
            </a>
            {" "}com novas cores e legendas, sob a licença{" "}
            <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.
          </figcaption>
        </figure>
        <dl className="grid gap-3">
          <div><dt lang="en" className="font-semibold">England</dt><dd>A Inglaterra é um dos quatro países que compõem o Reino Unido.</dd></div>
          <div><dt lang="en" className="font-semibold">Great Britain</dt><dd>A Grã-Bretanha é a maior ilha do arquipélago e reúne Inglaterra, Escócia e País de Gales.</dd></div>
          <div><dt lang="en" className="font-semibold">The United Kingdom (the UK)</dt><dd>O Reino Unido é formado por Inglaterra, Escócia, País de Gales e Irlanda do Norte.</dd></div>
          <div><dt lang="en" className="font-semibold">Ireland</dt><dd>Irlanda é o nome de uma ilha e de um país. A ilha abriga o país chamado Irlanda e a Irlanda do Norte, que faz parte do Reino Unido.</dd></div>
        </dl>
        <p>
          <strong lang="en">British Isles</strong> (Ilhas Britânicas) é um termo geográfico que abrange a Grã-Bretanha, a Irlanda e ilhas próximas.
          Seu uso gera controvérsia na Irlanda. O guia de estilo em inglês da Comissão Europeia usa <em lang="en">Britain and Ireland</em> nesse sentido geográfico.
          {" "}<a className="underline" href="https://commission.europa.eu/system/files/2023-11/styleguide_english_dgt_country_compendium_en.pdf">Guia de estilo da Comissão Europeia</a>
        </p>
      </section>

      <section lang="pt-BR" className="space-y-3">
        <h2 className="text-xl font-bold">Como surgiu a Union Jack</h2>
        <img
          {...ukGreatBritainAndIreland.timeline}
          loading="lazy"
          className="mx-auto h-auto max-w-full rounded-lg"
        />
        <ol className="grid list-decimal gap-2 pl-6">
          <li><strong>1606.</strong> A primeira Union Flag combinou a cruz vermelha de São Jorge, da Inglaterra, com a cruz branca de Santo André, da Escócia.</li>
          <li><strong>1801.</strong> Após a união com a Grã-Bretanha, a cruz vermelha diagonal de São Patrício foi acrescentada para representar a Irlanda.</li>
        </ol>
        <p>
          O País de Gales já estava unido à Inglaterra quando a primeira Union Flag foi criada. Por isso, a bandeira não tem um emblema específico do País de Gales.
          {" "}<a className="underline" href="https://www.royal.uk/union-jack">História da Union Jack</a>
        </p>
      </section>
    </article>
  );
}
