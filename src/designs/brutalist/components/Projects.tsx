import { PROJECTS } from '@/sections/projects/data/projects'

const Projects = () => (
  <section id="projects" className="relative z-10 px-6 py-24 md:px-12">
    <div className="mx-auto max-w-6xl">
      <header className="mb-12">
        <div className="brut-prompt mb-2">
          {'michel@dev:~/portfolio$ ls projects/'}
        </div>
        <h2 className="text-4xl font-bold md:text-5xl">Selected Work</h2>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article key={project.id} className="brut-card p-6">
            <div className="brut-caps mb-2">
              project_{String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
            <p
              className="mb-4 text-sm leading-relaxed"
              style={{ color: 'rgba(245,245,240,0.75)' }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="brut-tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
