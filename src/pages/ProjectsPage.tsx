import { Projects } from '../components/Projects'

export function ProjectsPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-lead">Ongoing and published research efforts.</p>
      </header>
      <Projects />
    </div>
  )
}
