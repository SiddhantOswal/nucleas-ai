
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Database, Zap, Target, BarChart3, Shield, Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Real-time Customer Data Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Unify, analyze, and activate your customer data instantly. Built for modern teams who need speed, accuracy, and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4">
                Join Waitlist
              </Button>
            </div>
            <p className="text-gray-400 text-sm">
              Join 1,000+ companies already on the waitlist
            </p>
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
