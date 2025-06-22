
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, User, MessageSquare } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-zinc-200 dark:border-white/20 rounded-xl p-8 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-zinc-900 dark:text-gray-200 font-medium">Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500 dark:text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="pl-10 bg-white dark:bg-black/20 border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-900 dark:text-gray-200 font-medium">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500 dark:text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="pl-10 bg-white dark:bg-black/20 border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-zinc-900 dark:text-gray-200 font-medium">Message</Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-500 dark:text-gray-400" />
            <textarea
              id="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-black/20 border border-zinc-300 dark:border-white/10 rounded-lg resize-none h-32 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};
