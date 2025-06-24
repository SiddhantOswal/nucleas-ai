
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "FREE",
      subtitle: "Perfect for getting started",
      price: "$0",
      period: "/month",
      features: [
        "Up to 1,000 tracked events",
        "Basic link shortening",
        "Simple redirect tracking",
        "Email support",
        "Basic analytics dashboard"
      ]
    },
    {
      name: "GROWTH",
      subtitle: "For scaling businesses",
      price: "$49",
      period: "/month",
      popular: true,
      features: [
        "Up to 50,000 tracked events",
        "Advanced redirect patterns",
        "Customer journey mapping",
        "AI-powered insights",
        "Email & chat support",
        "Custom domains",
        "API access"
      ]
    },
    {
      name: "PRO",
      subtitle: "For data-driven teams",
      price: "$149",
      period: "/month",
      features: [
        "Unlimited tracked events",
        "Full CDP capabilities",
        "AI Agents & automation",
        "Advanced segmentation",
        "Priority support",
        "White-label options",
        "Custom integrations",
        "Dedicated success manager"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Choose the plan that scales with your business. All plans include our core features 
            with transparent pricing based on your usage.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`relative h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 ${plan.popular ? 'border-purple-500/50 scale-105' : ''}`}>
                {/* Gradient Header Bar */}
                <div className={`h-2 w-full rounded-t-lg ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-blue-500' : 'bg-gradient-to-r from-gray-600 to-gray-500'}`}></div>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col h-full">
                  <ul className="space-y-4 mb-8 flex-1">
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
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm text-center shadow-lg shadow-purple-500/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Need Enterprise-scale solutions?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contact us for custom pricing, advanced AI tuning, and dedicated support.
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-3">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
