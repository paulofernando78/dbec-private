import { useSession } from "@/hooks/useSession";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Button } from "@/components/ui/Button/Button";
import { CheckText } from "@/components/ui/CheckText";

export function meta({}: Route.MetaArgs) {
  const title = "Daily Basis English Course | Aulas particulares de inglês";
  const description =
    "Aulas particulares de inglês com foco em conversação, compreensão auditiva, leitura e escrita.";
  const url = "https://dbec.com.br/";
  const image = "https://dbec.com.br/media/images/og.avif";

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Daily Basis English Course" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

const greetingsList = [
  "Hi there!",
  "How are you?",
  "How are you doing?",
  "How are you feeling?",
  "How's it going?",
  "How are things with you?",
  "What's up?",
];

export default function Home() {
  const navigate = useNavigate();
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const dashboardPath = useSession()?.dashboardPath;

  useEffect(() => {
    if (dashboardPath) navigate(dashboardPath, { replace: true });
  }, [dashboardPath, navigate]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setOpacity(0); // fade out

      timeout = setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetingsList.length);
        setOpacity(1); // to fade in
      }, 500);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  });

  return (
    <div className="flex min-h-full flex-col">
      <div className="mt-12 flex flex-col gap-10">
        <BrandLogo heading className="mx-auto" />
        <ul className="w-max mx-auto">
          <li
            className="font-walter text-2xl mt-3 transition-opacity duration-500 ease-in-out"
            style={{ opacity }}
          >
            {greetingsList[greetingIndex]}
          </li>
        </ul>
        <p className="mx-[min(100px,max(10px,calc((100vw-360px)*0.135)))]">
          <b>O DAILY BASIS ENGLISH COURSE</b> oferece aulas de inglês
          especializadas e focadas nas quatro habilidades linguísticas
          fundamentais: Fala (com ênfase em conversação), Escuta (compreensão
          auditiva), Leitura e Escrita.
        </p>
        <section
          className="mx-auto grid w-[min(100%-2rem,56rem)] gap-5 md:grid-cols-2"
          aria-label="Course options"
        >
          <article className="flex h-full flex-col rounded-2xl border border-amber-200 bg-amber-50/70 p-6 text-left shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-amber-800 dark:bg-amber-950/40">
            <h2 className="text-xl font-black uppercase tracking-tight text-slate-700 dark:text-amber-100">
              Acesso gratuito
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">
              Conheça a plataforma
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-700 dark:text-slate-100">
              <li>
                <CheckText plan="free" text="Prévia do curso" />
              </li>
              <li>
                <CheckText  plan="free" text="Conteúdos gratuitos" />
              </li>
            </ul>
            <div className="mt-auto flex justify-center pt-6">
              <Button
                onClick={() => navigate("/dashboard")}
                className="uppercase"
              >
                entrar
              </Button>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-violet-200 bg-violet-50/70 p-6 text-left shadow-[0_8px_24px_rgba(120,53,15,0.08)] dark:border-violet-800 dark:bg-violet-950/40">
            <h2 className="text-xl font-black uppercase tracking-tight text-slate-700 dark:text-violet-100">
              Acompanhamento personalizado
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">
              Quer acompanhamento mais próximo?
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-700 dark:text-slate-100">
              <li>
                <CheckText plan="plus" text="Aulas particulares e conversação" />
              </li>
              <li>
                <CheckText plan="plus" text="Orientação personalizada de estudos" />
              </li>
              <li>
                <CheckText plan="plus" text="Audio com vozes mais naturais" />
              </li>
            </ul>
            <div className="mt-auto flex justify-center pt-6">
              <a
                href="https://wa.me/55944776901"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale comigo pelo WhatsApp"
                className="group relative grid h-15 w-15 shrink-0 cursor-pointer place-items-center rounded-[12px] border border-(--button-border) bg-linear-to-b from-(--button-outer-start) to-(--button-outer-end) p-[3px] text-(--button-text) shadow-[0_1px_1px_rgba(0,0,0,0.3)] transition-[transform,box-shadow] duration-80 hover:-translate-y-0.5 active:scale-[0.995] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)]"
              >
                <span className="grid size-full place-items-center rounded-lg bg-linear-to-b from-(--button-inner-start) to-(--button-inner-end)">
                  {/* Whataspp */}
                  <img
                    src="/media/images/icons/contacts/whatsapp.png"
                    alt="WhatsApp"
                    width={35}
                    height={35}
                  />
                </span>
              </a>
            </div>
          </article>
        </section>
        <div className="w-max mx-auto">
          {/* <Contact /> */}
        </div>
      </div>

      <div className="mt-auto pt-4">
        <Footer />
      </div>
    </div>
  );
}
