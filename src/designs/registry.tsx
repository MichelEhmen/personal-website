import type { ComponentType } from 'react'
import GlassDesign from './glass'
import BrutalistDesign from './brutalist'

export type DesignId = 'glass' | 'brutalist'

export type DesignEntry = {
  id: DesignId
  label: string
  Component: ComponentType
  Hint: ComponentType<{ active: boolean }>
}

const GlassHint = ({ active }: { active: boolean }) => (
  <span
    aria-hidden
    className="block h-4 w-4 rounded-full transition-opacity"
    style={{
      background:
        'radial-gradient(circle at 30% 30%, #c4b5fd 0%, #a855f7 35%, #ec4899 70%, #f97316 100%)',
      boxShadow: active
        ? '0 0 10px rgba(236, 72, 153, 0.6), inset 0 0 4px rgba(255,255,255,0.4)'
        : 'inset 0 0 3px rgba(255,255,255,0.3)',
      opacity: active ? 1 : 0.55
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
      boxShadow: active ? '3px 3px 0 #ff6b1a' : '2px 2px 0 #6a6a6a',
      opacity: active ? 1 : 0.6
    }}
  />
)

export const DESIGNS: Record<DesignId, DesignEntry> = {
  glass: {
    id: 'glass',
    label: 'Glass',
    Component: GlassDesign,
    Hint: GlassHint
  },
  brutalist: {
    id: 'brutalist',
    label: 'Brutalist',
    Component: BrutalistDesign,
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
