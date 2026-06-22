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
      className="glass-card relative flex max-h-[calc(100svh-8rem)] w-full max-w-2xl flex-col overflow-hidden"
      transition={{ type: 'spring', stiffness: 350, damping: 35 }}
      style={{
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {publication.image && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            className={
              publication.imageContain ? 'object-contain' : 'object-cover'
            }
          />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white/10 to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 overflow-hidden p-8">
        <div className="flex shrink-0 items-center gap-2 text-xs text-white/50">
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

        <h3 className="shrink-0 text-2xl font-bold text-white">
          {publication.title}
        </h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, delay: 0.2 }}
          className="overflow-y-auto pr-3 leading-relaxed text-gray-300"
        >
          {publication.description}
        </motion.p>

        {publication.url && (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.25 }}
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
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
