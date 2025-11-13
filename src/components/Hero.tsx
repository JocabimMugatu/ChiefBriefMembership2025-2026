import { navigateToCheckout } from '../config/stripe';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-garnet-600 via-garnet-500 to-garnet-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 animate-slide-up">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gold-200 uppercase tracking-wide">Limited Time Offer</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight animate-slide-up animate-delay-200">
            Join The Chief Brief
            <span className="block text-gold mt-2">Elite FSU Membership</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-white/90 leading-relaxed animate-slide-up animate-delay-400">
            Unlock exclusive weekly ticket giveaways, premium discounts, and insider access to the ultimate Seminoles experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up animate-delay-600">
            <button
              onClick={navigateToCheckout}
              className="group relative bg-gold hover:bg-gold-400 text-garnet-900 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-gold/50"
            >
              <span className="relative z-10">Become a Member Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <a 
              href="#benefits"
              className="text-white font-semibold text-lg px-8 py-5 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12 animate-slide-up animate-delay-800">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-display font-bold text-gold">50+</div>
              <div className="text-sm text-white/80 mt-1">Weekly Giveaways</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-display font-bold text-gold">$1000+</div>
              <div className="text-sm text-white/80 mt-1">In Discounts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-display font-bold text-gold">24/7</div>
              <div className="text-sm text-white/80 mt-1">Member Support</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
