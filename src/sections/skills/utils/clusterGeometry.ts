import { Skill } from '../data/skills'

// Must stay in sync with SkillBubble.tsx and useFloatingPhysics.ts
const PHYS_RADIUS = 130 // = RADIUS in useFloatingPhysics
const PX = 130 // main bubble anchor x in container
const PY = 110 // main bubble anchor y in container (shifted up)

// Offset of main bubble center from physics body center
const ANCHOR_DX = PX - PHYS_RADIUS // 0
const ANCHOR_DY = PY - PHYS_RADIUS // -20

const MAIN_R = 58
const GAP = 12
const MIN_SAT_R = 36
const MAX_SAT_R = 56
const MIN_CHILD_R = 26
const MAX_CHILD_R = 38

function longestWord(label: string): number {
  return label.split(/[\s-]/).reduce((max, w) => Math.max(max, w.length), 0)
}

function satRadius(label: string): number {
  const t = Math.min(1, Math.max(0, (longestWord(label) - 3) / 12))
  return Math.round(MIN_SAT_R + t * (MAX_SAT_R - MIN_SAT_R))
}

function childRadius(label: string): number {
  const t = Math.min(1, Math.max(0, (longestWord(label) - 3) / 10))
  return Math.round(MIN_CHILD_R + t * (MAX_CHILD_R - MIN_CHILD_R))
}

function spreadArc(count: number, maxArc: number, step: number): number {
  return count <= 1 ? 0 : Math.min(maxArc, (count - 1) * step)
}

function angleAt(
  i: number,
  count: number,
  centerAngle: number,
  arc: number
): number {
  if (count <= 1) return centerAngle
  return centerAngle - arc / 2 + (i / (count - 1)) * arc
}

export type BubbleOffset = { relX: number; relY: number; r: number }

/**
 * Returns the center offset of each bubble (main + primaries + children)
 * relative to the physics body position (body.x, body.y).
 */
export function computeClusterBubbles(skill: Skill): BubbleOffset[] {
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
