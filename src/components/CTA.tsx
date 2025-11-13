import { navigateToCheckout } from '../config/stripe';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-garnet-600 via-garnet-500 to-garnet-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            LIMITED SPOTS AVAILABLE
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 animate-slide-up">
            Ready to Experience FSU Like Never Before?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-slide-up animate-delay-200">
            Join The Chief Brief today and start winning tickets, saving money, and connecting with fellow Seminoles.
          </p>
          
          <div className="animate-slide-up animate-delay-400">
            <button
              onClick={navigateToCheckout}
              className="group relative bg-gold hover:bg-gold-400 text-garnet-900 font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gold/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Join Now</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
