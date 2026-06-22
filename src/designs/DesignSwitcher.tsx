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
      className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-2 py-1.5 backdrop-blur-md sm:bottom-6 sm:right-6"
    >
      {DESIGN_ORDER.map((id) => {
        const entry = DESIGNS[id]
        const isActive = id === active
        const Hint = entry.Hint
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
            aria-label={entry.label}
            title={entry.label}
            tabIndex={isActive ? 0 : -1}
            onClick={() => navigate(id)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 ${
              isActive
                ? 'scale-110 bg-white/20 ring-1 ring-white/50'
                : 'opacity-40 hover:bg-white/5 hover:opacity-80'
            }`}
          >
            <Hint active={isActive} />
          </button>
        )
      })}
    </div>
  )
}

export default DesignSwitcher
