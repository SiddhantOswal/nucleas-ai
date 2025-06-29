"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { LucideIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ui/theme-toggle"

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
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [demoUrl, setDemoUrl] = useState("")

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Get demo URL from environment variable
    const url = import.meta.env.VITE_DEMO_SCHEDULE_URL || ""
    setDemoUrl(url)
  }, [])

  // Active section highlighting with IntersectionObserver
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const sectionId = entry.target.id
            const matchingItem = items.find(item => item.url === `#${sectionId}`)
            if (matchingItem) {
              setActiveTab(matchingItem.name)
            }
          }
        })
      },
      { threshold: [0.3, 0.7], rootMargin: '-20% 0px -20% 0px' }
    )

    // Observe all sections
    items.forEach(item => {
      if (item.url.startsWith('#')) {
        const sectionId = item.url.substring(1)
        const element = document.querySelector(`#${sectionId}`)
        if (element) {
          observer.observe(element)
        }
      }
    })

    return () => observer.disconnect()
  }, [items, location.pathname])

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
        {/* Mobile/Tablet: Logo and Hamburger in a row, Desktop: absolute logo */}
        <div className="flex w-full items-center lg:justify-start justify-between">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer bg-white/10 dark:bg-white/10 border border-white/20 backdrop-blur-lg py-2 px-4 rounded-full shadow-lg hover:bg-white/20 transition-colors h-12"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                NucleasAI
              </span>
            </div>
          </div>
          {/* Hamburger menu for mobile/tablet - only show below lg */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-background text-foreground border border-white/20 shadow-lg z-50 ml-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
        {/* Desktop Navigation - centered, only show on lg+ */}
        <div className="hidden lg:flex items-center gap-3 bg-white/10 dark:bg-white/10 border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg h-12 absolute left-1/2 -translate-x-1/2">
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
                  location.pathname === item.url && "bg-white/20 dark:bg-white/20 text-purple-600 dark:text-purple-400",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {location.pathname === item.url && (
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

        {/* Mobile/Tablet Side Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative ml-auto w-4/5 max-w-xs h-full bg-background text-foreground shadow-2xl border-l border-white/20 flex flex-col py-8 px-6 gap-6"
              style={{ zIndex: 60 }}
            >
              {/* Top row: Close button and Theme Toggle */}
              <div className="flex items-center justify-between mb-8">
                {/* Close button */}
                <button
                  className="text-2xl text-foreground hover:text-purple-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
                {/* Theme Toggle */}
                <ThemeToggle />
              </div>
              {/* Logo */}
              <div
                onClick={() => { handleLogoClick(); setMenuOpen(false) }}
                className="flex items-center space-x-2 cursor-pointer mb-8"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                  NucleasAI
                </span>
              </div>
              {/* Nav links */}
              <nav className="flex flex-col gap-2 mt-2">
                {items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name
                  if (item.url.startsWith('#')) {
                    return (
                      <button
                        key={item.name}
                        onClick={() => { handleNavClick(item); setMenuOpen(false) }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-md text-base font-semibold transition-colors",
                          isActive
                            ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow"
                            : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white",
                        )}
                      >
                        <Icon size={20} />
                        {item.name}
                      </button>
                    )
                  }
                  return (
                    <RouterLink
                      key={item.name}
                      to={item.url}
                      onClick={() => { setActiveTab(item.name); setMenuOpen(false) }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-md text-base font-semibold transition-colors",
                        location.pathname === item.url
                          ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow"
                          : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white",
                      )}
                    >
                      <Icon size={20} />
                      {item.name}
                    </RouterLink>
                  )
                })}
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                {/* Request Demo Button */}
                <a
                  href={demoUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full px-4 py-3 font-medium shadow hover:from-pink-600 hover:to-blue-600 transition"
                  aria-label="Request a demo"
                >
                  Request Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
