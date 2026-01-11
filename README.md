# Shivam Jain - Portfolio Website

A modern, high-performance React portfolio showcasing technical depth and measurable impact.

## Features

- **Modern Tech Stack**: React + Vite, Tailwind CSS, Framer Motion
- **Performance Optimized**: Lighthouse Performance 90+, Accessibility 95+
- **Smooth Animations**: Framer Motion with reduced-motion support
- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Accessibility First**: Keyboard navigation, ARIA labels, focus management

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app/
│   └── App.jsx              # Main app component with SEO
├── components/
│   ├── Navbar.jsx           # Sticky navigation with scroll spy
│   ├── Footer.jsx           # Footer with back-to-top
│   ├── Section.jsx          # Reusable section wrapper
│   ├── Button.jsx           # Button with variants
│   ├── Card.jsx             # Card with glass effect
│   └── Badge.jsx            # Skill/tech badges
├── sections/
│   ├── Hero.jsx             # Hero section with CTAs
│   ├── About.jsx            # About me section
│   ├── Experience.jsx       # Work experience timeline
│   ├── Projects.jsx         # Featured projects with filters
│   ├── Skills.jsx           # Skills categorized
│   ├── Certifications.jsx   # Certifications showcase
│   ├── Achievements.jsx     # Awards and achievements
│   ├── Education.jsx        # Educational background
│   └── Contact.jsx          # Contact form and info
├── data/
│   ├── profile.js           # Personal information
│   ├── experience.js        # Work history and education
│   ├── projects.js          # Project details
│   └── skills.js            # Skills and technologies
├── hooks/
│   ├── useReducedMotion.js  # Detect motion preferences
│   └── useScrollSpy.js      # Track active section
└── styles/
    └── globals.css          # Global styles and utilities
```

## Customization

### Update Content

All content is stored in `/src/data/` files:

- **profile.js**: Personal information, contact details, about text
- **experience.js**: Work history, education, certifications, achievements
- **projects.js**: Project details, tech stack, links
- **skills.js**: Technologies organized by category

### Update Links

1. Edit `src/data/profile.js` to update GitHub, LinkedIn, and resume URLs
2. Add your resume PDF to `/public/resume.pdf`
3. Update social links in multiple sections

### Add Project Images

1. Add images to `/public/projects/` folder
2. Reference them in `src/data/projects.js`

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#06b6d4', // cyan-500
    // ...
  },
  accent: {
    DEFAULT: '#10b981', // emerald-500
    // ...
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy with default settings

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Performance Tips

- Optimize images (use WebP/AVIF formats)
- Add lazy loading for images
- Keep bundle size small
- Use production build for deployment

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

## License

MIT License - feel free to use this portfolio as a template for your own!

## Built With

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [react-helmet-async](https://github.com/staylor/react-helmet-async) - SEO

---

**Built by Shivam Jain** | [GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourusername)
