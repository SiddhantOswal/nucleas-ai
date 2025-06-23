
// File: components/sections/about-section.tsx
// Updated: refreshed glass card styling for values and team cards for improved appeal.

"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Shield, Heart, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Target,
    title: "Customer-First",
    description: "Every decision we make is guided by what's best for our customers and their success."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We push the boundaries of what's possible with data and AI to create breakthrough solutions."
  },
  {
    icon: Users,
    title: "Transparency",
    description: "We believe in open communication, clear pricing, and honest partnerships with our customers."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "We respect user privacy and build tools that comply with global data protection standards."
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We understand the challenges businesses face and build solutions that truly make a difference."
  }
]

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Data at Segment, 10+ years building customer data infrastructure.",
    image: "/images/team/alex.jpg"
  },
  {
    name: "Sarah Kim",
    role: "CTO & Co-Founder", 
    bio: "Ex-Senior Engineer at Snowflake, expert in real-time data processing and ML.",
    image: "/images/team/sarah.jpg"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black overflow-hidden">
      {/* Background overlay for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-[#0a0a0a] dark:block hidden pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden dark:block hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission:{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Democratize Customer Intelligence
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-zinc-700 dark:text-gray-200 leading-relaxed">
              Customer data is the most valuable asset for modern businesses, yet most companies struggle 
              to unlock its full potential. We're changing that by building the most advanced, 
              accessible, and reliable customer data platform ever created.
            </p>
          </div>
        </motion.div>

        {/* Values Grid with improved styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <Card className={cn(
                    "h-full transition-all duration-300",
                    // Improved glass styling for values cards
                    "bg-white/15 dark:bg-black/40 backdrop-blur-lg",
                    "border border-white/30 dark:border-white/20",
                    "hover:bg-white/25 dark:hover:bg-black/60",
                    "hover:border-purple-500/30 dark:hover:border-purple-500/50",
                    "hover:shadow-xl hover:shadow-purple-500/10",
                    "rounded-2xl"
                  )}>
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        {/* Icon with accent background */}
                        <div className={cn(
                          "w-12 h-12 mx-auto rounded-full flex items-center justify-center",
                          "bg-purple-500/20 dark:bg-purple-500/30",
                          "border-2 border-purple-500/30 dark:border-purple-500/50"
                        )}>
                          <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {value.title}
                      </h4>
                      <p className="text-zinc-700 dark:text-gray-200 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Section with improved styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <Card className={cn(
                  "h-full transition-all duration-300",
                  // Improved glass styling for team cards
                  "bg-white/15 dark:bg-black/40 backdrop-blur-lg",
                  "border border-white/30 dark:border-white/20",
                  "hover:bg-white/25 dark:hover:bg-black/60",
                  "hover:border-purple-500/30 dark:hover:border-purple-500/50",
                  "hover:shadow-xl hover:shadow-purple-500/10",
                  "rounded-2xl"
                )}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {/* Enhanced photo container with colored ring */}
                    <div className={cn(
                      "rounded-full border-2 border-purple-500/30 dark:border-purple-500/50 p-1 mb-4",
                      "hover:border-purple-500/60 transition-all duration-300",
                      "bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                    )}>
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      {member.name}
                    </h4>
                    <p className="text-zinc-700 dark:text-gray-200 mb-2 font-medium">
                      {member.role}
                    </p>
                    <p className="text-zinc-600 dark:text-gray-300 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl py-3 px-8 font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Join Our Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}
