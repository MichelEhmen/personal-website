import type { ComponentType } from 'react'
import GlassDesign from './glass'
import BrutalistDesign from './brutalist'

export type DesignId = 'glass' | 'brutalist'

export type DesignEntry = {
  id: DesignId
  label: string
  shortLabel: string
  Component: ComponentType
}

export const DESIGNS: Record<DesignId, DesignEntry> = {
  glass: {
    id: 'glass',
    label: 'Glass',
    shortLabel: 'GL',
    Component: GlassDesign
  },
  brutalist: {
    id: 'brutalist',
    label: 'Brutalist',
    shortLabel: 'BR',
    Component: BrutalistDesign
  }
}

export const DESIGN_ORDER: DesignId[] = ['glass', 'brutalist']
export const DEFAULT_DESIGN: DesignId = 'glass'

export const isDesignId = (
  value: string | null | undefined
): value is DesignId => value === 'glass' || value === 'brutalist'

export const parseDesignId = (value: string | null | undefined): DesignId =>
  isDesignId(value) ? value : DEFAULT_DESIGN
