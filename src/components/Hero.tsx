import { lab } from '../data/info'

export function Hero() {
  return (
    <header className="hero">
      <h1 className="visually-hidden">{lab.name}</h1>
      <img className="hero-logo" src="/textlogo.png" alt={lab.name} />
      <div className="full-name">{lab.fullName}</div>
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
