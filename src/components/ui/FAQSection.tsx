import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is an AI-native Customer Data Platform (CDP)?",
    answer: "An AI-native CDP is built from the ground up with artificial intelligence at its core. Unlike traditional CDPs, it uses real-time data, machine learning, and autonomous decision-making to unify, enrich, and activate customer data across channels automatically."
  },
  {
    question: "How does NucleasAI use Agentic AI?",
    answer: "NucleasAI leverages Agentic AI to run autonomous agents that analyze customer behavior, detect intent, trigger actions, and personalize experiences—without manual workflows. These agents work 24/7 to optimize marketing and customer engagement."
  },
  {
    question: "What makes NucleasAI different from other CDPs?",
    answer: "NucleasAI is not just AI-enhanced — it's AI-native. It combines link shortening, pixel tracking, analytics, real-time data unification, and autonomous AI agents in one ecosystem, eliminating the need for fragmented tools or manual rule engines."
  },
  {
    question: "Can I use NucleasAI without technical expertise?",
    answer: "Yes. NucleasAI is designed for marketers, growth teams, and product managers. Its no-code to low-code interface and intelligent defaults make it easy to deploy AI agents, track behavior, and activate audiences without writing a single line of code."
  },
  {
    question: "Does NucleasAI work with my existing tools?",
    answer: "Yes. NucleasAI offers seamless integrations with CRMs, ad platforms, analytics tools, and webhooks. It fits into your existing stack and enhances it with AI-powered insights and automation."
  },
  {
    question: "What is the difference between an AI agent and a rule-based workflow?",
    answer: "Rule-based workflows follow predefined logic. AI agents, on the other hand, learn from real-time behavior, adapt to patterns, and take action autonomously. They're dynamic, context-aware, and continuously improving."
  },
];

// Generate JSON-LD for FAQPage
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-8 px-1 max-w-md md:max-w-2xl lg:max-w-3xl mx-auto" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-xl md:text-2xl font-bold mb-4 text-center text-zinc-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="rounded-md bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              className="w-full flex justify-between items-center px-4 md:px-6 py-2 md:py-3 text-left rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-sm md:text-base font-medium text-zinc-900 dark:text-white">
                {faq.question}
              </span>
              <span className="ml-1 text-purple-500 text-lg transition-transform duration-200" style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  id={`faq-panel-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden px-4 md:px-6 pb-2 md:pb-3"
                >
                  <p className="text-xs md:text-sm text-zinc-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {/* JSON-LD for FAQPage SEO */}
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>
    </section>
  );
}; 