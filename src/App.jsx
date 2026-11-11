import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CasePage from './pages/CasePage.jsx'
import NotFound from './pages/NotFound.jsx'

// Ao trocar de página, volta ao topo — ou rola suavemente até a âncora (#cases, #sobre...)
function RolagemPorRota() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: reduzirMovimento ? 'auto' : 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <RolagemPorRota />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases/:slug" element={<CasePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
