import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Blog = () => {
  const posts = [
    {
      title: "The Future of Customer Data Platforms: What's Coming in 2024",
      excerpt: "Explore the latest trends and innovations shaping the CDP landscape, from real-time AI to privacy-first data collection.",
      author: "Alex Chen",
      date: "March 15, 2024",
      category: "Industry Insights",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Building Real-time Identity Resolution at Scale",
      excerpt: "Deep dive into the technical challenges and solutions for creating unified customer profiles across millions of touchpoints.",
      author: "Sarah Kim",
      date: "March 10, 2024",
      category: "Technical",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "GDPR Compliance in Modern Customer Data Platforms",
      excerpt: "A comprehensive guide to maintaining privacy compliance while maximizing the value of your customer data.",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      category: "Compliance",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "From Batch to Real-time: Modernizing Your Data Stack",
      excerpt: "Learn how to transition from traditional batch processing to real-time data activation without disrupting your business.",
      author: "Emily Watson",
      date: "February 28, 2024",
      category: "Technical",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "The ROI of Customer Data Platforms: A Complete Analysis",
      excerpt: "Quantifying the business impact of implementing a modern CDP, with real case studies and metrics.",
      author: "Alex Chen",
      date: "February 20, 2024",
      category: "Business",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "AI-Powered Customer Segmentation: Beyond Demographics",
      excerpt: "How machine learning is revolutionizing customer segmentation with behavioral and predictive insights.",
      author: "Sarah Kim",
      date: "February 15, 2024",
      category: "AI & ML",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Industry Insights", "Technical", "Compliance", "Business", "AI & ML"];

  return (
    <>
      <Helmet>
        <title>AI-Native CDP Blog | Customer Data Platform Insights | NucleasAI</title>
        <meta name="description" content="Read the latest insights, tutorials, and thought leadership on AI-native CDPs, real-time customer data platforms, and AI agents for data activation from NucleasAI." />
        <link rel="canonical" href="https://nucleasai.com/blog" />
        <meta name="keywords" content="AI-native CDP blog, customer data platform, AI agents, data activation, customer intelligence, real-time analytics" />
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://nucleasai.com/"},
              {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://nucleasai.com/blog"}
            ]
          }
        `}</script>
        {/* Blog structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "NucleasAI Blog",
            "description": "Insights and tutorials on AI-native CDPs, customer data platforms, and AI agents for data activation.",
            "url": "https://nucleasai.com/blog"
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
            <BreadcrumbPage>Blog</BreadcrumbPage>
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
                The NucleasAI{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Insights, tutorials, and thought leadership on customer data platforms, 
                real-time analytics, and the future of data-driven business.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Badge 
                  key={index} 
                  variant={index === 0 ? "default" : "secondary"}
                  className={`cursor-pointer transition-colors ${
                    index === 0 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Featured Article</h2>
            </div>
            
            {posts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 mb-12">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-l-lg flex items-center justify-center">
                      <div className="text-center p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Featured</h3>
                        <p className="text-purple-200">Latest Insights</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-purple-900/30 text-purple-300 border-purple-800">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{post.title}</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Latest Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                        {post.category}
                      </Badge>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-12 rounded-2xl border border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest insights on customer data platforms, AI, and data strategy 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input 
                  type="email"
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-500 text-sm">
                Join 5,000+ data professionals. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
