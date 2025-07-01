import React from "react";
import { motion } from "framer-motion";

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  details: string[];
}

interface SolutionDetailModalProps {
  solution: SolutionCard | null;
  onClose: () => void;
}

const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({ solution, onClose }) => {
  if (!solution) return null;
  const Icon = solution.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-lg w-full bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          ×
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
            <p className="text-purple-400">{solution.category}</p>
          </div>
        </div>
        <p className="text-gray-200 mb-6">{solution.description}</p>
        <div>
          <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {solution.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-200">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionDetailModal; 