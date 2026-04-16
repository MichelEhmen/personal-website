import { Skill } from '../data/skills'

// Must stay in sync with useFloatingPhysics.ts (RADIUS constant)
export const PHYS_RADIUS = 130 // = RADIUS in useFloatingPhysics
export const PX = 130 // main bubble anchor x in container
export const PY = 110 // main bubble anchor y in container (shifted up)

// Offset of main bubble center from physics body center
export const ANCHOR_DX = PX - PHYS_RADIUS // 0
export const ANCHOR_DY = PY - PHYS_RADIUS // -20

export const MAIN_R = 58
export const GAP = 12
export const MIN_SAT_R = 36
export const MAX_SAT_R = 56
export const MIN_CHILD_R = 26
export const MAX_CHILD_R = 38

export const longestWord = (label: string): number =>
  label.split(/[\s-]/).reduce((max, w) => Math.max(max, w.length), 0)

export const satRadius = (label: string): number => {
  const t = Math.min(1, Math.max(0, (longestWord(label) - 3) / 12))
  return Math.round(MIN_SAT_R + t * (MAX_SAT_R - MIN_SAT_R))
}

export const childRadius = (label: string): number => {
  const t = Math.min(1, Math.max(0, (longestWord(label) - 3) / 10))
  return Math.round(MIN_CHILD_R + t * (MAX_CHILD_R - MIN_CHILD_R))
}

export const spreadArc = (
  count: number,
  maxArc: number,
  step: number
): number => (count <= 1 ? 0 : Math.min(maxArc, (count - 1) * step))

export const angleAt = (
  i: number,
  count: number,
  centerAngle: number,
  arc: number
): number => {
  if (count <= 1) return centerAngle
  return centerAngle - arc / 2 + (i / (count - 1)) * arc
}

export type BubbleOffset = { relX: number; relY: number; r: number }

/**
 * Returns the center offset of each bubble (main + primaries + children)
 * relative to the physics body position (body.x, body.y).
 */
export const computeClusterBubbles = (skill: Skill): BubbleOffset[] => {
  const bubbles: BubbleOffset[] = [
    { relX: ANCHOR_DX, relY: ANCHOR_DY, r: MAIN_R }
  ]

  const tags = skill.tags
  const primArc = spreadArc(tags.length, Math.PI * 0.85, Math.PI / 4)

  tags.forEach((tag, i) => {
    const r = satRadius(tag.label)
    const orbit = MAIN_R + GAP + r
    const pa = angleAt(i, tags.length, Math.PI / 2, primArc)
    const cx = ANCHOR_DX + orbit * Math.cos(pa)
    const cy = ANCHOR_DY + orbit * Math.sin(pa)

    bubbles.push({ relX: cx, relY: cy, r })

    const childArc = spreadArc(
      tag.children?.length ?? 0,
      Math.PI * 0.4,
      Math.PI / 5
    )
    ;(tag.children ?? []).forEach((label, j) => {
      const cr = childRadius(label)
      const childOrbit = r + GAP + cr
      const ca = angleAt(j, tag.children!.length, pa, childArc)
      bubbles.push({
        relX: cx + childOrbit * Math.cos(ca),
        relY: cy + childOrbit * Math.sin(ca),
        r: cr
      })
    })
  })

  return bubbles
}
