import { useEffect } from 'react'
import { SITE_DESCRICAO, SITE_TITULO, SITE_URL } from './site.js'

// Atualiza título, descrição, endereço canônico e indexação de cada página.
// As tags já existem no index.html; aqui só trocamos o conteúdo, sem duplicar.
export default function useSeo({ titulo, descricao = SITE_DESCRICAO, caminho = '/', indexar = true } = {}) {
  useEffect(() => {
    document.title = titulo ? `${titulo} | Vítor Barra` : SITE_TITULO
    document.querySelector('meta[name="description"]')?.setAttribute('content', descricao)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + caminho)

    let robots = document.querySelector('meta[name="robots"]')
    if (!indexar) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.name = 'robots'
        document.head.append(robots)
      }
      robots.content = 'noindex'
    } else {
      robots?.remove()
    }
  }, [titulo, descricao, caminho, indexar])
}
