'use client'

import { useRef, useMemo, useState } from 'react'
import { SKILLS } from '../data/skills'
import { useFloatingPhysics } from '../hooks/useFloatingPhysics'
import type { BubbleOffset } from '../utils/clusterGeometry'

const MOBILE_R = 62

const MobileSkillBubbles = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const clusterBubbles = useMemo<BubbleOffset[][]>(
    () => SKILLS.map(() => [{ relX: 0, relY: 0, r: MOBILE_R }]),
    []
  )

  const { refs } = useFloatingPhysics(clusterBubbles, containerRef, MOBILE_R)

  const handleClick = (i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i))
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: 500 }}
    >
      {SKILLS.map((skill, i) => {
        const isActive = activeIndex === i
        return (
          <div
            key={skill.title}
            ref={refs[i] as React.RefObject<HTMLDivElement>}
            onClick={() => handleClick(i)}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: MOBILE_R * 2,
              height: MOBILE_R * 2,
              borderRadius: '50%',
              cursor: 'pointer',
              outline: isActive
                ? '2px solid rgba(255,255,255,0.35)'
                : '2px solid transparent',
              transition: 'outline-color 0.2s ease'
            }}
            className="glass-card"
          >
            {/* Front: icon + title */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: 10,
                opacity: isActive ? 0 : 1,
                transition: 'opacity 0.2s ease',
                pointerEvents: isActive ? 'none' : 'auto'
              }}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} p-2 shadow-lg`}
              >
                <skill.icon className="h-5 w-5 text-white" />
              </div>
              <span
                className="text-center text-xs font-bold leading-tight text-white"
                style={{ maxWidth: MOBILE_R * 1.5 }}
              >
                {skill.title}
              </span>
            </div>

            {/* Back: tag list */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                padding: 14,
                opacity: isActive ? 1 : 0,
                transition: 'opacity 0.2s ease',
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              {skill.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="text-center text-[10px] font-medium leading-tight text-white/90"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MobileSkillBubbles
