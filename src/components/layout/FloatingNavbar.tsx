
// File: components/FloatingNavbar.tsx — Updated: Fixed Request Demo button click + gradient styling.

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
        "fixed top-4 right-4 z-50 flex items-center gap-3 p-2 rounded-2xl",
        "bg-white/10 dark:bg-black/50 backdrop-blur-sm",
        "border border-white/20 dark:border-white/10",
        "shadow-lg hover:shadow-xl transition-all duration-300"
      )}
    >
      {/* Request Demo Button */}
      <a
        href={demoUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-2xl px-4 py-2",
          "hover:from-pink-600 hover:to-blue-600 transition cursor-pointer",
          "font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
        )}
        aria-label="Request a demo"
      >
        <span className="hidden sm:inline">Request Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* Theme Toggle */}
      <div className="ml-4">
        <ThemeToggle />
      </div>
    </motion.div>
  )
}
