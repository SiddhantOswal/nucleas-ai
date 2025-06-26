
import React from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

interface TestimonialCardsProps {
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    title: "Head of Growth at Zendesk",
    quote: "NucleasAI transformed how we understand our customers. The real-time insights helped us reduce churn by 40% in just 3 months.",
    avatar: "SC"
  },
  {
    name: "Marcus Johnson",
    title: "VP Marketing at Stripe",
    quote: "The AI-powered segmentation is incredible. We can now predict customer behavior with 85% accuracy and optimize our campaigns accordingly.",
    avatar: "MJ"
  },
  {
    name: "Elena Rodriguez",
    title: "Data Director at Shopify",
    quote: "Finally, a CDP that actually works in real-time. The privacy-first approach gives us confidence while the insights drive real results.",
    avatar: "ER"
  }
];

export const TestimonialCards: React.FC<TestimonialCardsProps> = ({
  testimonials = defaultTestimonials,
  className
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted by Leading Companies
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          See how industry leaders are transforming their customer data strategy with NucleasAI
        </p>
      </div>
      
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
    </div>
  );
};
