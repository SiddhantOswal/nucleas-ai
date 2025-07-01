import { PricingSection } from "@/components/sections/PricingSection";
import { Helmet } from 'react-helmet-async';

const Pricing = () => (
  <>
    <Helmet>
      <title>Pricing | Transparent Plans | AI-Native CDP | NucleasAI</title>
      <meta name="description" content="Choose the right NucleasAI plan for your business. Transparent pricing for AI-native customer data platform, with all core features included." />
      <link rel="canonical" href="https://nucleasai.com/pricing" />
      <meta name="keywords" content="AI-native CDP pricing, customer data platform plans, transparent pricing, SaaS CDP" />
    </Helmet>
    <PricingSection />
  </>
);

export default Pricing;
