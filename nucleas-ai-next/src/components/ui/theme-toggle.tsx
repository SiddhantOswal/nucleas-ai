"use client"

import { Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 border border-gray-600",
        className
      )}
      aria-label="Toggle theme"
      disabled
    >
      <div
        className={cn(
          "absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center transform translate-x-8 bg-gray-800"
        )}
      >
        <Moon className="w-3 h-3 text-white" />
      </div>
    </button>
  )
}
