export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'FSU Senior',
      content: 'I won tickets to the Miami game in my second week as a member! The Chief Brief has already paid for itself ten times over. Plus the dining discounts are perfect for a college budget.',
      rating: 5,
      avatar: '👩‍🎓'
    },
    {
      name: 'Mike R.',
      role: 'FSU Alumni',
      content: 'As an alum who still lives in Tally, this membership keeps me connected to the FSU community. The exclusive events and discounts make it so worth it. Go Noles!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Jessica T.',
      role: 'Graduate Student',
      content: 'The savings on food alone cover my membership cost. And getting entered for free tickets every week? That\'s just the cherry on top. Best $10 I spend each month.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'David L.',
      role: 'FSU Staff',
      content: 'I love supporting local businesses and saving money at the same time. The Chief Brief makes it easy to discover new spots around Tallahassee while getting great deals.',
      rating: 5,
      avatar: '👨‍🏫'
    },
    {
      name: 'Emily K.',
      role: 'FSU Junior',
      content: 'Finally got to experience a game at Doak thanks to winning tickets! The whole process was seamless and the community is amazing. Highly recommend to all Seminoles.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Chris B.',
      role: 'Local Fan',
      content: 'Not a student but a huge FSU fan. This membership gives me access to the FSU community and helps me save on apparel and dining. Worth every penny!',
      rating: 5,
      avatar: '🙋‍♂️'
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gold text-garnet font-bold text-sm uppercase tracking-wider rounded-full mb-6">
            What Members Say
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-garnet mb-4">
            Join Thousands of Happy Seminoles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why FSU students, alumni, and fans love their Chief Brief membership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-garnet hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-garnet text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-garnet rounded-3xl p-8 sm:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Become Part of the Story
            </h3>
            <p className="text-xl text-gold-light mb-6">
              Join our growing community of FSU students, alumni, and fans who are making the most of their Seminole experience
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-gold mb-2">5,000+</div>
                <div className="text-sm text-gray-200">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gold mb-2">500+</div>
                <div className="text-sm text-gray-200">Tickets Given Away</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gold mb-2">50+</div>
                <div className="text-sm text-gray-200">Partner Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
