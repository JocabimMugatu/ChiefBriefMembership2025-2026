# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Stripe Checkout URL

**IMPORTANT:** Before deploying, you must update the Stripe checkout URL.

Open `src/config/stripe.ts` and replace the placeholder URL with your actual Stripe checkout URL:

```typescript
// Before:
export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/test_PLACEHOLDER';

// After:
export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/YOUR_ACTUAL_CHECKOUT_URL';
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:5173 to see your landing page.

### 4. Build for Production
```bash
npm run build
```

The production files will be in the `dist/` folder.

## 🎨 Customization

### Update Content

**Hero Section** (`src/components/Hero.tsx`)
- Headline and subheadline
- CTA button text
- Stats (giveaways, discounts, support)

**Benefits Section** (`src/components/Benefits.tsx`)
- Benefits list with icons, titles, descriptions
- Highlight tags

**Teased Offers** (`src/components/TeasedOffers.tsx`)
- Offer categories and teasers
- Icons and gradients

**Testimonials** (`src/components/Testimonials.tsx`)
- Customer quotes
- Names and roles
- Stats (members, rating, recommendations)

**Footer** (`src/components/Footer.tsx`)
- Social media links
- Quick links
- Legal links

### Update Colors

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  garnet: {
    DEFAULT: '#782F40',
    // ... other shades
  },
  gold: {
    DEFAULT: '#CEB888',
    // ... other shades
  },
}
```

### Update Fonts

Fonts are imported in `index.html` and configured in `tailwind.config.ts`.

Current fonts:
- **Body:** Inter
- **Display/Headings:** Poppins

## 📱 Mobile Responsive

The landing page is fully responsive and optimized for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## ⚡ Performance

The build is optimized for:
- Fast load times
- Smooth animations
- Lazy loading
- Code splitting
- Asset optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms
Build the project with `npm run build` and upload the `dist/` folder to any static hosting service.

## 🔧 Troubleshooting

### Build Errors
- Make sure Node.js version is 18+ 
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Styling Issues
- Tailwind v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- Make sure `@tailwindcss/postcss` is installed

### Stripe Not Working
- Verify the Stripe checkout URL is correct in `src/config/stripe.ts`
- Test the URL directly in your browser
- Check browser console for errors

## 📞 Support

For issues or questions, refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [Stripe Checkout Documentation](https://stripe.com/docs/payments/checkout)
