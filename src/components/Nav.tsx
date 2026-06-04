interface NavItem {
  label: string
  href: string
  external?: boolean
}

const items: NavItem[] = [
  { label: 'About',        href: '#top' },
  { label: 'Members',      href: '#members' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'News',         href: '#news' },
  { label: 'GitHub',       href: 'https://github.com/MAAP-LAB', external: true },
]

export function Nav() {
  return (
    <nav className="top-nav" aria-label="Primary">
      <ul>
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target={it.external ? '_blank' : undefined}
              rel={it.external ? 'noopener noreferrer' : undefined}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
