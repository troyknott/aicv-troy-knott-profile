# Quick Deploy to Vercel - Right Now

## Method: Vercel Dashboard Direct Import

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/new
   - Sign in to your account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Look for "Import Git Repository" OR "Deploy" tab
   - If you see "Browse" or "Upload" option, use that
   - OR connect to GitHub and create a new repo there first

3. **If GitHub is connected:**
   - Click "Import Git Repository"
   - Click "Create Git Repository" (if project not on GitHub yet)
   - This will create a new GitHub repo and push your code
   - Then Vercel will auto-detect and deploy

4. **Configure:**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)

5. **Add Environment Variable:**
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-project-name.vercel.app` (you'll get this after first deploy)

6. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live!

---

## Alternative: Use Cursor's Git Panel

1. In Cursor, click Source Control icon (left sidebar)
2. Click "Initialize Repository" 
3. Stage all files (click + next to "Changes")
4. Commit: "Initial commit"
5. Click "Publish to GitHub" (top of panel)
6. Follow prompts to create GitHub repo
7. Then go to Vercel and import that new GitHub repo

---

## After First Deploy

1. Copy your Vercel URL (e.g., `https://aicv-troy-knott-profile.vercel.app`)
2. Go to Project Settings → Environment Variables
3. Update `NEXT_PUBLIC_SITE_URL` to your actual URL
4. Redeploy (or it will auto-redeploy on next push)


