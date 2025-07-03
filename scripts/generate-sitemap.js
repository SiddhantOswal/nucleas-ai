const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://nucleasai.com';
const today = new Date().toISOString().split('T')[0];

const routes = [
  '/',
  '/#home',
  '/#product',
  '/#solutions',
  '/#about',
  '/#contact',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, sitemap);
console.log('Sitemap generated at', outPath); 