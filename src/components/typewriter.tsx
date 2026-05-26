"use client"

import * as React from "react"

interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  as?: React.ElementType
  id: string // Add unique ID to track animation status
}

export function Typewriter({ text, delay = 0, speed = 0.05, className = "", as: Component = "span", id }: TypewriterProps) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [isDone, setIsDone] = React.useState(false)

  React.useEffect(() => {
    // Check if this specific animation has already played in this session
    const hasPlayed = sessionStorage.getItem(`typewriter_${id}`)
    
    if (hasPlayed) {
      setDisplayedText(text)
      setIsDone(true)
      return
    }

    let i = 0
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i))
        i++
        if (i > text.length) {
          clearInterval(interval)
          setIsDone(true)
          sessionStorage.setItem(`typewriter_${id}`, "true")
        }
      }, speed * 1000)
    }, delay * 1000)

    return () => {
      clearTimeout(startTimeout)
    }
  }, [text, delay, speed, id])

  return (
    <Component className={`${className} ${!isDone ? "typewriter-cursor" : ""}`}>
      {displayedText}
    </Component>
  )
}
