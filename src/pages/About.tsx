
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Customer-First",
      description: "Every decision we make is guided by what's best for our customers and their success."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We push the boundaries of what's possible with data and AI to create breakthrough solutions."
    },
    {
      icon: Users,
      title: "Transparency",
      description: "We believe in open communication, clear pricing, and honest partnerships with our customers."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Data at Segment, 10+ years building customer data infrastructure.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-Founder",
      bio: "Ex-Senior Engineer at Snowflake, expert in real-time data processing and ML.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Former Product Lead at Adobe, specialized in enterprise data platforms.",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Watson",
      role: "VP of Engineering",
      bio: "Previously Staff Engineer at Stripe, focused on scalable data infrastructure.",
      image: "/placeholder.svg"
    }
  ];

  const investors = [
    "Accel Partners",
    "First Round Capital",
    "Y Combinator",
    "Kleiner Perkins",
    "Andreessen Horowitz"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Customer Data
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We're on a mission to democratize access to real-time customer intelligence, 
              empowering every business to deliver personalized experiences at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Customer data is the most valuable asset for modern businesses, yet most companies struggle 
              to unlock its full potential. We're changing that by building the most advanced, 
              accessible, and reliable customer data platform ever created.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 text-center">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team combines deep expertise in data infrastructure, machine learning, 
              and product development from leading technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Backed by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Top Investors
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            We're proud to be supported by some of the world's leading venture capital firms.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {investors.map((investor, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 w-full h-20 flex items-center justify-center">
                  <span className="text-gray-300 font-medium text-sm text-center">{investor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              NucleasAI was born from our frustration with existing customer data platforms. 
              Having built data infrastructure at companies like Segment, Snowflake, and Adobe, 
              we saw firsthand how complex, expensive, and unreliable these systems could be.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We knew there had to be a better way – a platform that was fast, reliable, 
              easy to use, and accessible to companies of all sizes. So we set out to build it.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Today, we're creating the next generation of customer data infrastructure, 
              powered by advanced AI and built for the modern cloud. Our platform processes 
              billions of events with sub-second latency while maintaining 99.9% uptime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join us on our mission
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Whether you're looking to transform your customer data strategy or want to be part of our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
