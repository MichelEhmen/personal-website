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
      <div className="flex flex-col">
        <div className="z-10 bg-secondary font-bold">{project.title}</div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -40 }}
              animate={{
                opacity: 1,
                height: 'auto',
                y: 0,
                transition: {
                  opacity: { duration: 0.4 },
                  height: { duration: 0.3 },
                  y: { duration: 0.3 }
                }
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -50,
                transition: {
                  height: { duration: 0.4 },
                  opacity: { duration: 0.1 },
                  y: { duration: 0.3 }
                }
              }}
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
      </div>
    </Card>
  )
}

export default ProjectCard
