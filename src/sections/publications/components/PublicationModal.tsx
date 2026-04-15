'use client'

import { Publication } from '../types/Publication'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, X } from 'lucide-react'

type PublicationModalProps = {
  publication: Publication
  onClose: () => void
}

const PublicationModal = ({ publication, onClose }: PublicationModalProps) => {
  return (
    <motion.div
      layoutId={`pub-card-${publication.id}`}
      className="glass-card relative w-full max-w-2xl overflow-hidden"
      style={{ borderRadius: 16 }}
      onClick={(e) => e.stopPropagation()}
    >
      {publication.image && (
        <motion.div
          layoutId={`pub-image-${publication.id}`}
          className="relative h-64 w-full overflow-hidden"
        >
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      <div className="flex flex-col gap-4 p-8">
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
          className="text-2xl font-bold text-white"
        >
          {publication.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, delay: 0.2 }}
          className="leading-relaxed text-gray-300"
        >
          {publication.description}
        </motion.p>

        {publication.url && (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, delay: 0.25 }}
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
            onClick={(e) => e.stopPropagation()}
          >
            Read Article <ExternalLink size={14} />
          </motion.a>
        )}
      </div>

      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <X size={16} />
      </button>
    </motion.div>
  )
}

export default PublicationModal
