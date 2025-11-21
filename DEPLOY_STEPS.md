# 🚀 DEPLOY NOW - Follow These Exact Steps

## Step 1: Sign in to GitHub
**Click this link:** https://github.com/login

1. Sign in with your GitHub account
2. Keep this tab open

---

## Step 2: Create GitHub Repository
**Click this link:** https://github.com/new

1. Repository name: `aicv-troy-knott-profile` (or any name you prefer)
2. Make it **Public** or **Private** (your choice)
3. **DO NOT** check "Initialize with README"
4. Click **"Create repository"**
5. **Copy the repository URL** (you'll see it on the next page, looks like: `https://github.com/YOUR_USERNAME/aicv-troy-knott-profile.git`)

---

## Step 3: Push Code from Cursor

**In Cursor:**
1. Open **Source Control** panel (left sidebar, Git icon)
2. If you see "Initialize Repository" - click it
3. Click **"+"** next to "Changes" to stage all files
4. Type commit message: `Initial commit - Troy Knott profile site`
5. Click **"Commit"**
6. Click **"Publish to GitHub"** button (top of panel)
7. **Paste your repository URL** when prompted, or select from list
8. Click **"Publish"**

Wait for it to finish pushing...

---

## Step 4: Sign in to Vercel
**Click this link:** https://vercel.com/login

1. Click **"Continue with GitHub"**
2. Authorize Vercel to access your GitHub
3. You'll be redirected to Vercel dashboard

---

## Step 5: Deploy Project
**Click this link:** https://vercel.com/new

1. You should see your GitHub repositories
2. Find **"aicv-troy-knott-profile"** (or whatever you named it)
3. Click **"Import"** next to it
4. On the configuration page:
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto)
   - **Output Directory:** `.next` (auto)
5. Click **"Environment Variables"** section
6. Add new variable:
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://aicv-troy-knott-profile.vercel.app` (or your project name)
7. Click **"Deploy"**
8. Wait 2-3 minutes for build to complete

---

## Step 6: Update Environment Variable

After deployment completes:

1. You'll see your live URL (e.g., `https://aicv-troy-knott-profile-abc123.vercel.app`)
2. Copy that **exact URL**
3. Go to your project in Vercel dashboard
4. Click **Settings** → **Environment Variables**
5. Edit `NEXT_PUBLIC_SITE_URL`
6. Paste your **actual Vercel URL**
7. Click **Save**
8. Go to **Deployments** tab
9. Click **"..."** on latest deployment → **"Redeploy"**

---

## ✅ Done!

Your site is now live! Test it:
- Visit your Vercel URL
- Check `/robots.txt`
- Check `/sitemap.xml`
- Check `/profile/troy-knott`

---

## Quick Links Summary:
1. **GitHub Login:** https://github.com/login
2. **Create Repo:** https://github.com/new
3. **Vercel Login:** https://vercel.com/login
4. **Vercel New Project:** https://vercel.com/new


