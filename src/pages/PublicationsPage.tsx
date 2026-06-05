import { Publications } from '../components/Publications'

export function PublicationsPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Publications</h1>
        <p className="page-lead">Papers from MAAP members, grouped by year.</p>
      </header>
      <Publications />
    </div>
  )
}
