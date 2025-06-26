
"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemDark)
    
    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)
  }, [])

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    applyTheme(newDark)
  }

  if (!mounted) {
    return (
      <div className={cn(
        "w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700",
        className
      )} />
    )
  }

  return (
    <button
      className={cn(
        "relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500",
        isDark 
          ? "bg-gray-700 border border-gray-600" 
          : "bg-gray-200 border border-gray-300",
        className
      )}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div
        className={cn(
          "absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center",
          isDark 
            ? "transform translate-x-8 bg-gray-800" 
            : "transform translate-x-0 bg-white shadow-sm"
        )}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-gray-700" />
        )}
      </div>
    </button>
  )
}
