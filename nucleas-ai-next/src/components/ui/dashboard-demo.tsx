
import React from "react";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

export const DashboardDemo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/20 p-6 shadow-2xl">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Customer Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">Real-time insights from your data</p>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/10 dark:bg-black/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Visitors</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">12.4K</div>
            <div className="text-xs text-green-500">+12%</div>
          </div>
          
          <div className="bg-white/10 dark:bg-black/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Conversion</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">3.2%</div>
            <div className="text-xs text-green-500">+5%</div>
          </div>
          
          <div className="bg-white/10 dark:bg-black/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Revenue</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$42K</div>
            <div className="text-xs text-green-500">+18%</div>
          </div>
          
          <div className="bg-white/10 dark:bg-black/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Events</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">892K</div>
            <div className="text-xs text-green-500">+24%</div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="bg-white/10 dark:bg-black/20 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Traffic Overview</span>
            <select className="text-xs bg-transparent text-gray-600 dark:text-gray-300 border border-white/20 rounded px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="h-32 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-purple-500/50 to-pink-500/50 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};
