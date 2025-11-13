export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/test_PLACEHOLDER';

export const navigateToCheckout = () => {
  window.location.href = STRIPE_CHECKOUT_URL;
};
