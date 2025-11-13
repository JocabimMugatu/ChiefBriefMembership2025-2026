const testimonials = [
  {
    name: 'Michael R.',
    role: 'FSU Alumni',
    image: '👨‍🎓',
    quote: 'I won tickets to the Miami game in my first month! The Chief Brief membership has already paid for itself multiple times over.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    role: 'Season Ticket Holder',
    image: '👩‍💼',
    quote: 'The exclusive discounts and weekly giveaways make this membership incredible value. Best decision I made this season!',
    rating: 5,
  },
  {
    name: 'David L.',
    role: 'FSU Parent',
    image: '👨‍👦',
    quote: 'My son and I love going to games together. The Chief Brief helps make it affordable and the community is amazing.',
    rating: 5,
  },
  {
    name: 'Jessica M.',
    role: 'Graduate Student',
    image: '👩‍🎓',
    quote: 'Between the newsletter insights and member discounts, I feel more connected to FSU than ever. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Robert T.',
    role: 'Local Business Owner',
    image: '👨‍💼',
    quote: 'The networking opportunities and exclusive access make this membership worth every penny. Go Noles!',
    rating: 5,
  },
  {
    name: 'Amanda P.',
    role: 'FSU Faculty',
    image: '👩‍🏫',
    quote: 'I love supporting FSU and The Chief Brief makes it easy to stay connected. The perks are just a bonus!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-garnet-600 mb-4">
            Loved by Seminoles Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of passionate FSU fans who are already enjoying their membership benefits.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-garnet-600">5,000+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-garnet-600">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-garnet-600">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gold-400 transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-garnet-600">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-garnet-600 to-garnet-800 rounded-3xl p-12 text-white text-center animate-fade-in">
          <div className="text-6xl mb-6">🏆</div>
          <h3 className="text-3xl font-display font-bold mb-4">
            Join the Winning Team
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss out on weekly ticket giveaways, exclusive discounts, and the ultimate FSU fan experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold">
              ✓ Cancel Anytime
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold">
              ✓ Instant Access
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold">
              ✓ No Hidden Fees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
