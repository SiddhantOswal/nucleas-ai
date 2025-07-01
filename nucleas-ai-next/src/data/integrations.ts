
// File: src/data/integrations.ts

export interface Integration {
  name: string
  iconSrc: string
  description?: string
  link?: string
  category: 'crm' | 'ecommerce' | 'analytics' | 'ads' | 'data' | 'payment' | 'enrichment' | 'vertical'
}

export const integrations: Integration[] = [
  // CRM
  {
    name: "Salesforce",
    iconSrc: "/icons/salesforce.svg",
    description: "Sync customer data and insights",
    link: "https://docs.nucleasai.com/integrations/salesforce",
    category: "crm"
  },
  {
    name: "HubSpot",
    iconSrc: "/icons/hubspot.svg",
    description: "Automate lead scoring and nurturing",
    link: "https://docs.nucleasai.com/integrations/hubspot",
    category: "crm"
  },
  
  // E-commerce
  {
    name: "Shopify",
    iconSrc: "/icons/shopify.svg",
    description: "E-commerce data sync for D2C",
    link: "https://docs.nucleasai.com/integrations/shopify",
    category: "ecommerce"
  },
  {
    name: "WooCommerce",
    iconSrc: "/icons/woocommerce.svg",
    description: "WordPress e-commerce tracking",
    category: "ecommerce"
  },
  
  // Analytics
  {
    name: "Google Analytics",
    iconSrc: "/icons/google-analytics.svg",
    description: "Enhanced analytics and attribution",
    category: "analytics"
  },
  {
    name: "Segment",
    iconSrc: "/icons/segment.svg",
    description: "Customer data platform integration",
    category: "analytics"
  },
  
  // Advertising
  {
    name: "Facebook Ads",
    iconSrc: "/icons/facebook.svg",
    description: "Social media advertising insights",
    category: "ads"
  },
  {
    name: "Google Ads",
    iconSrc: "/icons/google-ads.svg",
    description: "Search advertising optimization",
    category: "ads"
  },
  
  // Data Warehouses
  {
    name: "BigQuery",
    iconSrc: "/icons/bigquery.svg",
    description: "Cloud data warehouse integration",
    category: "data"
  },
  {
    name: "Snowflake",
    iconSrc: "/icons/snowflake.svg",
    description: "Data cloud platform sync",
    category: "data"
  },
  
  // Payments
  {
    name: "Stripe",
    iconSrc: "/icons/stripe.svg",
    description: "Payment data and customer insights",
    category: "payment"
  },
  {
    name: "PayPal",
    iconSrc: "/icons/paypal.svg",
    description: "Payment processing analytics",
    category: "payment"
  },
  
  // Enrichment
  {
    name: "Clearbit",
    iconSrc: "/icons/clearbit.svg",
    description: "Customer data enrichment",
    category: "enrichment"
  },
  {
    name: "ZoomInfo",
    iconSrc: "/icons/zoominfo.svg",
    description: "B2B contact and company data",
    category: "enrichment"
  },
  
  // Vertical-specific
  {
    name: "Moodle",
    iconSrc: "/icons/moodle.svg",
    description: "EdTech event tracking",
    category: "vertical"
  },
  {
    name: "Zapier",
    iconSrc: "/icons/zapier.svg",
    description: "Automation and workflow integration",
    category: "vertical"
  }
]

export const integrationCategories = {
  crm: "Customer Relationship Management",
  ecommerce: "E-commerce Platforms",
  analytics: "Analytics & Tracking",
  ads: "Advertising Platforms",
  data: "Data Warehouses",
  payment: "Payment Gateways",
  enrichment: "Data Enrichment",
  vertical: "Vertical Solutions"
}
