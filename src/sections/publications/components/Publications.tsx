'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PublicationCard from './PublicationCard'
import PublicationModal from './PublicationModal'
import { PUBLICATIONS } from '../data/publications'
import { Publication } from '../types/Publication'

const Publications = () => {
  const [selected, setSelected] = useState<Publication | null>(null)

  return (
    <section id="articles" className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Latest{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Thoughts and insights on web development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PUBLICATIONS.map((publication) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              onClick={() => setSelected(publication)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit instantly so the modal collapse animation isn't blocked
            exit={{ opacity: 0, transition: { duration: 0 } }}
            onClick={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <div
            className="fixed bottom-0 left-0 right-0 top-24 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <PublicationModal
              publication={selected}
              onClose={() => setSelected(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Publications
