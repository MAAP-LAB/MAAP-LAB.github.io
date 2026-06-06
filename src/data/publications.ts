export interface Publication {
  title: string
  authors: string  // HTML; bold MAAP members
  venue: string    // HTML allowed (link the conference/workshop name)
  year: number
  links?: Array<{ label: string; href: string }>
}

export const publications: Publication[] = [
  {
    title: 'Jamendo-MT-QA: A Benchmark for Multi-Track Comparative Music Question Answering',
    authors: '<strong>Junyoung Koh</strong>, Jaeyun Lee, <strong>Soo Yong Kim</strong>, <strong>Gyu Hyeong Choi</strong>, Jung In Koh, <strong>Jordan Phillips</strong>, Yeonjin Lee, and Min Song',
    venue: '<a href="https://2026.aclweb.org/">ACL 2026 Findings</a>',
    year: 2026,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.09721' },
      { label: 'Code',  href: 'https://github.com/MAAP-LAB/Jamendo-MT-QA' },
    ],
  },
  {
    title: 'Instrumental Text-to-Music Generation with Auxiliary Conditioning Branches',
    authors: '<strong>Junyoung Koh</strong>',
    venue: '<a href="https://ntu-musicailab.github.io/ICME26-ATTM-Grand-Challenge/">ICME 2026 ATTM Grand Challenge</a> — 🏆 1st Place, Performance Track / #1 Overall MOS',
    year: 2026,
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2605.21433' }],
  },
  {
    title: 'AIBA: Attention-based Instrument Band Alignment for Text-to-Audio Diffusion',
    authors: '<strong>Junyoung Koh</strong>, <strong>Sooyong Kim</strong>, <strong>Gyuhyeong Choi</strong>, and <strong>Yongwon Choi</strong>',
    venue: '<a href="https://aiformusicworkshop.github.io/">NeurIPS 2025 Workshop on AI for Music</a>',
    year: 2025,
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2509.20891' }],
  },
  {
    title: 'Probing Token Spaces under Generator Shift in AI-Generated Music Detection',
    authors: '<strong>Joonyong Park</strong>, <strong>Jungwoo Kim</strong>, <strong>Junyoung Koh</strong>, and Yuki Saito',
    venue: '<a href="https://mlforaudioworkshop.github.io/">ICML 2026 Workshop on Machine Learning for Audio</a>',
    year: 2026,
  },
  {
    title: 'Probing-Based Test-Time Steering of Music Diffusion Transformers',
    authors: '<strong>Junyoung Koh</strong>',
    venue: '<a href="https://mlforaudioworkshop.github.io/">ICML 2026 Workshop on Machine Learning for Audio</a>',
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
