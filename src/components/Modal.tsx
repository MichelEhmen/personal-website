'use client'
import React, { useState } from 'react'

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(true)

  const handleClose = () => {
    setModalOpen(false)
  }

  if (!isModalOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      onClick={handleClose}
    >
      <div
        className="bg-secondary text-rock mx-4 rounded-lg p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-bold">Website Under Construction</h2>
        <p>
          Currently juggling other projects, so this website is taking a little
          nap. Check back soon for the grand awakening!
        </p>
        <button
          className="bg-primary text-secondary mt-4 rounded px-4 py-2"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
