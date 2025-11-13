# The Chief Brief Landing Page

A high-converting landing page for The Chief Brief membership program featuring FSU branding and Stripe checkout integration.

## Features

- **Hero Section**: Compelling headline with value proposition and primary CTA
- **Benefits Section**: Highlights membership value including weekly ticket giveaways and exclusive discounts
- **Teased Offers Section**: Shows category hints without revealing specific discounts
- **Testimonials Section**: Social proof from FSU students, alumni, and fans
- **Final CTA Section**: Strong call-to-action with detailed membership benefits
- **Footer**: Links, social media, and legal information

## Tech Stack

- **React 19** with TypeScript
- **Vite 5** for blazing fast builds
- **Tailwind CSS v4** with custom FSU theme
- **Responsive Design** - Mobile and desktop optimized

## FSU Brand Colors

- **Garnet**: `#782F40` (Primary), `#5D1725` (Dark), `#9D4F5F` (Light)
- **Gold**: `#CEB888` (Primary), `#B39A5C` (Dark), `#E8D7B0` (Light)

## Development

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

## Stripe Integration

To update the Stripe checkout URL, edit the `STRIPE_CHECKOUT_URL` constant in `src/App.tsx`:

```typescript
const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/your-actual-link'
```

## Deployment

The project is configured for Netlify deployment with:
- Automatic SPA routing via `netlify.toml`
- Node 18 runtime
- Optimized production builds

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Hero section with main CTA
│   ├── Benefits.tsx       # Membership benefits grid
│   ├── TeasedOffers.tsx   # Teased discount categories
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── FinalCTA.tsx       # Final call-to-action section
│   └── Footer.tsx         # Footer with links and info
├── App.tsx                # Main app component
├── main.tsx               # Entry point
├── index.css              # Tailwind imports and custom styles
└── vite-env.d.ts          # TypeScript declarations
```

## Customization

### Colors
Edit `tailwind.config.js` to modify the FSU color palette.

### Content
Update the content in each component file under `src/components/`.

### Animations
Custom animations are defined in `src/index.css` including:
- `animate-fade-in`: Fade in effect
- `animate-slide-up`: Slide up with fade
- `animate-float`: Floating animation

## License

All rights reserved © The Chief Brief
