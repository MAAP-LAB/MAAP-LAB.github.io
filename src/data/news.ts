export interface NewsItem {
  date: string
  text: string  // HTML allowed
}

export const news: NewsItem[] = [
  { date: 'Jun 2026', text: '2 papers accepted to the <a href="https://mlforaudioworkshop.github.io/">ICML 2026 Workshop on Machine Learning for Audio</a>.' },
  { date: 'May 2026', text: '🏆 MAAP won <strong>1st place in the Performance Track</strong> and <strong>#1 overall in MOS</strong> at the ICME 2026 ATTM Grand Challenge.' },
  { date: 'Apr 2026', text: '<strong>Jamendo-MT-QA</strong> accepted to ACL 2026 Findings.' },
  { date: 'Sep 2025', text: '<strong>AIBA</strong> accepted to the NeurIPS 2025 Workshop on AI for Music.' },
  { date: 'May 2025', text: 'MAAP launched at Modulabs.' },
]
