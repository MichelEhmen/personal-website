import { forwardRef } from 'react'
import { Skill } from '../data/skills'
import {
  PX,
  PY,
  MAIN_R,
  GAP,
  satRadius,
  childRadius,
  spreadArc,
  angleAt
} from '../utils/clusterGeometry'

type SkillBubbleProps = {
  skill: Skill
}

const CONTAINER = 440

const SkillBubble = forwardRef<HTMLDivElement, SkillBubbleProps>(
  ({ skill }, ref) => {
    const tags = skill.tags

    const primArc = spreadArc(tags.length, Math.PI * 0.85, Math.PI / 4)

    // Precompute all positions so SVG lines and divs share the same values
    const primaries = tags.map((tag, i) => {
      const r = satRadius(tag.label)
      const orbit = MAIN_R + GAP + r
      const pa = angleAt(i, tags.length, Math.PI / 2, primArc)
      const cx = PX + orbit * Math.cos(pa)
      const cy = PY + orbit * Math.sin(pa)

      const childArc = spreadArc(
        tag.children?.length ?? 0,
        Math.PI * 0.4,
        Math.PI / 5
      )
      const children = (tag.children ?? []).map((label, j) => {
        const cr = childRadius(label)
        const childOrbit = r + GAP + cr
        const ca = angleAt(j, tag.children!.length, pa, childArc)
        return {
          label,
          r: cr,
          cx: cx + childOrbit * Math.cos(ca),
          cy: cy + childOrbit * Math.sin(ca),
          ca,
          childOrbit
        }
      })

      return { tag, r, cx, cy, pa, children }
    })

    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: CONTAINER,
          height: CONTAINER
        }}
      >
        <svg
          style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
          width={CONTAINER}
          height={CONTAINER}
        >
          {primaries.map(({ r, cx, cy, pa, children }, i) => (
            <g key={i}>
              {/* Main → primary: gap-clipped */}
              <line
                x1={PX + MAIN_R * Math.cos(pa)}
                y1={PY + MAIN_R * Math.sin(pa)}
                x2={cx - r * Math.cos(pa)}
                y2={cy - r * Math.sin(pa)}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth={1.5}
              />
              {/* Primary → each child: gap-clipped, dashed */}
              {children.map((c, j) => {
                const dx = c.cx - cx
                const dy = c.cy - cy
                const d = Math.sqrt(dx * dx + dy * dy)
                const ux = dx / d,
                  uy = dy / d
                return (
                  <line
                    key={j}
                    x1={cx + r * ux}
                    y1={cy + r * uy}
                    x2={c.cx - c.r * ux}
                    y2={c.cy - c.r * uy}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth={1.5}
                  />
                )
              })}
            </g>
          ))}
        </svg>

        {/* Main bubble */}
        <div
          style={{
            position: 'absolute',
            left: PX - MAIN_R,
            top: PY - MAIN_R,
            width: MAIN_R * 2,
            height: MAIN_R * 2,
            borderRadius: '50%'
          }}
          className="glass-card flex flex-col items-center justify-center gap-1.5"
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} p-2 shadow-lg`}
          >
            <skill.icon className="h-5 w-5 text-white" />
          </div>
          <span
            className="text-center text-xs font-bold leading-tight text-white"
            style={{ maxWidth: MAIN_R * 1.4 }}
          >
            {skill.title}
          </span>
        </div>

        {/* Primary satellites + children */}
        {primaries.map(({ tag, r, cx, cy, children }) => (
          <div key={tag.label}>
            <div
              style={{
                position: 'absolute',
                left: cx - r,
                top: cy - r,
                width: r * 2,
                height: r * 2,
                borderRadius: '50%'
              }}
              className="glass-card flex items-center justify-center"
            >
              <span
                className="text-center text-xs font-semibold leading-tight text-white/90"
                style={{ maxWidth: r * 1.8 }}
              >
                {tag.label}
              </span>
            </div>

            {children.map((c) => (
              <div
                key={c.label}
                style={{
                  position: 'absolute',
                  left: c.cx - c.r,
                  top: c.cy - c.r,
                  width: c.r * 2,
                  height: c.r * 2,
                  borderRadius: '50%'
                }}
                className="glass-card flex items-center justify-center"
              >
                <span
                  className="text-center text-[10px] font-medium leading-tight text-white/70"
                  style={{ maxWidth: c.r * 1.8 }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
)

SkillBubble.displayName = 'SkillBubble'

export default SkillBubble
