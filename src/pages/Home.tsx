
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Link, Database, Brain, Shuffle, Clock, ShoppingBag, 
         GraduationCap, Palette, MapPin, Check } from "lucide-react";
import { Globe } from "@/components/ui/globe";
import { GooeyText } from "@/components/ui/gooey-text-morphing";  
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Component as ShapeBlur } from "@/components/ui/shapeblur";
import { Footer } from "@/components/layout/Footer";
import { DashboardDemo } from "@/components/ui/dashboard-demo";
import { GradientCard } from "@/components/ui/gradient-card";

const HomePage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const navItems = useMemo(() => [
    { name: 'Home', url: '#home', icon: () => <div className="w-4 h-4 bg-blue-500 rounded"></div> },
    { name: 'Product', url: '#product', icon: () => <div className="w-4 h-4 bg-green-500 rounded"></div> },
    { name: 'Solutions', url: '#solutions', icon: () => <div className="w-4 h-4 bg-purple-500 rounded"></div> },
    { name: 'Pricing', url: '#pricing', icon: () => <div className="w-4 h-4 bg-orange-500 rounded"></div> },
    { name: 'About', url: '#about', icon: () => <div className="w-4 h-4 bg-pink-500 rounded"></div> },
    { name: 'Contact', url: '#contact', icon: () => <div className="w-4 h-4 bg-red-500 rounded"></div> }
  ], []);

  const productFeatures = useMemo(() => [
    {
      icon: <Activity className="w-6 h-6 text-purple-500" />,
      title: "Pixel Tracker",
      description: "Track UTM parameters, sessions, and events across all touchpoints with sub-second latency."
    },
    {
      icon: <Link className="w-6 h-6 text-blue-500" />,
      title: "Smart Redirect Engine", 
      description: "Intelligent routing based on geography, device type, and campaign parameters."
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: "Real-Time CDP",
      description: "Event ingestion and identity resolution powered by advanced machine learning algorithms."
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-500" />,
      title: "Analytics & AI Insights",
      description: "ML-powered segmentation with GPT-driven insights and predictive analytics."
    },
    {
      icon: <Shuffle className="w-6 h-6 text-orange-500" />,
      title: "CRM & Ad Integrations",
      description: "Seamlessly connect with Google Sheets, Zapier, Meta Ads, and 50+ other platforms."
    }
  ], []);

  const solutions = useMemo(() => [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "SaaS & Startups",
      description: "Reduce CAC and improve retention with unified customer insights and behavioral analytics.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
      title: "D2C & E-commerce", 
      description: "Track campaigns, segment audiences, and personalize offers to maximize conversion rates.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      title: "EdTech",
      description: "Understand learner behavior, optimize onboarding experiences, and reduce churn effectively.",
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      title: "Creator Tools",
      description: "Track link performance, automate outreach campaigns, and segment by user behavior.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      title: "Regional Brands",
      description: "Smart routing by location and language with comprehensive local campaign analytics.",
    }
  ], []);

  const testimonials = useMemo(() => [
    {
      name: "Arjun Mehta",
      title: "Growth Lead at D2CTech",
      quote: "NucleasAI helps us cut campaign spend by 32% while boosting lead quality. The smart redirect rules are brilliant.",
      avatar: "AM"
    },
    {
      name: "Sarah Nair",
      title: "Founder, EduLaunch",
      quote: "Personalized link routing and UTM tracking simplified our student onboarding flow. Love the dashboard insights.",
      avatar: "SN"
    },
    {
      name: "Deepak Reddy",
      title: "CTO, Finlytix",
      quote: "The behavioral pixel and lead enrichment from NucleasAI is miles ahead of anything we've used before.",
      avatar: "DR"
    }
  ], []);

  const pricingPlans = useMemo(() => [
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
  ], []);

  return (
    <>
      <TubelightNavBar items={navItems} />
      
      <main className="bg-white dark:bg-black text-black dark:text-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent dark:from-purple-900/20 dark:via-blue-900/20 dark:to-transparent">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <GooeyText
                texts={["NucleasAI", "Real-Time", "Data Hub", "AI-Powered"]}
                className="mb-6 h-24"
                textClassName="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-8 leading-relaxed">
              The nucleus of your customer data universe.
              <br />
              <span className="text-purple-600 dark:text-purple-400">Collect, unify, and activate in real-time.</span>
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
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Globe Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-30">
            <Globe className="max-w-[800px]" />
          </div>
        </section>

        {/* Dashboard Demo Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                See NucleasAI in Action
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience our real-time customer data platform through an interactive preview
              </p>
            </div>
            
            <div className="flex justify-center">
              <DashboardDemo />
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                All-in-One AI-Powered Customer Data Platform
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Collect, unify, and activate customer data in real-time across web, mobile, and marketing channels.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productFeatures.map((feature, index) => (
                <GradientCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  linkLabel="Learn more"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Built for Growth Teams Across Industries
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Tailored solutions for modern businesses in every sector
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <GradientCard
                  key={index}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Start free. Scale when you grow.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Toggle billing cycle"
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 bg-white dark:bg-gray-200 rounded-full transition-transform ${billingCycle === 'yearly' ? 'translate-x-7' : ''}`} />
                </button>
                <span className={`${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  Yearly <span className="text-green-500 text-sm">(Save 20%)</span>
                </span>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <article key={index} className={`relative ${plan.highlight ? 'scale-105' : ''}`}>
                  <GradientCard
                    icon={<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>}
                    title={plan.name}
                    description={
                      <div className="space-y-4">
                        <div>
                          <span className="text-4xl font-bold text-gray-900 dark:text-white">
                            {plan.price[billingCycle] === 'Custom' ? 'Custom' : `$${plan.price[billingCycle]}`}
                          </span>
                          {plan.price[billingCycle] !== 'Custom' && plan.price[billingCycle] !== '0' && (
                            <span className="text-gray-500 dark:text-gray-400 text-lg">/month</span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                              <Check className="w-4 h-4 text-green-500 mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                    linkLabel={plan.buttonText}
                  />
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
          <div className="max-w-7xl mx-auto text-center">
            <header>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-8">
                Built by Engineers Obsessed with Data
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
                We're a small team with deep experience in CDPs, identity graphs, and AI — on a mission to simplify real-time customer data for everyone.
              </p>
            </header>
            
            <div className="mb-12">
              <blockquote className="text-xl text-purple-600 dark:text-purple-400 font-medium">
                "We believe AI-powered data platforms should be easy to use, privacy-first, and deeply actionable."
              </blockquote>
            </div>
            
            <div className="flex justify-center gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <GradientCard
                  key={index}
                  icon={<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>}
                  title={testimonial.name}
                  description={
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{testimonial.title}</p>
                      <p className="italic text-gray-700 dark:text-gray-200">"{testimonial.quote}"</p>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ready to transform your customer data? Let's talk.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to get started?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
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

              <GradientCard
                icon={<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>}
                title="Contact Form"
                description={
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                      <input className="w-full p-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input className="w-full p-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                      <input className="w-full p-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm" placeholder="Your company" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                      <textarea className="w-full p-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm h-24" placeholder="Tell us about your needs..."></textarea>
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
                }
              />
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
