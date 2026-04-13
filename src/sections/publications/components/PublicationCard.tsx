'use client'

import { Publication } from '../types/Publication'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import classNames from 'classnames'

type PublicationCardProps = {
  publication: Publication
  open: boolean
  onCardClick: (publicationId: string | null) => void
  index: number
}

const PublicationCard = ({
  publication,
  open,
  onCardClick,
  index
}: PublicationCardProps) => {
  const cardClickHandler = () => {
    onCardClick(open ? null : publication.id)
  }

  return (
    <motion.div
      data-publication-id={publication.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={!open ? { scale: 1.02 } : {}}
      onClick={cardClickHandler}
      className={classNames('glass-card group overflow-hidden transition-all', {
        'cursor-pointer': !open,
        'fixed left-1/2 top-1/2 z-50 max-h-[80vh] w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto':
          open
      })}
    >
      {publication.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">
          {publication.title}
        </h3>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-gray-300">{publication.description}</p>

            {publication.type && (
              <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {publication.type}
              </span>
            )}

            {publication.url && (
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white transition-all hover:from-purple-600 hover:to-pink-600"
                onClick={(e) => e.stopPropagation()}
              >
                Read Article <ExternalLink size={16} />
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default PublicationCard
