export interface Project {
  title: string
  blurb: string
  status: 'active' | 'published' | 'archived'
  links?: Array<{ label: string; href: string }>
}

export const projects: Project[] = [
  {
    title: 'Jamendo-MT-QA',
    blurb: 'A benchmark for multi-track comparative music question answering. 36K+ comparative QA pairs over 12K Jamendo track pairs.',
    status: 'published',
    links: [
      { label: 'arXiv',       href: 'https://arxiv.org/abs/2604.09721' },
      { label: 'Code',        href: 'https://github.com/MAAP-LAB/Jamendo-MT-QA' },
      { label: 'HuggingFace', href: 'https://huggingface.co/datasets/m-a-a-p/Jamendo-MT-QA' },
      { label: 'Project',     href: 'https://maap-lab.github.io/Jamendo-MT-QA/' },
      { label: 'Poster',      href: '/assets/poster/Jamendo-MT-QA_Poster.pdf' },
      { label: 'Video',       href: 'https://youtu.be/yRbXoxEzl7s' },
    ],
  },
]
