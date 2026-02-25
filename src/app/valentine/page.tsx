'use client'

import { useState } from 'react'

const ValentinePage = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [yesSize, setYesSize] = useState(1)
  const [noSize, setNoSize] = useState(1)
  const [accepted, setAccepted] = useState(false)

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 200) - 100
    const randomY = Math.floor(Math.random() * 200) - 100
    setNoButtonPosition({ x: randomX, y: randomY })
    setYesSize((prev) => prev + 0.2)
    setNoSize((prev) => Math.max(0.3, prev - 0.1))
  }

  const handleYesClick = () => {
    setAccepted(true)
  }

  return (
    <div className="container relative z-10 mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl rounded-3xl border-2 border-pink-300/40 bg-pink-100/20 p-8 shadow-2xl backdrop-blur-md md:p-12 lg:p-16">
        <div className="mb-12 text-center">
          {!accepted ? (
            <>
              <h1 className="mb-6 text-6xl md:text-7xl">💝</h1>
              <h2 className="mb-6 text-4xl font-bold text-pink-100 md:text-5xl">
                Katie
              </h2>
              <p className="text-2xl text-pink-50 md:text-3xl">
                Will you be my Valentine?
              </p>
            </>
          ) : (
            <>
              <h1 className="mb-6 animate-pulse text-7xl md:text-8xl">
                ✨💖✨
              </h1>
              <h2 className="mb-6 text-4xl font-bold text-pink-100 md:text-5xl">
                Yay!
              </h2>
              <p className="text-2xl text-pink-50 md:text-3xl">
                I knew you would say yes! 🥰
              </p>
              <p className="mt-4 text-xl text-pink-100 md:text-2xl">
                I&lsquo;ll see you in Münster on Valentine&lsquo;s Day!
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxxcDhoMjJxMTNmMGE4cmRudjRtbmVzZGM3azJsYnB4cnF6OGp0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ytu2GUYbvhz7zShGwS/giphy.gif"
                  alt="Celebrating"
                  className="h-auto max-w-full rounded-2xl shadow-lg"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </>
          )}
        </div>

        {!accepted && (
          <div className="mt-12 flex min-h-32 items-center justify-center gap-6">
            <button
              onClick={handleYesClick}
              style={{
                transform: `scale(${yesSize})`,
                transition: 'transform 0.3s ease'
              }}
              className="rounded-full bg-pink-500 px-12 py-4 text-lg font-bold text-white shadow-lg transition-colors duration-200 hover:bg-pink-600"
            >
              Yes
            </button>

            <button
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${noSize})`,
                transition: 'transform 0.3s ease'
              }}
              className="rounded-full bg-gray-400 px-12 py-4 text-lg font-bold text-white shadow-lg"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ValentinePage
