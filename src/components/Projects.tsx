import { projects } from '../data/projects'
import { iconFor } from '../data/linkIcons'

export function Projects() {
  return (
    <div>
      {projects.map((p, i) => (
        <div className="project-item" key={i}>
          <div className="project-title">
            <span>{p.title}</span>
            <span className={`project-status ${p.status}`}>{p.status}</span>
          </div>
          <div className="project-blurb">{p.blurb}</div>
          {p.links && (
            <div className="project-links">
              {p.links.map((l, j) => {
                const icon = iconFor(l.label)
                return (
                  <span key={j}>
                    {j > 0 && <span className="sep">·</span>}
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {icon && <span className="link-icon" aria-hidden="true">{icon}</span>}
                      <span className="link-label">{l.label}</span>
                    </a>
                  </span>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
