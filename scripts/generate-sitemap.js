import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://nucleasai.com';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', changefreq: 'daily', priority: 1.0 },
  { path: '/product', changefreq: 'weekly', priority: 1.0 },
  { path: '/solutions', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/edtech', changefreq: 'monthly', priority: 0.7 },
  { path: '/solutions/d2c', changefreq: 'monthly', priority: 0.7 },
  { path: '/pricing', changefreq: 'monthly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.7 },
  // Add more routes as needed
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const outPath = path.join(path.resolve(), 'public', 'sitemap.xml');
fs.writeFileSync(outPath, sitemap);
console.log('✅ Sitemap generated at', outPath);