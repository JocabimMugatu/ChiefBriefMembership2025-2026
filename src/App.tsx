import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import TeasedOffers from './components/TeasedOffers';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <TeasedOffers />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
