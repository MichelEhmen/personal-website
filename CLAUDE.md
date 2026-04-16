# CLAUDE.md — Personal Website

## Project Overview

Personal portfolio website for Michel Ehmen ([michel-ehmen.dev](https://www.michel-ehmen.dev)).
Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

| Layer     | Technology                               |
| --------- | ---------------------------------------- |
| Framework | Next.js 14 (App Router)                  |
| Language  | TypeScript                               |
| Styling   | Tailwind CSS + custom CSS (`global.css`) |
| Animation | Framer Motion + custom RAF physics loop  |
| Icons     | Lucide React                             |

## Project Structure

```
src/
  app/              # Next.js App Router pages and global styles
  components/       # Shared UI components (Navbar, Card, Modal, …)
  sections/         # One directory per page section
    about/
    contact/
    hero/
    projects/
    publications/
    skills/         # ← most complex section, see skills/README.md
  types/
```

Each section follows the same internal structure:

```
<section>/
  components/   # React components
  data/         # Static data files (typed constants)
  hooks/        # Custom React hooks
  utils/        # Pure helper functions
  types/        # TypeScript types
  index.ts      # Re-exports
```

## Design System

### Glassmorphism

The site uses a glassmorphism theme. The central CSS class is **`glass-card`** (defined in `global.css`):

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px; /* ⚠ overrides Tailwind rounded-full — use inline borderRadius: '50%' for circles */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

**Important:** `glass-card` hardcodes `border-radius: 16px`. To render a true circle, always add `style={{ borderRadius: '50%' }}` inline — Tailwind's `rounded-full` is not strong enough to override the CSS class.

### Animated Background

`AnimatedBackground` renders five blurred radial gradient orbs (`.g1`–`.g5`) that animate continuously via CSS keyframes. The `gradient-bg` class and `gradients-container` handle GPU-accelerated rendering. Respects `prefers-reduced-motion`.

### Color Palette

Defined as CSS custom properties in `:root`:

| Variable   | Color                 |
| ---------- | --------------------- |
| `--color1` | Purple `139, 92, 246` |
| `--color2` | Pink `236, 72, 153`   |
| `--color3` | Blue `59, 130, 246`   |
| `--color4` | Orange `249, 115, 22` |
| `--color5` | Cyan `6, 182, 212`    |

Gradient text uses `bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent`.

## Branch Naming

| Type          | Pattern                |
| ------------- | ---------------------- |
| Enhancement   | `ENH-{n}/{issue-name}` |
| Bug fix       | `BUG-{n}/{issue-name}` |
| Documentation | `DOC-{n}/{issue-name}` |

## Key Conventions

- **No word-breaking in UI text.** Do not use `wordBreak: 'break-word'` or `word-break: break-all`. Allow wrapping at whitespace only.
- **Bubble circles:** always override `glass-card`'s border-radius with inline `style={{ borderRadius: '50%' }}`.
- **Physics and rendering share geometry.** The skills section's bubble positions are computed once in `clusterGeometry.ts` and consumed by both the physics engine and the React renderer — keep constants in sync.
- **SVG overflow for clusters.** The skill cluster SVG uses `overflow: visible` so connector lines can extend beyond the 440px container div without being clipped.
- **Mobile breakpoint for physics.** The floating physics animation only runs at `lg` (1024px+). Below that, a static card grid is shown instead, because the container is too narrow to place 6 clusters without overlap.
