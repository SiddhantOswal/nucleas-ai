
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Activity, Link, Database, Brain, Shuffle, Bot, Target, Shield, Zap, Users, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubFeature {
  name: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subFeatures: SubFeature[];
}

const features: Feature[] = [
  {
    id: "pixel-tracking",
    title: "Pixel Tracker",
    description: "Track UTM parameters, sessions, and events across all touchpoints with sub-second latency.",
    icon: <Activity className="w-6 h-6 text-purple-500" />,
    subFeatures: [
      {
        name: "Real-time Event Capture",
        description: "Capture user interactions instantly with 99.9% accuracy",
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        tag: "Core"
      },
      {
        name: "UTM Parameter Tracking",
        description: "Automatic tracking of campaign parameters and attribution",
        icon: <Target className="w-4 h-4 text-blue-500" />,
        tag: "Core"
      },
      {
        name: "Cross-Device Stitching",
        description: "Connect user sessions across multiple devices seamlessly",
        icon: <Link className="w-4 h-4 text-green-500" />,
        tag: "AI"
      }
    ]
  },
  {
    id: "smart-redirect",
    title: "Smart Redirect Engine",
    description: "Intelligent routing based on geography, device type, and campaign parameters.",
    icon: <Link className="w-6 h-6 text-blue-500" />,
    subFeatures: [
      {
        name: "Geo-based Routing",
        description: "Route users based on location and language preferences",
        icon: <Target className="w-4 h-4 text-purple-500" />,
        tag: "Core"
      },
      {
        name: "Device Intelligence",
        description: "Optimize experiences for mobile, desktop, and tablet users",
        icon: <Users className="w-4 h-4 text-cyan-500" />,
        tag: "AI"
      },
      {
        name: "Campaign Optimization",
        description: "A/B test landing pages and automatically route to best performers",
        icon: <BarChart3 className="w-4 h-4 text-orange-500" />,
        tag: "AI"
      }
    ]
  },
  {
    id: "real-time-cdp",
    title: "Real-Time CDP",
    description: "Event ingestion and identity resolution powered by advanced machine learning algorithms.",
    icon: <Database className="w-6 h-6 text-green-500" />,
    subFeatures: [
      {
        name: "Identity Resolution",
        description: "Merge user profiles across channels using ML algorithms",
        icon: <Users className="w-4 h-4 text-green-500" />,
        tag: "AI"
      },
      {
        name: "Real-time Segmentation",
        description: "Create dynamic segments that update in milliseconds",
        icon: <Target className="w-4 h-4 text-purple-500" />,
        tag: "Core"
      },
      {
        name: "Event Stream Processing",
        description: "Process millions of events per second with low latency",
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        tag: "Core"
      }
    ]
  },
  {
    id: "ai-insights",
    title: "Analytics & AI Insights",
    description: "ML-powered segmentation with GPT-driven insights and predictive analytics.",
    icon: <Brain className="w-6 h-6 text-pink-500" />,
    subFeatures: [
      {
        name: "Predictive Churn Scoring",
        description: "Identify at-risk customers before they leave",
        icon: <BarChart3 className="w-4 h-4 text-red-500" />,
        tag: "AI"
      },
      {
        name: "GPT-Powered Insights",
        description: "Natural language explanations of your data patterns",
        icon: <Brain className="w-4 h-4 text-purple-500" />,
        tag: "AI"
      },
      {
        name: "Lookalike Audiences",
        description: "Find similar customers to your best segments",
        icon: <Users className="w-4 h-4 text-blue-500" />,
        tag: "AI"
      }
    ]
  },
  {
    id: "integrations",
    title: "CRM & Ad Integrations",
    description: "Seamlessly connect with Google Sheets, Zapier, Meta Ads, and 50+ other platforms.",
    icon: <Shuffle className="w-6 h-6 text-orange-500" />,
    subFeatures: [
      {
        name: "One-Click CRM Sync",
        description: "Automatically sync customer data to your CRM",
        icon: <Database className="w-4 h-4 text-green-500" />,
        tag: "Core"
      },
      {
        name: "Ad Platform Integration",
        description: "Push audiences directly to Facebook, Google, and LinkedIn ads",
        icon: <Target className="w-4 h-4 text-blue-500" />,
        tag: "Core"
      },
      {
        name: "Zapier Automation",
        description: "Connect to 5000+ apps through Zapier workflows",
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        tag: "Core"
      }
    ]
  },
  {
    id: "ai-agents",
    title: "AI Agents Service",
    description: "Deploy intelligent agents for automated customer interactions and lead qualification.",
    icon: <Bot className="w-6 h-6 text-cyan-500" />,
    subFeatures: [
      {
        name: "Lead Qualification Bots",
        description: "Automatically qualify leads using conversation AI",
        icon: <Bot className="w-4 h-4 text-cyan-500" />,
        tag: "AI"
      },
      {
        name: "Behavioral Triggers",
        description: "Trigger actions based on user behavior patterns",
        icon: <Zap className="w-4 h-4 text-orange-500" />,
        tag: "AI"
      },
      {
        name: "Smart Notifications",
        description: "Send personalized messages at optimal times",
        icon: <Brain className="w-4 h-4 text-purple-500" />,
        tag: "AI"
      }
    ]
  }
];

export const InteractiveFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Powerful Features, Seamlessly Integrated
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to collect, unify, and activate customer data in real-time
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/20 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 group h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-400/30 dark:to-pink-400/30 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/10 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 rounded-lg border border-white/20 dark:border-white/30 transition-all duration-200 text-purple-600 dark:text-purple-400 font-medium"
                  >
                    Learn More
                    <motion.div
                      animate={{ rotate: expandedFeature === feature.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {expandedFeature === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 right-0 z-10 mt-2 p-4 rounded-2xl bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/30 shadow-xl"
                  >
                    <div className="space-y-3">
                      {feature.subFeatures.map((subFeature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                            {subFeature.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {subFeature.name}
                              </h4>
                              {subFeature.tag && (
                                <span className={cn(
                                  "px-2 py-0.5 rounded-full text-xs font-medium",
                                  subFeature.tag === "AI" 
                                    ? "bg-purple-500/20 text-purple-600 dark:text-purple-400" 
                                    : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                                )}>
                                  {subFeature.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {subFeature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
