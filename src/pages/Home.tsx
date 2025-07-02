import { HeroFuturistic } from "@/components/ui/hero-futuristic";
// import { InteractiveDashboard } from "@/components/ui/interactive-dashboard";
import { ContactForm } from "@/components/ui/contact-form";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { ProductSection } from "@/components/sections/product-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import AboutSection from "@/components/sections/about-section";
import { motion } from "framer-motion";
import { Home as HomeIcon, Package, Settings, User, Mail, MapPin } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React, { Suspense, useEffect, useRef, useState } from "react";

const InteractiveDashboard = React.lazy(() => import("@/components/ui/interactive-dashboard").then(module => ({ default: module.InteractiveDashboard })));
const FAQSection = React.lazy(() => import('@/components/ui/FAQSection').then(module => ({ default: module.FAQSection })));
// @ts-ignore
const Dashboard = React.lazy(() => import("@/components/Dashboard").then(module => ({ default: module.default || module.Dashboard })));
const TestimonialsWithMarquee = React.lazy(() => import("@/components/ui/testimonials-with-marquee"));

const Home = () => {
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

  const [showDashboard, setShowDashboard] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [showFAQ, setShowFAQ] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const [showAbout, setShowAbout] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [showSolutions, setShowSolutions] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDashboard(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const obsFAQ = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFAQ(true);
          obsFAQ.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (faqRef.current) {
      obsFAQ.observe(faqRef.current);
    }
    return () => {
      obsFAQ.disconnect();
    };
  }, []);

  useEffect(() => {
    const obsAbout = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAbout(true);
          obsAbout.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (aboutRef.current) {
      obsAbout.observe(aboutRef.current);
    }
    const obsSolutions = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSolutions(true);
          obsSolutions.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (solutionsRef.current) {
      obsSolutions.observe(solutionsRef.current);
    }
    return () => {
      obsAbout.disconnect();
      obsSolutions.disconnect();
    };
  }, []);

  // Delay analytics scripts
  useEffect(() => {
    setTimeout(() => {
      if (location.hostname === "nucleasai.com") {
        // Microsoft Clarity
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/CLARITY_ID_PLACEHOLDER";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "CLARITY_ID_PLACEHOLDER");
        // Hotjar
        if (import.meta.env.PROD && window.location.protocol === 'https:') {
          // @ts-ignore
          (function(h,o,t,j,a,r){
            // @ts-ignore
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            // @ts-ignore
            h._hjSettings={hjid: 123456, hjsv: 6};
            a=o.getElementsByTagName("head")[0];
            r=o.createElement("script");r.async=1;
            // @ts-ignore
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv=");
        }
      }
    }, 3000);
  }, []);

  return (
    <>
      <Helmet>
      <title>NucleasAI | AI-Native CDP | Real-time Customer Data Platform</title>
        <meta name="description" content="NucleasAI is the leading AI-native CDP for real-time customer data activation. Unify, analyze, and activate customer insights instantly with AI agents for data activation, identity resolution, and more." />
        <link rel="canonical" href="https://nucleasai.com/" />
        <meta name="keywords" content="AI-native CDP, real-time customer data platform, AI agents, data activation, customer intelligence, identity resolution" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI-Native CDP | Real-time Customer Data Platform | NucleasAI" />
        <meta property="og:description" content="NucleasAI is the leading AI-native CDP for real-time customer data activation. Unify, analyze, and activate customer insights instantly with AI agents for data activation, identity resolution, and more." />
        <meta property="og:url" content="https://nucleasai.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nucleasai.com/og-image.png" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Native CDP | Real-time Customer Data Platform | NucleasAI" />
        <meta name="twitter:description" content="NucleasAI is the leading AI-native CDP for real-time customer data activation. Unify, analyze, and activate customer insights instantly with AI agents for data activation, identity resolution, and more." />
        <meta name="twitter:image" content="https://nucleasai.com/og-image.png" />
        <meta name="twitter:site" content="@nucleasai" />
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
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white" style={{ scrollBehavior: 'smooth' }}>
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
                      The Nucleus Of<br />Customer Intelligence
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
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[640px] aspect-square z-10">
              <img
                src="/hero-section.webp"
                srcSet="
                  /hero-section-small.webp 320w,
                  /hero-section.webp 640w
                "
                sizes="(max-width: 640px) 320px, 640px"
                alt="Globe"
                width="640"
                height="640"
                className="w-full h-auto object-contain"
                fetchPriority="high"
                decoding="async"
                loading="eager"
                style={{ display: 'block' }}
              />
            </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <ProductSection />

        {/* Interactive Dashboard Section */}
        <section id="dashboard" className="bg-zinc-50 dark:bg-gray-900/30 relative">
          {/* Light mode overlay for better text contrast */}
          <div className="absolute inset-0 bg-white/80 dark:bg-transparent pointer-events-none"></div>
          <div className="relative z-10" ref={dashboardRef}>
            {showDashboard ? (
              <Suspense fallback={<div className="text-center py-12 text-lg text-zinc-500 dark:text-zinc-300">Loading dashboard...</div>}>
                <InteractiveDashboard />
              </Suspense>
            ) : (
              <div style={{ minHeight: 600 }} className="w-full flex items-center justify-center">
                <div className="text-center py-12 text-lg text-zinc-500 dark:text-zinc-300">Loading dashboard...</div>
              </div>
            )}
          </div>
        </section>

        {/* Solutions Section */}
        <div ref={solutionsRef}>
          {showSolutions ? (
            <Suspense fallback={<div className="text-center py-12 text-lg text-zinc-500 dark:text-zinc-300">Loading solutions...</div>}>
              <SolutionsSection />
            </Suspense>
          ) : (
            <div style={{ minHeight: 600 }} />
          )}
        </div>

        {/* About Section */}
        <div ref={aboutRef}>
          {showAbout ? (
            <Suspense fallback={<div className="text-center py-12 text-lg text-zinc-500 dark:text-zinc-300">Loading about...</div>}>
              <AboutSection />
            </Suspense>
          ) : (
            <div style={{ minHeight: 600 }} />
          )}
        </div>

        {/* FAQ Section - added just before Get in Touch */}
        <div ref={faqRef}>
          {showFAQ ? (
            <Suspense fallback={<div className="text-center py-12 text-lg text-zinc-500 dark:text-zinc-300">Loading FAQs...</div>}>
              <FAQSection />
            </Suspense>
          ) : (
            <div style={{ minHeight: 300 }} />
          )}
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to unlock the power of first-party customer data with a real-time CDP? Discover how NucleasAI's AI churn prediction and identity resolution can transform your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Waitlist CTA Section */}
                <div className="mb-6 p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-700 via-purple-600 to-blue-700 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="text-3xl sm:text-4xl">🚀</span>
                  <div>
                    <div className="font-bold text-white text-lg sm:text-xl mb-1">Join our exclusive waitlist</div>
                    <div className="text-white/90 text-base sm:text-lg">
                      Secure early access to <span className="font-semibold">NucleasAI</span> — the real-time, AI-native CDP ecosystem. Be among the first to experience autonomous customer intelligence and next-gen data activation.
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Let's Connect</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
                    Discover how our AI-native CDP ecosystem empowers you with real-time, autonomous customer intelligence.<br />
                    Reach out to us for questions, demos, or partnership opportunities.
                  </p>
                  {/* Email Block */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-base">Email</div>
                      <a
                        href="mailto:hello@nucleasai.com"
                        className="font-bold text-gray-900 dark:text-white underline hover:text-purple-300 transition-colors text-base"
                      >
                        hello@nucleasai.com
                      </a>
                    </div>
                  </div>
                  {/* Location Block */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-base">Location</div>
                      <div className="text-gray-700 dark:text-gray-200 text-base">Pune, Maharashtra, India</div>
                    </div>
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
    </>
  );
};

export default Home;
