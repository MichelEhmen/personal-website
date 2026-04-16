import Hero from '@/sections/hero'
import Skills from '@/sections/skills'
import Projects from '@/sections/projects'
import Publications from '@/sections/publications'
import Contact from '@/sections/contact'
import Navigation from '@/components/Navigation'
import AnimatedBackground from '@/components/AnimatedBackground'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michel Ehmen',
  url: 'https://www.michel-ehmen.dev',
  email: 'michelehmen@gmail.com',
  jobTitle: 'Full-Stack Developer',
  description:
    'Full-Stack Developer from Northern Germany, passionate about React, TypeScript, and building exceptional web experiences.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DE',
    addressRegion: 'Northern Germany'
  },
  sameAs: [
    'https://github.com/michelehmen',
    'https://linkedin.com/in/michel-ehmen/'
  ]
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  )
}
