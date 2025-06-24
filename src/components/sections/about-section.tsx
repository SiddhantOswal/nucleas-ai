
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { Users, Heart, Lightbulb, Target, Shield, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      author: {
        name: "Innovation First",
        handle: "@innovation",
        avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&crop=face"
      },
      text: "We push the boundaries of what's possible with AI and data analytics, constantly evolving to meet tomorrow's challenges."
    },
    {
      author: {
        name: "Customer Success",
        handle: "@success",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Your success is our mission. We build relationships that last and solutions that scale with your business growth."
    },
    {
      author: {
        name: "Data Privacy",
        handle: "@privacy",
        avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face"
      },
      text: "Privacy isn't just compliance—it's fundamental to everything we build. Your data, your control, always."
    },
    {
      author: {
        name: "Transparency",
        handle: "@transparency",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Clear processes, honest communication, and open collaboration. We believe transparency builds stronger partnerships."
    },
    {
      author: {
        name: "Excellence",
        handle: "@excellence",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "We don't just meet standards—we set them. Every feature, every interaction reflects our commitment to quality."
    },
    {
      author: {
        name: "Speed & Reliability",
        handle: "@performance",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Lightning-fast insights with rock-solid reliability. Because every millisecond matters in real-time analytics."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former VP of Data at Stripe. PhD in Computer Science from Stanford.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder", 
      bio: "Ex-Principal Engineer at Uber. 15+ years building scalable data platforms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "VP of Engineering",
      bio: "Former Tech Lead at Google Cloud. Expert in distributed systems and AI/ML.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              NucleasAI
            </span>
          </h2>
          <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building the future of customer data platforms. Founded by industry veterans 
            who've scaled data systems at companies like Stripe, Uber, and Google, we understand 
            the challenges of real-time customer intelligence at scale.
          </p>
        </motion.div>

        {/* Values Section using Testimonials Component */}
        <TestimonialsSection
          title="Our Values"
          description="The principles that guide everything we build and every decision we make"
          testimonials={values}
          className="py-16"
        />

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
              Meet Our Team
            </h3>
            <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced leaders who've built data platforms used by millions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-purple-500/50 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-zinc-700 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
