import Section from '@/components/Section'
import ProjectCard from './ProjectCard'
import { Project } from '../types/Project'

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'KPI Management System for Sports Car Production',
      description:
        'Developed a KPI Manager for a German sports car manufacturer, aggregating production data and enabling visualization of historical values for quicker error detection and milestone planning for vehicle models.',
      technologies: ['TypeScript', 'React', 'AWS', 'SCSS'],
      fromDate: new Date(),
      toDate: new Date()
    },
    {
      title: 'Smart City Dashboard for Real-Time Information',
      description:
        'Developed a smart city dashboard web application for a city in North Rhine-Westphalia, aimed at providing citizens with real-time information on parking space occupancy and weather conditions. The application features cloud connectivity and dynamically aggregates data from multiple sources, offering various user-friendly views.',
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
    }
  ]
  return (
    <Section title="Projects" id="projects">
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project}></ProjectCard>
        ))}
      </div>
    </Section>
  )
}

export default Projects
