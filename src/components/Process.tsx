import { steps } from '../data/content'
import { Eyebrow } from './ui'

export default function Process() {
  return (
    <section id="processo" className="scroll-mt-20 bg-ink py-24 text-mist lg:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <Eyebrow className="mb-6 text-stone/70">Processo</Eyebrow>
            <h2 className="display reveal text-[clamp(2.6rem,5.6vw,5.6rem)]">
              Do primeiro traço
              <br />
              <span className="text-sage">à entrega da chave</span>
            </h2>
          </div>
          <p className="reveal max-w-[38ch] text-[15px] leading-relaxed text-mist/65 lg:col-span-3 lg:justify-self-end">
            Quatro etapas com entregas claras e prazos combinados no contrato. Uma casa de 300 m² leva, em média, 5
            meses de projeto antes da obra.
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden bg-mist/12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal group relative flex flex-col gap-8 bg-ink p-6 pt-8 lg:min-h-[380px] lg:p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-[64px] leading-none font-bold tracking-[-0.05em] text-mist/25 transition-colors duration-500 group-hover:text-mist tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="label rounded-full border border-mist/20 px-3 py-1 text-[10px] text-mist/70">
                  {s.time}
                </span>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <h3 className="flex min-h-[2em] items-end font-display text-[28px] leading-none font-bold tracking-[-0.03em] uppercase">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-mist/65">{s.text}</p>
              </div>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-mist transition-transform duration-700 ease-out-soft group-hover:scale-x-100"
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
