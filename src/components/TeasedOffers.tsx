interface TeasedOffersProps {
  checkoutUrl: string
}

export default function TeasedOffers({ checkoutUrl }: TeasedOffersProps) {
  const teasedCategories = [
    {
      category: '🍕 Food & Dining',
      hint: 'Popular pizza spots',
      blur: 'Wings, burgers, and more',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      category: '☕ Coffee & Cafes',
      hint: 'Your daily caffeine fix',
      blur: 'Local favorites',
      gradient: 'from-amber-600 to-yellow-500'
    },
    {
      category: '👕 FSU Apparel',
      hint: 'Official merchandise',
      blur: 'Jerseys, hats, accessories',
      gradient: 'from-garnet to-garnet-dark'
    },
    {
      category: '💪 Fitness & Wellness',
      hint: 'Stay in shape',
      blur: 'Gyms and studios',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      category: '🎮 Entertainment',
      hint: 'Fun activities',
      blur: 'Games, movies, more',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      category: '🛍️ Shopping',
      hint: 'Retail therapy',
      blur: 'Local businesses',
      gradient: 'from-blue-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-garnet text-gold font-bold text-sm uppercase tracking-wider rounded-full mb-6">
            Members-Only Perks
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-garnet mb-4">
            Unlock Exclusive Discounts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join now to discover all our partner offers and start saving at your favorite Tallahassee locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teasedCategories.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-garnet transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative">
                <div className="text-4xl mb-4">{item.category.split(' ')[0]}</div>
                <h3 className="text-xl font-bold text-garnet mb-2">
                  {item.category.substring(item.category.indexOf(' ') + 1)}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {item.hint}
                </p>
                <p className="text-gray-500 text-sm italic blur-sm group-hover:blur-0 transition-all duration-300">
                  {item.blur}
                </p>
                
                <div className="mt-4 inline-flex items-center text-garnet font-semibold text-sm group-hover:text-gold transition-colors">
                  <span>Join to unlock</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-garnet via-garnet-dark to-black rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                🔒 Full List Available to Members Only
              </h3>
              <p className="text-xl text-gold-light mb-8 max-w-2xl mx-auto">
                These are just a taste of what's available. Join The Chief Brief to unlock the complete directory of exclusive discounts and offers.
              </p>
              
              <a
                href={checkoutUrl}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-garnet bg-gold hover:bg-gold-light transform hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/50"
              >
                See All Offers
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </a>
              
              <p className="mt-6 text-sm text-gray-300">
                New partners and offers added regularly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
