import { useMemo, useState } from 'react'
import { projects, type Category } from '../data/content'
import { ArrowUpRight, Eyebrow, Photo } from './ui'

const filters: Array<Category | 'Todos'> = ['Todos', 'Residencial', 'Interiores', 'Corporativo']

// Ritmo assimétrico do grid: largura (em colunas de 12) e proporção de cada posição
const layout = [
  { span: 'lg:col-span-7', ratio: 'aspect-[4/3]' },
  { span: 'lg:col-span-5 lg:mt-32', ratio: 'aspect-[4/5]' },
  { span: 'lg:col-span-5', ratio: 'aspect-[4/5]' },
  { span: 'lg:col-span-7 lg:mt-32', ratio: 'aspect-[4/3]' },
  { span: 'lg:col-span-6', ratio: 'aspect-[5/4]' },
  { span: 'lg:col-span-6 lg:mt-20', ratio: 'aspect-[5/4]' },
]

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('Todos')

  const visible = useMemo(
    () => (active === 'Todos' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  const count = (f: (typeof filters)[number]) =>
    f === 'Todos' ? projects.length : projects.filter((p) => p.category === f).length

  return (
    <section id="projetos" className="scroll-mt-20 py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow className="mb-6">Projetos selecionados</Eyebrow>
            <h2 className="display reveal text-[clamp(3.2rem,9vw,8.5rem)]">
              Obras
              <br />
              recentes
            </h2>
          </div>

          <div role="group" aria-label="Filtrar projetos" className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const on = f === active
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(f)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    on ? 'border-ink bg-ink text-mist' : 'border-ink/20 hover:border-ink'
                  }`}
                >
                  {f}
                  <span className={`font-mono text-[10px] tabular-nums ${on ? 'text-mist/60' : 'text-sage'}`}>
                    {String(count(f)).padStart(2, '0')}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20">
          {visible.map((p, i) => {
            const l = layout[i % layout.length]
            return (
              <li key={`${active}-${p.name}`} className={`fade-in ${l.span}`} style={{ animationDelay: `${i * 70}ms` }}>
                <a href="#contato" className="group block">
                  <div className="relative overflow-hidden bg-stone">
                    <Photo
                      id={p.image}
                      alt={`${p.name}, ${p.city}`}
                      className={`${l.ratio} w-full object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-[1.04]`}
                      sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute top-4 left-4 label bg-fog/90 px-2.5 py-1.5 text-[10px]">{p.category}</span>
                    <span className="absolute right-4 bottom-4 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-fog opacity-0 transition-[opacity,transform] duration-500 ease-out-soft group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-none font-bold tracking-[-0.035em]">
                      {p.name}
                    </h3>
                    <p className="label text-[10px] text-sage">
                      {p.city} · {p.year} · <span className="text-ink">{p.area}</span>
                    </p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
