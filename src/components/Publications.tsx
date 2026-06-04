import { publications } from '../data/publications'

export function Publications() {
  return (
    <div>
      {publications.map((p, i) => (
        <div className="pub-item" key={i}>
          <div className="pub-title">{p.title}</div>
          <div className="pub-authors" dangerouslySetInnerHTML={{ __html: p.authors }} />
          <div className="pub-venue" dangerouslySetInnerHTML={{ __html: p.venue + ' · ' + p.year }} />
          {p.links && p.links.length > 0 && (
            <div className="pub-links">
              {p.links.map((l, j) => (
                <span key={j}>
                  {j > 0 && ' · '}
                  <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
