"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"
import { useLanguage } from "./language-provider"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.experience"), href: "/experience" },
    { name: t("nav.skills"), href: "/skills" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-black tracking-tighter italic">
              FLORIAN<span className="opacity-20">_TOURAINE</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
                    isActive ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="flex items-center ml-8 pl-8 border-l border-foreground/10 gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-foreground/10 hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-foreground/10 bg-background"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-xs font-black tracking-[0.2em] uppercase border-b border-foreground/5 ${
                    pathname === link.href ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                   <LanguageToggle />
                   <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
