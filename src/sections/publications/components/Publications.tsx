'use client'
import Section from '@/components/Section'
import PublicationCard from './PublicationCard'
import { PUBLICATIONS } from '../data/publications'

const Publications = () => {
  return (
    <Section title="Latest Articles" id="articles">
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PUBLICATIONS.map((publication, idx) => (
          <PublicationCard publication={publication} key={idx} />
        ))}
      </div>
    </Section>
  )
}

export default Publications
