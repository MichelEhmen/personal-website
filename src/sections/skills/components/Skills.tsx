'use client'

import { useMemo, useRef } from 'react'
import { SKILLS } from '../data/skills'
import { useFloatingPhysics } from '../hooks/useFloatingPhysics'
import { computeClusterBubbles } from '../utils/clusterGeometry'
import SkillBubble from './SkillBubble'

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const clusterBubbles = useMemo(() => SKILLS.map(computeClusterBubbles), [])
  const { refs: bubbleRefs } = useFloatingPhysics(clusterBubbles, containerRef)

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Skills &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Mobile + tablet: card grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {SKILLS.map((skill) => (
            <div
              key={skill.title}
              className="glass-card flex flex-col gap-3 p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} p-2 shadow-lg`}
                >
                  <skill.icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-white">{skill.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tags
                  .flatMap((tag) => [tag.label, ...(tag.children ?? [])])
                  .map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {label}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: floating physics bubbles */}
        <div
          ref={containerRef}
          className="relative hidden overflow-hidden lg:block lg:h-[800px] xl:h-[700px]"
        >
          {SKILLS.map((skill, i) => (
            <SkillBubble
              key={skill.title}
              ref={bubbleRefs[i] as React.RefObject<HTMLDivElement>}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
