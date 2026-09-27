import { useState, type FormEvent } from 'react'
import { contact } from '../data/content'
import CircleCta from './CircleCta'
import { ArrowUpRight, Eyebrow } from './ui'

const types = ['Casa', 'Apartamento', 'Escritório', 'Reforma', 'Outro']
const areas = ['Até 80 m²', '80 a 200 m²', '200 a 500 m²', 'Acima de 500 m²']

const field =
  'w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-[16px] placeholder:text-sage/80 focus:border-ink focus:ring-0 focus:outline-none transition-colors'

export default function Contact() {
  const [type, setType] = useState('Casa')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aqui entra a integração real (API, Formspree, e-mail...). Por ora, só confirmamos na tela.
    setSent(true)
  }

  return (
    <section id="contato" className="scroll-mt-20 border-t border-ink/10 bg-fog py-24 lg:py-36">
      <div className="container-x">
        <div className="relative">
          <Eyebrow className="mb-6">Contato</Eyebrow>
          <h2 className="display reveal text-[clamp(3.2rem,10.5vw,10rem)]">
            Vamos desenhar
            <br />
            <span className="text-sage">o seu espaço</span>
          </h2>
          <CircleCta
            href="#form-nome"
            label="Começar agora"
            className="absolute -top-4 right-0 hidden w-[140px] lg:grid"
          />
        </div>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <address className="flex flex-col gap-8 not-italic lg:col-span-4">
            <div className="flex flex-col gap-1.5">
              <span className="label text-[10px] text-sage">E-mail</span>
              <a href={`mailto:${contact.email}`} className="text-[18px] font-medium underline-offset-4 hover:underline">
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="label text-[10px] text-sage">Telefone / WhatsApp</span>
              <span className="text-[18px] font-medium">{contact.phone}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="label text-[10px] text-sage">Estúdio</span>
              <span className="max-w-[28ch] text-[18px] leading-snug font-medium">{contact.address}</span>
              <span className="label text-[10px] text-sage">{contact.coordinates}</span>
            </div>
            <p className="max-w-[36ch] text-[14px] leading-relaxed text-ink/65">
              Respondemos em até 2 dias úteis com uma proposta de reunião. A primeira conversa é sem custo.
            </p>
          </address>

          <div className="lg:col-span-7 lg:col-start-6">
            {sent ? (
              <div className="fade-in flex min-h-[420px] flex-col items-start justify-center gap-5 border border-ink/15 p-8 lg:p-12">
                <span className="label text-[10px] text-sage">Mensagem recebida</span>
                <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] font-bold tracking-[-0.03em]">
                  Obrigado. Vamos responder em até 2 dias úteis.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-[13px] font-medium underline underline-offset-4"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="flex flex-col">
                    <span className="label text-[10px] text-sage">Nome</span>
                    <input id="form-nome" name="nome" required autoComplete="name" placeholder="Seu nome" className={field} />
                  </label>
                  <label className="flex flex-col">
                    <span className="label text-[10px] text-sage">E-mail</span>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="voce@email.com"
                      className={field}
                    />
                  </label>
                </div>

                <fieldset className="flex flex-col gap-3">
                  <legend className="label mb-3 text-[10px] text-sage">Tipo de projeto</legend>
                  <div className="flex flex-wrap gap-2">
                    {types.map((t) => (
                      <label
                        key={t}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink ${
                          type === t ? 'border-ink bg-ink text-mist' : 'border-ink/20 hover:border-ink'
                        }`}
                      >
                        <input
                          type="radio"
                          name="tipo"
                          value={t}
                          checked={type === t}
                          onChange={() => setType(t)}
                          className="sr-only"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="flex flex-col">
                  <span className="label text-[10px] text-sage">Área aproximada</span>
                  <select id="form-area" name="area" defaultValue={areas[1]} className={`${field} cursor-pointer`}>
                    {areas.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="label text-[10px] text-sage">Conte um pouco sobre o projeto</span>
                  <textarea
                    id="form-mensagem"
                    name="mensagem"
                    rows={3}
                    placeholder="Terreno, bairro, prazo, o que não pode faltar..."
                    className={`${field} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 self-start rounded-full bg-ink py-2 pr-2 pl-7 text-[13px] font-semibold tracking-[0.12em] text-mist uppercase transition-colors hover:bg-moss"
                >
                  Enviar mensagem
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-mist text-ink">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-soft group-hover:rotate-45" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
