'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import DesignSwitcher from './DesignSwitcher'
import { DESIGN_ORDER, DESIGNS, parseDesignId, type DesignId } from './registry'

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%' }),
  center: { x: 0 },
  exit: (direction: number) => ({ x: direction > 0 ? '-100%' : '100%' })
}

const DesignShell = () => {
  const searchParams = useSearchParams()
  const active: DesignId = parseDesignId(searchParams.get('d'))
  const previousRef = useRef<DesignId>(active)
  const reducedMotion = useReducedMotion()

  const previous = previousRef.current
  const direction =
    DESIGN_ORDER.indexOf(active) - DESIGN_ORDER.indexOf(previous)

  useEffect(() => {
    previousRef.current = active
  }, [active])

  const { Component } = DESIGNS[active]

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.32, 0.72, 0, 1] as const }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <DesignSwitcher active={active} />
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={reducedMotion ? undefined : slideVariants}
          initial={reducedMotion ? false : 'enter'}
          animate={reducedMotion ? undefined : 'center'}
          exit={reducedMotion ? undefined : 'exit'}
          transition={transition}
          className="absolute inset-0 min-h-screen"
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default DesignShell
