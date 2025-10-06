# GitHub Pages Deployment Guide

This guide will help you deploy your React portfolio to GitHub Pages.

## 🚀 Quick Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
```

That's it! Your portfolio will be live at: **https://spraymachine.github.io/portfolio**

## 📋 Detailed Setup Instructions

### Prerequisites
- GitHub account
- Git repository initialized
- Node.js and npm installed

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (since you already have files)

### Step 2: Connect Local Repository to GitHub
```bash
# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/manik5621/portfolio.git

# Push your code to GitHub
git add .
git commit -m "Initial portfolio setup"
git push -u origin main
```

### Step 3: Deploy
```bash
# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

## 🔧 Configuration Details

### Package.json Changes Made:
- **homepage**: Set to `https://manik5621.github.io/portfolio`
- **gh-pages**: Added as dependency for deployment
- **scripts**: Added `predeploy` and `deploy` commands

### How It Works:
1. `npm run deploy` runs `predeploy` first
2. `predeploy` builds the production version
3. `deploy` pushes the build folder to the `gh-pages` branch
4. GitHub Pages serves the site from the `gh-pages` branch

## 🔄 Updating Your Site

After making changes to your portfolio:

```bash
# Commit your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy the updated site
npm run deploy
```

## 🌐 Your Live Site

Once deployed, your portfolio will be available at:
**https://manik5621.github.io/portfolio**

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the repository name matches the homepage URL
2. **Build Fails**: Check for any console errors and fix them
3. **Styling Issues**: Ensure all asset paths are relative (they should be with React)

### GitHub Pages Settings:
- Go to your repository → Settings → Pages
- Source should be set to "Deploy from a branch"
- Branch should be "gh-pages" (this is set automatically by gh-pages)

## 📝 Notes

- The `gh-pages` branch is created automatically and contains only the built files
- Never edit the `gh-pages` branch directly
- Always use `npm run deploy` to update your live site
- Changes may take a few minutes to appear on the live site

## 🎉 Success!

Your portfolio is now live and accessible to the world! Share the link and start showcasing your work.
