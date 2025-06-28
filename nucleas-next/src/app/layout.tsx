import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nucleasai.com"),
  title: {
    default: "NucleasAI - AI-Native Customer Data Platform | Autonomous Agents & Real-time Intelligence",
    template: "%s | NucleasAI"
  },
  description: "AI-native Customer Data Platform with autonomous agents, intelligent routing, and real-time customer intelligence. Transform your customer data strategy with AI-powered insights.",
  keywords: [
    "AI CDP",
    "Customer Data Platform",
    "Autonomous Agents",
    "AI-powered analytics",
    "Customer Intelligence",
    "Real-time data processing",
    "AI-native platform",
    "Customer analytics",
    "Data automation",
    "AI agents",
    "Customer insights",
    "Data platform",
    "AI automation",
    "Customer data management"
  ],
  authors: [{ name: "NucleasAI Team" }],
  creator: "NucleasAI",
  publisher: "NucleasAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nucleasai.com",
    siteName: "NucleasAI",
    title: "NucleasAI - AI-Native Customer Data Platform",
    description: "AI-native Customer Data Platform with autonomous agents, intelligent routing, and real-time customer intelligence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NucleasAI - AI-Native Customer Data Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NucleasAI - AI-Native Customer Data Platform",
    description: "AI-native Customer Data Platform with autonomous agents, intelligent routing, and real-time customer intelligence.",
    images: ["/og-image.png"],
    creator: "@nucleasai",
    site: "@nucleasai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://nucleasai.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NucleasAI",
              "url": "https://nucleasai.com",
              "logo": "https://nucleasai.com/logo.png",
              "description": "AI-native Customer Data Platform with autonomous agents, intelligent routing, and real-time customer intelligence.",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/nucleasai",
                "https://linkedin.com/company/nucleasai",
                "https://github.com/nucleasai"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@nucleasai.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Google Analytics - Replace with your actual GA4 measurement ID */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
