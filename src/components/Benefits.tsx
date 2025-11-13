import { navigateToCheckout } from '../config/stripe';

const benefits = [
  {
    icon: '🎟️',
    title: 'Weekly Ticket Giveaways',
    description: 'Enter to win tickets to every FSU home game. Multiple winners every week with priority access for members.',
    highlight: 'Value: $2000+/season',
  },
  {
    icon: '💎',
    title: 'Exclusive Discounts',
    description: 'Access premium discounts on FSU gear, local restaurants, entertainment, and game day experiences.',
    highlight: 'Save $1000+ annually',
  },
  {
    icon: '🏆',
    title: 'VIP Game Day Experience',
    description: 'Unlock special parking, tailgate access, and exclusive pre-game content and interviews.',
    highlight: 'Members-only perks',
  },
  {
    icon: '📰',
    title: 'The Chief Brief Newsletter',
    description: 'Get insider FSU news, analysis, and recruiting updates delivered to your inbox before anyone else.',
    highlight: 'Daily insights',
  },
  {
    icon: '🤝',
    title: 'Community Access',
    description: 'Join an exclusive community of passionate Seminoles fans with members-only forums and events.',
    highlight: '5000+ members',
  },
  {
    icon: '⚡',
    title: 'First Access',
    description: 'Be the first to know about special events, limited offers, and exclusive Seminoles experiences.',
    highlight: 'Always first',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-garnet-600 mb-4">
            Why Join The Chief Brief?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to elevate your FSU fan experience, all in one exclusive membership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-garnet-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-garnet-600 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="inline-block bg-gold-100 text-garnet-700 text-sm font-semibold px-4 py-2 rounded-full">
                  {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <button
            onClick={navigateToCheckout}
            className="bg-garnet-600 hover:bg-garnet-700 text-white font-bold text-lg px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Start Your Membership Today
          </button>
        </div>
      </div>
    </section>
  );
}
