"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-2 w-10 h-10" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border border-foreground/10 hover:bg-foreground/5 transition-colors text-[10px] font-black tracking-widest uppercase flex items-center gap-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-3 w-3" />
          LIGHT_MODE
        </>
      ) : (
        <>
          <Moon className="h-3 w-3" />
          DARK_MODE
        </>
      )}
    </button>
  )
}
