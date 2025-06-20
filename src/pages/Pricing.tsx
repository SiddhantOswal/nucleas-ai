
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Contact Sales",
      description: "Perfect for growing teams getting started with customer data",
      features: [
        "Up to 1M events/month",
        "5 data sources",
        "Basic identity resolution",
        "10 destinations",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false,
      available: false
    },
    {
      name: "Professional",
      price: "Contact Sales",
      description: "Advanced features for scaling businesses",
      features: [
        "Up to 10M events/month",
        "Unlimited data sources",
        "Advanced identity resolution",
        "50+ destinations",
        "Priority support",
        "Custom audiences",
        "Predictive analytics",
        "API access"
      ],
      popular: true,
      available: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-scale solution for large organizations",
      features: [
        "Unlimited events",
        "Custom integrations",
        "Advanced security & compliance",
        "Dedicated customer success",
        "SLA guarantees",
        "Custom ML models",
        "Multi-region deployment",
        "White-label options"
      ],
      popular: false,
      available: false
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
              Simple,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Choose the plan that scales with your business. All plans include our core CDP features 
              with transparent pricing based on your usage.
            </p>
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-300 font-semibold mb-2">🎉 Early Access Pricing</p>
              <p className="text-blue-200 text-sm">
                Join our waitlist now and get 50% off your first year when we launch!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 ${plan.popular ? 'border-purple-500/50 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-400 text-lg">/month</span>
                    )}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    }`}
                    disabled={!plan.available}
                  >
                    {plan.available ? 'Get Started' : 'Join Waitlist'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What counts as an event?",
                answer: "An event is any customer interaction tracked through our platform - page views, clicks, purchases, API calls, etc."
              },
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 14-day free trial for all plans so you can test our platform with your real data."
              },
              {
                question: "What about data security?",
                answer: "We're SOC 2 Type II compliant with enterprise-grade security, encryption, and compliance features included in all plans."
              },
              {
                question: "Do you offer custom integrations?",
                answer: "Yes, our Enterprise plan includes custom integrations and dedicated engineering support for your specific needs."
              },
              {
                question: "What's included in support?",
                answer: "All plans include comprehensive documentation, community support, and email support. Higher plans include priority and phone support."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{faq.answer}</p>
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
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our waitlist today and be the first to experience the future of customer data platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Join Waitlist - 50% Off
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Request Enterprise Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
