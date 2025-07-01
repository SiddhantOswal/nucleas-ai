import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  benefits: string[];
  detailedDescription: string;
}

interface ProductDetailModalProps {
  product: ProductFeature | null;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative max-w-2xl w-full max-h-[90vh] overflow-auto",
          "bg-white/10 dark:bg-white/10 backdrop-blur-lg",
          "border border-white/20 rounded-2xl p-6 sm:p-8"
        )}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-300 hover:text-white" />
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{product.title}</h2>
            <p className="text-gray-300">{product.description}</p>
          </div>
        </div>
        {/* Detailed Description */}
        <div className="mb-8">
          <p className="text-gray-200 leading-relaxed">{product.detailedDescription}</p>
        </div>
        {/* Features and Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-200">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Benefits</h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            Request Demo
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailModal; 