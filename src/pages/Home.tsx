
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Users, TrendingUp } from "lucide-react";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full">
                <Zap className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm font-medium text-purple-300">Real-Time CDP Powered by AI</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Unify Customer Data.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Activate in Real-Time.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-purple-200 leading-relaxed max-w-2xl">
                <span className="text-red-300">NucleasAI</span> is a real-time CDP that collects, unifies, and activates customer data instantly — 
                <span className="text-orange-300"> powered by AI</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 hover:from-orange-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Join Waitlist
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">< 100ms</div>
                  <div className="text-sm text-gray-400">Activation Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">200+</div>
                  <div className="text-sm text-gray-400">Integrations</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl"></div>
              
              {/* Dashboard Placeholder */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Real-Time Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400">Live</span>
                    </div>
                  </div>

                  {/* Mock Data Bars */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Data Ingestion</span>
                        <span className="text-purple-400">2.3M events/min</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Identity Resolution</span>
                        <span className="text-orange-400">94% match rate</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-5/6 animate-pulse delay-500"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Activation Speed</span>
                        <span className="text-pink-400">< 50ms avg</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full w-11/12 animate-pulse delay-1000"></div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Charts */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">Active Users</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">1.2M</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-gray-300">Conversions</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-400">+23%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-8">Trusted by forward-thinking companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-12 bg-gray-700/30 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
