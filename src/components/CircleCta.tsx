import { useId } from 'react'
import { ArrowUpRight } from './ui'

type Props = {
  href: string
  label?: string
  className?: string
  tone?: 'dark' | 'light'
}

/** Botão circular com texto girando em volta (animação só em CSS).
 *  Quem usa define a posição (absolute/relative) via className. */
export default function CircleCta({ href, label = 'Iniciar projeto', className = '', tone = 'dark' }: Props) {
  const pathId = useId()
  const ring = `${label} • ${label} • `.toUpperCase()
  const colors = tone === 'dark' ? 'bg-moss text-fog' : 'bg-fog text-ink'

  return (
    <a
      href={href}
      className={`group grid aspect-square place-items-center rounded-full ${colors} shadow-[0_20px_50px_-20px_rgb(21_27_24/0.55)] transition-transform duration-500 ease-out-soft hover:scale-[1.04] ${className}`}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id={pathId} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <text className="fill-current font-mono text-[13px] tracking-[0.1em]">
          <textPath href={`#${pathId}`} textLength="448" lengthAdjust="spacing">
            {ring}
          </textPath>
        </text>
      </svg>
      <span className="grid h-[34%] w-[34%] place-items-center rounded-full border border-current/25 transition-colors duration-300 group-hover:bg-fog group-hover:text-ink">
        <ArrowUpRight className="h-1/2 w-1/2 transition-transform duration-500 ease-out-soft group-hover:rotate-45" />
      </span>
      <span className="sr-only">{label}</span>
    </a>
  )
}
