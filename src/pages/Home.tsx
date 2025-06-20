
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Database, Zap, Target, BarChart3, Shield, Rocket, Play } from "lucide-react";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  Unify Customer Data.
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Activate in Real-Time.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                NucleasAI is a real-time CDP that collects, unifies, and activates customer data instantly — powered by AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-10 py-6 h-auto font-semibold shadow-2xl shadow-indigo-500/25">
                  Request Demo
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 text-lg px-10 py-6 h-auto font-semibold backdrop-blur-sm">
                  <Play className="mr-3 h-5 w-5" />
                  Join Waitlist
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>1,000+ companies on waitlist</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span>Sub-second data activation</span>
                </div>
              </div>
            </div>

            {/* Right Column - Product Visual Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl"></div>
                <div className="relative">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-full border border-gray-600/50 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Live Dashboard Preview</span>
                    </div>
                  </div>
                  
                  {/* Dashboard Mockup */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-600/30">
                        <div className="text-xs text-gray-400 mb-2">Active Users</div>
                        <div className="text-2xl font-bold text-white">24,789</div>
                        <div className="text-xs text-green-400">+12.3%</div>
                      </div>
                      <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-600/30">
                        <div className="text-xs text-gray-400 mb-2">Events/sec</div>
                        <div className="text-2xl font-bold text-white">1,847</div>
                        <div className="text-xs text-indigo-400">Real-time</div>
                      </div>
                      <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-600/30">
                        <div className="text-xs text-gray-400 mb-2">Profiles</div>
                        <div className="text-2xl font-bold text-white">2.1M</div>
                        <div className="text-xs text-purple-400">Unified</div>
                      </div>
                    </div>
                    
                    {/* Chart placeholder */}
                    <div className="bg-gray-800/60 rounded-lg p-6 border border-gray-600/30">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-300">Customer Journey Flow</div>
                        <div className="text-xs text-gray-500">Last 24h</div>
                      </div>
                      <div className="h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-end justify-center">
                        <div className="text-xs text-gray-400 pb-4">Interactive Analytics Coming Soon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                customer success
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From data collection to real-time activation, we've built the most comprehensive CDP for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Unified Data Collection",
                description: "Collect data from every touchpoint with our comprehensive SDKs and APIs. Real-time streaming with 99.9% uptime."
              },
              {
                icon: Target,
                title: "Identity Resolution",
                description: "Advanced ML algorithms create unified customer profiles across devices and channels with 95% accuracy."
              },
              {
                icon: Zap,
                title: "Real-time Activation",
                description: "Activate insights instantly across 200+ marketing tools and platforms. Sub-second latency guaranteed."
              },
              {
                icon: BarChart3,
                title: "AI-Powered Analytics",
                description: "Get predictive insights and automated recommendations that drive revenue growth and retention."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2 compliant with end-to-end encryption. Your data is secure and compliant with global regulations."
              },
              {
                icon: Rocket,
                title: "Scale Without Limits",
                description: "Handle billions of events per day with auto-scaling infrastructure that grows with your business."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your customer data?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our waitlist and be among the first to experience the future of customer data platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 whitespace-nowrap">
                Join Waitlist
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              We'll notify you when we launch. No spam, ever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
