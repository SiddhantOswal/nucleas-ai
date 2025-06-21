
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Link } from "react-router-dom"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onNavClick?: (url: string) => void
}

export function TubelightNavBar({ items, className, onNavClick }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track scroll position to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => ({
        name: item.name,
        element: document.querySelector(item.url)
      })).filter(section => section.element)

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = section.element as HTMLElement
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveTab(section.name)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (item: NavItem) => {
    setActiveTab(item.name)
    if (onNavClick) {
      onNavClick(item.url)
    } else {
      // Smooth scroll to section
      const element = document.querySelector(item.url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-800 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400",
                isActive && "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-purple-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-purple-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-purple-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-purple-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
        
        {/* Separator */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />
        
        {/* Theme Toggle */}
        <ThemeToggle className="scale-75" />
        
        {/* Login/Signup Buttons */}
        <div className="flex items-center gap-2 ml-2">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-1 text-xs">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-3 py-1 text-xs">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
