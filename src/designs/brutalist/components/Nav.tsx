'use client'

import { useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { label: 'hero', href: '#hero' },
  { label: 'skills', href: '#skills' },
  { label: 'work', href: '#projects' },
  { label: 'writing', href: '#articles' },
  { label: 'contact', href: '#contact' }
]

const Nav = () => {
  const ref = useRef<HTMLElement>(null)

  // Expose the nav's measured height as --brut-nav-h on .brut-root so the
  // hero can size itself to "viewport minus the sticky nav" — the nav wraps
  // to two rows on narrow screens, so a hardcoded value won't do.
  useEffect(() => {
    const nav = ref.current
    if (!nav) return
    const root = nav.closest('.brut-root') as HTMLElement | null
    if (!root) return

    const update = () => {
      root.style.setProperty('--brut-nav-h', `${nav.offsetHeight}px`)
    }
    update()

    const ro = new ResizeObserver(update)
    ro.observe(nav)
    return () => ro.disconnect()
  }, [])

  return (
    <nav ref={ref} className="brut-nav px-6 py-3 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <span className="brut-caps hidden sm:inline">michel@dev:~$</span>
        <ul
          className="flex flex-nowrap items-center gap-0 sm:gap-1"
          style={{
            // Scale fluidly so the row always fits on one line: small enough
            // on narrow phones, full text-sm on tablets and up.
            fontSize: 'clamp(0.65rem, 3.5vw, 0.875rem)'
          }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a className="brut-link" href={item.href}>
                [{item.label}]
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
