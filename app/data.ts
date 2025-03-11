type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Maria Loka Urban Shop',
    description: 'Loja online feita com wordpress e woocommerce',
    link: 'https://marialoka.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Mustafá Administração e Venda de Imóveis',
    description: 'Imobiliária Digital',
    link: 'https://mustafaadmimoveis.com.br/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Lopes Compliance',
    description:
      'Software de Compliance e landing page feita com javascript + Nuxt no front e PHP + laravel no back e banco de dados MySQL',
    link: 'https://lopescompliance.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Criação de sites, tráfego pago, orgânico e SEO',
    start: '2024',
    end: 'present',
    link: 'https://github.com/cauemustafa',
    id: 'work1',
  },
  {
    company: 'Mustafá Administração e Venda de Imóveis',
    title: 'Analista de Marketing Digital',
    start: '2025',
    end: 'Present',
    link: 'https:mustafaadmimoveis.com.br',
    id: 'work2',
  },
  {
    company: 'Maria Loka Urban Shop',
    title: 'Gerente de Vendas',
    start: '09/09/2024',
    end: '31/01/2025',
    link: 'https://marialoka.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/cauemustafa',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/cauemustafa',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/cauemustafa',
  },
]

export const EMAIL = '42musta.dev@gmail.com'
