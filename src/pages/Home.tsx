
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Users, TrendingUp, Home, Package, Target, DollarSign, Info, Mail } from "lucide-react";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

const HomePage = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Product', url: '#product', icon: Package },
    { name: 'Solutions', url: '#solutions', icon: Target },
    { name: 'Pricing', url: '#pricing', icon: DollarSign },
    { name: 'About', url: '#about', icon: Info },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return (
    <div className="bg-black text-white">
      <TubelightNavBar items={navItems} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <HeroFuturistic />
      </section>

      {/* Product Section */}
      <section id="product" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GooeyText
              texts={["Real-Time", "Data", "Platform", "AI-Powered"]}
              className="mb-8 h-32"
              textClassName="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              NucleasAI sits at the center of your data ecosystem, unifying customer touchpoints 
              and activating insights in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Real-Time Data Ingestion",
                    desc: "Collect and process customer data instantly from all touchpoints"
                  },
                  {
                    title: "AI-Powered Identity Resolution", 
                    desc: "Merge anonymous and known users with advanced machine learning"
                  },
                  {
                    title: "Smart Segmentation",
                    desc: "Create dynamic audience segments based on behavior and traits"
                  },
                  {
                    title: "Predictive Analytics",
                    desc: "Score customers for LTV, churn risk, and conversion probability"
                  }
                ].map((feature, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <CpuArchitecture 
                  width="400px" 
                  height="200px"
                  text="CDP"
                  className="text-purple-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored for modern businesses across every sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Companies",
                problem: "Siloed user data slows product growth",
                solution: "Unify product, CRM, and behavior data in real time",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "D2C Brands", 
                problem: "Hard to personalize without unified identity",
                solution: "Power tailored journeys with first-party data",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "FinTech Firms",
                problem: "Risk, fraud, and conversion are disconnected", 
                solution: "Activate behavioral data instantly with smart triggers",
                color: "from-pink-500 to-purple-500"
              }
            ].map((solution, index) => (
              <div key={index} className={`bg-gradient-to-br ${solution.color} p-8 rounded-2xl`}>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-200 mb-2">Challenge:</p>
                    <p className="text-white">{solution.problem}</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-200 mb-2">Solution:</p>
                    <p className="text-white">{solution.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Early Access Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Join the beta and shape the future of customer data platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Startup",
                price: "Free",
                desc: "Perfect for early-stage companies",
                features: ["Up to 10K events/month", "Basic identity resolution", "Core integrations", "Community support"],
                highlight: false
              },
              {
                name: "Growth", 
                price: "Coming Soon",
                desc: "For scaling businesses",
                features: ["Unlimited events", "Advanced AI features", "Premium integrations", "Priority support"],
                highlight: true
              },
              {
                name: "Enterprise",
                price: "Contact Us", 
                desc: "For large organizations",
                features: ["Custom deployment", "Dedicated support", "Advanced security", "Custom integrations"],
                highlight: false
              }
            ].map((plan, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${plan.highlight ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700 bg-gray-900/50'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Zap className="w-4 h-4 text-purple-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.highlight ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-700'}`}>
                  {plan.name === "Enterprise"? "Contact Sales" : "Join Beta"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-8">
            Our Mission
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're building the next-generation real-time CDP powered by AI — so every team can 
            unify their customer data, activate insights instantly, and deliver smarter user experiences.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300">
              Ready to transform your customer data? Let's talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
                <p className="text-gray-400 mb-6">
                  Join our beta program and be among the first to experience the future of customer data platforms.
                </p>
                <div className="space-y-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                    <Play className="mr-2 h-5 w-5" />
                    Join Beta Program
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
              <div className="space-y-6">
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
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
