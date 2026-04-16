'use client'

import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Gradient blob 1 - Purple */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-3xl"
        style={{
          width: '600px',
          height: '600px',
          top: '10%',
          left: '10%'
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Gradient blob 2 - Pink */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-pink-500 to-orange-500 opacity-20 blur-3xl"
        style={{
          width: '500px',
          height: '500px',
          top: '60%',
          right: '10%'
        }}
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Gradient blob 3 - Blue */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-3xl"
        style={{
          width: '700px',
          height: '700px',
          bottom: '10%',
          left: '20%'
        }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Gradient blob 4 - Orange/Cyan mix */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-orange-500 to-purple-500 opacity-15 blur-3xl"
        style={{
          width: '550px',
          height: '550px',
          top: '40%',
          right: '30%'
        }}
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 25, -25, 0],
          scale: [1, 0.95, 1.05, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
}

export default AnimatedBackground
