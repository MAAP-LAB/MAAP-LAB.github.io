import { members } from '../data/members'

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Members() {
  return (
    <div className="members-grid">
      {members.map((m, i) => (
        <div className="member-card" key={i}>
          {m.photo ? (
            <img className="member-photo" src={m.photo} alt={m.name} />
          ) : (
            <div className="member-photo-placeholder">{initials(m.name)}</div>
          )}
          <div className="member-name">{m.name}</div>
          <span className="member-role">{m.role}</span>
          <div className="member-affil">{m.affiliation}</div>
          {m.interests && <div className="member-interests">{m.interests}</div>}
          {m.links && (
            <div className="member-links">
              {m.links.map((l, j) => (
                <a key={j} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
