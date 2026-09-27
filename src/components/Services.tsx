import { services } from '../data/content'
import { ArrowUpRight, Eyebrow, Photo } from './ui'

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 border-t border-ink/10 bg-fog py-24 lg:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow className="mb-6">Serviços</Eyebrow>
            <h2 className="display reveal text-[clamp(3.2rem,9vw,8.5rem)]">
              Do terreno
              <br />
              ao detalhe
            </h2>
          </div>
          <p className="reveal max-w-[40ch] text-[15px] leading-relaxed text-ink/70 lg:col-span-4 lg:justify-self-end">
            Atuamos no projeto inteiro ou em uma etapa específica. Em todos os casos, o mesmo time acompanha do estudo à
            obra.
          </p>
        </div>

        <ul className="mt-16 border-t border-ink/15 lg:mt-24">
          {services.map((s) => (
            <li key={s.title} className="reveal border-b border-ink/15">
              <a
                href="#contato"
                className="group relative grid gap-5 py-8 transition-colors duration-500 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10"
              >
                <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.3rem)] leading-none font-bold tracking-[-0.04em] uppercase transition-transform duration-500 ease-out-soft group-hover:translate-x-3 lg:col-span-5">
                  {s.title}
                </h3>

                <div className="flex flex-col gap-4 lg:col-span-4">
                  <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink/70">{s.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="label rounded-full border border-ink/20 px-3 py-1 text-[10px] text-ink/70">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden overflow-hidden lg:col-span-2 lg:block">
                  <Photo
                    id={s.image}
                    width={640}
                    alt=""
                    className="aspect-[4/3] w-full object-cover grayscale-[70%] transition-[filter,transform] duration-700 ease-out-soft group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <span className="grid h-14 w-14 place-items-center justify-self-start rounded-full border border-ink/25 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-mist lg:col-span-1 lg:justify-self-end">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-out-soft group-hover:rotate-45" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
