'use client';
import Head from 'next/head';
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { InteractiveDashboard } from "@/components/ui/interactive-dashboard";
import { ContactForm } from "@/components/ui/contact-form";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { ProductSection } from "@/components/sections/product-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import AboutSection from "@/components/sections/about-section";
import { FAQSection } from '@/components/ui/FAQSection';
import { motion } from "framer-motion";
import { Home as HomeIcon, Package, Settings, User, Mail, ArrowRight, MapPin, Clock } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const navItems = [
    { name: "Home", url: "#home", icon: HomeIcon },
    { name: "Product", url: "#product", icon: Package },
    { name: "Solutions", url: "#solutions", icon: Settings },
    { name: "About", url: "#about", icon: User },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  const handleJoinWaitlist = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>AI-Native CDP | Real-time Customer Data Platform | NucleasAI</title>
        <meta name="description" content="NucleasAI is the leading AI-native CDP for real-time customer data activation. Unify, analyze, and activate customer insights instantly with AI agents for data activation, identity resolution, and more." />
        <link rel="canonical" href="https://nucleasai.com/" />
        <meta name="keywords" content="AI-native CDP, real-time customer data platform, AI agents, data activation, customer intelligence, identity resolution" />
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://nucleasai.com/"}
            ]
          }
        `}</script>
        {/* SoftwareApplication structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "NucleasAI",
            "operatingSystem": "Web",
            "applicationCategory": "Customer Data Platform",
            "description": "AI-native CDP for real-time customer data activation and intelligence.",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}
          }
        `}</script>
      </Head>
      <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white" style={{ scrollBehavior: 'smooth' }}>
        {/* TEST BOX FOR DARK MODE */}
        <div className="relative z-[9999] h-20 w-20 bg-white dark:bg-black border m-8 flex items-center justify-center">TEST</div>
        {/* Floating Navbar */}
        <div className="hidden lg:block">
          <FloatingNavbar />
        </div>

        {/* Main Navigation Bar */}
        <TubelightNavBar items={navItems} />

        {/* Hero Section with Interactive Globe */}
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
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-600 dark:text-purple-400">
                    Autonomous AI for Customer Data
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    NucleasAI
                  </span>
                  <span className="block text-gray-900 text-3xl md:text-6xl font-bold mt-2 leading-tight tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)]">
                    <span className="text-gray-900 dark:text-white">
                      The Nucleus of<br />Customer Intelligence
                    </span>
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-xl text-zinc-700 dark:text-gray-300 mt-4 mb-4 leading-relaxed"
                >
                  AI-native CDP ecosystem with autonomous agents, intelligent routing, and real-time customer intelligence.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-base text-gray-600 dark:text-gray-300 mb-8"
                >
                  Agent-powered insights that work while you sleep — where data meets intelligence.
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
                  <button 
                    onClick={handleJoinWaitlist}
                    className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Join Waitlist
                  </button>
                </motion.div>
              </motion.div>

              {/* Right side - Interactive Globe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative flex items-center justify-center"
              >
                {/* Scattered watermark phrases around the globe */}
                {/* Watermarks removed as per user request */}
                <div className="relative w-full max-w-[500px] aspect-square z-10">
                  {/* Glow effect behind globe - only in dark mode */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse dark:block hidden" />
                  {/* Interactive Globe */}
                  <img src="/placeholder.svg" alt="Globe" className="relative z-10 w-full h-full object-contain" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <ProductSection />

        {/* Interactive Dashboard Section */}
        <section id="dashboard" className="bg-zinc-50 dark:bg-gray-900/30 relative">
          {/* Light mode overlay for better text contrast */}
          <div className="absolute inset-0 bg-white/80 dark:bg-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <InteractiveDashboard />
          </div>
        </section>

        {/* Solutions Section */}
        <SolutionsSection />

        {/* About Section */}
        <AboutSection />

        {/* FAQ Section - added just before Get in Touch */}
        <FAQSection />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to transform your customer data strategy with AI-powered intelligence? We're here to help you get started.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info - now on the left */}
              <div>
                {/* Waitlist CTA box at the top */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-700 via-purple-600 to-blue-700 text-white dark:from-purple-800 dark:via-purple-700 dark:to-blue-800 shadow-lg mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🚀</span>
                    <span className="font-bold text-lg">Join our exclusive waitlist</span>
                  </div>
                  <p className="text-base text-white/90">
                    Join the waitlist to secure early access to <span className="font-semibold text-purple-200">NucleasAI</span> the real-time, AI-native CDP ecosystem and unlock exclusive launch benefits available only to early adopters.
                  </p>
                </div>
                {/* Let's Connect title and description */}
                <h2 className="text-3xl font-bold text-white dark:text-white mb-4">Let's Connect</h2>
                <p className="text-lg text-gray-200 dark:text-gray-200 mb-6">
                  Discover how our AI-native CDP ecosystem empowers you with real-time, autonomous customer intelligence.<br />
                  Reach out to us for questions, demos, or partnership opportunities.
                </p>
                {/* Email block */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:hello@nucleasai.com" className="block font-bold text-white dark:text-white underline hover:text-purple-300">hello@nucleasai.com</a>
                    {/* <a href="mailto:support@nucleasai.com" className="block font-bold text-white dark:text-white underline hover:text-purple-300">support@nucleasai.com</a> */}
                  </div>
                </div>
                {/* Location block at the bottom */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-200">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              {/* Form - now on the right */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input 
                        id="firstName"
                        className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input 
                        id="lastName"
                        className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input 
                      id="company"
                      className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input 
                      id="subject"
                      className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea 
                      id="message"
                      rows={5}
                      className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
