
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { InteractiveFeatures } from "@/components/ui/interactive-features";
import { InteractiveDashboard } from "@/components/ui/interactive-dashboard";
import { ContactForm } from "@/components/ui/contact-form";
import { Globe } from "@/components/ui/globe";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { ProductSection } from "@/components/sections/product-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import AboutSection from "@/components/sections/about-section";
import { motion } from "framer-motion";
import { Home as HomeIcon, Package, Settings, DollarSign, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// File: pages/Home.tsx
// Updated: restored PricingSection with glassmorphic styling and pink-blue gradient CTAs.

const Home = () => {
  const navItems = [
    { name: "Home", url: "#home", icon: HomeIcon },
    { name: "Product", url: "#product", icon: Package },
    { name: "Solutions", url: "#solutions", icon: Settings },
    { name: "Pricing", url: "#pricing", icon: DollarSign },
    { name: "About", url: "#about", icon: User },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  // Pricing data
  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 10,000 events/month",
        "Basic analytics dashboard",
        "Email support",
        "API access",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 events/month",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Real-time sync",
        "A/B testing tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale organizations",
      features: [
        "Unlimited events",
        "Custom analytics",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom implementation"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Navigation Bar */}
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
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
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

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-white dark:bg-black overflow-hidden">
        {/* Background overlay for dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[#0a0a0a] dark:block hidden pointer-events-none" />
        
        <div className="absolute inset-0 overflow-hidden dark:block hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Plan
              </span>
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Scale with confidence. Choose the plan that fits your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col",
                  plan.popular && "border-pink-500/50 shadow-lg shadow-pink-500/10"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-semibold text-zinc-900 dark:text-white">{plan.price}</span>
                    {plan.period && <span className="text-zinc-700 dark:text-gray-300 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-zinc-700 dark:text-gray-300 text-sm mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zinc-700 dark:text-gray-200">
                      <svg className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-auto py-3 px-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="bg-white dark:bg-black">
        <InteractiveFeatures />
      </section>

      {/* About Section */}
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
