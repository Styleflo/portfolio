"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-accent rounded-full p-1">
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "fr" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "en" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
