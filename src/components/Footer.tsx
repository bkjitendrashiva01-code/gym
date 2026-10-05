import React from 'react';
import { Dumbbell, Phone, MapPin, Navigation, ArrowUp } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-amber-400 text-neutral-950 font-bold flex items-center justify-center">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xl text-white uppercase tracking-tight">
                Gold's Gym Venice
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              The Mecca of Bodybuilding. Established in Venice, California. Home to Olympic champions, IFBB icons, and lifelong iron enthusiasts.
            </p>
            <div className="text-xs text-neutral-500 font-mono">
              360 Hampton Dr · Venice, CA 90291
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" className="hover:text-amber-400 transition-colors">Facility Overview</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services & Programs</a></li>
              <li><a href="#tour" className="hover:text-amber-400 transition-colors">Video Tour & Dumbbell Pit</a></li>
              <li><a href="#popular-times" className="hover:text-amber-400 transition-colors">Popular Times & Peak Hours</a></li>
              <li><a href="#passes" className="hover:text-amber-400 transition-colors">$50 Venice Day Pass</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Google Reviews (4.4★)</a></li>
            </ul>
          </div>

          {/* Services Listed */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 font-semibold">
              Amenities & Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-neutral-400">Outdoor Training Yard</span></li>
              <li><span className="text-neutral-400">Dumbbells Up to 300 lbs</span></li>
              <li><span className="text-neutral-400">GOLD'S 3D Body Scanner</span></li>
              <li><span className="text-neutral-400">Group Exercise & Cycle</span></li>
              <li><span className="text-neutral-400">Personal Training Staff</span></li>
              <li><span className="text-neutral-400">Showers, Saunas & Restrooms</span></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 font-semibold">
              Visit & Contact
            </h4>
            <div className="text-xs space-y-1.5">
              <div className="text-white font-mono">{GYM_INFO.phone}</div>
              <div className="text-neutral-400">Mon–Fri: 5:00 AM – 11:00 PM</div>
              <div className="text-neutral-400">Sat–Sun: 7:00 AM – 9:00 PM</div>
            </div>
            <div className="pt-2">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-medium"
              >
                <span>Google Maps Directions</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Gold's Gym Venice. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Shower & Restroom Available</span>
            <span className="text-neutral-700">·</span>
            <span>Venice, CA 90291</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
