
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link as RouterLink } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function TubelightNavBar({ items, className }: NavBarProps) {
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

  // Active section highlighting with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id
            const matchingItem = items.find(item => item.url === `#${sectionId}`)
            if (matchingItem) {
              setActiveTab(matchingItem.name)
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' }
    )

    // Observe all sections
    items.forEach(item => {
      if (item.url.startsWith('#')) {
        const element = document.querySelector(item.url)
        if (element) {
          observer.observe(element)
        }
      }
    })

    return () => observer.disconnect()
  }, [items])

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.name)
    
    // Handle smooth scrolling for anchor links
    if (item.url.startsWith('#')) {
      const element = document.querySelector(item.url)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  const handleLogoClick = () => {
    const heroSection = document.querySelector('#home')
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pt-6 px-4">
      <div className="flex justify-center items-center max-w-7xl mx-auto relative">
        {/* Logo - positioned absolutely to left */}
        <div 
          onClick={handleLogoClick}
          className="absolute left-0 flex items-center space-x-2 cursor-pointer bg-white/10 dark:bg-white/10 border border-white/20 backdrop-blur-lg py-2 px-4 rounded-full shadow-lg hover:bg-white/20 transition-colors h-12"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            NucleasAI
          </span>
        </div>

        {/* Navigation - centered */}
        <div className="flex items-center gap-3 bg-white/10 dark:bg-white/10 border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg h-12">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            if (item.url.startsWith('#')) {
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                    "text-zinc-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400",
                    isActive && "bg-white/20 dark:bg-white/20 text-purple-600 dark:text-purple-400",
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-purple-500/10 dark:bg-purple-500/20 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 rounded-t-full">
                        <div className="absolute w-12 h-6 bg-purple-500/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-purple-500/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-purple-500/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </button>
              )
            }

            return (
              <RouterLink
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-zinc-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400",
                  isActive && "bg-white/20 dark:bg-white/20 text-purple-600 dark:text-purple-400",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-purple-500/10 dark:bg-purple-500/20 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-purple-500/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-purple-500/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-purple-500/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </RouterLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
