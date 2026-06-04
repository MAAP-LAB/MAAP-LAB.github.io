import { news } from '../data/news'

export function News() {
  return (
    <div className="news">
      <ul>
        {news.map((n, i) => (
          <li key={i}>
            <span className="news-date">{n.date}</span>
            {' : '}
            <span dangerouslySetInnerHTML={{ __html: n.text }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
