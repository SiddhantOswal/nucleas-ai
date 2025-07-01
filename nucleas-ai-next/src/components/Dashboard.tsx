
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Search, 
  Filter, 
  BarChart3, 
  Users, 
  Link, 
  Bot, 
  Database,
  ChevronDown,
  Clock,
  Eye,
  TrendingUp
} from "lucide-react";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const sidebarItems = [
    { name: "Pixel Tracker", icon: BarChart3, active: true },
    { name: "Smart Redirects", icon: Link },
    { name: "CDP", icon: Database },
    { name: "Analytics", icon: TrendingUp },
    { name: "AI Agents", icon: Bot },
  ];

  const trackedEntities = [
    {
      id: 1,
      name: "Clay",
      logo: "C",
      logoColor: "bg-blue-500",
      lastActivity: "21m",
      sessions: "1103",
      status: "HIGH INTENT",
      statusColor: "bg-green-600/90",
      metrics: { redirects: 45, agents: 2, synced: true }
    },
    {
      id: 2,
      name: "Lemlist",
      logo: "L",
      logoColor: "bg-blue-400",
      lastActivity: "21m",
      sessions: "1103",
      status: "LOST DEAL",
      statusColor: "bg-purple-400/80",
      metrics: { redirects: 12, agents: 0, synced: false }
    },
    {
      id: 3,
      name: "Airtable",
      logo: "A",
      logoColor: "bg-orange-400",
      lastActivity: "21m",
      sessions: "1103",
      status: "SALES ICP",
      statusColor: "bg-orange-500/80",
      metrics: { redirects: 78, agents: 3, synced: true }
    }
  ];

  const filters = ["All", "High Intent", "Lost Deals", "Sales ICP", "Synced"];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="w-64 bg-gray-900/50 backdrop-blur-md border-r border-gray-800 p-4"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                NucleasAI
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    item.active 
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                      : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-900/30 backdrop-blur-md border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {!sidebarOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(true)}
                  className="p-1"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              )}
              <h1 className="text-2xl font-bold">Tracked Entities</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search entities..."
                  className="bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter)}
                    className={selectedFilter === filter 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600" 
                      : "text-gray-300"
                    }
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 space-y-4">
          {trackedEntities.map((entity, index) => (
            <motion.div
              key={entity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg ${entity.logoColor} flex items-center justify-center text-white font-bold`}>
                        {entity.logo}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white">{entity.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{entity.lastActivity}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{entity.sessions}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <span>Redirects: {entity.metrics.redirects}</span>
                        <span>•</span>
                        <span>AI Agents: {entity.metrics.agents}</span>
                        <span>•</span>
                        <span className={entity.metrics.synced ? "text-green-400" : "text-red-400"}>
                          {entity.metrics.synced ? "Synced" : "Not Synced"}
                        </span>
                      </div>
                      
                      <Badge className={`${entity.statusColor} text-white border-0`}>
                        {entity.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Right Detail Panel */}
        <div className="w-80 bg-gray-900/30 backdrop-blur-md border-l border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Entity Details</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h4 className="font-medium mb-2">Recent Activity</h4>
              <p className="text-sm text-gray-400">
                Pixel tracking detected multiple high-intent sessions on the pricing page.
              </p>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h4 className="font-medium mb-2">AI Agent Status</h4>
              <p className="text-sm text-gray-400">
                Auto-qualification initiated based on engagement patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
