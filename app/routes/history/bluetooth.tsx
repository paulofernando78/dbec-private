import { Link } from "react-router";
import { PageHeader } from "@/components/content/PageHeader";
import { bluetoothHistory } from "@/data/content/culture/history/bluetooth";

export default function BluetoothHistory() {
  return (
    <article className="space-y-6" lang="pt-BR">
      <PageHeader eyebrow="Culture • History" title={bluetoothHistory.title} />
      <Link to="/culture/history" className="inline-block underline underline-offset-4 focus-visible:outline-2">
        Voltar para History
      </Link>

      <p className="leading-7">{bluetoothHistory.introduction}</p>

      <section className="space-y-3 rounded-xl bg-(--surface) p-4">
        <h2 className="text-xl font-bold">Um rei do século X</h2>
        <p className="leading-7">{bluetoothHistory.king}</p>
      </section>

      <section className="space-y-3 rounded-xl bg-(--surface) p-4">
        <h2 className="text-xl font-bold">Por que deram esse nome à tecnologia?</h2>
        <p className="leading-7">{bluetoothHistory.naming}</p>
      </section>

      <section className="space-y-3 rounded-xl bg-(--surface) p-4">
        <h2 className="text-xl font-bold">O que significa o símbolo?</h2>
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-(--background) p-4 text-3xl font-bold" aria-label="Runa Hagall mais runa Bjarkan">
          <span aria-label="Hagall">ᚼ</span>
          <span aria-hidden="true">+</span>
          <span aria-label="Bjarkan">ᛒ</span>
          <span aria-hidden="true">=</span>
          <span className="text-base">iniciais de Harald Bluetooth</span>
        </div>
        <p className="leading-7">{bluetoothHistory.symbol}</p>
      </section>

      <p className="text-sm">
        Fonte: <a href={bluetoothHistory.sourceUrl} className="underline underline-offset-4 focus-visible:outline-2" target="_blank" rel="noopener noreferrer">Bluetooth SIG — Origin of the name</a>.
      </p>
    </article>
  );
}
