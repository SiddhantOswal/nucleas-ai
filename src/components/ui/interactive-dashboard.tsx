// Updated: Chart colors updated to match site gradient theme

import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Activity, Users, Zap, Target, TrendingUp, Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import clsx from "clsx";
import { lazy } from "react";

interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
}

interface ChartData {
  name: string;
  value: number;
}

const referrerData: ChartData[] = [
  { name: "Google", value: 45 },
  { name: "Facebook", value: 28 },
  { name: "LinkedIn", value: 15 },
  { name: "Twitter", value: 8 },
  { name: "Direct", value: 4 }
];

const segmentData: ChartData[] = [
  { name: "High Value", value: 35 },
  { name: "Active Users", value: 40 },
  { name: "At Risk", value: 15 },
  { name: "New Users", value: 10 }
];

// Updated gradient colors to match site theme
const COLORS = ['#ec4899', '#8b5cf6', '#3b82f6', '#06b6d4', '#f97316'];

const CountUpAnimation = ({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const DashboardCharts = lazy(() => import("./interactive-dashboard-charts"));

export const InteractiveDashboard = () => {
  const [timePeriod, setTimePeriod] = useState("30");
  const [isVisible, setIsVisible] = useState(false);

  const metrics: Metric[] = [
    {
      label: "Total Events Tracked",
      value: timePeriod === "7" ? 32000 : 145000,
      icon: <Activity className="w-6 h-6" />,
      color: "text-purple-500"
    },
    {
      label: "Smart Redirects",
      value: timePeriod === "7" ? 3200 : 12340,
      icon: <Zap className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      label: "AI Churn Risk",
      value: 82,
      suffix: "%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-orange-500"
    },
    {
      label: "Active Segments",
      value: 16,
      icon: <Target className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      label: "Identity Resolutions",
      value: timePeriod === "7" ? 21000 : 93211,
      icon: <Users className="w-6 h-6" />,
      color: "text-cyan-500"
    },
    {
      label: "Countries Reached",
      value: 47,
      icon: <Globe className="w-6 h-6" />,
      color: "text-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('dashboard-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Real-Time Customer Dashboard
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Live insights on tracking, identity resolution, redirects, and AI intelligence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <Select value={timePeriod} onValueChange={setTimePeriod}>
              <SelectTrigger className="w-48 bg-white/20 dark:bg-white/10 backdrop-blur-[10px] border-white/30 ring-1 ring-white/10" aria-label="Time period selector">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 Days</SelectItem>
                <SelectItem value="30">Last 30 Days</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-6 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-[10px] border border-white/30 ring-1 ring-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:ring-purple-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {isVisible ? (
                      <CountUpAnimation 
                        end={metric.value} 
                        prefix={metric.prefix} 
                        suffix={metric.suffix}
                      />
                    ) : (
                      `${metric.prefix || ""}0${metric.suffix || ""}`
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {metric.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lazy-load the charts section for performance */}
        <Suspense fallback={<div className="text-center py-12 text-lg text-zinc-500 dark:text-zinc-300">Loading charts...</div>}>
          <DashboardCharts referrerData={referrerData} segmentData={segmentData} COLORS={COLORS} />
        </Suspense>
      </div>
    </section>
  );
};

// TODO: For further optimization, consider lazy-loading recharts charts with React.lazy() if this dashboard is not above-the-fold or is not needed immediately on page load.
