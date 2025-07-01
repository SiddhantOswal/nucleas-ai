import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import clsx from "clsx";

interface ChartData {
  name: string;
  value: number;
}

interface DashboardChartsProps {
  referrerData: ChartData[];
  segmentData: ChartData[];
  COLORS: string[];
}

const DashboardCharts: React.FC<DashboardChartsProps> = React.memo(({ referrerData, segmentData, COLORS }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-[10px] border border-white/30 ring-1 ring-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:ring-purple-500/30 transition-all duration-300 drop-shadow"
    >
      <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
        <span className="inline-block px-3 py-1 rounded-md text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">Top Referrer Domains</span>
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={referrerData}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={props => (
                <text
                  x={props.x}
                  y={props.y + 16}
                  textAnchor="middle"
                  className={clsx(
                    "text-sm font-medium",
                    "text-gray-800 dark:text-white"
                  )}
                >
                  {props.payload.value}
                </text>
              )}
            />
            <YAxis hide />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-[10px] border border-white/30 ring-1 ring-white/10 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:ring-purple-500/30 transition-all duration-300 drop-shadow"
    >
      <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
        <span className="inline-block px-3 py-1 rounded-md text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">Audience Segments</span>
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 gap-2">
            {segmentData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm text-gray-900 dark:text-gray-200 truncate px-2 py-0.5 rounded bg-white/70 dark:bg-white/0">
                  {entry.name}: {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
));

export default DashboardCharts; 