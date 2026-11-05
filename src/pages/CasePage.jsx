import { Link, useParams } from 'react-router'
import { TbArrowLeft, TbExternalLink } from 'react-icons/tb'
import MetricCard from '../components/MetricCard.jsx'
import BarChart from '../components/BarChart.jsx'
import NotFound from './NotFound.jsx'
import { cases, graficos } from '../data/cases.js'

const formatos = {
  porcentagem: (v) => `${v.toLocaleString('pt-BR')}%`,
}

export default function CasePage() {
  const { slug } = useParams()
  const caso = cases.find((c) => c.slug === slug)

  if (!caso || caso.status === 'em-breve') return <NotFound />

  return (
    <article className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
      <Link
        to="/#cases"
        className="-ml-2 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-[15px]"
      >
        <TbArrowLeft size={18} aria-hidden="true" />
        Todos os cases
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="font-mono text-sm text-ink-muted">{caso.tipo}</p>
        <h1 className="mt-3 text-[32px]/[1.15] sm:text-[40px]/[1.15]">{caso.manchete}</h1>
        <p className="mt-5 inline-block rounded-lg bg-surface px-3 py-2 text-sm/[1.5] text-ink-muted">
          {caso.selo}
        </p>
      </header>

      <section aria-label="Principais resultados" className="mt-10 grid gap-4 sm:grid-cols-3">
        {caso.metricas.map((m) => (
          <MetricCard key={m.legenda} valor={m.valor} legenda={m.legenda} />
        ))}
      </section>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_17rem]">
        <div className="max-w-2xl space-y-12">
          {caso.secoes.map((secao) => {
            const g = secao.grafico && graficos[secao.grafico]
            return (
              <section key={secao.titulo}>
                <h2 className="text-[28px]/[1.25]">{secao.titulo}</h2>
                <p className="mt-4">{secao.texto}</p>
                {g && (
                  <BarChart
                    titulo={g.titulo}
                    nota={g.nota}
                    descricao={g.descricao}
                    dados={g.dados}
                    media={g.media}
                    formatar={formatos[g.formato]}
                  />
                )}
              </section>
            )
          })}
        </div>

        <aside className="h-fit space-y-6 rounded-xl border border-border bg-card p-5 text-sm/[1.5] lg:sticky lg:top-6">
          <Item rotulo="Meu papel">{caso.lateral.papel}</Item>
          <Item rotulo="Dados">{caso.lateral.dados}</Item>
          <Item rotulo="Stack">{caso.lateral.stack}</Item>
          <div>
            <p className="font-medium text-ink-muted">Links</p>
            <ul className="mt-1">
              {caso.lateral.links.map((link) => (
                <li key={link.rotulo}>
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2"
                    >
                      {link.rotulo}
                      <TbExternalLink size={16} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex min-h-11 items-center text-ink-muted">
                      {link.rotulo} (em breve)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  )
}

function Item({ rotulo, children }) {
  return (
    <div>
      <p className="font-medium text-ink-muted">{rotulo}</p>
      <p className="mt-1">{children}</p>
    </div>
  )
}
