# Vão Estúdio · Landing page

Landing page para um estúdio de arquitetura e interiores, feita com **React 19 + TypeScript + Tailwind CSS v4 + Vite**.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
npm run preview  # testa o build
```

Requer Node 20.19+ (ou 22+).

## Estrutura

```
src/
  data/content.ts        ← todos os textos, projetos, serviços e fotos
  hooks/useReveal.ts     ← revelação ao rolar (1 IntersectionObserver)
  components/
    Header.tsx           ← menu fixo + menu mobile
    Hero.tsx             ← título gigante, foto com motion blur, selo, prêmio, marquee
    CircleCta.tsx        ← botão circular com texto girando
    Marquee.tsx          ← faixa de texto infinita (CSS puro)
    Studio.tsx           ← manifesto + números
    Services.tsx         ← lista de serviços
    Projects.tsx         ← grid assimétrico com filtro por categoria
    Process.tsx          ← 4 etapas do projeto
    Testimonials.tsx     ← depoimentos com troca de foto
    Contact.tsx          ← formulário (front-end) + dados de contato
    Footer.tsx
  index.css              ← tokens de cor/fonte (@theme) e animações
```

## Personalizando

- **Cores e fontes**: bloco `@theme` no início de `src/index.css`.
- **Textos e projetos**: `src/data/content.ts`.
- **Fotos**: vêm do Unsplash (licença gratuita). Troque o id em `images` / `projects`
  (o id é o trecho depois de `photo-` na URL da foto). Para usar fotos próprias, coloque-as em
  `public/` e ajuste a função `unsplash()` em `content.ts`.
- **Formulário**: hoje só mostra a confirmação na tela. Conecte sua API ou serviço
  (Formspree, Resend, n8n...) na função `onSubmit` de `Contact.tsx`.

## Animações (leves de propósito)

Tudo é CSS animando só `transform` e `opacity`:
entrada do título, marquee, texto girando no botão circular, brilho da estrela,
revelação ao rolar e hovers. O desfoque da foto do hero é um filtro SVG estático
(calculado uma vez). `prefers-reduced-motion` desliga as animações.

## Conteúdo de exemplo

Nome do estúdio, avaliações, prêmio, telefone, endereço, projetos e depoimentos são fictícios.
Substitua pelos dados reais antes de publicar.
