'use client'

import { useState } from 'react'
import { PUBLICATIONS } from '@/sections/publications/data/publications'

const Publications = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section
      id="articles"
      className="relative z-10 px-6 pt-16 md:px-12 md:pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <div className="brut-prompt mb-2">
            {'michel@dev:~/portfolio$ ls articles/'}
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">Writing & Talks</h2>
        </header>

        <ol className="border-b border-[var(--brut-muted)]">
          {PUBLICATIONS.map((pub) => {
            const isOpen = expanded.has(pub.id)
            return (
              <li
                key={pub.id}
                className="border-t border-[var(--brut-muted)] py-6 first:border-t-0"
              >
                <div className="grid grid-cols-[120px_1fr] gap-6 md:grid-cols-[180px_1fr]">
                  <div className="brut-caps">
                    {pub.type ?? 'article'}
                    <br />
                    {pub.date ?? '—'}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold leading-snug">{pub.title}</h3>
                    <p
                      className={`mb-3 text-sm leading-relaxed ${
                        isOpen ? '' : 'brut-clamp-2'
                      }`}
                      style={{ color: 'rgba(245,245,240,0.75)' }}
                    >
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <button
                        type="button"
                        className="brut-link"
                        onClick={() => toggle(pub.id)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? '[− collapse]' : '[+ expand]'}
                      </button>
                      {pub.url && (
                        <a
                          className="brut-link"
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          [read →]
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Publications
