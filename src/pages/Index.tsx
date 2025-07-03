import { Helmet } from 'react-helmet-async';

// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <>
      <Helmet>
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </div>
    </>
  );
};

export default Index;
