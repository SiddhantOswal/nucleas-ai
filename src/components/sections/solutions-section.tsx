
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, ShoppingBag, Wrench, Megaphone, Heart, Store } from "lucide-react"
import { cn } from "@/lib/utils"

interface SolutionCard {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: string
}

const solutions: SolutionCard[] = [
  {
    id: "edtech",
    title: "EdTech",
    description: "Track student behavior & personalize outreach",
    icon: GraduationCap,
    category: "For EdTech"
  },
  {
    id: "d2c",
    title: "D2C Brands",
    description: "Optimize customer journeys & boost conversions",
    icon: ShoppingBag,
    category: "For D2C Brands"
  },
  {
    id: "saas",
    title: "SaaS Tools",
    description: "Understand user adoption & reduce churn",
    icon: Wrench,
    category: "For SaaS Tools"
  },
  {
    id: "agencies",
    title: "Marketing Agencies",
    description: "Deliver data-driven insights to clients",
    icon: Megaphone,
    category: "For Marketing Agencies"
  },
  {
    id: "healthcare",
    title: "Healthcare & Wellness",
    description: "Track patient engagement & outcomes",
    icon: Heart,
    category: "For Healthcare & Wellness"
  },
  {
    id: "marketplace",
    title: "Marketplaces",
    description: "Monitor buyer & seller interactions",
    icon: Store,
    category: "For Marketplaces"
  }
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background elements for dark mode */}
      <div className="absolute inset-0 overflow-hidden dark:block hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
            Solutions for Every{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Industry
            </span>
          </h2>
          <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored customer intelligence solutions that adapt to your industry's unique needs and challenges.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={cn(
                  "h-full cursor-pointer transition-all duration-300",
                  "bg-white/70 dark:bg-white/10 backdrop-blur-sm",
                  "border border-zinc-200 dark:border-white/20",
                  "hover:bg-white/90 dark:hover:bg-white/20",
                  "hover:border-zinc-300 dark:hover:border-white/40",
                  "hover:shadow-xl dark:hover:shadow-purple-500/10",
                  "hover:scale-105 hover:-translate-y-2"
                )}>
                  <CardContent className="p-8 text-center">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={cn(
                        "w-16 h-16 mx-auto rounded-full flex items-center justify-center",
                        "bg-gradient-to-r from-purple-600 to-blue-600",
                        "group-hover:scale-110 transition-transform duration-300"
                      )}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="mb-3">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {solution.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-700 dark:text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        Learn More →
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
