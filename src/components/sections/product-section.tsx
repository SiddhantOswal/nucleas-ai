"use client"

import React, { useState, Suspense } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  Bot, 
  Eye, 
  Link, 
  Shield, 
  Zap,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { lazy } from "react"

interface ProductFeature {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  benefits: string[]
  detailedDescription: string
}

const products: ProductFeature[] = [
  {
    id: "analytics",
    title: "Real-time Analytics",
    description: "Advanced behavior tracking and insights",
    icon: BarChart3,
    features: [
      "Real-time event tracking",
      "Custom funnel analysis",
      "Cohort analytics",
      "Attribution modeling",
      "Predictive insights"
    ],
    benefits: [
      "Increase conversion rates by 25%",
      "Reduce customer acquisition cost",
      "Improve user experience",
      "Make data-driven decisions"
    ],
    detailedDescription: "Our advanced analytics platform provides real-time insights into customer behavior, helping you understand user journeys and optimize experiences across all touchpoints."
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Intelligent automation and personalization",
    icon: Bot,
    features: [
      "Automated customer segmentation",
      "Personalized recommendations",
      "Churn prediction",
      "Dynamic content optimization",
      "Smart lead scoring"
    ],
    benefits: [
      "Automate 80% of segmentation tasks",
      "Increase engagement by 40%",
      "Reduce manual workload",
      "Scale personalization efforts"
    ],
    detailedDescription: "AI-powered agents that automatically analyze customer data, predict behavior, and deliver personalized experiences at scale without manual intervention."
  },
  {
    id: "pixel-tracking",
    title: "Pixel Tracking",
    description: "Privacy-first customer data collection",
    icon: Eye,
    features: [
      "First-party data collection",
      "Cross-domain tracking",
      "Cookie-less identification",
      "GDPR compliance",
      "Server-side tracking"
    ],
    benefits: [
      "100% data ownership",
      "Improved data accuracy",
      "Privacy compliance",
      "Future-proof tracking"
    ],
    detailedDescription: "Advanced pixel tracking technology that respects user privacy while providing comprehensive customer insights through first-party data collection."
  },
  {
    id: "link-shortening",
    title: "Smart Link Shortening",
    description: "Intelligent URL management with tracking",
    icon: Link,
    features: [
      "Custom branded domains",
      "Click tracking & analytics",
      "UTM parameter automation",
      "A/B testing for links",
      "Bulk link management"
    ],
    benefits: [
      "Increase click-through rates",
      "Better campaign attribution",
      "Professional brand appearance",
      "Detailed link performance"
    ],
    detailedDescription: "Smart link shortening service that not only creates clean, branded URLs but also provides comprehensive tracking and analytics for every click."
  },
  {
    id: "privacy-shield",
    title: "Privacy Shield",
    description: "Compliance and data protection suite",
    icon: Shield,
    features: [
      "GDPR/CCPA compliance",
      "Consent management",
      "Data anonymization",
      "Audit trails",
      "Privacy impact assessments"
    ],
    benefits: [
      "Avoid regulatory fines",
      "Build customer trust",
      "Simplify compliance",
      "Reduce legal risks"
    ],
    detailedDescription: "Comprehensive privacy protection suite ensuring your customer data practices comply with global regulations while maintaining data utility."
  },
  {
    id: "smart-redirects",
    title: "Smart Redirects",
    description: "Dynamic routing based on user context",
    icon: Zap,
    features: [
      "Geo-based routing",
      "Device-specific redirects",
      "A/B testing integration",
      "Time-based rules",
      "Behavioral targeting"
    ],
    benefits: [
      "Improve user experience",
      "Increase conversion rates",
      "Reduce bounce rates",
      "Optimize traffic flow"
    ],
    detailedDescription: "Intelligent redirect system that automatically routes users to the most relevant content based on their location, device, behavior, and other contextual factors."
  }
]

const ProductDetailModal = lazy(() => import("@/components/sections/ProductDetailModal"))

export function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductFeature | null>(null)

  return (
    <>
      <section id="product" className="py-20 bg-zinc-50 dark:bg-gray-900/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Intro Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
              All-in-One.{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Or One at a Time.
              </span>
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-300 leading-relaxed">
              Each product — from Link Shortener to Real-Time CDP and AI Agents — is powerful on its own, but unstoppable together.
            </p>
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
              Powerful Features,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Seamlessly Integrated
              </span>
            </h3>
            <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive suite of tools to track, analyze, and optimize your customer experience.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className={cn(
                    "h-full transition-all duration-300",
                    "bg-white dark:bg-white/10 backdrop-blur-sm",
                    "border border-zinc-200 dark:border-white/20",
                    "hover:bg-white dark:hover:bg-white/20",
                    "hover:border-zinc-300 dark:hover:border-white/40",
                    "hover:shadow-xl dark:hover:shadow-purple-500/10",
                    "hover:scale-105 hover:-translate-y-2"
                  )}>
                    <CardContent className="p-8">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center",
                          "bg-gradient-to-r from-purple-600 to-blue-600",
                          "group-hover:scale-110 transition-transform duration-300"
                        )}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Learn More Button */}
                      <Button
                        onClick={() => setSelectedProduct(product)}
                        variant="outline"
                        className="w-full bg-transparent border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Suspense fallback={<div className="text-center py-12 text-lg text-zinc-500 dark:text-zinc-300">Loading product details...</div>}>
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      </Suspense>
    </>
  )
}
