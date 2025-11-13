export default function Footer() {
  return (
    <footer className="bg-garnet-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">The Chief Brief</h3>
            <p className="text-white/70 mb-4">
              Your premier destination for exclusive FSU ticket giveaways, discounts, and Seminoles insider content.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#benefits" className="hover:text-gold transition-colors">Benefits</a></li>
              <li><a href="#offers" className="hover:text-gold transition-colors">Exclusive Offers</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} The Chief Brief. All rights reserved.</p>
          <p className="mt-2">Not officially affiliated with Florida State University.</p>
        </div>
      </div>
    </footer>
  );
}
