import type { ComponentType } from 'react'
import GlassBackground from '@/components/AnimatedBackground'
import GlassNav from '@/components/Navigation'
import GlassContent from './glass'
import BrutalistBackground from './brutalist/components/AsciiBackground'
import BrutalistContent from './brutalist'

export type DesignId = 'glass' | 'brutalist'

export type DesignEntry = {
  id: DesignId
  label: string
  Background: ComponentType
  // Optional fixed-position nav rendered outside the sliding wrapper so
  // `position: fixed` stays viewport-relative regardless of scroll position.
  // Designs whose nav is sticky (e.g. brutalist) leave this undefined and
  // ship the nav inside their Content instead.
  Nav?: ComponentType
  Content: ComponentType
  Hint: ComponentType<{ active: boolean }>
}

const GlassHint = ({ active }: { active: boolean }) => (
  <span
    aria-hidden
    className="block h-4 w-4 rounded-full transition-shadow"
    style={{
      background:
        'radial-gradient(circle at 30% 30%, #c4b5fd 0%, #a855f7 35%, #ec4899 70%, #f97316 100%)',
      boxShadow: active
        ? '0 0 12px rgba(236, 72, 153, 0.7), inset 0 0 4px rgba(255,255,255,0.4)'
        : 'inset 0 0 3px rgba(255,255,255,0.3)'
    }}
  />
)

const BrutalistHint = ({ active }: { active: boolean }) => (
  <span
    aria-hidden
    className="block h-3.5 w-3.5 transition-all"
    style={{
      background: '#0e0e0e',
      border: '2px solid #f5f5f0',
      boxShadow: active ? '3px 3px 0 #ff6b1a' : '2px 2px 0 #f5f5f0'
    }}
  />
)

export const DESIGNS: Record<DesignId, DesignEntry> = {
  glass: {
    id: 'glass',
    label: 'Glass',
    Background: GlassBackground,
    Nav: GlassNav,
    Content: GlassContent,
    Hint: GlassHint
  },
  brutalist: {
    id: 'brutalist',
    label: 'Brutalist',
    Background: BrutalistBackground,
    Content: BrutalistContent,
    Hint: BrutalistHint
  }
}

export const DESIGN_ORDER: DesignId[] = ['glass', 'brutalist']
export const DEFAULT_DESIGN: DesignId = 'glass'

export const isDesignId = (
  value: string | null | undefined
): value is DesignId => value === 'glass' || value === 'brutalist'

export const parseDesignId = (value: string | null | undefined): DesignId =>
  isDesignId(value) ? value : DEFAULT_DESIGN
