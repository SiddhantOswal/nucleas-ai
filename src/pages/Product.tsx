import ProductSection from "@/components/sections/product-section";
import { Helmet } from 'react-helmet-async';

const Product = () => (
  <>
    <Helmet>
      <title>Product | AI-Native CDP Features | Real-time Customer Data Platform | NucleasAI</title>
      <meta name="description" content="Explore NucleasAI's AI-native CDP product features: real-time data ingestion, identity resolution, AI agents for data activation, and more. Built for SaaS, D2C, fintech, and enterprise." />
      <link rel="canonical" href="https://nucleasai.com/product" />
      <meta name="keywords" content="AI-native CDP, product features, real-time customer data platform, data activation, identity resolution, SaaS CDP" />
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content="Product | AI-Native CDP Features | Real-time Customer Data Platform | NucleasAI" />
      <meta property="og:description" content="Explore NucleasAI's AI-native CDP product features: real-time data ingestion, identity resolution, AI agents for data activation, and more. Built for SaaS, D2C, fintech, and enterprise." />
      <meta property="og:url" content="https://nucleasai.com/product" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://nucleasai.com/og-image.png" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Product | AI-Native CDP Features | Real-time Customer Data Platform | NucleasAI" />
      <meta name="twitter:description" content="Explore NucleasAI's AI-native CDP product features: real-time data ingestion, identity resolution, AI agents for data activation, and more. Built for SaaS, D2C, fintech, and enterprise." />
      <meta name="twitter:image" content="https://nucleasai.com/og-image.png" />
      <meta name="twitter:site" content="@nucleasai" />
      {/* Product Schema.org Structured Data */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "NucleasAI",
          "image": [
            "https://nucleasai.com/og-image.png"
          ],
          "description": "NucleasAI is an AI-native Customer Data Platform (CDP) for real-time data activation, identity resolution, and AI-powered insights.",
          "brand": {
            "@type": "Brand",
            "name": "NucleasAI"
          },
          "offers": [
            {
              "@type": "Offer",
              "url": "https://nucleasai.com/product",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "url": "https://nucleasai.com/product",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      `}</script>
    </Helmet>
    <ProductSection />
  </>
);

export default Product;
