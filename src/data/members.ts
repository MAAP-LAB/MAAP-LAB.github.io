export type Role = 'Lead' | 'Member'

export interface Member {
  name: string
  affiliation: string
  role: Role
  interests?: string  // optional short topic tag
  photo?: string      // external URL; leave undefined to fall back to initials
  links?: Array<{ label: string; href: string }>
}

// Lead first; members alphabetical.
export const members: Member[] = [
  {
    name: 'Junyoung Koh',
    affiliation: 'Yonsei University · KRAFTON AI',
    role: 'Lead',
    interests: 'Source separation, Multi-pitch estimation, Music QA',
    photo: 'https://junst.github.io/images/profile.jpg',
    links: [
      { label: 'Site',    href: 'https://junst.github.io' },
      { label: 'Scholar', href: 'https://scholar.google.com/citations?user=-zUwo6kAAAAJ' },
      { label: 'GitHub',  href: 'https://github.com/Junst' },
    ],
  },
  {
    name: 'Gyu Hyeong Choi',
    affiliation: 'Sungkyunkwan University',
    role: 'Member',
    links: [
      { label: 'LinkedIn', href: 'https://kr.linkedin.com/in/choi-gyuhyeong-56b0743b3' },
    ],
  },
  {
    name: 'Joonyong Park',
    affiliation: 'University of Tokyo',
    role: 'Member',
    photo: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=iztqExoAAAAJ',
    links: [
      { label: 'Scholar', href: 'https://scholar.google.com/citations?user=iztqExoAAAAJ&hl=en' },
    ],
  },
  {
    name: 'Jordan Phillips',
    affiliation: 'George Mason University',
    role: 'Member',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jphillipsvirginia/' },
    ],
  },
  {
    name: 'Jungwoo Kim',
    affiliation: 'Yonsei University',
    role: 'Member',
    photo: 'https://github.com/kjungwoo03.png',
    links: [
      { label: 'Site',   href: 'https://kjungwoo03.github.io' },
      { label: 'GitHub', href: 'https://github.com/kjungwoo03' },
    ],
  },
  {
    name: 'Kumud Dhabhai',
    affiliation: 'University of Rajasthan',
    role: 'Member',
    photo: 'https://github.com/Kumud82.png',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kumud-dhabhai-171474316/' },
      { label: 'GitHub',   href: 'https://github.com/Kumud82' },
    ],
  },
  {
    name: 'Soo Yong Kim',
    affiliation: 'Seoul National University',
    role: 'Member',
    photo: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=jSMVF4IAAAAJ',
    links: [
      { label: 'Scholar', href: 'https://scholar.google.com/citations?user=jSMVF4IAAAAJ&hl=ko' },
    ],
  },
  {
    name: 'Sunghyun Kim',
    affiliation: 'Northumbria University',
    role: 'Member',
    photo: 'https://github.com/gogog01-29-2021.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/gogog01-29-2021' },
    ],
  },
  {
    name: 'Youngjin Na',
    affiliation: 'University of Nottingham',
    role: 'Member',
    photo: 'https://github.com/ppxyn1.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/ppxyn1' },
    ],
  },
  {
    name: 'Yunjin Chung',
    affiliation: 'KAIST',
    role: 'Member',
    photo: 'https://github.com/yoonjinxd.png',
    links: [
      { label: 'Site',   href: 'https://yoonjinxd.github.io' },
      { label: 'GitHub', href: 'https://github.com/yoonjinxd' },
    ],
  },
]
