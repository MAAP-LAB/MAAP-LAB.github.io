import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { About } from './components/About'
import { Members } from './components/Members'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { News } from './components/News'
import { ThemeToggle } from './components/ThemeToggle'

export function App() {
  return (
    <div className="app" id="top">
      <Nav />
      <Hero />
      <Section icon="🔥" title="News"         id="news"><News /></Section>
      <Section icon="🎯" title="About"        id="about"><About /></Section>
      <Section icon="👥" title="Members"      id="members"><Members /></Section>
      <Section icon="🛠️" title="Projects"     id="projects"><Projects /></Section>
      <Section icon="📚" title="Publications" id="publications"><Publications /></Section>
      <ThemeToggle />
    </div>
  )
}
