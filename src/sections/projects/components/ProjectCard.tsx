'use client'

import { Project } from '../types/Project'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type ProjectCardProps = {
  project: Project
  index: number
}

const ACCENTS = [
  'from-purple-500 to-pink-500',
  'from-pink-500 to-orange-500',
  'from-blue-500 to-purple-500',
  'from-cyan-500 to-blue-500',
  'from-orange-400 to-pink-500'
]

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={() => setIsOpen(!isOpen)}
      className="glass-card group cursor-pointer overflow-hidden"
    >
      <div className={`h-0.5 w-full bg-gradient-to-r ${accent}`} />

      <div className="flex flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold leading-snug text-white">
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-0.5 flex-shrink-0 text-gray-400"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology, idx) => (
            <span
              key={technology + idx}
              className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
                transition: {
                  opacity: { duration: 0.3 },
                  height: { duration: 0.25 }
                }
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.25 },
                  opacity: { duration: 0.15 }
                }
              }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ProjectCard
