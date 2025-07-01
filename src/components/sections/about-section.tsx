// File: components/sections/about-section.tsx
// Updated: Added AI-native messaging and improved visibility

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { Users, Target, Shield, Zap, Brain, Globe, Linkedin } from "lucide-react";

const valuesData = [
  {
    author: {
      name: "AI-First Innovation",
      handle: "",
      avatar: ""
    },
    text: "We push the boundaries of autonomous AI agents and intelligent data processing, constantly innovating to deliver cutting-edge customer intelligence solutions.",
    href: undefined
  },
  {
    author: {
      name: "Privacy by Design",
      handle: "",
      avatar: ""
    },
    text: "Your data privacy is paramount. We build with privacy-first principles and autonomous agents that ensure complete control over your customer data.",
    href: undefined
  },
  {
    author: {
      name: "Agent-Powered Success",
      handle: "",
      avatar: ""
    },
    text: "Your success is our mission. AI agents work 24/7 to provide intelligent insights and automated actions that drive your business goals.",
    href: undefined
  },
  {
    author: {
      name: "Autonomous Scalability",
      handle: "",
      avatar: ""
    },
    text: "Built to grow intelligently with you. Our AI-native platform scales seamlessly from startup to enterprise, with agents handling millions of events.",
    href: undefined
  },
  {
    author: {
      name: "Real-time Intelligence",
      handle: "",
      avatar: ""
    },
    text: "Get AI-powered insights when they matter most. Our autonomous agents analyze and act on customer data in real-time for immediate impact.",
    href: undefined
  },
  {
    author: {
      name: "Seamless AI Integration",
      handle: "",
      avatar: ""
    },
    text: "Connect with your existing tools effortlessly. Our AI agents integrate with 50+ popular services, learning and adapting to your workflow.",
    href: undefined
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              NucleasAI
            </span>
          </h2>
          <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building the future of AI-native customer data platforms. Our autonomous agents and intelligent 
            systems help businesses understand their customers better, protect their privacy, and drive growth through 
            agentic AI that works around the clock.
          </p>
        </motion.div>

        {/* Our Values Section */}
        <TestimonialsSection
          title="Our Values"
          description="The AI-first principles that guide everything we do"
          testimonials={valuesData}
          className="py-16 bg-transparent"
        />

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Team
              </span>
            </h3>
            <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-2xl mx-auto">
              AI experts and data scientists working to revolutionize autonomous customer intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="Siddhant Oswal"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-purple-500/30"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Siddhant Oswal
              </h4>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                Co-Founder
              </p>
              <a
                href="https://www.linkedin.com/in/siddhant-oswal/"
                target="_blank"
     rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors mb-3 group"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
              <p className="text-zinc-800 dark:text-gray-200 text-sm leading-relaxed font-semibold">
              Weathered multiple tech downturns while supporting cross-functional teams and driving outcomes without titles. Built trust through consistency and grit now channeling that leadership and AI expertise into shaping the future of autonomous, AI-native customer data platforms.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                  alt="Om Jain"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500/30"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Om Jain
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                Co-Founder
              </p>
              <a
                href="https://www.linkedin.com/in/omjain23/"
                target="_blank"
rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors mb-3 group"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
              <p className="text-zinc-800 dark:text-gray-200 text-sm leading-relaxed font-semibold">
              Engineer with deep expertise in AI systems, pixel tracking, and CDP infrastructure having built them from the ground up. Now leading architecture at NucleasAI to deliver scalable, intelligent, and privacy-conscious customer data experiences powered by autonomous agents.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
