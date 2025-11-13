# The Chief Brief - FSU Membership Landing Page

A high-converting landing page for The Chief Brief membership program featuring FSU branding and Stripe checkout integration.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- FSU Brand Colors: Garnet & Gold

## Features

- 🎯 Hero section with compelling value proposition
- 💎 Benefits showcase with animated cards
- 🎁 Teased offers section (category previews)
- 💬 Social proof with testimonials
- 🚀 Multiple CTAs throughout
- 📱 Fully responsive design
- ✨ Smooth animations and micro-interactions
- ⚡ Optimized for fast load times

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Update Stripe Checkout URL

Edit the file `src/config/stripe.ts` and replace the placeholder URL with your actual Stripe checkout URL:

```typescript
export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/YOUR_ACTUAL_CHECKOUT_URL';
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with main CTA
│   ├── Benefits.tsx      # Membership benefits grid
│   ├── TeasedOffers.tsx  # Offer category teasers
│   ├── Testimonials.tsx  # Social proof section
│   ├── CTA.tsx          # Final call-to-action
│   └── Footer.tsx       # Footer with links
├── config/
│   └── stripe.ts        # Stripe configuration
├── App.tsx              # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles & Tailwind
```

## Customization

### Colors

FSU brand colors are defined in `tailwind.config.js`:
- **Garnet**: Primary brand color
- **Gold**: Secondary/accent color

### Animations

Custom animations are configured in Tailwind config:
- fade-in
- slide-up
- slide-in-left/right
- scale-in
- float

### Content

Update content in the respective component files:
- Modify testimonials in `Testimonials.tsx`
- Update benefits in `Benefits.tsx`
- Change offer categories in `TeasedOffers.tsx`

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## License

ISC
