import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { News } from '../components/News'
import { About } from '../components/About'
import { Projects } from '../components/Projects'

export function Home() {
  return (
    <>
      <Hero />
      <Section icon="🔥" title="News"     id="news"><News /></Section>
      <Section icon="🎯" title="About"    id="about"><About /></Section>
      <Section icon="🛠️" title="Projects" id="projects"><Projects /></Section>
    </>
  )
}
