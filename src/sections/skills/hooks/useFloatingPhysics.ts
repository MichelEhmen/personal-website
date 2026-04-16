'use client'

import { useEffect, useRef, RefObject, MutableRefObject } from 'react'
import { PHYS_RADIUS, BubbleOffset } from '../utils/clusterGeometry'

type Body = {
  x: number
  y: number
  vx: number
  vy: number
  bubbles: BubbleOffset[]
}
const MAX_SPEED = 1.2
const DAMPING = 0.9995 // barely any friction — direction is maintained
const MIN_SPEED = 0.25 // nudge if nearly stopped

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min

const clustersOverlap = (
  bubblesA: BubbleOffset[],
  ax: number,
  ay: number,
  bubblesB: BubbleOffset[],
  bx: number,
  by: number
): boolean => {
  for (const ba of bubblesA) {
    for (const bb of bubblesB) {
      const dx = bx + bb.relX - (ax + ba.relX)
      const dy = by + bb.relY - (ay + ba.relY)
      if (dx * dx + dy * dy < (ba.r + bb.r) ** 2) return true
    }
  }
  return false
}

const clusterExtents = (bubbles: BubbleOffset[]) => {
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity
  for (const b of bubbles) {
    minX = Math.min(minX, b.relX - b.r)
    maxX = Math.max(maxX, b.relX + b.r)
    minY = Math.min(minY, b.relY - b.r)
    maxY = Math.max(maxY, b.relY + b.r)
  }
  return { minX, maxX, minY, maxY }
}

const initBodies = (
  clusterBubbles: BubbleOffset[][],
  width: number,
  height: number
): Body[] => {
  const bodies: Body[] = []
  const maxAttempts = 300

  for (const bubbles of clusterBubbles) {
    const { minX, maxX, minY, maxY } = clusterExtents(bubbles)
    let placed = false
    let attempts = 0

    while (!placed && attempts < maxAttempts) {
      const x = randomBetween(-minX, width - maxX)
      const y = randomBetween(-minY, height - maxY)

      const overlaps = bodies.some((prev) =>
        clustersOverlap(bubbles, x, y, prev.bubbles, prev.x, prev.y)
      )

      if (!overlaps) {
        bodies.push({
          x,
          y,
          vx: randomBetween(-0.5, 0.5),
          vy: randomBetween(-0.5, 0.5),
          bubbles
        })
        placed = true
      }
      attempts++
    }

    if (!placed) {
      const { minX, maxX, minY, maxY } = clusterExtents(bubbles)
      bodies.push({
        x: randomBetween(-minX, width - maxX),
        y: randomBetween(-minY, height - maxY),
        vx: randomBetween(-0.5, 0.5),
        vy: randomBetween(-0.5, 0.5),
        bubbles
      })
    }
  }

  return bodies
}

type UseFloatingPhysicsResult = {
  refs: RefObject<HTMLDivElement | null>[]
  pausedRef: MutableRefObject<boolean>
}

export const useFloatingPhysics = (
  clusterBubbles: BubbleOffset[][],
  containerRef: RefObject<HTMLDivElement | null>,
  bodyOffset = PHYS_RADIUS
): UseFloatingPhysicsResult => {
  const count = clusterBubbles.length
  const refs = useRef<RefObject<HTMLDivElement | null>[]>([])
  const bodiesRef = useRef<Body[]>([])
  const rafRef = useRef<number | null>(null)
  const pausedRef = useRef(false)
  const clusterBubblesRef = useRef(clusterBubbles)

  if (refs.current.length !== count) {
    refs.current = Array.from({ length: count }, () => ({
      current: null
    })) as RefObject<HTMLDivElement | null>[]
  }

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    const container = containerRef.current
    if (!container) return

    const { width, height } = container.getBoundingClientRect()
    const boundsRef = { current: { width, height } }

    bodiesRef.current = initBodies(clusterBubblesRef.current, width, height)

    for (let i = 0; i < count; i++) {
      const el = refs.current[i]?.current
      if (el) {
        const b = bodiesRef.current[i]
        el.style.transform = `translate(${b.x - bodyOffset}px, ${b.y - bodyOffset}px)`
      }
    }

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect
      const newW = rect.width
      const newH = rect.height
      const wasHidden = boundsRef.current.width === 0
      boundsRef.current = { width: newW, height: newH }
      if (wasHidden && newW > 0) {
        // Container became visible again — reinitialize
        bodiesRef.current = initBodies(clusterBubblesRef.current, newW, newH)
      }
    })
    ro.observe(container)

    const step = () => {
      const { width: containerWidth, height: containerHeight } =
        boundsRef.current
      if (!pausedRef.current) {
        const bodies = bodiesRef.current

        // Maintain direction: gentle damping, nudge if nearly stopped
        for (const b of bodies) {
          b.vx *= DAMPING
          b.vy *= DAMPING
          const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy)
          if (speed > MAX_SPEED) {
            b.vx = (b.vx / speed) * MAX_SPEED
            b.vy = (b.vy / speed) * MAX_SPEED
          } else if (speed < MIN_SPEED) {
            if (speed < 1e-6) {
              const angle = Math.random() * Math.PI * 2
              b.vx = Math.cos(angle) * MIN_SPEED
              b.vy = Math.sin(angle) * MIN_SPEED
            } else {
              b.vx = (b.vx / speed) * MIN_SPEED
              b.vy = (b.vy / speed) * MIN_SPEED
            }
          }
        }

        // Move
        for (const b of bodies) {
          b.x += b.vx
          b.y += b.vy
        }

        // Wall bounce: respect actual bubble extents
        for (const b of bodies) {
          let minX = Infinity,
            maxX = -Infinity,
            minY = Infinity,
            maxY = -Infinity
          for (const bubble of b.bubbles) {
            minX = Math.min(minX, b.x + bubble.relX - bubble.r)
            maxX = Math.max(maxX, b.x + bubble.relX + bubble.r)
            minY = Math.min(minY, b.y + bubble.relY - bubble.r)
            maxY = Math.max(maxY, b.y + bubble.relY + bubble.r)
          }
          if (minX < 0) {
            b.x -= minX
            b.vx = Math.abs(b.vx)
          } else if (maxX > containerWidth) {
            b.x -= maxX - containerWidth
            b.vx = -Math.abs(b.vx)
          }
          if (minY < 0) {
            b.y -= minY
            b.vy = Math.abs(b.vy)
          } else if (maxY > containerHeight) {
            b.y -= maxY - containerHeight
            b.vy = -Math.abs(b.vy)
          }
        }

        // Bubble-level collision detection between clusters
        for (let i = 0; i < bodies.length; i++) {
          for (let j = i + 1; j < bodies.length; j++) {
            const a = bodies[i],
              b = bodies[j]

            // Find the most-overlapping bubble pair
            let maxOverlap = 0
            let nx = 0,
              ny = 1

            for (const bi of a.bubbles) {
              for (const bj of b.bubbles) {
                const ax = a.x + bi.relX,
                  ay = a.y + bi.relY
                const bx = b.x + bj.relX,
                  by = b.y + bj.relY
                const dx = bx - ax,
                  dy = by - ay
                const dist2 = dx * dx + dy * dy
                const minDist = bi.r + bj.r
                if (dist2 < minDist * minDist && dist2 > 0) {
                  const dist = Math.sqrt(dist2)
                  const overlap = minDist - dist
                  if (overlap > maxOverlap) {
                    maxOverlap = overlap
                    nx = dx / dist
                    ny = dy / dist
                  }
                }
              }
            }

            if (maxOverlap > 0) {
              // Separate along collision normal
              const sep = maxOverlap / 2
              a.x -= nx * sep
              a.y -= ny * sep
              b.x += nx * sep
              b.y += ny * sep

              // Elastic velocity exchange (only if approaching)
              const dvx = a.vx - b.vx
              const dvy = a.vy - b.vy
              const dot = dvx * nx + dvy * ny
              if (dot > 0) {
                a.vx -= dot * nx
                a.vy -= dot * ny
                b.vx += dot * nx
                b.vy += dot * ny
              }
            }
          }
        }

        // Update DOM
        for (let i = 0; i < bodies.length; i++) {
          const el = refs.current[i]?.current
          if (el) {
            const b = bodies[i]
            el.style.transform = `translate(${b.x - bodyOffset}px, ${b.y - bodyOffset}px)`
          }
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [count, containerRef])

  return { refs: refs.current, pausedRef }
}
