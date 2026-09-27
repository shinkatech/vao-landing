import { images, marqueeWords, unsplash } from '../data/content'
import CircleCta from './CircleCta'
import Marquee from './Marquee'

/**
 * Foto com "motion blur" nas bordas e o centro nítido, como na referência.
 * Duas cópias da mesma imagem: uma com filtro SVG de desfoque horizontal,
 * outra nítida recortada por uma máscara radial. Nada é animado aqui,
 * então o filtro é calculado uma única vez.
 */
function MotionPhoto() {
  const src = unsplash(images.hero, 2200)
  const common = 'absolute inset-0 h-full w-full scale-[1.08] object-cover object-[50%_60%]'
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-stone" aria-hidden="true">
      <svg className="absolute h-0 w-0">
        <filter id="motion-blur" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="26 1.5" />
        </filter>
      </svg>
      <img src={src} alt="" className={common} style={{ filter: 'url(#motion-blur) saturate(0.5)' }} fetchPriority="high" />
      <img
        src={src}
        alt=""
        className={`${common} saturate-50 [mask-image:radial-gradient(ellipse_24%_46%_at_50%_64%,#000_55%,transparent_100%)]`}
      />
      {/* véu claro no topo para o título, sombra na base para o marquee */}
      <div className="absolute inset-0 bg-linear-to-b from-mist from-10% via-mist/60 via-40% to-transparent to-70%" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-ink/75 via-ink/30 to-transparent" />
    </div>
  )
}

function RatingBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-4 border border-ink/25 bg-fog/50 px-4 py-3 ${className}`}>
      <span className="font-display text-[40px] leading-none font-bold tracking-[-0.05em]">4,9</span>
      <span className="flex flex-col gap-1">
        <span className="label text-[10px] text-ink/70">Nota dos clientes</span>
        <span className="flex items-center gap-2">
          <span className="flex gap-0.5 text-ink" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="h-3 w-3 fill-current">
                <path d="m10 1.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" />
              </svg>
            ))}
          </span>
          <span className="text-[12px] font-medium">86 avaliações</span>
        </span>
      </span>
    </div>
  )
}

/** Louros desenhados em código: folhas distribuídas ao longo de um arco. */
function Laurel({ className = '' }: { className?: string }) {
  const cx = 40
  const cy = 40
  const r = 31
  // do pé do ramo (embaixo) até a ponta (em cima), pelo lado esquerdo
  const leaves = Array.from({ length: 7 }, (_, i) => {
    const deg = 245 - i * 20
    const a = (deg * Math.PI) / 180
    const x = cx + r * Math.cos(a)
    const y = cy - r * Math.sin(a)
    // direção tangente (subindo pelo arco) convertida em rotação SVG, com leve abertura para fora
    const tangent = (Math.atan2(-r * Math.cos(a), r * Math.sin(a)) * 180) / Math.PI
    return { x, y, rot: tangent - 90 - 28 }
  })
  const side = (
    <g>
      <path d={`M${cx + r * Math.cos((255 * Math.PI) / 180)} ${cy - r * Math.sin((255 * Math.PI) / 180)} A${r} ${r} 0 0 1 ${cx + r * Math.cos((118 * Math.PI) / 180)} ${cy - r * Math.sin((118 * Math.PI) / 180)}`} fill="none" stroke="currentColor" strokeWidth="1" />
      {leaves.map((l, i) => (
        <ellipse key={i} cx={l.x} cy={l.y} rx="2.2" ry="5.6" fill="currentColor" transform={`rotate(${l.rot} ${l.x} ${l.y})`} />
      ))}
    </g>
  )
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {side}
      <g transform="translate(80 0) scale(-1 1)">{side}</g>
    </svg>
  )
}

function Award({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-fog ${className}`}>
      <div className="relative grid h-20 w-20 shrink-0 place-items-center">
        <Laurel className="absolute inset-0 h-full w-full opacity-90" />
        <span className="relative text-center font-mono text-[7.5px] leading-tight tracking-[0.12em] uppercase">
          Projeto
          <br />
          do ano
          <br />
          <b className="text-[10px] tracking-[0.06em]">2025</b>
        </span>
      </div>
      <p className="max-w-[15ch] font-display text-[19px] leading-[1.1] font-semibold tracking-[-0.02em] uppercase">
        Premiado pela crítica de arquitetura
      </p>
    </div>
  )
}

/** Linha de cota, como numa planta: traços inclinados nas pontas e a medida no meio. */
function Dimension({ className = '', value }: { className?: string; value: string }) {
  return (
    <div className={`text-fog ${className}`} aria-hidden="true">
      <div className="relative h-4">
        <span className="absolute inset-x-0 top-1/2 h-px bg-current/70" />
        <span className="absolute top-0 left-0 h-4 w-px rotate-45 bg-current" />
        <span className="absolute top-0 right-0 h-4 w-px rotate-45 bg-current" />
        <span className="label absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap">{value}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <MotionPhoto />

      {/* Linha curva fina com brilho, como na referência */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full text-fog/80 lg:block"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M470 1000 C 380 820, 420 560, 700 470 S 1010 380, 1022 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span
        className="pointer-events-none absolute top-[30%] left-[71%] hidden -translate-x-1/2 -translate-y-1/2 text-fog lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 animate-twinkle fill-current">
          <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
        </svg>
      </span>

      <div className="container-x relative pt-28 lg:pt-32">
        {/* Título + texto de apoio */}
        <div className="relative">
          <h1 className="display text-[19.5vw] lg:text-[min(14.2vw,15.5rem)]">
            <span className="line-mask">
              <span className="line-rise">Espaço</span>
            </span>
            <span className="flex items-end justify-end gap-6 lg:justify-start lg:pl-[26%] xl:pl-[22%]">
              <span className="line-mask">
                <span className="line-rise [animation-delay:120ms]">Vivo</span>
              </span>
            </span>
          </h1>

          <p className="fade-in mt-6 max-w-[40ch] text-[15px] leading-relaxed text-ink/80 [animation-delay:350ms] lg:absolute lg:top-[0.6vw] lg:right-0 lg:mt-0 lg:max-w-[34ch]">
            Projetamos casas, interiores e lugares de trabalho a partir da luz, da matéria e da rotina de quem vai
            viver neles. Do primeiro traço à entrega da chave.
          </p>

          {/* selo de avaliação ao lado de "Vivo" no desktop */}
          <RatingBadge className="fade-in mt-6 [animation-delay:450ms] lg:absolute lg:bottom-[2.2vw] lg:left-0 lg:mt-0" />

          <CircleCta
            href="#contato"
            className="fade-in absolute right-0 bottom-[-150px] w-[118px] [animation-delay:550ms] sm:bottom-[-40px] sm:w-[132px] lg:right-[6%] lg:bottom-[1vw] lg:w-[150px]"
          />
        </div>

        {/* Área da foto: anotações técnicas e prêmio */}
        <div className="relative h-[46svh] min-h-[340px] lg:h-[30svh] lg:min-h-[250px]">
          <div className="absolute top-[38%] left-[34%] hidden w-[32%] lg:block">
            <Dimension value="12,40 m" />
          </div>
          <p className="label absolute top-[52%] left-[35%] hidden items-center gap-2 text-[10px] text-fog lg:flex">
            <span className="text-base leading-none">+</span> Sala de estar · pé-direito 3,10 m
          </p>

          <Award className="fade-in absolute right-0 bottom-8 hidden [animation-delay:700ms] md:flex" />

          <p className="absolute bottom-8 left-0 max-w-[26ch] text-[12px] leading-snug font-medium tracking-[0.12em] text-fog uppercase sm:text-[13px]">
            Arquitetura e interiores
            <br />
            desde 2012 em São Paulo
          </p>
        </div>
      </div>

      <Marquee
        words={marqueeWords}
        className="display relative pb-6 text-[18vw] leading-[0.95] text-fog/95 sm:text-[13vw] lg:text-[min(11.5vw,11rem)]"
      />
    </section>
  )
}
