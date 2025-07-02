// File: components/FloatingNavbar.tsx — Updated: Fixed Request Demo button click + gradient styling + matched glassmorphism design.

"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const FloatingNavbar = () => {
  const [demoUrl, setDemoUrl] = useState("")

  useEffect(() => {
    // Get demo URL from environment variable
    const url = import.meta.env.VITE_DEMO_SCHEDULE_URL || ""
    setDemoUrl(url)
    
    if (!url) {
      console.warn("Please configure VITE_DEMO_SCHEDULE_URL for Request Demo functionality")
    }
  }, [])

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!demoUrl || demoUrl === "https://example.com/demo") {
      e.preventDefault();
      alert("Demo scheduling will be available soon.");
    }
    // else, let the link work as normal
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-6 right-4 z-50 flex items-center gap-3",
        "bg-white/10 dark:bg-white/10 backdrop-blur-lg",
        "border border-white/20 dark:border-white/10",
        "shadow-lg rounded-full py-1 px-1 h-12"
      )}
    >
      {/* Request Demo Button */}
      <a
        href={demoUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full px-4 py-2",
          "hover:from-pink-600 hover:to-blue-600 transition cursor-pointer",
          "font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
        )}
        aria-label="Request a demo"
        onClick={handleDemoClick}
      >
        <span className="hidden sm:inline">Request Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* Theme Toggle */}
      <ThemeToggle />
    </motion.div>
  )
}

export default React.memo(FloatingNavbar);
