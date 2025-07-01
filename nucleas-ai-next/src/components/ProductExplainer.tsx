
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ChevronDown, ChevronUp } from "lucide-react";

interface EntityCard {
  id: number;
  name: string;
  logo: string;
  logoColor: string;
  lastActivity: string;
  views: string;
  status: string;
  statusColor: string;
  explainer: {
    title: string;
    description: string;
    features: string[];
  };
}

export const ProductExplainer = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const entities: EntityCard[] = [
    {
      id: 1,
      name: "Clay",
      logo: "C",
      logoColor: "bg-blue-500",
      lastActivity: "21m",
      views: "1103",
      status: "HIGH INTENT",
      statusColor: "bg-green-600/90",
      explainer: {
        title: "Pixel Tracking Intelligence",
        description: "Our advanced pixel tracking detected multiple high-intent sessions on key pages, indicating strong purchase signals.",
        features: [
          "Real-time session tracking across all touchpoints",
          "Intent scoring based on page engagement patterns", 
          "Automatic lead scoring and qualification",
          "Integration with your existing CRM workflow"
        ]
      }
    },
    {
      id: 2,
      name: "Lemlist",
      logo: "L",
      logoColor: "bg-blue-400",
      lastActivity: "21m",
      views: "1103",
      status: "LOST DEAL",
      statusColor: "bg-purple-400/80",
      explainer: {
        title: "AI-Powered Deal Recovery",
        description: "Our AI Agent has initiated automated re-engagement sequences based on previous interaction patterns and optimal timing.",
        features: [
          "Intelligent re-engagement timing optimization",
          "Personalized content recommendations",
          "Multi-channel outreach coordination",
          "Behavioral trigger-based messaging"
        ]
      }
    },
    {
      id: 3,
      name: "Airtable",
      logo: "A",
      logoColor: "bg-orange-400",
      lastActivity: "21m",
      views: "1103",
      status: "SALES ICP",
      statusColor: "bg-orange-500/80",
      explainer: {
        title: "Smart Redirect & Data Capture",
        description: "Advanced redirect patterns captured detailed customer journey data while seamlessly guiding prospects through your funnel.",
        features: [
          "Dynamic redirect based on visitor behavior",
          "Progressive data enrichment at each touchpoint",
          "Custom audience segmentation in real-time",
          "Automated lead nurturing workflows"
        ]
      }
    }
  ];

  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Our Platform{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Click on any customer card below to discover how our modular ecosystem 
            transforms raw data into actionable insights.
          </p>
        </motion.div>

        {/* Interactive Cards */}
        <div className="space-y-6">
          {entities.map((entity, index) => (
            <motion.div
              key={entity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <Card 
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/30 cursor-pointer transition-all duration-300 group"
                onClick={() => handleCardClick(entity.id)}
              >
                <CardContent className="p-6">
                  {/* Main Card Content */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl ${entity.logoColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {entity.logo}
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {entity.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{entity.lastActivity}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{entity.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Badge className={`${entity.statusColor} text-white border-0 px-3 py-1 font-medium`}>
                        {entity.status}
                      </Badge>
                      
                      <motion.div
                        animate={{ rotate: expandedCard === entity.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400 group-hover:text-purple-400 transition-colors"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedCard === entity.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-500/20">
                          <h4 className="text-lg font-semibold text-purple-300 mb-3">
                            {entity.explainer.title}
                          </h4>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {entity.explainer.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {entity.explainer.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="flex items-start space-x-2"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to see how our platform can transform your customer data?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
          >
            Request Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
