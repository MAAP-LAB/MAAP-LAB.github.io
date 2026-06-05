import { useState } from 'react'
import { members, type Member } from '../data/members'

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function MemberAvatar({ m }: { m: Member }) {
  const [failed, setFailed] = useState(false)
  if (m.photo && !failed) {
    return (
      <img
        className="member-photo"
        src={m.photo}
        alt={m.name}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    )
  }
  return <div className="member-photo-placeholder">{initials(m.name)}</div>
}

export function Members() {
  return (
    <div className="members-grid">
      {members.map((m, i) => (
        <div className="member-card" key={i}>
          <MemberAvatar m={m} />
          <div className="member-name">{m.name}</div>
          {m.role === 'Lead' && <span className="member-role">{m.role}</span>}
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
