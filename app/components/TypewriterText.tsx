'use client'

import { useEffect, useState } from 'react'

const roles = [
  { text: 'John Rodney Bargayo', color: 'text-blue-400' },
  { text: 'a Freelancer', color: 'text-yellow-400' },
  { text: 'a UI/UX Developer', color: 'text-green-400' },
  { text: 'a Front-end Developer', color: 'text-purple-400' }
]

export default function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = 100 // Speed for typing
    const deletingSpeed = 50 // Speed for deleting
    const wordPause = 2000 // Pause at complete word

    const type = () => {
      const currentRole = roles[currentRoleIndex]
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(prev => prev.slice(0, -1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      } else {
        // Typing text
        if (currentText.length < currentRole.text.length) {
          setCurrentText(currentRole.text.slice(0, currentText.length + 1))
        } else {
          // Pause at complete word before deleting
          setTimeout(() => setIsDeleting(true), wordPause)
          return
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [currentRoleIndex, currentText, isDeleting])

  return (
    <span className={`${roles[currentRoleIndex].color}`}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

