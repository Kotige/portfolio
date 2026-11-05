import { Link } from 'react-router'

export default function CaseCard({ caso }) {
  const emBreve = caso.status === 'em-breve'

  const conteudo = (
    <>
      <p className="font-mono text-sm text-ink-muted tabular-nums">
        {caso.numero} · {caso.tipo}
      </p>
      <h3 className="mt-2 text-xl/[1.4] font-medium text-ink">
        {caso.titulo}
        {emBreve && (
          <span className="ml-2 inline-block rounded-md bg-surface px-2 py-0.5 align-middle text-sm font-normal text-ink-muted">
            em breve
          </span>
        )}
      </h3>
      <p className="mt-2 text-ink-muted">{caso.resumo}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
        {caso.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-surface px-2 py-0.5 text-sm text-primary-soft">
            {tag}
          </li>
        ))}
      </ul>
    </>
  )

  if (emBreve) {
    return <article className="py-8 opacity-75">{conteudo}</article>
  }

  return (
    <article className="py-8">
      <Link
        to={`/cases/${caso.slug}`}
        className="group -m-3 block rounded-xl p-3 text-ink hover:bg-surface/50 hover:text-ink"
      >
        {conteudo}
        <span className="mt-4 inline-flex min-h-11 items-center font-medium text-primary group-hover:text-primary-soft">
          Ler o case →
        </span>
      </Link>
    </article>
  )
}
