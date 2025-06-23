
// File: components/layout/FloatingNavbar.tsx
// Floating navbar with Request Demo button and theme toggle, glassmorphic styling adapting to theme.

"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

export function FloatingNavbar() {
  const [demoUrl, setDemoUrl] = useState("")

  useEffect(() => {
    // Get demo URL from environment variable
    const url = import.meta.env.VITE_DEMO_SCHEDULE_URL || ""
    setDemoUrl(url)
    
    if (!url) {
      console.warn("Please configure VITE_DEMO_SCHEDULE_URL for Request Demo functionality")
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-4 right-4 z-50 flex items-center gap-3 p-3 rounded-2xl",
        "bg-white/10 dark:bg-black/50 backdrop-blur-sm",
        "border border-white/20 dark:border-white/10",
        "shadow-lg hover:shadow-xl transition-all duration-300"
      )}
    >
      {/* Request Demo Button */}
      <a
        href={demoUrl || "#"}
        target={demoUrl ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={cn(
          "px-4 py-2 rounded-xl font-medium transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-purple-500",
          demoUrl
            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            : "bg-gray-600 text-gray-300 cursor-not-allowed"
        )}
        aria-disabled={!demoUrl}
        aria-label="Request a demo"
      >
        <span className="hidden sm:inline">Request Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* Theme Toggle */}
      <ThemeToggle />
    </motion.div>
  )
}
