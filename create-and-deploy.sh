#!/bin/bash
# Complete automation script - creates repo and deploys

set -e

REPO_NAME="aicv-troy-knott-profile"
GITHUB_USER=$(git config user.name 2>/dev/null || echo "")

echo "🚀 Complete Deployment Automation"
echo ""

# Check for GitHub CLI
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI found!"
    
    # Check if authenticated
    if gh auth status &> /dev/null; then
        echo "✅ GitHub authenticated"
        
        # Create repository
        echo "📦 Creating GitHub repository: $REPO_NAME"
        gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
        
        echo "✅ Repository created and code pushed!"
        
        # Get repository URL
        REPO_URL=$(gh repo view --json url -q .url)
        echo "📍 Repository URL: $REPO_URL"
        
    else
        echo "🔐 Please authenticate with GitHub:"
        gh auth login
        echo "📦 Creating GitHub repository: $REPO_NAME"
        gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
        REPO_URL=$(gh repo view --json url -q .url)
        echo "📍 Repository URL: $REPO_URL"
    fi
    
else
    echo "📥 GitHub CLI not found. Installing..."
    echo "Please install GitHub CLI first:"
    echo "  brew install gh"
    echo "  gh auth login"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo ""
echo "✅ Code is now on GitHub!"
echo ""
echo "📋 Next: Deploy to Vercel"
echo "1. Go to: https://vercel.com/new"
echo "2. Click 'Import Git Repository'"
echo "3. Select: $REPO_NAME"
echo "4. Click 'Deploy'"
echo ""
echo "Or continue with Vercel CLI..."

# Check for Vercel CLI
if command -v vercel &> /dev/null; then
    echo "🚀 Deploying to Vercel..."
    vercel --prod
else
    echo "📥 Install Vercel CLI: npm install -g vercel"
    echo "🔐 Then: vercel login"
    echo "🚀 Then: vercel --prod"
fi

echo ""
echo "✅ Complete!"

