"use client"

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    question: "What is NucleasAI?",
    answer: "NucleasAI is an AI-native Customer Data Platform (CDP) that uses autonomous agents to provide real-time customer intelligence. Unlike traditional CDPs, our platform works 24/7 to automatically analyze customer data and deliver actionable insights without manual intervention."
  },
  {
    question: "How does NucleasAI differ from traditional CDPs?",
    answer: "Traditional CDPs require manual setup, configuration, and ongoing maintenance. NucleasAI uses autonomous AI agents that automatically learn from your data, identify patterns, and provide insights. Our platform is built from the ground up with AI-first architecture, making it more intelligent, adaptive, and efficient."
  },
  {
    question: "What are autonomous agents in NucleasAI?",
    answer: "Autonomous agents are AI-powered systems that work independently to analyze customer data, identify trends, detect anomalies, and provide recommendations. They continuously learn and improve, ensuring your customer intelligence becomes more accurate and valuable over time."
  },
  {
    question: "What types of customer data can NucleasAI process?",
    answer: "NucleasAI can process any type of customer data including website interactions, mobile app events, email engagement, purchase history, support tickets, social media activity, and more. Our platform is designed to handle structured and unstructured data from multiple sources."
  },
  {
    question: "How secure is my customer data with NucleasAI?",
    answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, GDPR compliance, and secure cloud infrastructure. All data is encrypted in transit and at rest, and we never share or sell your customer data to third parties."
  },
  {
    question: "Can NucleasAI integrate with my existing tools?",
    answer: "Yes, NucleasAI integrates with popular tools and platforms including CRMs, marketing automation tools, analytics platforms, data warehouses, and more. We provide APIs and pre-built connectors for seamless integration with your existing tech stack."
  },
  {
    question: "What kind of insights does NucleasAI provide?",
    answer: "NucleasAI provides real-time insights including customer behavior patterns, churn prediction, lifetime value analysis, segmentation recommendations, personalized content suggestions, and automated anomaly detection. Our AI agents continuously identify new opportunities and risks."
  },
  {
    question: "How quickly can I get started with NucleasAI?",
    answer: "You can get started with NucleasAI in as little as 24 hours. Our platform is designed for quick deployment with minimal setup. Our team provides onboarding support to ensure you're getting maximum value from day one."
  },
  {
    question: "What industries does NucleasAI serve?",
    answer: "NucleasAI serves businesses across all industries including e-commerce, SaaS, fintech, healthcare, education, and more. Our AI-native approach makes it adaptable to any business model that relies on customer data for growth."
  },
  {
    question: "How does NucleasAI pricing work?",
    answer: "NucleasAI offers flexible pricing based on your data volume and feature requirements. We provide transparent pricing with no hidden fees, and our platform scales with your business growth. Contact our sales team for a custom quote."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about NucleasAI's AI-native Customer Data Platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="bg-zinc-50 dark:bg-gray-900/50 border-zinc-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-zinc-900 dark:text-white text-center">
              Everything you need to know about NucleasAI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-700 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-zinc-700 dark:text-gray-300 mb-6">
              Our team is here to help you understand how NucleasAI can transform your customer data strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300">
                Contact Support
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((faq, index) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}; 