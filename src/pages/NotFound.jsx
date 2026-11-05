import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <p className="font-mono text-sm text-ink-muted">Erro 404</p>
      <h1 className="mt-3 text-[32px]/[1.15] sm:text-[40px]/[1.15]">Página não encontrada.</h1>
      <p className="mt-4 text-ink-muted">O endereço pode estar errado ou o case ainda não foi publicado.</p>
      <Link to="/" className="mt-8 inline-flex min-h-11 items-center font-medium">
        ← Voltar para a home
      </Link>
    </section>
  )
}
