# Deployment Guide - Troy Knott Personal Profile Site

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variable**
   Create a `.env.local` file:
   ```
   NEXT_PUBLIC_SITE_URL=https://troyknott.com
   ```
   (Update with your actual domain)

3. **Add Profile Image**
   - Place your profile image at: `public/images/troy-knott-profile.jpg`
   - Or update the image path in `data/profile.json`

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## AI Optimization Features Implemented

✅ **Server-Side Rendering (SSR)** - All content visible in initial HTML
✅ **JSON-LD Structured Data** - Person schema with comprehensive metadata
✅ **FAQ Schema** - FAQPage schema for AI-friendly Q&A content
✅ **Strategic robots.txt** - Allows search/citation crawlers, blocks training crawlers
✅ **Sitemap** - XML sitemap with all routes
✅ **Semantic HTML5** - Proper heading hierarchy and semantic elements
✅ **Open Graph Tags** - Social media sharing optimization
✅ **Mobile Responsive** - Accessible on all devices

## AI Crawler Policy (Strategic - Option B)

The site is configured to:
- ✅ **Allow**: Googlebot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Meta-ExternalAgent, Amazonbot
- ❌ **Block**: GPTBot, ClaudeBot, Google-Extended (training crawlers)

This maximizes AI citations while preventing content use in model training.

## Validation Checklist

Before deploying, verify:

- [ ] Content visible in page source (View Source in browser)
- [ ] JSON-LD validates at https://validator.schema.org/
- [ ] `/robots.txt` resolves correctly
- [ ] `/sitemap.xml` resolves correctly
- [ ] All internal links work
- [ ] Meta titles and descriptions present
- [ ] Profile image added or placeholder updated
- [ ] Environment variable `NEXT_PUBLIC_SITE_URL` set correctly

## Testing AI Visibility

After deployment, test your AI visibility:

1. **ChatGPT** (with browsing enabled): Ask "Who is Troy Knott?"
2. **Bing Chat**: Search for "Troy Knott Coachella Valley"
3. **Perplexity**: Query about digital marketing experts in Coachella Valley
4. **Google AI Overview**: Search for your name and check citations

## Deployment Platforms

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Set `NEXT_PUBLIC_SITE_URL` environment variable
4. Deploy

### Other Platforms
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## Post-Deployment

1. Submit sitemap to Google Search Console
2. Monitor AI crawler access in server logs
3. Test structured data with Google's Rich Results Test
4. Check AI citations periodically


