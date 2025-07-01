
"use client"

import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/about-section";
import { ProductSection } from "@/components/sections/product-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/ui/FAQSection";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div id="home" className="pt-20">
          <AboutSection />
        </div>
        <div id="product">
          <ProductSection />
        </div>
        <div id="solutions">
          <SolutionsSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
      </main>
    </div>
  );
}
