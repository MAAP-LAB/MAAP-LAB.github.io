import { lab } from '../data/info'

export function Hero() {
  return (
    <header className="hero">
      <h1>{lab.name}</h1>
      <div className="full-name">{lab.fullName}</div>
      <div className="tagline">{lab.tagline}</div>
      <div className="hero-links">
        {lab.links.map((l) => (
          <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            <i className={l.icon} aria-hidden="true" />
            <span>{l.label}</span>
          </a>
        ))}
      </div>
    </header>
  )
}
