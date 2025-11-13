interface HeroProps {
  checkoutUrl: string
}

export default function Hero({ checkoutUrl }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-garnet via-garnet-dark to-black text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-garnet-light rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gold text-garnet-dark font-bold text-sm uppercase tracking-wider rounded-full shadow-lg">
              FSU Exclusive Membership
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Welcome to
            <span className="block text-gold mt-2">The Chief Brief</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gold-light font-light mb-8 max-w-3xl mx-auto">
            Your all-access pass to FSU game tickets, exclusive discounts, and insider perks
          </p>
          
          <div className="mb-12">
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Join Florida State's most passionate community and unlock weekly ticket giveaways, 
              exclusive savings on dining, apparel, and more—all while supporting the Seminole spirit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={checkoutUrl}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-garnet bg-gold hover:bg-gold-light transform hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/50"
              >
                Join The Chief Brief
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <div className="text-center sm:text-left">
                <p className="text-sm text-gold-light font-medium">Only $9.99/month</p>
                <p className="text-xs text-gray-300">Cancel anytime</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8 border-t border-gold/20">
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">🎟️</div>
              <h3 className="text-lg font-bold mb-1">Weekly Tickets</h3>
              <p className="text-sm text-gray-300">FSU game ticket giveaways every week</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">💰</div>
              <h3 className="text-lg font-bold mb-1">Exclusive Deals</h3>
              <p className="text-sm text-gray-300">Save on dining, apparel, and more</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">⚡</div>
              <h3 className="text-lg font-bold mb-1">Insider Access</h3>
              <p className="text-sm text-gray-300">First to know about special events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
