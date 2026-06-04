export type Role = 'Lead' | 'Researcher' | 'Student' | 'Collaborator'

export interface Member {
  name: string
  affiliation: string
  role: Role
  interests?: string  // short topic tag, e.g. "Music QA, Source Separation"
  photo?: string      // path under /members/, e.g. '/members/junyoung.jpg'
  links?: Array<{ label: string; href: string }>
}

// Lead first, then alphabetical within each role tier.
export const members: Member[] = [
  {
    name: 'Junyoung Koh',
    affiliation: 'Yonsei University · KRAFTON AI',
    role: 'Lead',
    interests: 'Source separation, Multi-pitch estimation, Music QA',
    photo: '/members/junyoung.jpg',
    links: [
      { label: 'Site',    href: 'https://junst.github.io' },
      { label: 'Scholar', href: 'https://scholar.google.com/citations?user=-zUwo6kAAAAJ' },
      { label: 'GitHub',  href: 'https://github.com/Junst' },
    ],
  },
  // TODO — add the rest of the ~25 members. Each row owns a PR to fill itself in.
]
