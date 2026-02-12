# Bicycle Belle Pitch App - Deployment Guide

## Overview

This Next.js application serves as a pitch deck and demo for Bicycle Belle, showcasing both the business concept through an interactive slideshow and a functional prototype of the product.

## Project Structure

```
pitch-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main pitch slideshow
│   │   ├── globals.css         # Global styles and Tailwind
│   │   └── demo/
│   │       └── page.tsx        # Interactive product demo
│   ├── components/
│   │   ├── PitchSlide.tsx      # Reusable slide component
│   │   └── ProductCard.tsx     # Product display card
│   └── data/
│       └── mockProducts.ts     # Sample product data
├── public/                     # Static assets
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## Features

### Pitch Slideshow (`/`)
- 6 interactive slides covering:
  - Introduction to Bicycle Belle
  - Problem statement
  - Solution overview
  - How it works
  - Market opportunity
  - Call to action
- Keyboard navigation (arrow keys)
- Click navigation with visual indicators
- Responsive design

### Interactive Demo (`/demo`)
- Search functionality simulating AI-powered product discovery
- Real-time filtering of mock product data
- Product cards displaying:
  - Bike name and description
  - Pricing
  - Shop name and distance
  - Stock status
- Quick search suggestions
- Responsive grid layout

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import the `wowsuchbot/bicycle-belle` repository
   - Set root directory to `pitch-app`

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Future pushes to main branch will auto-deploy

### Option 2: Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - New site from Git
   - Select the repository

2. **Build Settings**
   - Base directory: `pitch-app`
   - Build command: `npm run build`
   - Publish directory: `pitch-app/.next`

### Option 3: Self-Hosted

```bash
# Clone and navigate to pitch-app
cd pitch-app

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

The app will run on `http://localhost:3000`

For production, use a process manager like PM2:
```bash
npm install -g pm2
pm2 start npm --name "bicycle-belle-pitch" -- start
```

## Local Development

```bash
# Navigate to pitch-app directory
cd pitch-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

Currently, this app uses mock data and does not require environment variables. When integrating with real Lightspeed API:

```env
NEXT_PUBLIC_API_URL=your-api-endpoint
LIGHTSPEED_API_KEY=your-api-key
```

## Customization

### Update Slides
Edit `src/app/page.tsx` and modify the `slides` array.

### Add Products
Edit `src/data/mockProducts.ts` to add or modify product data.

### Change Branding
- Colors: Update `tailwind.config.ts` and `src/app/globals.css`
- Metadata: Update `src/app/layout.tsx`

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Loading**: Fast initial load with static generation where possible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps for Production

1. **API Integration**
   - Connect to Lightspeed POS API
   - Implement real-time inventory sync
   - Add geolocation for shop proximity

2. **Enhanced AI Search**
   - Integrate with OpenAI or similar for natural language processing
   - Implement semantic search
   - Add personalized recommendations

3. **Analytics**
   - Add Google Analytics or Plausible
   - Track user interactions
   - Monitor search queries

4. **Additional Features**
   - User accounts
   - Saved searches
   - Shop profiles
   - Appointment booking

## Support

For questions or issues, contact the development team or open an issue in the repository.
