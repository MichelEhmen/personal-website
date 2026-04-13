'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project } from '../types/Project'

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'KPI Management System for a factory',
      description:
        'Developed a KPI Manager for a manufacturer, aggregating production data and enabling visualization of historical values for quicker error detection and milestone planning for different models.',
      technologies: ['TypeScript', 'React', 'AWS', 'SCSS'],
      fromDate: new Date(),
      toDate: new Date()
    },
    {
      title: 'Smart City Dashboard for Real-Time Information',
      description:
        'Developed a smart city dashboard web application for a city, aimed at providing citizens with real-time information on parking space occupancy and weather conditions. The application features cloud connectivity and dynamically aggregates data from multiple sources, offering various user-friendly views.',
      technologies: [
        'TypeScript',
        'React',
        'Tailwind',
        'Docker',
        'Postgres',
        'Serverless Functions'
      ],
      fromDate: new Date(),
      toDate: new Date()
    },
    {
      title: 'Inventory & Order Management Platform',
      description:
        'Built a full-stack inventory and order management system for a retail client, replacing manual spreadsheet workflows. Features real-time stock tracking, automated reorder alerts, supplier management, and a reporting dashboard with exportable PDF/CSV reports.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Postgres', 'Docker'],
      fromDate: new Date(),
      toDate: new Date()
    },
    {
      title: 'Field Service Mobile App',
      description:
        'Developed a cross-platform mobile application for field service technicians, enabling offline-capable job management, digital checklists, and photo documentation. Synchronized with a central backend once connectivity is restored.',
      technologies: ['React Native', 'TypeScript', 'SQLite', 'Node.js', 'AWS'],
      fromDate: new Date(),
      toDate: new Date()
    }
  ]

  return (
    <section id="projects" className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Real-world applications I&apos;ve built for clients
          </p>
        </motion.div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        {/* Desktop: two independent columns — no shared row heights */}
        <div className="hidden gap-6 md:flex">
          <div className="flex flex-1 flex-col gap-6">
            {projects
              .filter((_, i) => i % 2 === 0)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index * 2}
                />
              ))}
          </div>
          <div className="flex flex-1 flex-col gap-6">
            {projects
              .filter((_, i) => i % 2 !== 0)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
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
