
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to transform your customer data strategy? We're here to help. 
              Reach out for support, partnerships, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sales Inquiry</h3>
                <p className="text-gray-400 mb-4">Interested in NucleasAI for your business?</p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Request Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 text-center hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">General Support</h3>
                <p className="text-gray-400 mb-4">Questions about our platform or features?</p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 text-center hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Sales</h3>
                <p className="text-gray-400 mb-4">Custom solutions for large organizations?</p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName"
                      className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName"
                      className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input 
                    id="company"
                    className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input 
                    id="subject"
                    className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message"
                    rows={5}
                    className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
              <p className="text-gray-400 mb-8">
                We're here to help and answer any questions you might have. 
                We look forward to hearing from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">hello@nucleasai.com</p>
                    <p className="text-gray-400">support@nucleasai.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office</h3>
                    <p className="text-gray-400">123 Innovation Drive</p>
                    <p className="text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Support Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9AM - 6PM PST</p>
                    <p className="text-gray-400">Weekend: Emergency support only</p>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="mt-8 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">General Inquiries</span>
                    <Badge variant="secondary" className="bg-green-900/30 text-green-300 border-green-800">
                      < 24 hours
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sales Requests</span>
                    <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 border-blue-800">
                      < 4 hours
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Enterprise Support</span>
                    <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-800">
                      < 2 hours
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
