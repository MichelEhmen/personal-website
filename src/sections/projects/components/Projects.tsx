'use client'

import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Real-world applications I&apos;ve built for clients
          </p>
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {/* Desktop: two independent columns — no shared row heights */}
        <div className="hidden gap-6 md:flex">
          <div className="flex flex-1 flex-col gap-6">
            {PROJECTS.filter((_, i) => i % 2 === 0).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index * 2}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-6">
            {PROJECTS.filter((_, i) => i % 2 !== 0).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index * 2 + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
