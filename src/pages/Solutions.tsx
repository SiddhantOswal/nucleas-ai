import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Briefcase, CreditCard, GraduationCap, Users, ArrowRight } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Solutions = () => {
  const solutions = [
    {
      icon: Briefcase,
      title: "SaaS Companies",
      description: "Optimize user onboarding, reduce churn, and accelerate product-led growth.",
      challenges: [
        "Complex user journey tracking",
        "Product adoption analysis",
        "Churn prediction & prevention",
        "Feature usage optimization"
      ],
      benefits: [
        "Increase trial-to-paid conversion by 35%",
        "Reduce churn rate by 25%",
        "Improve product adoption scores",
        "Accelerate time-to-value"
      ],
      badge: "Popular",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: ShoppingCart,
      title: "D2C & E-commerce",
      description: "Drive revenue growth with personalized experiences and predictive analytics.",
      challenges: [
        "Cross-channel customer tracking",
        "Personalization at scale",
        "Cart abandonment recovery",
        "Customer lifetime value optimization"
      ],
      benefits: [
        "Boost conversion rates by 40%",
        "Increase average order value by 30%",
        "Improve customer retention",
        "Reduce acquisition costs"
      ],
      badge: "High ROI",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: CreditCard,
      title: "Fintech",
      description: "Enhance security, compliance, and customer experience in financial services.",
      challenges: [
        "Regulatory compliance (PCI, SOX)",
        "Fraud detection & prevention",
        "Customer risk assessment",
        "Real-time transaction monitoring"
      ],
      benefits: [
        "Reduce fraud by 50%",
        "Improve compliance reporting",
        "Enhance risk assessment accuracy",
        "Accelerate customer onboarding"
      ],
      badge: "Secure",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Improve learning outcomes and student engagement through data-driven insights.",
      challenges: [
        "Student engagement tracking",
        "Learning outcome optimization",
        "Personalized learning paths",
        "Retention & completion rates"
      ],
      benefits: [
        "Increase course completion by 45%",
        "Improve learning outcomes",
        "Reduce student churn",
        "Personalize learning experiences"
      ],
      badge: "Impact",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Agencies",
      description: "Deliver exceptional results for clients with unified data and advanced analytics.",
      challenges: [
        "Multi-client data management",
        "Campaign performance tracking",
        "Client reporting automation",
        "Attribution modeling"
      ],
      benefits: [
        "Improve campaign ROI by 60%",
        "Automate client reporting",
        "Better attribution insights",
        "Scale client operations"
      ],
      badge: "Scale",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions | AI-Native CDP Use Cases | Real-time Customer Data Platform | NucleasAI</title>
        <meta name="description" content="Discover NucleasAI's AI-native CDP solutions for SaaS, D2C, fintech, and more. Real-time customer data activation, industry use cases, and AI-powered insights." />
        <link rel="canonical" href="https://nucleasai.com/solutions" />
        <meta name="keywords" content="AI-native CDP solutions, real-time customer data platform, industry use cases, data activation, SaaS, D2C, fintech" />
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://nucleasai.com/"},
              {"@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://nucleasai.com/solutions"}
            ]
          }
        `}</script>
        {/* Service structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NucleasAI Solutions",
            "description": "AI-native CDP solutions for real-time customer data activation and industry use cases.",
            "provider": {"@type": "Organization", "name": "NucleasAI"},
            "url": "https://nucleasai.com/solutions"
          }
        `}</script>
      </Helmet>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Solutions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Solutions for{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                From SaaS to fintech, discover how NucleasAI transforms customer data into competitive advantage 
                across different industries and use cases.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${solution.color}`}>
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-800">
                        {solution.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-semibold text-white mb-2">
                      {solution.title}
                    </CardTitle>
                    <p className="text-gray-400">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Key Challenges</h4>
                        <ul className="space-y-2">
                          {solution.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-start text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Proven Results Across{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Industries
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: "45%", label: "Average Revenue Increase", description: "Companies see significant growth within 6 months" },
                { metric: "30%", label: "Reduction in Churn", description: "Predictive analytics prevent customer loss" },
                { metric: "60%", label: "Faster Data Activation", description: "Real-time insights drive immediate action" },
                { metric: "99.9%", label: "Platform Uptime", description: "Enterprise-grade reliability you can trust" }
              ].map((stat, index) => (
                <Card key={index} className="bg-gray-800/30 border-gray-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                      {stat.metric}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{stat.label}</h3>
                    <p className="text-sm text-gray-400">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-12 rounded-2xl border border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your industry?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                See how NucleasAI can solve your specific challenges and drive measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Request Industry Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Solutions;
