import { Suspense } from 'react'
import DesignShell from '@/designs/DesignShell'
import GlassDesign from '@/designs/glass'

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

const App = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Suspense fallback={<GlassDesign />}>
      <DesignShell />
    </Suspense>
  </>
)

export default App
