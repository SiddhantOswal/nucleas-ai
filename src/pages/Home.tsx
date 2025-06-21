
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp, Home, Package, Target, DollarSign, Info, Mail, 
         Activity, Link, Database, Brain, Shuffle, Clock, ShoppingBag, GraduationCap, 
         Palette, MapPin, Check } from "lucide-react";
import { Globe } from "@/components/ui/globe";
import { GooeyText } from "@/components/ui/gooey-text-morphing";  
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Component as ShapeBlur } from "@/components/ui/shapeblur";
import { Footer } from "@/components/layout/Footer";
import { DemoOne } from "@/components/ui/dynamic-action";

const HomePage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Product', url: '#product', icon: Package },
    { name: 'Solutions', url: '#solutions', icon: Target },
    { name: 'Pricing', url: '#pricing', icon: DollarSign },
    { name: 'About', url: '#about', icon: Info },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  const productFeatures = [
    {
      icon: Activity,
      title: "Pixel Tracker",
      description: "Track UTM parameters, sessions, and events across all touchpoints with sub-second latency."
    },
    {
      icon: Link,
      title: "Smart Redirect Engine", 
      description: "Intelligent routing based on geography, device type, and campaign parameters."
    },
    {
      icon: Database,
      title: "Real-Time CDP",
      description: "Event ingestion and identity resolution powered by advanced machine learning algorithms."
    },
    {
      icon: Brain,
      title: "Analytics & AI Insights",
      description: "ML-powered segmentation with GPT-driven insights and predictive analytics."
    },
    {
      icon: Shuffle,
      title: "CRM & Ad Integrations",
      description: "Seamlessly connect with Google Sheets, Zapier, Meta Ads, and 50+ other platforms."
    }
  ];

  const solutions = [
    {
      icon: Clock,
      title: "SaaS & Startups",
      description: "Reduce CAC and improve retention with unified customer insights and behavioral analytics.",
    },
    {
      icon: ShoppingBag,
      title: "D2C & E-commerce", 
      description: "Track campaigns, segment audiences, and personalize offers to maximize conversion rates.",
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Understand learner behavior, optimize onboarding experiences, and reduce churn effectively.",
    },
    {
      icon: Palette,
      title: "Creator Tools",
      description: "Track link performance, automate outreach campaigns, and segment by user behavior.",
    },
    {
      icon: MapPin,
      title: "Regional Brands",
      description: "Smart routing by location and language with comprehensive local campaign analytics.",
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: { monthly: "0", yearly: "0" },
      description: "Perfect for getting started with basic tracking",
      features: [
        "Basic pixel tracking",
        "Link shortening", 
        "Analytics dashboard",
        "Up to 10K events/month",
        "Community support"
      ],
      highlight: false,
      buttonText: "Get Started Free"
    },
    {
      name: "Growth", 
      price: { monthly: "49", yearly: "39" },
      description: "Advanced features for scaling businesses",
      features: [
        "Real-time CDP",
        "Smart routing engine",
        "CRM integrations",
        "Up to 1M events/month",
        "Priority email support",
        "Custom audiences",
        "API access"
      ],
      highlight: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "Full-scale solution for large organizations", 
      features: [
        "Dedicated infrastructure",
        "24/7 phone support",
        "Consent management",
        "Data warehouse support",
        "Custom integrations",
        "SLA guarantees",
        "White-label options"
      ],
      highlight: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <>
      <TubelightNavBar items={navItems} />
      
      <main className="bg-black text-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <GooeyText
                texts={["NucleasAI", "Real-Time", "Data Hub", "AI-Powered"]}
                className="mb-6 h-24"
                textClassName="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 leading-relaxed">
              The nucleus of your customer data universe.
              <br />
              <span className="text-purple-300">Collect, unify, and activate in real-time.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <div className="relative w-48 h-12">
                <ShapeBlur
                  variation={0}
                  shapeSize={1.0}
                  roundness={0.5}
                  borderSize={0.005}
                  circleEdge={1.0}
                  className="rounded-lg"
                />
                <Button className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg z-10">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Globe Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Globe className="max-w-[800px]" />
          </div>
        </section>

        {/* Dashboard Demo Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                See NucleasAI in Action
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our real-time customer data platform through an interactive preview
              </p>
            </div>
            
            <div className="flex justify-center">
              <DemoOne />
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                All-in-One AI-Powered Customer Data Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Collect, unify, and activate customer data in real-time across web, mobile, and marketing channels.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productFeatures.map((feature, index) => (
                <article key={index} className="relative p-6 rounded-2xl border border-gray-800">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.1}
                    borderWidth={2}
                  />
                  <div className="relative bg-black/50 p-6 rounded-xl">
                    <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
                Built for Growth Teams Across Industries
              </h2>
              <p className="text-xl text-gray-300">
                Tailored solutions for modern businesses in every sector
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <article key={index} className="relative p-6 rounded-2xl border border-gray-700">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.1}
                    borderWidth={2}
                  />
                  <div className="relative bg-gray-900/50 p-8 rounded-xl">
                    <solution.icon className="w-10 h-10 text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start free. Scale when you grow.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative w-14 h-7 bg-gray-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Toggle billing cycle"
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${billingCycle === 'yearly' ? 'translate-x-7' : ''}`} />
                </button>
                <span className={`${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
                </span>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <article key={index} className={`relative p-8 rounded-2xl border ${plan.highlight ? 'border-purple-500 scale-105' : 'border-gray-700'}`}>
                  <GlowingEffect
                    spread={plan.highlight ? 50 : 30}
                    glow={true}
                    disabled={false}
                    proximity={plan.highlight ? 80 : 48}
                    inactiveZone={0.1}
                    borderWidth={plan.highlight ? 3 : 2}
                  />
                  <div className="relative bg-gray-900/50 p-6 rounded-xl">
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                        {plan.price[billingCycle] === 'Custom' ? 'Custom' : `$${plan.price[billingCycle]}`}
                      </span>
                      {plan.price[billingCycle] !== 'Custom' && plan.price[billingCycle] !== '0' && (
                        <span className="text-gray-400 text-lg">/month</span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="relative w-full h-12">
                      <ShapeBlur
                        variation={0}
                        shapeSize={1.0}
                        roundness={0.5}
                        borderSize={0.005}
                        circleEdge={1.0}
                        className="rounded-lg"
                      />
                      <Button className={`absolute inset-0 w-full rounded-lg z-10 ${plan.highlight ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-700'}`}>
                        {plan.buttonText}
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
          <div className="max-w-7xl mx-auto text-center">
            <header>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-8">
                Built by Engineers Obsessed with Data
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
                We're a small team with deep experience in CDPs, identity graphs, and AI — on a mission to simplify real-time customer data for everyone.
              </p>
            </header>
            
            <div className="mb-12">
              <blockquote className="text-xl text-purple-300 font-medium">
                "We believe AI-powered data platforms should be easy to use, privacy-first, and deeply actionable."
              </blockquote>
            </div>
            
            <div className="flex justify-center gap-8 mb-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T{i}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Privacy-First</h3>
                <p className="text-gray-400">Built with privacy and compliance at its core</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance-Obsessed</h3>
                <p className="text-gray-400">Sub-100ms activation times, 99.9% uptime SLA</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Product-Led</h3>
                <p className="text-gray-400">Built by engineers, for engineers and marketers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300">
                Ready to transform your customer data? Let's talk.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
                  <p className="text-gray-400 mb-6">
                    Join our beta program and be among the first to experience the future of customer data platforms.
                  </p>
                  <div className="space-y-4">
                    <div className="relative w-48 h-12">
                      <ShapeBlur
                        variation={0}
                        shapeSize={1.0}
                        roundness={0.5}
                        borderSize={0.005}
                        circleEdge={1.0}
                        className="rounded-lg"
                      />
                      <Button className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg z-10">
                        Request Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-8 rounded-2xl border border-gray-700">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.1}
                  borderWidth={2}
                />
                <div className="relative bg-gray-900/50 p-6 rounded-xl">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <input className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400" placeholder="Your company" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 h-24" placeholder="Tell us about your needs..."></textarea>
                    </div>
                    <div className="relative w-full h-12">
                      <ShapeBlur
                        variation={0}
                        shapeSize={1.0}
                        roundness={0.5}
                        borderSize={0.005}
                        circleEdge={1.0}
                        className="rounded-lg"
                      />
                      <Button className="absolute inset-0 w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-lg z-10">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
