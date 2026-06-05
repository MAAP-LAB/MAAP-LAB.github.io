import { Members } from '../components/Members'
import { lab } from '../data/info'

export function MembersPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Members</h1>
        <p className="page-lead">
          {lab.fullName} is a growing community. Reach out at{' '}
          <a href={`mailto:${lab.contactEmail}`}>{lab.contactEmail}</a> to collaborate.
        </p>
      </header>
      <Members />
    </div>
  )
}
