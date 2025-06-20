
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Target, Zap, BarChart3, Shield, Settings, ArrowRight } from "lucide-react";

const Product = () => {
  const features = [
    {
      icon: Database,
      title: "Data Collection & Ingestion",
      description: "Comprehensive data collection from web, mobile, server-side, and third-party sources.",
      capabilities: [
        "JavaScript & Mobile SDKs",
        "Server-side APIs (REST & GraphQL)",
        "Real-time streaming ingestion",
        "Batch data imports",
        "Third-party connector library"
      ],
      badge: "Core"
    },
    {
      icon: Target,
      title: "Identity Resolution",
      description: "Advanced machine learning algorithms to create unified customer profiles.",
      capabilities: [
        "Cross-device identity matching",
        "Probabilistic & deterministic matching",
        "Anonymous visitor tracking",
        "Profile merging & deduplication",
        "Custom identity rules"
      ],
      badge: "AI-Powered"
    },
    {
      icon: Zap,
      title: "Real-time Activation",
      description: "Instantly activate customer insights across your entire marketing stack.",
      capabilities: [
        "200+ pre-built integrations",
        "Sub-second activation latency",
        "Event-triggered workflows",
        "Custom webhook destinations",
        "API-first architecture"
      ],
      badge: "Real-time"
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "Advanced analytics and predictive modeling for customer intelligence.",
      capabilities: [
        "Predictive customer scoring",
        "Churn prediction models",
        "Behavioral segmentation",
        "Custom analytics dashboards",
        "Automated insights & alerts"
      ],
      badge: "Analytics"
    },
    {
      icon: Shield,
      title: "Privacy & Compliance",
      description: "Enterprise-grade security and compliance features built from the ground up.",
      capabilities: [
        "GDPR & CCPA compliance",
        "Consent management",
        "Data retention policies",
        "PII encryption & tokenization",
        "Audit logs & monitoring"
      ],
      badge: "Enterprise"
    },
    {
      icon: Settings,
      title: "Data Governance",
      description: "Complete control over your data with advanced governance and quality tools.",
      capabilities: [
        "Data validation & quality checks",
        "Schema management",
        "Data lineage tracking",
        "Custom transformation rules",
        "Multi-environment support"
      ],
      badge: "Governance"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Complete{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                CDP Solution
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Everything you need to collect, unify, analyze, and activate your customer data in real-time. 
              Built for scale, designed for speed.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <feature.icon className="h-10 w-10 text-purple-400" />
                    <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-800">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Modern Scale
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cloud-native architecture handles billions of events with sub-second latency, 
              99.9% uptime, and automatic scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "99.9% Uptime",
                description: "Enterprise-grade reliability with multi-region failover and automatic recovery.",
                metric: "SLA Guaranteed"
              },
              {
                title: "< 100ms Latency",
                description: "Sub-second data processing and activation across all integrations.",
                metric: "Real-time Performance"
              },
              {
                title: "Billions of Events",
                description: "Auto-scaling infrastructure that grows with your business needs.",
                metric: "Infinite Scale"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{item.metric}</p>
                  <p className="text-gray-400">{item.description}</p>
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
              Ready to see NucleasAI in action?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Book a personalized demo and discover how our CDP can transform your customer data strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
