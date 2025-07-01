import { useEffect } from "react";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  Toaster
} from "@/components/ui/toaster";
import {
  Toaster as Sonner
} from "@/components/ui/sonner";
import {
  TooltipProvider
} from "@/components/ui/tooltip";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NucleasAI - Real-time Customer Data Platform | CDP Solutions</title>
        <meta name="description" content="Transform your customer data with NucleasAI's real-time CDP. Unify, analyze, and activate customer insights instantly. Built for SaaS, D2C, fintech, and more." />
        <meta name="keywords" content="customer data platform, CDP, real-time analytics, customer intelligence, data activation, identity resolution" />
        <meta name="author" content="NucleasAI" />
        <link rel="canonical" href="https://nucleasai.com" />
        {/* Open Graph */}
        <meta property="og:title" content="NucleasAI - Real-time Customer Data Platform" />
        <meta property="og:description" content="Transform your customer data with NucleasAI's real-time CDP. Unify, analyze, and activate customer insights instantly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nucleasai.com" />
        <meta property="og:image" content="https://nucleasai.com/og-image.png" />
        <meta property="og:site_name" content="NucleasAI" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nucleasai" />
        <meta name="twitter:title" content="NucleasAI - Real-time Customer Data Platform" />
        <meta name="twitter:description" content="Transform your customer data with NucleasAI's real-time CDP. Unify, analyze, and activate customer insights instantly." />
        <meta name="twitter:image" content="https://nucleasai.com/twitter-image.png" />
        {/* Structured Data: Organization */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NucleasAI",
            "url": "https://nucleasai.com",
            "logo": "https://nucleasai.com/og-image.png",
            "sameAs": [
              "https://twitter.com/nucleasai"
            ]
          }
        `}</script>
        {/* Structured Data: Website */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://nucleasai.com",
            "name": "NucleasAI",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nucleasai.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
        {/* Analytics & SEO Tools Placeholders */}
        {/* Google Analytics (replace G-XXXXXXX with your ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}</script>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_SEARCH_CONSOLE_VERIFICATION_CODE" />
        {/* Ahrefs Site Verification */}
        <meta name="ahrefs-site-verification" content="YOUR_AHREFS_VERIFICATION_CODE" />
        {/* SEMrush Site Verification */}
        <meta name="semrush-site-verification" content="YOUR_SEMRUSH_VERIFICATION_CODE" />
        {/* Hotjar Tracking Code (replace 0000000 with your ID) */}
        <script>{`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:0000000,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}</script>
        {/* Microsoft Clarity (replace clarity_id with your ID) */}
        <script type="text/javascript">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/clarity_id";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "clarity_id");
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
