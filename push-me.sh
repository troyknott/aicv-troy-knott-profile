#!/bin/bash
# Simple push script - run this in Cursor's terminal

echo "🚀 Pushing to GitHub..."
echo ""
echo "If prompted for credentials:"
echo "  Username: your GitHub username"
echo "  Password: use a Personal Access Token (not your password)"
echo ""
echo "Get token at: https://github.com/settings/tokens"
echo "Create token with 'repo' permissions"
echo ""

git push -u origin main

echo ""
echo "✅ Done! If it worked, go to: https://vercel.com/new"

