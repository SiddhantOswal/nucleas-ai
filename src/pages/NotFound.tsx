import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 Not Found | NucleasAI</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist. Return to the NucleasAI homepage." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://nucleasai.com/" />
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="404 Not Found | NucleasAI" />
        <meta property="og:description" content="Sorry, the page you are looking for does not exist. Return to the NucleasAI homepage." />
        <meta property="og:url" content="https://nucleasai.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nucleasai.com/og-image.png" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 Not Found | NucleasAI" />
        <meta name="twitter:description" content="Sorry, the page you are looking for does not exist. Return to the NucleasAI homepage." />
        <meta name="twitter:image" content="https://nucleasai.com/og-image.png" />
        <meta name="twitter:site" content="@nucleasai" />
        {/* BreadcrumbList Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nucleasai.com/" }
            ]
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Sorry, we couldn't find the page you're looking for. 
              The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
