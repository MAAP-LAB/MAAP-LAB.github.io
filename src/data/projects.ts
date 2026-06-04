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
    ],
  },
  {
    title: 'MusicCritic',
    blurb: 'Test-time scaling for music generation with feature-based and audio-native LLM critics.',
    status: 'active',
  },
  {
    title: 'Step-Aware GRPO for Music Generation',
    blurb: 'GRPO-style preference optimization with timestep-dependent reward shaping, applied to DiffRhythm2.',
    status: 'active',
    links: [{ label: 'Code', href: 'https://github.com/MAAP-LAB/step-aware-grpo-audio' }],
  },
  {
    title: 'TVSI — Temporal Voice Stability under Streaming Personalization',
    blurb: 'Measurement study of within-session speaker drift in AR streaming TTS, with a periodic re-anchor fix.',
    status: 'active',
  },
]
