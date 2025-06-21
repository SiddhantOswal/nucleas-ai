
import React from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

interface TestimonialCardsProps {
  testimonials: Testimonial[];
  className?: string;
}

export const TestimonialCards: React.FC<TestimonialCardsProps> = ({
  testimonials,
  className
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="relative p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 group"
        >
          {/* Quote */}
          <div className="mb-6">
            <div className="text-4xl text-purple-400 dark:text-purple-300 mb-2">"</div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {testimonial.quote}
            </p>
          </div>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
