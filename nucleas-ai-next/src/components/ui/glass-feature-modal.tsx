
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GlassFeatureModalProps {
  buttonText?: string;
  title?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export const GlassFeatureModal: React.FC<GlassFeatureModalProps> = ({
  buttonText = "Learn More",
  title = "Analytics & AI Insights",
  features = [
    {
      icon: "🔍",
      title: "Predictive Churn Scoring",
      description: "Identify at-risk customers before they leave"
    },
    {
      icon: "🧠",
      title: "GPT-Powered Insights",
      description: "Natural language explanations of your data patterns"
    },
    {
      icon: "👥",
      title: "Lookalike Audiences",
      description: "Find similar customers to your best segments"
    }
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Learn More Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 group"
              >
                <X className="w-5 h-5 text-white group-hover:text-gray-200" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-300 text-sm">
                  Discover how our advanced features can transform your business
                </p>
              </div>

              {/* Modal Body */}
              <div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                      className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:bg-white/15 transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl flex-shrink-0 mt-1">
                          {feature.icon}
                        </span>
                        <div>
                          <h3 className="font-semibold text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
