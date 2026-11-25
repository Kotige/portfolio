import { Link, useLocation } from 'react-router'
import ThemeToggle from './ThemeToggle.jsx'

const itens = [
  { rotulo: 'Cases', para: '/#cases' },
  { rotulo: 'Sobre', para: '/#sobre' },
  { rotulo: 'Contato', para: '/#contato' },
]

// Fora da home (páginas de case, 404), o primeiro item leva de volta ao topo da home
const inicio = { rotulo: 'Início', para: '/' }

export default function Header() {
  const { pathname } = useLocation()
  const visiveis = pathname === '/' ? itens : [inicio, ...itens]

  return (
    <header className="border-b border-border">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-5xl items-center justify-end gap-1 px-4 py-3 sm:gap-2 sm:px-6"
      >
        {visiveis.map((item) => (
          <Link
            key={item.para}
            to={item.para}
            className="inline-flex min-h-11 items-center rounded-lg px-2 text-[15px] text-ink hover:bg-surface hover:text-ink sm:px-3"
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
