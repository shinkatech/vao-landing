import { contact, nav } from '../data/content'
import { Logo } from './ui'

const social = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

function ShinkaCredit() {
  return (
    <a
      href="https://www.shinkatech.com.br/"
      target="_blank"
      rel="noreferrer"
      aria-label="Desenvolvido por Shinka Software e IA"
      className="inline-flex flex-col items-center gap-2 text-mist transition-opacity hover:opacity-70"
    >
      <span className="text-[9px] font-medium tracking-[0.32em] text-mist/75">DESENVOLVIDO POR</span>
      <span className="flex items-center gap-3">
        <span className="relative font-kanji text-[30px] leading-none font-bold">
          進化
          <svg viewBox="0 0 12 12" className="absolute -top-1 -right-2 size-2" aria-hidden="true">
            <path fill="currentColor" d="M6 0 7.05 4.95 12 6 7.05 7.05 6 12 4.95 7.05 0 6 4.95 4.95Z" />
          </svg>
        </span>
        <span className="h-8 w-px bg-mist/45" aria-hidden="true" />
        <span className="flex flex-col items-start">
          <span className="font-syne -mr-[0.12em] text-[18px] leading-none font-bold tracking-[0.12em]">SHINKA</span>
          <span className="mt-1.5 text-[8px] font-medium tracking-[0.2em] text-mist/80">SOFTWARE & IA</span>
        </span>
      </span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink pt-20 text-mist">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-b border-mist/12 pb-16 lg:grid-cols-12">
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-5">
            <Logo />
            <p className="max-w-[36ch] text-[14px] leading-relaxed text-mist/60">
              Estúdio de arquitetura, interiores e paisagismo. Projetos residenciais e corporativos em todo o Brasil.
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3 lg:col-span-2">
            <span className="label mb-2 text-[10px] text-mist/45">Navegação</span>
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[15px] text-mist/80 transition-colors hover:text-mist">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 lg:col-span-2">
            <span className="label mb-2 text-[10px] text-mist/45">Redes</span>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-mist/80 transition-colors hover:text-mist"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="col-span-2 flex flex-col gap-3 lg:col-span-3">
            <span className="label mb-2 text-[10px] text-mist/45">Estúdio</span>
            <span className="text-[15px] leading-snug text-mist/80">{contact.address}</span>
            <span className="text-[15px] text-mist/80">{contact.email}</span>
          </div>
        </div>

        <div className="grid items-center gap-8 py-8 sm:grid-cols-[1fr_auto_1fr]">
          <span className="label justify-self-center text-center text-[10px] text-mist/45 sm:justify-self-start sm:text-left">
            © {new Date().getFullYear()} Vão Estúdio · CAU 000000-0
          </span>
          <ShinkaCredit />
          <a
            href="#top"
            className="label justify-self-center text-[10px] text-mist/45 transition-colors hover:text-mist sm:justify-self-end"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="display -mb-[0.14em] text-center text-[27vw] leading-[0.8] text-mist/[0.07] select-none"
      >
        Vão
      </p>
    </footer>
  )
}
