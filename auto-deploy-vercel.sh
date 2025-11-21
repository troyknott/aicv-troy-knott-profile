#!/bin/bash
# Automated Vercel deployment script

set -e

echo "🚀 Starting Vercel deployment..."

# Wait for Node.js
echo "⏳ Checking for Node.js..."
MAX_WAIT=300
WAITED=0
while [ ! -f /Users/troyknott/homebrew/bin/node ] && [ $WAITED -lt $MAX_WAIT ]; do
    sleep 5
    WAITED=$((WAITED + 5))
    echo "   Waiting for Node.js installation... ($WAITED/$MAX_WAIT seconds)"
done

if [ ! -f /Users/troyknott/homebrew/bin/node ]; then
    echo "❌ Node.js installation taking too long. Please install manually:"
    echo "   brew install node"
    exit 1
fi

echo "✅ Node.js found!"

# Install Vercel CLI
echo "📦 Installing Vercel CLI..."
/Users/troyknott/homebrew/bin/npm install -g vercel

# Authenticate with Vercel
echo "🔐 Authenticating with Vercel..."
echo "   Please complete authentication in your browser..."
/Users/troyknott/homebrew/bin/vercel login

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
cd /Users/troyknott/Desktop/AICV-Test-Troy
/Users/troyknott/homebrew/bin/vercel --prod --yes

echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your Vercel dashboard"
echo "2. Add environment variable: NEXT_PUBLIC_SITE_URL"
echo "3. Set it to your Vercel URL"
echo "4. Redeploy"

