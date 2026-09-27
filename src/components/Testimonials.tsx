import { useState } from 'react'
import { testimonials } from '../data/content'
import { Eyebrow, Photo } from './ui'

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path d={dir === 'left' ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} />
    </svg>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const t = testimonials[index]
  const go = (d: number) => setIndex((i) => (i + d + total) % total)

  return (
    <section aria-label="Depoimentos" className="py-24 lg:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="reveal relative hidden overflow-hidden bg-stone lg:col-span-4 lg:block">
          {/* a foto acompanha o projeto do depoimento atual */}
          <Photo
            key={t.image}
            id={t.image}
            alt={t.project}
            className="fade-in absolute inset-0 h-full w-full object-cover"
            sizes="33vw"
          />
          <div className="min-h-[480px]" />
          <span className="label absolute bottom-4 left-4 bg-fog/90 px-2.5 py-1.5 text-[10px]">
            {t.project.split(' · ')[0]}
          </span>
        </div>

        <div className="flex flex-col justify-between gap-12 lg:col-span-8 lg:pl-10">
          <div className="flex items-center justify-between">
            <Eyebrow>Quem já construiu com a gente</Eyebrow>
            <p className="label text-[11px] tabular-nums" aria-live="polite">
              {String(index + 1).padStart(2, '0')} <span className="text-sage">/ {String(total).padStart(2, '0')}</span>
            </p>
          </div>

          {/* key força a animação de entrada a cada troca */}
          <figure key={index} className="fade-in flex flex-col gap-10">
            <blockquote className="font-display text-[clamp(1.7rem,3.4vw,3.1rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance">
              <span className="text-sage">“</span>
              {t.quote}
              <span className="text-sage">”</span>
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <Photo id={t.avatar} width={160} alt="" className="h-14 w-14 rounded-full object-cover grayscale" />
              <span className="flex flex-col">
                <span className="text-[15px] font-semibold">{t.name}</span>
                <span className="label text-[10px] text-sage">{t.project}</span>
              </span>
            </figcaption>
          </figure>

          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Depoimento anterior"
                className="grid h-12 w-12 place-items-center rounded-full border border-ink/25 transition-colors hover:bg-ink hover:text-mist"
              >
                <Arrow dir="left" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo depoimento"
                className="grid h-12 w-12 place-items-center rounded-full border border-ink/25 transition-colors hover:bg-ink hover:text-mist"
              >
                <Arrow dir="right" />
              </button>
            </div>
            <div className="relative h-px flex-1 bg-ink/15" aria-hidden="true">
              <span
                className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-700 ease-out-soft"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
