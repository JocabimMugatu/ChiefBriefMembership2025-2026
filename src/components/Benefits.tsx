export default function Benefits() {
  const benefits = [
    {
      icon: '🎫',
      title: 'Weekly FSU Ticket Giveaways',
      description: 'Every week, Chief Brief members are entered to win premium FSU game tickets. From football to basketball, never miss the action at Doak Campbell or the Tucker Center.',
      highlight: 'New winners every week'
    },
    {
      icon: '🍔',
      title: 'Exclusive Dining Discounts',
      description: 'Save on your favorite Tallahassee restaurants and eateries. Enjoy special member-only pricing at participating locations near campus and downtown.',
      highlight: 'Up to 25% off'
    },
    {
      icon: '👕',
      title: 'FSU Apparel & Gear Savings',
      description: 'Rep the garnet and gold with pride while saving money. Get exclusive discounts on officially licensed FSU merchandise, apparel, and accessories.',
      highlight: 'Members-only pricing'
    },
    {
      icon: '🎉',
      title: 'VIP Event Access',
      description: 'Be the first to know about special FSU events, watch parties, and community gatherings. Connect with fellow Seminoles and celebrate together.',
      highlight: 'Priority invitations'
    },
    {
      icon: '📱',
      title: 'Mobile-First Experience',
      description: 'Access all your benefits, track your ticket entries, and redeem offers directly from your phone. Everything you need in one convenient place.',
      highlight: 'Always accessible'
    },
    {
      icon: '🏆',
      title: 'Support FSU Community',
      description: 'Your membership helps strengthen the FSU community and supports local businesses that love the Seminoles as much as you do.',
      highlight: 'Make an impact'
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-garnet mb-4">
            Membership That Pays For Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For less than the price of a lunch, get access to incredible benefits that save you money and enhance your FSU experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-garnet hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-garnet mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="inline-block px-4 py-2 bg-gold/10 text-garnet font-semibold text-sm rounded-full">
                {benefit.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-garnet to-garnet-dark rounded-3xl text-white text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            One membership, countless benefits
          </h3>
          <p className="text-xl text-gold-light mb-6 max-w-2xl mx-auto">
            From game day excitement to everyday savings, The Chief Brief is your key to experiencing FSU to the fullest.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
