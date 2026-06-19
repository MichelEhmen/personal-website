'use client'

import { useEffect, useRef } from 'react'

const CHARS = ['/', '\\', '-', '|', '+', '.', ' ', ' ', ' ', ' ']
const ALPHAS = [0.1, 0.1, 0.08, 0.08, 0.12, 0.05, 0, 0, 0, 0]

const randomCharIndex = (): number => Math.floor(Math.random() * CHARS.length)

const AsciiBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const cellSize = isMobile ? 22 : 18
    const fontSize = Math.floor(cellSize * 0.9)
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    let cols: number
    let rows: number
    let cells: Uint8Array
    let intervalId: ReturnType<typeof setInterval> | null = null
    let resizeTimer: ReturnType<typeof setTimeout> | null = null

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const bgColor = '#0e0e0e'

    const init = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'

      cols = Math.ceil(w / cellSize)
      rows = Math.ceil(h / cellSize)

      cells = new Uint8Array(cols * rows)
      for (let i = 0; i < cells.length; i++) {
        cells[i] = randomCharIndex()
      }
    }

    const render = () => {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      const half = cellSize / 2
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const charIdx = cells[row * cols + col]
          const alpha = ALPHAS[charIdx]
          if (alpha === 0) continue
          ctx.fillStyle = `rgba(245,245,240,${alpha})`
          ctx.fillText(
            CHARS[charIdx],
            col * cellSize + half,
            row * cellSize + half
          )
        }
      }
    }

    const tick = () => {
      for (let i = 0; i < cells.length; i++) {
        if (Math.random() < 0.01) {
          cells[i] = randomCharIndex()
        }
      }
      render()
    }

    init()
    render()

    if (!reducedMotion) {
      intervalId = setInterval(tick, 600)
    }

    const onResize = () => {
      if (resizeTimer !== null) clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (intervalId !== null) clearInterval(intervalId)
        init()
        render()
        if (!reducedMotion) {
          intervalId = setInterval(tick, 600)
        }
      }, 200)
    }

    window.addEventListener('resize', onResize)

    return () => {
      if (intervalId !== null) clearInterval(intervalId)
      if (resizeTimer !== null) clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    />
  )
}

export default AsciiBackground
