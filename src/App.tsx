import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Projects from './components/Projects'
import Services from './components/Services'
import Studio from './components/Studio'
import Testimonials from './components/Testimonials'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#estudio"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-mist focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Studio />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
