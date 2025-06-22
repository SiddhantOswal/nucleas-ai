
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { InteractiveFeatures } from "@/components/ui/interactive-features";
import { InteractiveDashboard } from "@/components/ui/interactive-dashboard";
import { TestimonialCards } from "@/components/ui/testimonial-cards";
import { ContactForm } from "@/components/ui/contact-form";
import { Globe } from "@/components/ui/globe";
import { GlassFeatureModal } from "@/components/ui/glass-feature-modal";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/layout/Footer";
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
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navigation Bar */}
      <TubelightNavBar items={navItems} />

      {/* Hero Section with Globe */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  NucleasAI
                </span>
                <br />
                <span className="text-white">
                  The Nucleus of Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Data Universe
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              >
                Real-time CDP with AI-powered insights, smart redirects, and privacy-first tracking. 
                Everything you need to understand and activate your customer data.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Start Free Trial
                </button>
                <GlassFeatureModal buttonText="Learn More" />
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
                {/* Glow effect behind globe */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
                
                {/* Globe component */}
                <Globe className="relative z-10" />
                
                {/* Floating data points */}
                <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center animate-bounce">
                  <span className="text-white text-sm font-bold">1.2M</span>
                </div>
                <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center animate-bounce delay-500">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section id="product">
        <InteractiveDashboard />
      </section>

      {/* Interactive Features Section */}
      <section id="solutions">
        <InteractiveFeatures />
      </section>

      {/* Testimonials Section */}
      <section id="about" className="py-24 bg-gray-900/30">
        <TestimonialCards />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
