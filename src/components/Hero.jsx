import { TbDownload } from "react-icons/tb";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 pt-12 pb-16 sm:px-6 sm:pt-20 md:flex-row">
      <div className="w-full md:flex-[3_1_0%]">
        <h1 className="text-5xl/[1.1] sm:text-[64px]/[1.1]">Vítor Barra</h1>
        <p className="mt-5 font-serif text-[22px]/[1.35] font-medium sm:text-[26px]/[1.35]">
          Analista de dados com formação em Física. Transformo dados em
          respostas claras para decisões reais.
        </p>
        <p className="mt-4 text-lg text-ink-muted">
          Python, SQL e estatística com a bagagem de um físico pesquisador e
          professor.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#cases"
            className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 font-medium text-on-primary hover:bg-primary-soft hover:text-on-primary"
          >
            Ver cases
          </a>
          <a
            href="/curriculo.pdf"
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 font-medium text-ink hover:bg-surface hover:text-ink"
          >
            <TbDownload size={18} aria-hidden="true" />
            Currículo (PDF)
          </a>
        </div>
      </div>
      <div className="flex w-full justify-center md:flex-[2_1_0%]">
        <img
          src="/foto1.jpg"
          alt="Foto de Vítor Barra"
          width="800"
          height="1000"
          className="aspect-[4/5] w-full max-w-sm rounded-2xl border border-border bg-surface object-cover"
        />
      </div>
    </section>
  );
}
