import { useState } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'

export default function ThemeToggle() {
  const [escuro, setEscuro] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  function alternar() {
    const novo = !escuro
    document.documentElement.classList.toggle('dark', novo)
    try { localStorage.setItem('tema', novo ? 'escuro' : 'claro') } catch {}
    setEscuro(novo)
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={escuro ? 'Mudar para o modo claro' : 'Mudar para o modo escuro'}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg border border-border text-ink hover:bg-surface"
    >
      {escuro ? <TbSun size={20} aria-hidden="true" /> : <TbMoon size={20} aria-hidden="true" />}
    </button>
  )
}
