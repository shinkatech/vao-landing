import { contact, images, stats } from '../data/content'
import { Eyebrow, Photo } from './ui'

export default function Studio() {
  return (
    <section id="estudio" className="scroll-mt-20 py-24 lg:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-3">
            <Eyebrow>O estúdio</Eyebrow>
            <p className="label text-[10px] text-sage/80">{contact.coordinates}</p>
          </div>

          <p className="reveal font-display text-[clamp(1.9rem,4.2vw,3.9rem)] leading-[1.02] font-semibold tracking-[-0.035em] lg:col-span-9">
            Um projeto começa muito antes da planta. Começa no{' '}
            <span className="text-sage">caminho que o sol faz no terreno</span>, no barulho da rua, no lugar onde a
            família se encontra no fim do dia. <span className="text-sage">Desenhamos a partir disso.</span>
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-12 lg:gap-10">
          <figure className="reveal relative overflow-hidden lg:col-span-7">
            <Photo
              id={images.studio}
              alt="Fachada de casa com ripas de madeira e volume escuro"
              className="aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <figcaption className="label absolute bottom-4 left-4 bg-fog/90 px-2.5 py-1.5 text-[10px]">
              Residência Ripa · fachada em madeira
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <p className="reveal max-w-[46ch] text-[16px] leading-relaxed text-ink/75">
              Somos 18 pessoas entre arquitetos, designers de interiores e paisagistas. Cada projeto tem um sócio
              responsável do primeiro encontro até a obra, e todas as decisões passam por maquete, amostra de material
              e visita ao local.
            </p>

            <dl className="grid grid-cols-2 border-t border-ink/15">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className={`reveal flex flex-col gap-2 border-b border-ink/15 py-6 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-5'}`}
                >
                  <dt className="order-2 text-[13px] leading-snug text-sage">{s.label}</dt>
                  <dd className="order-1 flex items-baseline gap-1.5">
                    <span className="font-display text-[clamp(2.8rem,5vw,4.2rem)] leading-none font-bold tracking-[-0.05em] tabular-nums">
                      {s.value}
                    </span>
                    <span className="label text-[11px] text-ink/70">{s.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
