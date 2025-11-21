# 🔐 Setting Up Authentication

Let's get you authenticated for GitHub and Vercel so we can deploy!

## Step 1: GitHub Authentication

### Option A: GitHub CLI (Recommended - Easiest)

1. **Install GitHub CLI** (if not installed):
   ```bash
   brew install gh
   ```

2. **Authenticate:**
   ```bash
   gh auth login
   ```
   - Choose: GitHub.com
   - Choose: HTTPS
   - Choose: Login with a web browser
   - Follow the prompts

3. **Verify:**
   ```bash
   gh auth status
   ```

### Option B: Personal Access Token (If CLI doesn't work)

1. **Create token:** https://github.com/settings/tokens/new
   - Name: "Vercel Deploy"
   - Expiration: 90 days (or your preference)
   - Scopes: Check "repo" (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Use token with git:**
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/troyknott/aicv-troy-knott-profile.git
   ```
   (Replace YOUR_TOKEN with the actual token)

## Step 2: Vercel Authentication

### Option A: Vercel CLI (Recommended)

1. **Install Node.js** (if not installed):
   ```bash
   brew install node
   ```

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Authenticate:**
   ```bash
   vercel login
   ```
   - Follow the browser prompts

4. **Verify:**
   ```bash
   vercel whoami
   ```

### Option B: Use Vercel Dashboard

- Just go to https://vercel.com and sign in
- Then import from GitHub (no CLI needed)

---

## Quick Setup Commands

Run these in order:

```bash
# 1. Install GitHub CLI
brew install gh

# 2. Authenticate GitHub
gh auth login

# 3. Install Node.js (if needed)
brew install node

# 4. Install Vercel CLI
npm install -g vercel

# 5. Authenticate Vercel
vercel login

# 6. Verify both
gh auth status
vercel whoami
```

Once authenticated, I can push and deploy for you!

