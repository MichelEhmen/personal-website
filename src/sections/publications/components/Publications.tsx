'use client'
import Section from '@/components/Section'
import PublicationCard from './PublicationCard'
import { PUBLICATIONS } from '../data/publications'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

const Publications = () => {
  const [selectedPublicationId, setSelectedPublicationId] = useState<
    string | null
  >(null)

  const [heights, setHeights] = useState<number[]>([])
  const elementRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const newHeights = elementRefs.current.map((ref) => ref?.offsetHeight || 0)
    setHeights(newHeights)
  }, [])

  return (
    <Section title="Latest Articles" id="articles" className="relative">
      <div className="grid max-w-full grid-cols-1 items-start gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PUBLICATIONS.map((publication, idx) => (
          <div
            key={idx}
            ref={(el) => {
              elementRefs.current[idx] = el
            }}
          >
            {publication.id === selectedPublicationId && (
              <div
                style={{
                  height:
                    heights[
                      PUBLICATIONS.findIndex(
                        (p) => p.id === selectedPublicationId
                      )
                    ]
                }}
              />
            )}
            <PublicationCard
              className={classNames({
                'absolute left-0 right-0 top-0 z-20 m-10 border border-black bg-secondary':
                  publication.id === selectedPublicationId
              })}
              publication={publication}
              open={publication.id === selectedPublicationId}
              onCardClick={setSelectedPublicationId}
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedPublicationId && (
          <motion.div
            id="test"
            className="absolute left-0 top-0 z-10 h-full w-full items-center rounded-lg bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPublicationId(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}

export default Publications
