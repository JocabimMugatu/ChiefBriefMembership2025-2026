const offerCategories = [
  {
    category: 'Game Day',
    icon: '🏈',
    teaser: 'Premium discounts on game day essentials',
    gradient: 'from-garnet-500 to-garnet-700',
  },
  {
    category: 'Dining',
    icon: '🍽️',
    teaser: 'Exclusive deals at top Tallahassee restaurants',
    gradient: 'from-gold-500 to-gold-700',
  },
  {
    category: 'FSU Gear',
    icon: '👕',
    teaser: 'Special pricing on official merchandise',
    gradient: 'from-garnet-600 to-garnet-800',
  },
  {
    category: 'Entertainment',
    icon: '🎭',
    teaser: 'Members-only access to local events',
    gradient: 'from-gold-600 to-gold-800',
  },
  {
    category: 'Travel',
    icon: '✈️',
    teaser: 'Discounted rates for away games',
    gradient: 'from-garnet-500 to-garnet-700',
  },
  {
    category: 'Services',
    icon: '⚙️',
    teaser: 'Special offers on local services',
    gradient: 'from-gold-500 to-gold-700',
  },
];

export default function TeasedOffers() {
  return (
    <section id="offers" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-garnet-100 text-garnet-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-garnet-600 rounded-full animate-pulse"></span>
            MEMBER EXCLUSIVE
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-garnet-600 mb-4">
            Unlock Exclusive Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Members gain access to a rotating selection of premium discounts across multiple categories. New offers added regularly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerCategories.map((offer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-50"></div>
              
              <div className="relative p-8 text-white">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {offer.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-3">
                  {offer.category}
                </h3>
                
                <p className="text-white/90 mb-6">
                  {offer.teaser}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    🔒 Members Only
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gradient-to-r from-garnet-600 to-garnet-800 rounded-3xl p-12 text-white animate-fade-in">
          <h3 className="text-3xl font-display font-bold mb-4">
            More Offers Coming Soon
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're constantly partnering with new local businesses to bring you the best deals in Tallahassee and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">+ Fitness & Wellness</span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">+ Auto Services</span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">+ Home & Garden</span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">+ More...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
