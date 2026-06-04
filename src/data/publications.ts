export interface Publication {
  title: string
  authors: string  // HTML; bold MAAP members
  venue: string    // HTML allowed
  year: number
  links?: Array<{ label: string; href: string }>
}

export const publications: Publication[] = [
  {
    title: 'Jamendo-MT-QA: A Benchmark for Multi-Track Comparative Music Question Answering',
    authors: '<strong>Junyoung Koh</strong>, <strong>Jaeyun Lee</strong>, <strong>Soo Yong Kim</strong>, <strong>Gyu Hyeong Choi</strong>, <strong>Jung In Koh</strong>, Jordan Phillips, <strong>Yeonjin Lee</strong>, and Min Song',
    venue: 'ACL 2026 Findings',
    year: 2026,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.09721' },
      { label: 'Code',  href: 'https://github.com/MAAP-LAB/Jamendo-MT-QA' },
    ],
  },
  {
    title: 'Instrumental Text-to-Music Generation with Auxiliary Conditioning Branches',
    authors: '<strong>Junyoung Koh</strong>',
    venue: 'ICME 2026 ATTM Grand Challenge — 🏆 1st Place, Performance Track / #1 Overall MOS',
    year: 2026,
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2605.21433' }],
  },
  {
    title: 'AIBA: Attention-based Instrument Band Alignment for Text-to-Audio Diffusion',
    authors: '<strong>Junyoung Koh</strong>, <strong>Sooyong Kim</strong>, <strong>Gyuhyeong Choi</strong>, and <strong>Yongwon Choi</strong>',
    venue: 'NeurIPS 2025 Workshop on AI for Music',
    year: 2025,
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2509.20891' }],
  },
  {
    title: 'Probing Token Spaces under Generator Shift in AI-Generated Music Detection',
    authors: '<strong>Joonyong Park</strong>, <strong>Jungwoo Kim</strong>, <strong>Junyoung Koh</strong>, and Yuki Saito',
    venue: 'ICML 2026 Workshop on Machine Learning for Audio',
    year: 2026,
  },
  {
    title: 'Probing-Based Test-Time Steering of Music Diffusion Transformers',
    authors: '<strong>Junyoung Koh</strong>',
    venue: 'ICML 2026 Workshop on Machine Learning for Audio',
    year: 2026,
  },
  {
    title: 'Jamendo-QA: A Large-Scale Music Question Answering Dataset',
    authors: '<strong>Junyoung Koh</strong>, <strong>Sooyong Kim</strong>, <strong>Yongwon Choi</strong>, and <strong>Gyuhyeong Choi</strong>',
    venue: 'arXiv preprint',
    year: 2025,
    links: [
      { label: 'arXiv',       href: 'https://arxiv.org/abs/2509.15662' },
      { label: 'HuggingFace', href: 'https://huggingface.co/datasets/m-a-a-p/Jamendo-QA' },
    ],
  },
]
