# NucleasAI Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow the prompts to connect your repository
```

### Option 2: Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the .next folder to Netlify
```

### Option 3: AWS Amplify
```bash
# Connect your GitHub repository to AWS Amplify
# Amplify will automatically build and deploy
```

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Create a `.env.local` file in the `nucleas-next` directory:
```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Demo Schedule URL
NEXT_PUBLIC_DEMO_SCHEDULE_URL=https://calendly.com/nucleasai/demo

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=hello@nucleasai.com

# Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@nucleasai
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/nucleasai
```

### 2. Update Placeholder Content
- [ ] Replace `G-XXXXXXXXXX` with your actual Google Analytics ID
- [ ] Update verification codes in `layout.tsx`
- [ ] Replace placeholder social media handles
- [ ] Update contact email addresses
- [ ] Add real team member information

### 3. Create Required Assets
- [ ] Create Open Graph images (1200x630px)
- [ ] Design favicon and app icons
- [ ] Create logo files
- [ ] Add team member photos
- [ ] Create social media assets

## 🔧 Build & Test

### Local Testing
```bash
# Install dependencies
npm run install-deps

# Build for production
npm run build

# Test production build
npm run start

# Run Lighthouse audit
npx lighthouse http://localhost:3000 --output html
```

### Performance Testing
```bash
# Test Core Web Vitals
npx lighthouse http://localhost:3000 --only-categories=performance

# Test SEO
npx lighthouse http://localhost:3000 --only-categories=seo

# Test Accessibility
npx lighthouse http://localhost:3000 --only-categories=accessibility
```

## 🌐 Domain Configuration

### DNS Records
```
Type: A
Name: @
Value: [Your hosting provider IP]

Type: CNAME
Name: www
Value: nucleasai.com

Type: TXT
Name: @
Value: google-site-verification=your-verification-code
```

### SSL Certificate
- Enable SSL/HTTPS on your hosting provider
- Set up automatic redirects from HTTP to HTTPS
- Configure HSTS headers

## 📊 Analytics Setup

### Google Analytics 4
1. Create a new GA4 property
2. Get your measurement ID (G-XXXXXXXXXX)
3. Add it to your environment variables
4. Test tracking in real-time

### Google Search Console
1. Add your domain to Search Console
2. Verify ownership (DNS or HTML file)
3. Submit your sitemap.xml
4. Monitor for indexing issues

## 🔍 SEO Verification

### Structured Data Testing
```bash
# Test JSON-LD structured data
# Visit: https://search.google.com/test/rich-results
```

### Meta Tags Verification
```bash
# Check meta tags
# Visit: https://metatags.io
```

### Social Media Testing
```bash
# Test Open Graph tags
# Visit: https://developers.facebook.com/tools/debug/
# Visit: https://cards-dev.twitter.com/validator
```

## 📱 PWA Testing

### Manifest Testing
```bash
# Test web app manifest
# Visit: https://manifest-validator.appspot.com
```

### Lighthouse PWA Audit
```bash
npx lighthouse http://localhost:3000 --only-categories=pwa
```

## 🚨 Post-Deployment Checklist

### Immediate Actions
- [ ] Test all pages load correctly
- [ ] Verify all forms work
- [ ] Check mobile responsiveness
- [ ] Test social media sharing
- [ ] Verify analytics tracking
- [ ] Check for broken links

### SEO Actions
- [ ] Submit sitemap to search engines
- [ ] Set up Google Search Console
- [ ] Configure Bing Webmaster Tools
- [ ] Test structured data
- [ ] Monitor Core Web Vitals

### Performance Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Set up performance alerts
- [ ] Monitor Core Web Vitals
- [ ] Track conversion goals

## 🔧 Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Update Next.js
npm install next@latest
```

### Performance Monitoring
- Monitor Core Web Vitals weekly
- Check Google Search Console monthly
- Review analytics data regularly
- Update content based on performance

## 🆘 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Performance Issues
```bash
# Analyze bundle size
npx @next/bundle-analyzer

# Check for large dependencies
npm ls --depth=0
```

#### SEO Issues
```bash
# Test structured data
# Visit: https://search.google.com/test/rich-results

# Check meta tags
# Visit: https://metatags.io
```

## 📞 Support

- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Google Analytics**: https://support.google.com/analytics
- **Google Search Console**: https://support.google.com/webmasters

---

**Deployment Date**: [Date]
**Deployed By**: [Name]
**Version**: 1.0.0 