interface FinalCTAProps {
  checkoutUrl: string
}

export default function FinalCTA({ checkoutUrl }: FinalCTAProps) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-garnet via-garnet-dark to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-garnet-light rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
          Ready to Experience
          <span className="block text-gold mt-2">The Chief Brief?</span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-gold-light mb-8 max-w-3xl mx-auto">
          Join thousands of Seminoles who are already winning tickets, saving money, and connecting with the FSU community
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 mb-12 border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg mb-1">Weekly Ticket Drawings</h4>
                  <p className="text-gray-300 text-sm">Automatic entry every week for FSU game tickets</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg mb-1">Exclusive Discounts</h4>
                  <p className="text-gray-300 text-sm">Save on dining, apparel, entertainment & more</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg mb-1">VIP Community Access</h4>
                  <p className="text-gray-300 text-sm">Connect with fellow Seminoles at exclusive events</p>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg mb-1">Mobile-Friendly</h4>
                  <p className="text-gray-300 text-sm">Access everything right from your phone</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg mb-1">Cancel Anytime</h4>
                  <p className="text-gray-300 text-sm">No long-term commitment required</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg mb-1">Instant Access</h4>
                  <p className="text-gray-300 text-sm">Start using benefits immediately after joining</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="mb-6">
              <div className="text-5xl font-black text-gold mb-2">$9.99<span className="text-2xl text-gray-300">/month</span></div>
              <p className="text-gray-300">Less than a burger and fries. Way more value.</p>
            </div>
            
            <a
              href={checkoutUrl}
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-garnet bg-gold hover:bg-gold-light transform hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/50"
            >
              Join The Chief Brief Now
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <p className="mt-4 text-sm text-gray-400">
              Secure checkout powered by Stripe • Cancel anytime
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="font-bold mb-1">Secure</h4>
            <p className="text-sm text-gray-300">Safe payment processing</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold mb-1">Instant</h4>
            <p className="text-sm text-gray-300">Access benefits immediately</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-2">💯</div>
            <h4 className="font-bold mb-1">Guaranteed</h4>
            <p className="text-sm text-gray-300">No risk, cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
