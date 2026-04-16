'use client'

import { useMemo, useRef } from 'react'
import { SKILLS } from '../data/skills'
import { useFloatingPhysics } from '../hooks/useFloatingPhysics'
import { computeClusterBubbles } from '../utils/clusterGeometry'
import SkillBubble from './SkillBubble'
import MobileSkillBubbles from './MobileSkillBubbles'

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

        {/* Mobile + tablet: floating single bubbles */}
        <div className="lg:hidden">
          <MobileSkillBubbles />
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
