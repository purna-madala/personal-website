# Cloudflare Pages Deployment Guide

## 🚀 Deploy to Cloudflare Pages

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add CMS configuration for production"
git push origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** > **Create a project**
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

### Step 3: Set Environment Variables
In Cloudflare Pages settings, add:
- `NODE_VERSION`: `18` or `20`

### Step 4: Configure CMS Authentication

#### Option A: GitHub Backend (Recommended)
1. Update `public/config.yml`:
```yaml
backend:
  name: github
  repo: YOUR_USERNAME/personal-website
  branch: main
```

2. Create GitHub OAuth App:
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - **Application name**: Personal Website CMS
   - **Homepage URL**: `https://your-site.pages.dev`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`

3. Add Client ID/Secret to Netlify (for OAuth):
   - Create free Netlify account
   - Add your site
   - Go to Site settings > Identity > External providers
   - Enable GitHub and add your OAuth credentials

#### Option B: Git Gateway with Netlify Identity
1. Keep current config with `git-gateway`
2. Enable Netlify Identity on your site
3. Configure Git Gateway in Netlify

### Step 5: Update Site URLs
Replace in `public/config.yml`:
```yaml
site_url: https://your-actual-site.pages.dev
display_url: https://your-actual-site.pages.dev
```

## 🎯 CMS Access in Production

1. **Visit**: `https://your-site.pages.dev/admin`
2. **Authenticate**: Using GitHub or Netlify Identity
3. **Create content**: Changes create pull requests
4. **Publish**: Merge PRs to deploy changes

## 🔧 Development vs Production

### Local Development
- Uses `test-repo` backend
- No authentication required
- Instant content updates

### Production
- Uses Git-based workflow
- Requires authentication
- Content changes via pull requests
- Automatic deployment on merge

## 📝 Content Workflow

1. **Create/Edit**: Use CMS to create content
2. **Review**: Content changes appear as pull requests
3. **Approve**: Merge PR to publish changes
4. **Deploy**: Cloudflare Pages automatically rebuilds

## 🚨 Troubleshooting

### CMS Not Loading
- Check `config.yml` is accessible at `/config.yml`
- Verify authentication setup
- Check browser console for errors

### Authentication Issues
- Ensure OAuth app is properly configured
- Check callback URLs match exactly
- Verify Netlify Identity is enabled

### Build Failures
- Check Node.js version (use 18 or 20)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

## 🔄 Quick Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare
git push origin main  # Triggers automatic deployment
``` 