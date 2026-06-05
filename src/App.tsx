import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { MembersPage } from './pages/MembersPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { PublicationsPage } from './pages/PublicationsPage'

export function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/members"      element={<MembersPage />} />
          <Route path="/projects"     element={<ProjectsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="*"             element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
