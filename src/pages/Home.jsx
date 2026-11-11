import Hero from "../components/Hero.jsx";
import CaseCard from "../components/CaseCard.jsx";
import { cases } from "../data/cases.js";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="cases"
        className="mx-auto max-w-5xl scroll-mt-4 px-4 py-12 sm:px-6"
      >
        <h2 className="text-[28px]/[1.25]">Cases</h2>
        <div className="mt-4 grid gap-x-12 border-t border-border md:grid-cols-2 *:border-b *:border-border">
          {cases.map((caso) => (
            <CaseCard key={caso.slug} caso={caso} />
          ))}
        </div>
      </section>

      <section
        id="sobre"
        className="mx-auto max-w-5xl scroll-mt-4 px-4 py-12 sm:px-6"
      >
        <h2 className="text-[28px]/[1.25]">Sobre mim</h2>
        <p className="mt-6 max-w-3xl font-serif text-[22px]/[1.4] font-medium">
          Físico de formação e professor da rede pública, hoje direcionando a
          carreira para a análise de dados — unindo base matemática, programação
          e a capacidade de explicar resultados complexos de forma simples.
        </p>
        <details className="group mt-6 max-w-3xl">
          <summary className="inline-flex min-h-11 cursor-pointer items-center font-medium text-primary hover:text-primary-soft">
            <span className="group-open:hidden">Ler a trajetória completa</span>
            <span className="hidden group-open:inline">
              Fechar a trajetória
            </span>
          </summary>
          <div className="mt-4 space-y-4 text-ink-muted">
            <p>
              Sou mestre em Física pela UFJF, com formação em Física
              Computacional pela UFSJ. No mestrado, trabalhei com Teoria
              Quântica de Campos e usei programação para resolver problemas sem
              solução analítica — foi aí que descobri que gosto tanto de
              construir a solução quanto de entender o problema.
            </p>
            <p>
              Desde então, sigo dando aula de Física na rede pública de Minas
              Gerais, onde também lido com dados no dia a dia: acompanho notas e
              frequência, analiso o desempenho de alunos e turmas e uso isso
              para orientar decisões em sala.
            </p>
            <p>
              Hoje estou direcionando minha carreira para a análise de dados,
              unindo três coisas que já fazem parte da minha trajetória: base
              sólida em matemática e estatística, programação (Python e SQL) e a
              capacidade de explicar resultados complexos de forma simples.
            </p>
          </div>
        </details>
      </section>
    </>
  );
}
