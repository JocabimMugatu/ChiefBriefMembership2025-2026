# Netlify Vite App

This repository contains a minimal [Vite](https://vitejs.dev/) application configured for seamless deployment on [Netlify](https://www.netlify.com/).

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment on Netlify

Deployment settings are defined in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `18`
- **SPA routing:** All routes are redirected to `index.html`

### Environment Variables

If your application integrates with Stripe, configure the following variables in Netlify (Site settings → Build & deploy → Environment):

- `VITE_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

Never commit real secret values to the repository. You can override the placeholder values declared in `netlify.toml` through the Netlify dashboard for each environment (production, deploy previews, etc.).

## SPA Routing

The Netlify configuration contains a catch-all redirect so that client-side routing in this Single Page Application works correctly. All routes will serve the generated `index.html` file.
