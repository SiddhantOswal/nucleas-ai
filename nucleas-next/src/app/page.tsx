import type { Metadata } from "next";
import { HomeClient } from "@/components/pages/HomeClient";

export const metadata: Metadata = {
  title: "AI-Native Customer Data Platform | Autonomous Agents & Real-time Intelligence",
  description: "Transform your customer data strategy with NucleasAI's AI-native CDP ecosystem. Autonomous agents work 24/7 to provide real-time customer intelligence and insights.",
  keywords: [
    "AI Customer Data Platform",
    "Autonomous Agents",
    "Real-time Customer Intelligence",
    "AI-powered Analytics",
    "Customer Data Management",
    "AI Automation",
    "Customer Insights Platform"
  ],
  openGraph: {
    title: "NucleasAI - AI-Native Customer Data Platform",
    description: "Transform your customer data strategy with AI-powered autonomous agents and real-time intelligence.",
    url: "https://nucleasai.com",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "NucleasAI - AI-Native Customer Data Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NucleasAI - AI-Native Customer Data Platform",
    description: "Transform your customer data strategy with AI-powered autonomous agents and real-time intelligence.",
    images: ["/og-home.png"],
  },
  alternates: {
    canonical: "https://nucleasai.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "NucleasAI - AI-Native Customer Data Platform",
            "description": "AI-native Customer Data Platform with autonomous agents, intelligent routing, and real-time customer intelligence.",
            "url": "https://nucleasai.com",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "NucleasAI",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "AI-native Customer Data Platform with autonomous agents and real-time intelligence",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "featureList": [
                "Autonomous AI Agents",
                "Real-time Customer Intelligence",
                "Intelligent Data Routing",
                "AI-powered Analytics",
                "24/7 Automated Insights"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://nucleasai.com"
                }
              ]
            }
          })
        }}
      />
      
      <HomeClient />
    </>
  );
}
