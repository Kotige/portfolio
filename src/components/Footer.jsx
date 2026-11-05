import { TbMail, TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'

const botao =
  'inline-flex size-11 items-center justify-center rounded-lg border border-border text-ink hover:bg-surface hover:text-ink'

export default function Footer() {
  return (
    <footer id="contato" className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
        <p className="text-sm text-ink-muted">Juiz de Fora, MG</p>
        <div className="flex gap-2">
          <a href="mailto:vifebarra@outlook.com" aria-label="E-mail" className={botao}>
            <TbMail size={20} aria-hidden="true" />
          </a>
          <a href="https://linkedin.com/in/vitorbarra" aria-label="LinkedIn" className={botao}>
            <TbBrandLinkedin size={20} aria-hidden="true" />
          </a>
          <a href="https://github.com/Kotige" aria-label="GitHub" className={botao}>
            <TbBrandGithub size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
