import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { InteractiveFeatures } from "@/components/ui/interactive-features";
import { InteractiveDashboard } from "@/components/ui/interactive-dashboard";
import { ContactForm } from "@/components/ui/contact-form";
import { Globe } from "@/components/ui/globe";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ProductSection } from "@/components/sections/product-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { AboutSection } from "@/components/sections/about-section";
import { motion } from "framer-motion";
import { Home as HomeIcon, Package, Settings, DollarSign, User, Mail } from "lucide-react";

const Home = () => {
  const navItems = [
    { name: "Home", url: "#home", icon: HomeIcon },
    { name: "Product", url: "#product", icon: Package },
    { name: "Solutions", url: "#solutions", icon: Settings },
    { name: "Pricing", url: "#pricing", icon: DollarSign },
    { name: "About", url: "#about", icon: User },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Floating Navigation Bar */}
      <TubelightNavBar items={navItems} />

      {/* Hero Section with Globe */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
        {/* Animated background elements - only visible in dark mode */}
        <div className="absolute inset-0 overflow-hidden dark:block hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  NucleasAI
                </span>
                <span className="text-zinc-900 dark:text-white block">
                  The Core of Customer Intelligence
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-700 dark:text-gray-300 mt-4 mb-8 leading-relaxed"
              >
                Real-time CDP with AI-powered insights, smart redirects, and privacy-first tracking.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Request Demo
                </button>
                <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105">
                  Join Waitlist
                </button>
              </motion.div>
            </motion.div>

            {/* Right side - Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[500px] aspect-square">
                {/* Glow effect behind globe - only in dark mode */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse dark:block hidden" />
                
                {/* Globe component */}
                <Globe className="relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <ProductSection />

      {/* Interactive Dashboard Section */}
      <section id="dashboard" className="bg-zinc-50 dark:bg-gray-900/30">
        <InteractiveDashboard />
      </section>

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Interactive Features Section */}
      <section className="bg-white dark:bg-black">
        <InteractiveFeatures />
      </section>

      {/* About Section - replaces Testimonials */}
      <AboutSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to transform your customer data strategy? We're here to help you get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Let's Connect</h3>
                <p className="text-zinc-700 dark:text-gray-300 mb-6">
                  Have questions about NucleasAI? Want to see how we can help your business? 
                  Reach out and let's start a conversation.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <span className="text-zinc-700 dark:text-gray-300">hello@nucleasai.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
