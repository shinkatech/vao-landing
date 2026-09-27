type Props = { words: string[]; className?: string }

/** Faixa de texto infinita. A lista é duplicada e desliza -50%, sem JS. */
export default function Marquee({ words, className = '' }: Props) {
  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="flex items-center">
          <span className="px-[0.18em]">{w}</span>
          <span className="inline-block h-[0.07em] w-[0.7em] bg-current opacity-70" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max animate-marquee will-change-transform">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
