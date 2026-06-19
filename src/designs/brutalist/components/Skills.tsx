import { SKILLS } from '@/sections/skills/data/skills'

const Skills = () => (
  <section id="skills" className="relative z-10 px-6 py-24 md:px-12">
    <div className="mx-auto max-w-6xl">
      <header className="mb-12">
        <div className="brut-prompt mb-2">
          {'michel@dev:~/portfolio$ ls skills/'}
        </div>
        <h2 className="text-4xl font-bold md:text-5xl">Skills & Stack</h2>
      </header>

      {SKILLS.map((skill) => (
        <div key={skill.title} className="mb-12">
          <h3
            className="brut-caps mb-4"
            style={{ color: 'var(--brut-fg)', fontSize: '0.9rem' }}
          >
            {'// '}
            {skill.title}
          </h3>
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-3">
            {skill.tags.map((tag) => (
              <li
                key={tag.label}
                className="inline-flex items-baseline gap-2 whitespace-nowrap"
              >
                <span className="brut-tag">{tag.label}</span>
                {tag.children && tag.children.length > 0 && (
                  <span className="brut-tag-child">
                    {'> '}
                    {tag.children.join(' · ')}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
