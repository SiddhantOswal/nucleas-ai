import { SolutionsSection } from "@/components/sections/solutions-section";
import { Helmet } from 'react-helmet-async';

const Solutions = () => (
  <>
    <Helmet>
      <title>Solutions | AI-Native CDP Use Cases | Real-time Customer Data Platform | NucleasAI</title>
      <meta name="description" content="Discover NucleasAI's AI-native CDP solutions for SaaS, D2C, fintech, and more. Real-time customer data activation, industry use cases, and AI-powered insights." />
      <link rel="canonical" href="https://nucleasai.com/solutions" />
      <meta name="keywords" content="AI-native CDP solutions, real-time customer data platform, industry use cases, data activation, SaaS, D2C, fintech" />
    </Helmet>
    <SolutionsSection />
  </>
);

export default Solutions;
