import Hero from '@/sections/hero'
import Skills from '@/sections/skills'
import Projects from '@/sections/projects'
import Publications from '@/sections/publications'
import Contact from '@/sections/contact'

const GlassContent = () => (
  <div className="relative min-h-screen">
    <main className="relative z-10">
      <Hero />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </main>
  </div>
)

export default GlassContent
