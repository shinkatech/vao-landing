import { useState, type ImgHTMLAttributes, type ReactNode, type SVGProps } from 'react'
import { unsplash } from '../data/content'

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="square" />
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Vão Estúdio, início">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path d="M4 28V14a12 12 0 0 1 24 0v14" />
        <path d="M9.5 28V15a6.5 6.5 0 0 1 13 0v13" />
        <path d="M15 28V16a1 1 0 0 1 2 0v12" />
      </svg>
      <span className="font-display text-[22px] font-bold tracking-[-0.04em]">
        Vão<sup className="ml-0.5 align-super font-mono text-[9px] font-normal tracking-normal">(arq)</sup>
      </span>
    </a>
  )
}

type PhotoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  id: string
  width?: number
}

/** Foto do Unsplash com srcset e um fundo neutro enquanto carrega (ou se falhar). */
export function Photo({ id, width = 1600, className = '', alt, ...rest }: PhotoProps) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div role="img" aria-label={alt} className={`bg-linear-to-br from-stone to-sage/60 ${className}`} />
  return (
    <img
      src={unsplash(id, width)}
      srcSet={[640, 1024, 1600, 2200].map((w) => `${unsplash(id, w)} ${w}w`).join(', ')}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`bg-stone/60 ${className}`}
      {...rest}
    />
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-2 text-sage ${className}`}>
      <span className="inline-block h-px w-6 bg-current" aria-hidden="true" />
      {children}
    </p>
  )
}
