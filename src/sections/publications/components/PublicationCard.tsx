'use client'

import { Publication } from '../types/Publication'
import { motion } from 'framer-motion'
import Image from 'next/image'

type PublicationCardProps = {
  publication: Publication
  onClick: () => void
}

const PublicationCard = ({ publication, onClick }: PublicationCardProps) => {
  return (
    <motion.div
      layoutId={`pub-card-${publication.id}`}
      transition={{
        layout: { type: 'spring', stiffness: 350, damping: 35 }
      }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="glass-card group flex cursor-pointer flex-col overflow-hidden"
    >
      {publication.image && (
        <div className="relative h-48 w-full flex-shrink-0 overflow-hidden">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            className={`${publication.imageContain ? 'object-contain' : 'object-cover'} transition-transform duration-300 group-hover:scale-105`}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/10 to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs text-white/50">
          {publication.type && (
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-medium">
              {publication.type}
            </span>
          )}
          {publication.type && publication.date && <span>·</span>}
          {publication.date && (
            <span>
              {new Date(publication.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold leading-snug text-white">
          {publication.title}
        </h3>

        <p className="line-clamp-3 flex-1 text-sm text-gray-400">
          {publication.description}
        </p>
      </div>
    </motion.div>
  )
}

export default PublicationCard
