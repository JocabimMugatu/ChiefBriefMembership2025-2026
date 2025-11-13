import Hero from './components/Hero'
import Benefits from './components/Benefits'
import TeasedOffers from './components/TeasedOffers'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/placeholder'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero checkoutUrl={STRIPE_CHECKOUT_URL} />
      <Benefits />
      <TeasedOffers checkoutUrl={STRIPE_CHECKOUT_URL} />
      <Testimonials />
      <FinalCTA checkoutUrl={STRIPE_CHECKOUT_URL} />
      <Footer />
    </div>
  )
}

export default App
