import { Link, useLocation } from 'react-router-dom'
import { type ReactNode } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { to: '/',             label: 'Home' },
  { to: '/members',      label: 'Members' },
  { to: '/projects',     label: 'Projects' },
  { to: '/publications', label: 'Publications' },
]

export function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation()
  return (
    <div className="app" id="top">
      <header className="site-header">
        <Link to="/" className="site-brand">
          <span className="brand-mark">MAAP</span>
        </Link>
        <nav className="top-nav" aria-label="Primary">
          <ul>
            {navItems.map((it) => (
              <li key={it.to}>
                <Link to={it.to} className={loc.pathname === it.to ? 'active' : undefined}>
                  {it.label}
                </Link>
              </li>
            ))}
            <li><a href="https://github.com/MAAP-LAB" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </nav>
      </header>
      {children}
      <ThemeToggle />
    </div>
  )
}
