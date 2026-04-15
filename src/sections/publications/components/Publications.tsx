'use client'

import PublicationCard from './PublicationCard'
import { PUBLICATIONS } from '../data/publications'
import { motion } from 'framer-motion'

const Publications = () => {
  return (
    <section id="articles" className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Latest{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Thoughts and insights on web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PUBLICATIONS.map((publication, idx) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
