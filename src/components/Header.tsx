import { useState, useEffect } from 'react';
import { navigateToCheckout } from '../config/stripe';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className={`text-2xl font-display font-bold transition-colors ${
              isScrolled ? 'text-garnet-600' : 'text-white'
            }`}>
              The Chief Brief
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className={`font-semibold transition-colors hover:text-gold-500 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Benefits
            </a>
            <a
              href="#offers"
              className={`font-semibold transition-colors hover:text-gold-500 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Offers
            </a>
            <a
              href="#testimonials"
              className={`font-semibold transition-colors hover:text-gold-500 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Testimonials
            </a>
          </div>

          <button
            onClick={navigateToCheckout}
            className={`font-bold px-6 py-2.5 sm:px-8 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? 'bg-garnet-600 hover:bg-garnet-700 text-white shadow-lg'
                : 'bg-gold hover:bg-gold-400 text-garnet-900 shadow-xl'
            }`}
          >
            <span className="hidden sm:inline">Join Now</span>
            <span className="sm:hidden">Join</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
