import { lab } from '../data/info'

export function About() {
  return (
    <div className="about">
      {lab.about.map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
      ))}
    </div>
  )
}
