/**
 * Todo o conteúdo da página fica aqui, separado dos componentes.
 * Troque textos, projetos e fotos sem mexer no layout.
 */

/** Monta a URL de uma foto do Unsplash no tamanho certo (licença Unsplash, uso livre). */
export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const images = {
  hero: '1600607687939-ce8a6c25118c', // sala de estar clara com cozinha integrada
  studio: '1600566753190-17f0baa2a6c3', // fachada em madeira
  residencial: '1600566753190-17f0baa2a6c3',
  interiores: '1618221195710-dd6b41faaea6', // sala com sofá cinza e pufes
  corporativo: '1497366216548-37526070297c', // corredor de escritório
  retrofit: '1497366811353-6870744d04b2', // loft com laje aparente
  paisagismo: '1613490493576-7fde63acd811', // casa com piscina
  casaPatio: '1600585154340-be6161a56a0c', // casa com árvore no jardim
  higienopolis: '1600210492486-724fe5c67fb0', // sala com galeria de quadros
} as const

export const nav = [
  { label: 'Estúdio', href: '#estudio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
]

export const marqueeWords = ['Residencial', 'Interiores', 'Corporativo', 'Retrofit', 'Paisagismo']

export const stats = [
  { value: '14', unit: 'anos', label: 'de estúdio em São Paulo' },
  { value: '210', unit: '+', label: 'projetos entregues' },
  { value: '68', unit: 'mil m²', label: 'projetados e construídos' },
  { value: '9', unit: 'prêmios', label: 'nacionais de arquitetura' },
]

export type Service = {
  title: string
  description: string
  deliverables: string[]
  image: string
}

export const services: Service[] = [
  {
    title: 'Arquitetura residencial',
    description:
      'Casas projetadas do terreno para dentro: implantação, insolação, ventilação cruzada e a rotina de quem vai morar.',
    deliverables: ['Estudo de massa', 'Projeto legal', 'Executivo', 'Compatibilização'],
    image: images.residencial,
  },
  {
    title: 'Design de interiores',
    description:
      'Layout, marcenaria, iluminação e curadoria de materiais para apartamentos e casas que precisam de uma nova ordem.',
    deliverables: ['Layout', 'Marcenaria', 'Luminotécnico', 'Curadoria'],
    image: images.interiores,
  },
  {
    title: 'Espaços corporativos',
    description:
      'Escritórios e sedes pensados para o jeito que as equipes trabalham hoje, com áreas de foco, encontro e acolhimento.',
    deliverables: ['Programa de necessidades', 'Layout', 'Branding espacial'],
    image: images.corporativo,
  },
  {
    title: 'Retrofit e reforma',
    description:
      'Imóveis antigos atualizados sem perder o que têm de melhor: estrutura, pé-direito, piso original e memória.',
    deliverables: ['Levantamento', 'Diagnóstico', 'Projeto de reforma'],
    image: images.retrofit,
  },
  {
    title: 'Paisagismo integrado',
    description:
      'Jardins, pátios e áreas externas desenhados junto com a arquitetura, para que dentro e fora funcionem como um só lugar.',
    deliverables: ['Plano de massas', 'Espécies nativas', 'Irrigação'],
    image: images.paisagismo,
  },
]

export type Category = 'Residencial' | 'Interiores' | 'Corporativo'

export type Project = {
  name: string
  category: Category
  city: string
  year: number
  area: string
  image: string
}

export const projects: Project[] = [
  {
    name: 'Casa Mirante',
    category: 'Residencial',
    city: 'Campos do Jordão, SP',
    year: 2025,
    area: '480 m²',
    image: images.paisagismo,
  },
  {
    name: 'Apartamento Higienópolis',
    category: 'Interiores',
    city: 'São Paulo, SP',
    year: 2024,
    area: '190 m²',
    image: images.higienopolis,
  },
  {
    name: 'Sede Lumen',
    category: 'Corporativo',
    city: 'Curitiba, PR',
    year: 2024,
    area: '1.250 m²',
    image: images.corporativo,
  },
  {
    name: 'Casa Pátio',
    category: 'Residencial',
    city: 'Florianópolis, SC',
    year: 2023,
    area: '360 m²',
    image: images.casaPatio,
  },
  {
    name: 'Loft Vila Madalena',
    category: 'Interiores',
    city: 'São Paulo, SP',
    year: 2025,
    area: '120 m²',
    image: images.interiores,
  },
  {
    name: 'Escritório Traço',
    category: 'Corporativo',
    city: 'Belo Horizonte, MG',
    year: 2023,
    area: '640 m²',
    image: images.retrofit,
  },
]

export const steps = [
  {
    title: 'Escuta',
    time: '1–2 semanas',
    text: 'Visitamos o terreno ou imóvel, entendemos a rotina, o orçamento e o que não pode faltar. Sai daqui o programa de necessidades.',
  },
  {
    title: 'Estudo preliminar',
    time: '4–6 semanas',
    text: 'Plantas, cortes e volumetria 3D para decidir juntos a implantação, os fluxos e a atmosfera do espaço.',
  },
  {
    title: 'Projeto executivo',
    time: '8–12 semanas',
    text: 'Detalhamento completo, compatibilizado com estrutura e instalações. Cada prancha pronta para orçar e construir.',
  },
  {
    title: 'Obra',
    time: 'até a entrega',
    text: 'Acompanhamos a obra com visitas semanais, cronograma e controle de custos até a entrega das chaves.',
  },
]

export const testimonials = [
  {
    quote:
      'Cheguei com uma lista de desejos e um terreno difícil. Saí com uma casa que parece ter estado sempre ali, com luz boa o dia inteiro.',
    name: 'Marina Siqueira',
    project: 'Casa Mirante · 2025',
    avatar: '1438761681033-6461ffad8d80',
    image: images.paisagismo,
  },
  {
    quote:
      'O estúdio entendeu como a equipe trabalha antes de desenhar uma parede. A sede nova mudou a forma como a gente se encontra.',
    name: 'Rafael Monteiro',
    project: 'Sede Lumen · 2024',
    avatar: '1500648767791-00dcc994a43e',
    image: images.corporativo,
  },
  {
    quote:
      'Reformar um apartamento dos anos 60 dava medo. Eles mantiveram o taco original e resolveram tudo que estava escondido nas paredes.',
    name: 'Helena Duarte',
    project: 'Apartamento Higienópolis · 2024',
    avatar: '1544005313-94ddf0286df2',
    image: images.higienopolis,
  },
]

export const contact = {
  email: 'ola@vaoestudio.com.br',
  phone: '+55 11 90000-0000',
  address: 'Rua Harmonia, 1250 · Vila Madalena · São Paulo',
  coordinates: '23°33′S 46°41′W',
}
