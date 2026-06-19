'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import DesignSwitcher from './DesignSwitcher'
import { DESIGN_ORDER, DESIGNS, parseDesignId, type DesignId } from './registry'

const BG_COLORS: Record<DesignId, string> = {
  glass: '#0f172a',
  brutalist: '#0e0e0e'
}

const TRANSITION = { duration: 0.55, ease: [0.32, 0.72, 0, 1] as const }

const DesignShell = () => {
  const searchParams = useSearchParams()
  const target: DesignId = parseDesignId(searchParams.get('d'))
  const reducedMotion = useReducedMotion()

  // Two-layer state: current = the one in normal flow (scrollable),
  // outgoing = the one that slides away on top.
  const [current, setCurrent] = useState<DesignId>(target)
  const [outgoing, setOutgoing] = useState<DesignId | null>(null)
  const directionRef = useRef(0)

  useEffect(() => {
    if (target === current) return
    if (reducedMotion) {
      setCurrent(target)
      setOutgoing(null)
      return
    }
    directionRef.current =
      DESIGN_ORDER.indexOf(target) - DESIGN_ORDER.indexOf(current)
    setOutgoing(current)
    setCurrent(target)
  }, [target])

  const CurrentContent = DESIGNS[current].Content
  const OutgoingContent = outgoing ? DESIGNS[outgoing].Content : null
  const direction = directionRef.current

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: BG_COLORS[current],
        transition: 'background-color 0.55s ease'
      }}
    >
      {/* Backgrounds: viewport-fixed, opacity crossfade. Only mount the
          backgrounds we actually need to render — keeping the inactive one
          mounted forces its animation loops (canvas ticks, blob keyframes)
          to keep running invisibly and hurts perf on the active design. */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {DESIGN_ORDER.filter((id) => id === current || id === outgoing).map(
          (id) => {
            const Background = DESIGNS[id].Background
            const isActive = id === current
            return (
              <div
                key={id}
                aria-hidden={!isActive}
                className="absolute inset-0"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: reducedMotion ? 'none' : 'opacity 0.55s ease'
                }}
              >
                <Background />
              </div>
            )
          }
        )}
      </div>

      <DesignSwitcher active={target} />

      {/* Fixed navs: rendered outside the sliding wrapper so position:fixed
          stays viewport-relative regardless of scroll position. Designs whose
          nav is sticky inside the document flow (e.g. brutalist) leave Nav
          undefined and ship the nav inside Content instead. */}
      {DESIGN_ORDER.filter((id) => id === current || id === outgoing).map(
        (id) => {
          const Nav = DESIGNS[id].Nav
          if (!Nav) return null
          const isActive = id === current
          return (
            <div
              key={`nav-${id}`}
              aria-hidden={!isActive}
              style={{
                opacity: isActive ? 1 : 0,
                transition: reducedMotion ? 'none' : 'opacity 0.4s ease',
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              <Nav />
            </div>
          )
        }
      )}

      {/* Active layer: normal flow → contributes to page height & is scrollable */}
      <motion.div
        key={current}
        className="relative z-10"
        initial={
          reducedMotion || direction === 0
            ? false
            : { x: direction > 0 ? '100%' : '-100%' }
        }
        animate={{ x: 0 }}
        transition={reducedMotion ? { duration: 0 } : TRANSITION}
      >
        <CurrentContent />
      </motion.div>

      {/* Outgoing layer: overlaid absolute, slides off, then unmounts */}
      {OutgoingContent && outgoing && (
        <motion.div
          key={`out-${outgoing}`}
          className="absolute inset-x-0 top-0 z-20"
          initial={{ x: 0 }}
          animate={{ x: direction > 0 ? '-100%' : '100%' }}
          transition={TRANSITION}
          onAnimationComplete={() => setOutgoing(null)}
        >
          <OutgoingContent />
        </motion.div>
      )}
    </div>
  )
}

export default DesignShell
