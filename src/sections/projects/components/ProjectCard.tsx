'use client'

import { Project } from '../types/Project'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type ProjectCardProps = {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const cardClickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={cardClickHandler}
      className="glass-card group cursor-pointer overflow-hidden p-6 transition-all"
    >
      <div className="flex flex-col">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-gray-400"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
                transition: {
                  opacity: { duration: 0.4 },
                  height: { duration: 0.3 }
                }
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="overflow-hidden"
            >
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology, idx) => (
                    <span
                      key={technology + idx}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ProjectCard
