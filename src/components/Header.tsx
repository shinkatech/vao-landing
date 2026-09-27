import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import { ArrowUpRight, Logo } from './ui'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-500 ${
        scrolled || open ? 'bg-mist/95 shadow-[0_1px_0_rgb(21_27_24/0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-14">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-[12px] font-medium tracking-[0.14em] uppercase"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out-soft group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contato"
          className="group hidden items-center gap-2 border-b border-ink pb-1 text-[12px] font-semibold tracking-[0.14em] uppercase md:inline-flex"
        >
          Fale conosco
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="relative -mr-2 grid h-11 w-11 place-items-center md:hidden"
        >
          <span
            className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1'}`}
          />
          <span
            className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1'}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="container-x h-[calc(100svh-72px)] overflow-y-auto bg-mist pt-6 pb-10 md:hidden"
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-ink/10">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="display flex items-center justify-between py-5 text-5xl"
              >
                {item.label}
                <ArrowUpRight className="h-7 w-7" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-[12px] font-semibold tracking-[0.14em] text-mist uppercase"
        >
          Iniciar um projeto <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}
