#!/bin/bash
# Automated deployment script - Run this after authenticating

set -e

echo "🚀 Starting automated deployment..."

# Check for required tools
if ! command -v git &> /dev/null; then
    echo "❌ Git not found. Please install Git first."
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Initialize git if needed
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📝 Staging files..."
git add .

# Check if there are changes
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    echo "💾 Committing changes..."
    git commit -m "Initial commit - Troy Knott profile site"
fi

# Check if remote exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Please add your GitHub repository URL:"
    read -p "GitHub repo URL: " REPO_URL
    git remote add origin "$REPO_URL"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main || {
    echo "⚠️  Push failed. You may need to authenticate with GitHub."
    echo "   Try: gh auth login (if GitHub CLI is installed)"
    echo "   Or: Set up SSH keys or use HTTPS with personal access token"
    exit 1
}

echo "✅ Code pushed to GitHub!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://vercel.com/new"
echo "2. Import your GitHub repository"
echo "3. Add environment variable: NEXT_PUBLIC_SITE_URL"
echo "4. Deploy!"
echo ""
echo "Or continue with Vercel CLI deployment..."

# Check for Vercel CLI
if command -v vercel &> /dev/null; then
    echo "🔍 Vercel CLI found. Deploying..."
    vercel --prod
else
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
    echo "🔐 Please authenticate with Vercel:"
    vercel login
    echo "🚀 Deploying to Vercel..."
    vercel --prod
fi

echo "✅ Deployment complete!"


