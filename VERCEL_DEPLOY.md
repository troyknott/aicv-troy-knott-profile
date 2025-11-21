# Deploy to Vercel - Step by Step

## Method 1: Vercel Web Interface (Easiest - Recommended)

### Step 1: Push to GitHub (if not already)

1. Go to https://github.com and create a new repository (or use existing)
2. In your project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Troy Knott profile site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. **Important**: Add Environment Variable:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-domain.vercel.app` (or your custom domain)
6. Click **"Deploy"**
7. Wait 2-3 minutes for build to complete
8. Your site will be live at the provided URL!

### Step 3: Set Custom Domain (Optional)

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add your custom domain (e.g., `troyknott.com`)
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` environment variable to match

---

## Method 2: Vercel CLI (Command Line)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N (first time)
# - Project name? (press enter for default)
# - Directory? (press enter for ./)
# - Override settings? N
```

### Step 4: Add Environment Variable

```bash
vercel env add NEXT_PUBLIC_SITE_URL
# Enter your domain when prompted (e.g., https://your-project.vercel.app)
```

### Step 5: Deploy to Production

```bash
vercel --prod
```

---

## Quick Checklist

- [ ] Code pushed to GitHub (Method 1) OR Vercel CLI installed (Method 2)
- [ ] Environment variable `NEXT_PUBLIC_SITE_URL` set in Vercel
- [ ] Profile image added to `public/images/troy-knott-profile.jpg` (or update path)
- [ ] Build completes successfully
- [ ] Site accessible at Vercel URL
- [ ] Test `/robots.txt` and `/sitemap.xml`
- [ ] Verify JSON-LD at https://validator.schema.org/

---

## After Deployment

1. **Test your site:**
   - Visit your Vercel URL
   - Check all pages load correctly
   - Verify structured data

2. **Submit to search engines:**
   - Google Search Console: Submit sitemap
   - Bing Webmaster Tools: Submit sitemap

3. **Test AI visibility:**
   - Ask ChatGPT: "Who is Troy Knott?"
   - Search Bing Chat for your name
   - Check Perplexity for citations

---

## Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Ensure TypeScript compiles: `npm run build` locally first

**Environment variable not working?**
- Make sure it's set in Vercel dashboard → Settings → Environment Variables
- Redeploy after adding variables

**Domain not working?**
- Check DNS settings match Vercel's requirements
- Wait 24-48 hours for DNS propagation


