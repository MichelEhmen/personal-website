'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useRef } from 'react'
import { DESIGN_ORDER, DESIGNS, type DesignId } from './registry'

type DesignSwitcherProps = {
  active: DesignId
}

const DesignSwitcher = ({ active }: DesignSwitcherProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const buttonRefs = useRef<Map<DesignId, HTMLButtonElement>>(new Map())

  const navigate = useCallback(
    (id: DesignId) => {
      if (id === active) return
      const params = new URLSearchParams(searchParams.toString())
      params.set('d', id)
      router.replace(`/?${params.toString()}`, { scroll: false })
    },
    [active, router, searchParams]
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const currentIndex = DESIGN_ORDER.indexOf(active)
    const delta = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex =
      (currentIndex + delta + DESIGN_ORDER.length) % DESIGN_ORDER.length
    const nextId = DESIGN_ORDER[nextIndex]
    navigate(nextId)
    buttonRefs.current.get(nextId)?.focus()
  }

  return (
    <div
      role="radiogroup"
      aria-label="Design auswählen"
      onKeyDown={handleKeyDown}
      className="fixed right-4 top-4 z-[60] flex items-center gap-1 rounded-full border border-white/15 bg-black/70 p-1 font-mono text-xs uppercase tracking-wider backdrop-blur-md sm:right-6 sm:top-6"
      style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
    >
      {DESIGN_ORDER.map((id) => {
        const entry = DESIGNS[id]
        const isActive = id === active
        return (
          <button
            key={id}
            ref={(el) => {
              if (el) buttonRefs.current.set(id, el)
              else buttonRefs.current.delete(id)
            }}
            role="radio"
            type="button"
            aria-checked={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => navigate(id)}
            className={`rounded-full px-3 py-1.5 transition-colors sm:px-4 ${
              isActive
                ? 'bg-white/15 text-white'
                : 'text-white/55 hover:text-white'
            }`}
          >
            <span className="hidden sm:inline">{entry.label}</span>
            <span className="sm:hidden">{entry.shortLabel}</span>
          </button>
        )
      })}
    </div>
  )
}

export default DesignSwitcher
