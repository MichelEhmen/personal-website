# Skills Section

A floating, physics-driven bubble visualization of technical skills. Each skill is rendered as a **molecular cluster**: a round main bubble with satellite bubbles attached on the outside, connected by SVG lines.

## File Overview

```
skills/
  components/
    Skills.tsx          # Section wrapper; responsive layout switch (grid ↔ physics)
    SkillBubble.tsx     # Renders one cluster (main + primaries + children)
  data/
    skills.ts           # Skill definitions: icon, title, gradient, tags[]
  hooks/
    useFloatingPhysics.ts  # requestAnimationFrame physics engine
  utils/
    clusterGeometry.ts  # Shared bubble position math (used by physics + renderer)
```

---

## Data Shape (`skills.ts`)

```ts
type SkillTag = {
  label: string
  children?: string[] // second-level satellites (e.g. React → [Next.js])
}

type Skill = {
  icon: LucideIcon
  title: string
  gradient: string // Tailwind gradient classes, e.g. 'from-purple-500 to-pink-500'
  tags: SkillTag[]
}
```

Tags support a two-level hierarchy. Only one level of children is rendered (primary → child). Example:

```ts
{ label: 'React', children: ['Next.js'] }
{ label: 'Styling', children: ['Tailwind', 'SCSS'] }
```

---

## Cluster Geometry (`clusterGeometry.ts`)

This file is the **single source of truth** for bubble positions. Both the physics engine and the React renderer must use the same geometry.

### Constants (must stay in sync with `SkillBubble.tsx` and `useFloatingPhysics.ts`)

| Constant                      | Value   | Description                                                 |
| ----------------------------- | ------- | ----------------------------------------------------------- |
| `PHYS_RADIUS`                 | 130     | Physics collision radius = `RADIUS` in `useFloatingPhysics` |
| `PX`                          | 130     | Main bubble anchor x within container div                   |
| `PY`                          | 110     | Main bubble anchor y (shifted up to give room below)        |
| `MAIN_R`                      | 58      | Main bubble radius (px)                                     |
| `GAP`                         | 12      | Gap between bubble edges                                    |
| `MIN_SAT_R` / `MAX_SAT_R`     | 36 / 56 | Primary satellite radius range                              |
| `MIN_CHILD_R` / `MAX_CHILD_R` | 26 / 38 | Child satellite radius range                                |

### Bubble sizing

Satellite radii are determined by the **longest word** in the label (not total label length). This ensures single-word labels like "Architecture" or "TensorFlow" always get a bubble wide enough to contain the text without mid-word breaking.

```ts
function longestWord(label: string): number {
  return label.split(/[\s-]/).reduce((max, w) => Math.max(max, w.length), 0)
}

// t ∈ [0, 1], maps to [MIN_SAT_R, MAX_SAT_R]
function satRadius(label: string): number {
  const t = clamp((longestWord(label) - 3) / 12)
  return round(MIN_SAT_R + t * (MAX_SAT_R - MIN_SAT_R))
}
```

### Coordinate system

`computeClusterBubbles(skill)` returns `BubbleOffset[]` — the center of each bubble relative to the **physics body position** `(body.x, body.y)`:

- `relX = PX - RADIUS = 0` (main bubble x aligns with physics center x)
- `relY = PY - RADIUS = -20` (main bubble is 20px above physics center)

Primaries spread in a downward arc centered at `π/2` (pointing down), spanning up to `0.85π` radians. Children spread in a narrower arc (`0.4π` max) centered on their parent's angle.

### Satellite arc layout

```
         [TypeScript]  [React]
        /               |     \
   [Angular]  (Frontend)  [Svelte]  [Styling]
                           |              \
                        [Next.js]    [Tailwind] [SCSS]
```

All primaries hang **below and to the sides** of the main bubble. The arc center is `π/2` (straight down).

---

## Physics Engine (`useFloatingPhysics.ts`)

A custom `requestAnimationFrame` loop that moves cluster bodies and resolves collisions.

### API

```ts
useFloatingPhysics(
  clusterBubbles: BubbleOffset[][],  // precomputed from computeClusterBubbles
  containerRef: RefObject<HTMLDivElement>
): { refs, pausedRef }
```

`clusterBubbles` must be memoized in the caller (`useMemo`) to avoid resetting the physics on every render.

### Physics constants

| Constant    | Value  | Description                                                                                               |
| ----------- | ------ | --------------------------------------------------------------------------------------------------------- |
| `RADIUS`    | 130    | Transform offset (`translate(x − RADIUS, y − RADIUS)`) — must equal `PHYS_RADIUS` in `clusterGeometry.ts` |
| `MAX_SPEED` | 1.2    | Maximum velocity (px/frame)                                                                               |
| `DAMPING`   | 0.9995 | Velocity multiplier per frame (near 1 = minimal friction, direction maintained)                           |
| `MIN_SPEED` | 0.25   | If speed falls below this, apply a random nudge in a new direction                                        |

### Per-frame loop

1. **Damping + speed cap** — velocity decays very slowly; direction is maintained between bounces
2. **Min-speed nudge** — if a cluster nearly stops, it receives a random impulse so the animation stays alive
3. **Move** — integrate position by velocity
4. **Wall bounce** — check each individual bubble against the container edges; correct body position and flip velocity component
5. **Bubble-level collision** — for each cluster pair, find the most-overlapping bubble pair; separate and exchange velocity along the collision normal

### Collision resolution

Collision is detected and resolved at **individual bubble level**, not cluster level. This means:

- Two clusters repel as soon as any bubble from one touches any bubble from the other
- No invisible padding between clusters
- The deepest-penetrating bubble pair drives the collision normal

```
for each (clusterA, clusterB) pair:
  find (bubbleA, bubbleB) with maximum overlap
  if overlap > 0:
    push clusters apart by overlap/2 each
    exchange velocity along collision normal (only if approaching)
```

### Placement

`initBodies` uses the same bubble-level overlap check to place clusters without overlap at startup. Each cluster's valid placement range is derived from its actual bubble extents, so asymmetric clusters (like Frontend with many children) are placed correctly.

---

## Renderer (`SkillBubble.tsx`)

Each cluster renders inside a **440×440 absolutely-positioned div** that is moved by the physics transform. Inside:

1. **SVG layer** (`overflow: visible`) — draws connector lines between bubbles, gap-clipped at bubble edges so lines are only visible between bubbles, not through them
2. **Main bubble** — `glass-card` circle with gradient icon and title text
3. **Primary satellites** — `glass-card` circles with label text
4. **Child satellites** — smaller `glass-card` circles for second-level tags

### SVG line clipping

Lines are clipped to the gap between bubble edges (not drawn center-to-center):

```
Main → Primary:  x1 = mainCenter + MAIN_R × direction
                 x2 = primaryCenter − r × direction

Primary → Child: unit vector u = normalize(child − primary)
                 x1 = primaryCenter + r × u
                 x2 = childCenter − cr × u
```

The SVG has `overflow: visible` because some children (particularly `Styling → Tailwind/SCSS`) extend into negative x-coordinates within the container div. Without `overflow: visible`, the SVG viewport would clip those lines.

### Text sizing

All text spans use `maxWidth: r * 1.8` (primary) or `c.r * 1.8` (child). This gives text enough room to wrap at word boundaries without ever breaking mid-word. No `wordBreak` or `overflowWrap` overrides are needed.

---

## Responsive Layout (`Skills.tsx`)

| Breakpoint        | Behaviour                                       |
| ----------------- | ----------------------------------------------- |
| `< lg` (< 1024px) | Static card grid (`grid-cols-1 sm:grid-cols-2`) |
| `lg` (1024px)     | Physics animation, container `h-[800px]`        |
| `xl` (1280px+)    | Physics animation, container `h-[700px]`        |

The physics animation is hidden below `lg` because a 768px-wide container cannot reliably place 6 clusters with `RADIUS=130` without collisions during initialization.
