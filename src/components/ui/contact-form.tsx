import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ firstName: "", lastName: "", email: "", company: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-zinc-200 dark:border-white/20 rounded-xl p-8 shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">Send us a message</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-base md:text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-zinc-900 dark:text-white font-medium">First Name</Label>
          <Input
            id="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-white dark:bg-gray-800 border-zinc-300 dark:border-gray-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
            required
          />
        </div>
        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-zinc-900 dark:text-white font-medium">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-white dark:bg-gray-800 border-zinc-300 dark:border-gray-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
            required
          />
        </div>
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-900 dark:text-white font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className="bg-white dark:bg-gray-800 border-zinc-300 dark:border-gray-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
            required
          />
        </div>
        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-zinc-900 dark:text-white font-medium">Company</Label>
          <Input
            id="company"
            type="text"
            placeholder="Acme Inc."
            value={formData.company}
            onChange={handleChange}
            className="bg-white dark:bg-gray-800 border-zinc-300 dark:border-gray-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
          />
        </div>
        {/* Subject (full width) */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="subject" className="text-zinc-900 dark:text-white font-medium">Subject</Label>
          <Input
            id="subject"
            type="text"
            placeholder="How can we help you?"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white dark:bg-gray-800 border-zinc-300 dark:border-gray-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
            required
          />
        </div>
        {/* Message (full width) */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message" className="text-zinc-900 dark:text-white font-medium">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="bg-white dark:bg-gray-800 border-zinc-300 dark:border-gray-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 resize-none"
            required
          />
        </div>
        {/* Submit Button (full width) */}
        <div className="md:col-span-2">
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : <><span>Send Message</span> <ArrowRight className="w-5 h-5 ml-1" /></>}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(ContactForm);

