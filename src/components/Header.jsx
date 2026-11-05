import { Link } from 'react-router'
import ThemeToggle from './ThemeToggle.jsx'

const itens = [
  { rotulo: 'Cases', para: '/#cases' },
  { rotulo: 'Sobre', para: '/#sobre' },
  { rotulo: 'Contato', para: '/#contato' },
]

export default function Header() {
  return (
    <header className="border-b border-border">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-5xl items-center justify-end gap-1 px-4 py-3 sm:gap-2 sm:px-6"
      >
        {itens.map((item) => (
          <Link
            key={item.para}
            to={item.para}
            className="inline-flex min-h-11 items-center rounded-lg px-3 text-[15px] text-ink hover:bg-surface hover:text-ink"
          >
            {item.rotulo}
          </Link>
        ))}
        <div className="ml-1 sm:ml-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
