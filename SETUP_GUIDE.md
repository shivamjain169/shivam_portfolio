# Portfolio Setup Guide

Congratulations! Your portfolio website is ready. Follow these steps to customize and deploy it.

## Quick Start

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:3000`

## Customization Checklist

### 1. Update Personal Information

Edit `src/data/profile.js`:
- [ ] Update GitHub URL
- [ ] Update LinkedIn URL
- [ ] Update email and phone
- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Customize headline and subheadline
- [ ] Update about section paragraphs

### 2. Update Experience & Education

Edit `src/data/experience.js`:
- [ ] Verify work experience details
- [ ] Update education information
- [ ] Add/update certifications
- [ ] Add/update achievements

### 3. Update Projects

Edit `src/data/projects.js`:
- [ ] Add real project links (GitHub, demo, NPM)
- [ ] Add project screenshots to `/public/projects/`
- [ ] Update project descriptions
- [ ] Add case study links if available

### 4. Update Skills

Edit `src/data/skills.js`:
- [ ] Review and update skill proficiency levels
- [ ] Add/remove technologies as needed
- [ ] Organize skills by category

### 5. Add Assets

#### Resume
- Add your PDF resume to `/public/resume.pdf`

#### Project Images
Add project screenshots to `/public/projects/`:
- `org-chart.png`
- `observability.png`
- `animations.png`
- `websocket.png`
- `microservices.png`

#### Company/Certification Logos (Optional)
Add logos to `/public/logos/`:
- `genzeon.png`
- `azure.png`

### 6. Update SEO

Edit `src/app/App.jsx`:
- The SEO meta tags will automatically use data from `profile.js`
- Update `public/sitemap.xml` with your actual domain
- Update `public/robots.txt` with your actual domain

### 7. Customize Design (Optional)

#### Colors
Edit `tailwind.config.js` to change color scheme:
```js
colors: {
  primary: {
    DEFAULT: '#06b6d4', // Your primary color
    dark: '#0891b2',
    light: '#22d3ee',
  },
  accent: {
    DEFAULT: '#10b981', // Your accent color
    dark: '#059669',
    light: '#34d399',
  }
}
```

#### Typography
Edit `src/styles/globals.css` to change fonts

## Testing

### Before Deployment

1. **Test all links**: Ensure GitHub, LinkedIn, resume download work
2. **Test responsiveness**: Check on mobile, tablet, desktop
3. **Test animations**: Verify smooth animations (or reduced when user prefers)
4. **Test accessibility**: Navigate with keyboard, check screen reader
5. **Check console**: No errors in browser console
6. **Test contact form**: Note that form needs backend integration

### Performance Checklist

- [ ] Optimize all images (convert to WebP/AVIF)
- [ ] Verify build size is reasonable (< 500KB initial)
- [ ] Test on slow 3G connection
- [ ] Check Lighthouse scores (Performance 90+, Accessibility 95+)

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Build your site
- Provide a `.vercel.app` domain
- Set up automatic deployments on git push

### Deploy to Netlify

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Custom Domain

Both Vercel and Netlify allow you to add a custom domain:
1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. Add custom domain in Vercel/Netlify settings
3. Update DNS records as instructed
4. Enable HTTPS (automatic)

## Contact Form Integration

The contact form is currently for demonstration. To make it functional:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint URL
4. Update `src/sections/Contact.jsx`:
```jsx
<form action="YOUR_FORMSPREE_URL" method="POST">
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their React integration guide
3. Update Contact component with EmailJS code

### Option 3: Custom Backend

Build your own API endpoint with:
- Node.js + Express + Nodemailer
- Serverless function (Vercel/Netlify Functions)
- Firebase/Supabase

## Analytics (Optional)

### Add Umami Analytics

1. Sign up at [umami.is](https://umami.is) or self-host
2. Add tracking script to `index.html`:
```html
<script async src="YOUR_UMAMI_URL" data-website-id="YOUR_ID"></script>
```

### Add Google Analytics

1. Create GA4 property
2. Add tracking code to `index.html`

## Maintenance

### Regular Updates

- Update project links as you complete new projects
- Add new skills as you learn them
- Update experience section with new achievements
- Keep resume PDF current

### Content Tips

- Use concrete metrics (35% faster, 50% improvement)
- Focus on problem → solution → impact
- Keep descriptions concise and scannable
- Update every 2-3 months

## Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Icons Not Showing

Make sure lucide-react is installed:
```bash
npm install lucide-react
```

### Animations Not Working

Check that framer-motion is installed:
```bash
npm install framer-motion
```

### Tailwind Styles Not Applying

Ensure `tailwind.config.js` has correct content paths:
```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

## Support

If you encounter issues:
1. Check the README.md
2. Review the code comments
3. Check browser console for errors
4. Verify all dependencies are installed

## Next Steps

1. Customize all content
2. Add your assets (images, resume)
3. Test thoroughly
4. Deploy to Vercel/Netlify
5. Share your portfolio!

Good luck with your portfolio!
