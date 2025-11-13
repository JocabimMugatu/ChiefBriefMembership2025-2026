# Stripe Checkout URL Setup

## Current Status
The landing page is configured with a placeholder Stripe checkout URL.

## How to Update the Stripe URL

1. Open `src/App.tsx`
2. Find the `STRIPE_CHECKOUT_URL` constant at the top of the file:
   ```typescript
   const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/placeholder'
   ```
3. Replace `'https://buy.stripe.com/placeholder'` with your actual Stripe checkout URL
4. Save the file
5. Rebuild and deploy:
   ```bash
   npm run build
   ```

## Where the URL is Used

The Stripe checkout URL is passed as a prop to the following components:
- **Hero Component**: Main CTA button "Join The Chief Brief"
- **TeasedOffers Component**: "See All Offers" button
- **FinalCTA Component**: "Join The Chief Brief Now" button

All CTA buttons throughout the page will automatically use the updated URL.

## Creating Your Stripe Checkout Link

1. Log into your Stripe Dashboard
2. Go to Products and create your membership product ($9.99/month)
3. Create a Payment Link for the product
4. Configure the payment link settings:
   - Enable recurring billing
   - Set up success/cancel URLs
   - Add any custom fields needed
5. Copy the generated checkout URL
6. Paste it into `src/App.tsx` as described above

## Testing

After updating the URL:
1. Run `npm run dev` to test locally
2. Click all CTA buttons to verify they link to the correct Stripe checkout
3. Complete a test transaction in test mode
4. Deploy to production once verified
