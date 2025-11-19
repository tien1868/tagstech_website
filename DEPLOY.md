# TAGS Website - Deployment Guide

## Quick Deployment to Vercel

### 1. Prerequisites
- Domain: tagstech.app (already registered)
- Email: robert@tagstech.app (working)
- GitHub account
- Vercel account

### 2. Deploy Steps

#### Option A: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# From project directory
cd /home/user/tagstech-website

# Deploy
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: Your account
# - Link to existing project: N
# - Project name: tagstech-website
# - Directory: ./
# - Override settings: N

# For production:
vercel --prod
```

#### Option B: GitHub + Vercel (Recommended)
1. Push code to GitHub:
   ```bash
   cd /home/user/tagstech-website
   git init
   git add .
   git commit -m "Initial commit - TAGS marketing website"
   git remote add origin https://github.com/YOUR_USERNAME/tagstech-website.git
   git push -u origin main
   ```

2. Deploy on Vercel:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Framework: Next.js
   - Click "Deploy"

#### Option C: Direct Vercel (No GitHub)
1. Go to https://vercel.com/new
2. Upload the `/home/user/tagstech-website` folder
3. Click "Deploy"

### 3. Connect Custom Domain

In Vercel dashboard:
1. Go to Project Settings → Domains
2. Add domain: `tagstech.app`
3. Add domain: `www.tagstech.app`
4. Follow DNS instructions to update your domain registrar:
   - Add A record: `76.76.21.21`
   - Add CNAME record: `www` → `cname.vercel-dns.com`

### 4. Environment Variables (Optional)

If using form backend:
1. In Vercel: Settings → Environment Variables
2. Add:
   - `FORMSPREE_FORM_ID` = your Formspree form ID (if using)

### 5. Enable Analytics

In Vercel:
- Project → Analytics → Enable

### 6. Final Checks

Visit your site:
- https://tagstech.app
- https://www.tagstech.app

Test:
- ✅ Smooth scrolling to sections
- ✅ ROI calculator interactive
- ✅ Pilot application form
- ✅ Mobile responsive
- ✅ Fast load time

## Post-Deployment

### Update Form Backend
Current form uses browser alert. To use real submissions:

1. Sign up for Formspree (free tier): https://formspree.io
2. Create new form, get form ID
3. Update `app/page.tsx` line 283:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Add Demo Videos
When ready to add videos:
1. Upload to YouTube/Vimeo
2. Get embed code
3. Replace placeholder in `app/page.tsx` lines 78-84

### Analytics
- Vercel Analytics (already enabled)
- Google Analytics: Add tracking ID to `app/layout.tsx`

## Performance

Expected scores:
- Lighthouse Performance: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## Support

Issues? robert@tagstech.app
