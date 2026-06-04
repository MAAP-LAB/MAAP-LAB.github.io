import { publications, type Publication } from '../data/publications'

// Conference > Workshop > Preprint/arXiv > Tech report
function venueRank(v: string): number {
  const s = v.toLowerCase()
  if (s.includes('workshop')) return 2
  if (s.includes('preprint') || s.includes('arxiv')) return 3
  if (s.includes('technical report')) return 4
  return 1 // assume main conference
}

function sortPubs(items: Publication[]): Publication[] {
  return [...items].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    return venueRank(a.venue) - venueRank(b.venue)
  })
}

export function Publications() {
  const sorted = sortPubs(publications)
  let lastYear: number | null = null

  return (
    <div>
      {sorted.map((p, i) => {
        const showYearHeader = p.year !== lastYear
        lastYear = p.year
        return (
          <div key={i}>
            {showYearHeader && <h3 className="pub-year">{p.year}</h3>}
            <div className="pub-item">
              <div className="pub-title">{p.title}</div>
              <div className="pub-authors" dangerouslySetInnerHTML={{ __html: p.authors }} />
              <div className="pub-venue" dangerouslySetInnerHTML={{ __html: p.venue }} />
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
          </div>
        )
      })}
    </div>
  )
}
