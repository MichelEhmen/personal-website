'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const blobs = [
  {
    gradient: 'from-purple-500 to-pink-500',
    style: { width: '600px', height: '600px', top: '10%', left: '10%' },
    animate: {
      x: [0, 50, -50, 0],
      y: [0, -50, 50, 0],
      scale: [1, 1.1, 0.9, 1]
    },
    duration: 20
  },
  {
    gradient: 'from-pink-500 to-orange-500',
    style: { width: '500px', height: '500px', top: '60%', right: '10%' },
    animate: {
      x: [0, -30, 30, 0],
      y: [0, 30, -30, 0],
      scale: [1, 0.9, 1.1, 1]
    },
    duration: 25
  },
  {
    gradient: 'from-blue-500 to-cyan-500',
    style: { width: '700px', height: '700px', bottom: '10%', left: '20%' },
    animate: {
      x: [0, 40, -40, 0],
      y: [0, -40, 40, 0],
      scale: [1, 1.2, 0.8, 1]
    },
    duration: 30
  },
  {
    gradient: 'from-orange-500 to-purple-500',
    style: { width: '550px', height: '550px', top: '40%', right: '30%' },
    animate: {
      x: [0, -25, 25, 0],
      y: [0, 25, -25, 0],
      scale: [1, 0.95, 1.05, 1]
    },
    duration: 22
  }
]

const AnimatedBackground = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {blobs.map((blob, i) =>
        isDesktop ? (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br ${blob.gradient} opacity-20 blur-3xl`}
            style={blob.style}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ) : (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br ${blob.gradient} opacity-20 blur-3xl`}
            style={blob.style}
          />
        )
      )}
    </div>
  )
}

export default AnimatedBackground
