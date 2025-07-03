import SolutionsSection from "@/components/sections/solutions-section";
import { Helmet } from 'react-helmet-async';

const Solutions = () => (
  <>
    <Helmet>
      <title>Solutions | AI-Native CDP Use Cases | Real-time Customer Data Platform | NucleasAI</title>
      <meta name="description" content="Discover NucleasAI's AI-native CDP solutions for SaaS, D2C, fintech, and more. Real-time customer data activation, industry use cases, and AI-powered insights." />
      <link rel="canonical" href="https://nucleasai.com/solutions" />
      <meta name="keywords" content="AI-native CDP solutions, real-time customer data platform, industry use cases, data activation, SaaS, D2C, fintech" />
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content="Solutions | AI-Native CDP Use Cases | Real-time Customer Data Platform | NucleasAI" />
      <meta property="og:description" content="Discover NucleasAI's AI-native CDP solutions for SaaS, D2C, fintech, and more. Real-time customer data activation, industry use cases, and AI-powered insights." />
      <meta property="og:url" content="https://nucleasai.com/solutions" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://nucleasai.com/og-image.png" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Solutions | AI-Native CDP Use Cases | Real-time Customer Data Platform | NucleasAI" />
      <meta name="twitter:description" content="Discover NucleasAI's AI-native CDP solutions for SaaS, D2C, fintech, and more. Real-time customer data activation, industry use cases, and AI-powered insights." />
      <meta name="twitter:image" content="https://nucleasai.com/og-image.png" />
      <meta name="twitter:site" content="@nucleasai" />
    </Helmet>
    <SolutionsSection />
  </>
);

export default Solutions;
