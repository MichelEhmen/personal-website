'use client'
import Card from '@/components/Card'
import { Project } from '../types/Project'
import { useState } from 'react'

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
    <Card onClick={cardClickHandler} className="cursor-pointer">
      <div className="flex flex-col divide-y divide-gray-400 *:py-2 first:*:pt-0 last:*:pb-0">
        <div className="font-bold">{project.title}</div>
        {isOpen && (
          <div className="flex flex-col gap-2">
            <p> {project.description}</p>
            {/* <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" /> */}
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
        )}
      </div>
    </Card>
  )
}

export default ProjectCard
