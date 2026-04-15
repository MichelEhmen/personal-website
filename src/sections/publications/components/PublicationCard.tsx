'use client'

import { Publication } from '../types/Publication'
import { motion } from 'framer-motion'
import Image from 'next/image'

type PublicationCardProps = {
  publication: Publication
  index: number
  onClick: () => void
}

const PublicationCard = ({
  publication,
  index,
  onClick
}: PublicationCardProps) => {
  return (
    <motion.div
      layoutId={`pub-card-${publication.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="glass-card group flex cursor-pointer flex-col overflow-hidden"
    >
      {publication.image && (
        <motion.div
          layoutId={`pub-image-${publication.id}`}
          className="relative h-48 w-full flex-shrink-0 overflow-hidden"
        >
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        {publication.type && (
          <motion.span
            layoutId={`pub-type-${publication.id}`}
            className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm"
          >
            {publication.type}
          </motion.span>
        )}

        <motion.h3
          layoutId={`pub-title-${publication.id}`}
          className="text-lg font-bold leading-snug text-white"
        >
          {publication.title}
        </motion.h3>

        <p className="line-clamp-3 flex-1 text-sm text-gray-400">
          {publication.description}
        </p>
      </div>
    </motion.div>
  )
}

export default PublicationCard
