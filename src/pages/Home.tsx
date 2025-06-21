
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Link, Database, Brain, Shuffle, Clock, ShoppingBag, 
         GraduationCap, Palette, MapPin, Check, Home, Package, Target, 
         CreditCard, Info, Mail, Bot, Users, Briefcase } from "lucide-react";
import { Globe } from "@/components/ui/globe";
import { GooeyText } from "@/components/ui/gooey-text-morphing";  
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Component as ShapeBlur } from "@/components/ui/shapeblur";
import { Footer } from "@/components/layout/Footer";
import { DashboardDemo } from "@/components/ui/dashboard-demo";
import { GradientCard } from "@/components/ui/gradient-card";
import { TestimonialCards } from "@/components/ui/testimonial-cards";
import { ContactForm } from "@/components/ui/contact-form";

const HomePage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const navItems = useMemo(() => [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Product', url: '#product', icon: Package },
    { name: 'Solutions', url: '#solutions', icon: Target },
    { name: 'Pricing', url: '#pricing', icon: CreditCard },
    { name: 'About', url: '#about', icon: Info },
    { name: 'Contact', url: '#contact', icon: Mail }
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
    },
    {
      icon: <Bot className="w-6 h-6 text-cyan-500" />,
      title: "AI Agents Service",
      description: "Deploy intelligent agents for automated customer interactions and lead qualification."
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
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
      title: "Agencies",
      description: "Manage campaigns across clients, automate reporting, and drive results with unified insights.",
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
      subtitle: "Early startups, devs",
      price: "₹0",
      features: [
        "500 links/mo, 1 domain",
        "5,000 sessions/mo",
        "1,000 contacts",
        "3 playbooks/month",
        "No personalization",
        "Basic UTM, webhook export",
        "Email only"
      ],
      highlight: false,
      buttonText: "Get Started Free"
    },
    {
      name: "Growth", 
      subtitle: "Scaling startups, growth teams",
      price: "Starts at ₹4,999",
      features: [
        "10,000 links, 3 domains",
        "100,000 events/mo",
        "50,000 contacts",
        "25+ playbooks + scheduling",
        "Rule-based personalization",
        "CRM, Zapier, Google Sheets",
        "Chat + Email"
      ],
      highlight: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Pro",
      subtitle: "Mature teams, agencies",
      price: "Starts at ₹19,999",
      features: [
        "Unlimited links, 10+ domains",
        "1 Million events/mo",
        "500,000 contacts",
        "Unlimited playbooks + APIs",
        "AI based personalization",
        "Advanced APIs, CDP sync",
        "Dedicated CSM"
      ],
      highlight: false,
      buttonText: "Contact Sales"
    },
    {
      name: "Enterprise",
      subtitle: "Large orgs, industries",
      price: "Custom pricing",
      features: [
        "Unlimited + dedicated routing",
        "Custom scale as per requirement",
        "1 Million+ contacts",
        "Custom models & AI tuning",
        "AI based personalization",
        "Enterprise APIs, SSO, audit logs",
        "Account Manager"
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
                See NuclausAI in Action
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
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <article key={index} className={`relative ${plan.highlight ? 'md:scale-105' : ''}`}>
                  <div className="relative p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-300 group h-full flex flex-col">
                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{plan.subtitle}</p>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                        {plan.price}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <div className="mt-6">
                      <Button className={`w-full ${plan.highlight 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}>
                        {plan.buttonText}
                      </Button>
                    </div>
                  </div>
                  
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
            
            <TestimonialCards testimonials={testimonials} />
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

              <ContactForm />
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
