import { ProductSection } from "@/components/sections/product-section";
import { Helmet } from 'react-helmet-async';

const Product = () => (
  <>
    <Helmet>
      <title>Product | AI-Native CDP Features | Real-time Customer Data Platform | NucleasAI</title>
      <meta name="description" content="Explore NucleasAI's AI-native CDP product features: real-time data ingestion, identity resolution, AI agents for data activation, and more. Built for SaaS, D2C, fintech, and enterprise." />
      <link rel="canonical" href="https://nucleasai.com/product" />
      <meta name="keywords" content="AI-native CDP, product features, real-time customer data platform, data activation, identity resolution, SaaS CDP" />
    </Helmet>
    <ProductSection />
  </>
);

export default Product;
