'use client'
import Card from '@/components/Card'
import { Project } from '../types/Project'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type ProjectCardProps = {
  project: Project
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const cardClickHandler = () => {
    console.log('clicked card')
    setIsOpen(!isOpen)
  }
  return (
    <Card
      onClick={cardClickHandler}
      className="cursor-pointer"
      whileHover={{
        scale: 1.02
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="flex flex-col divide-y divide-gray-400 *:py-2 first:*:pt-0 last:*:pb-0"
        layout
      >
        <motion.div className="font-bold" layout>
          {project.title}
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-2">
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology, idx) => (
                    <div
                      key={technology + idx}
                      className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Card>
  )
}

export default ProjectCard
