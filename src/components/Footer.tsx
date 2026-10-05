import React from 'react';
import { Dumbbell, Phone, MapPin, Navigation, ArrowUp, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08040d] border-t border-purple-950 text-neutral-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-purple-950">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-yellow-400 text-purple-950 font-black flex items-center justify-center text-sm shadow-md">
                PF
              </div>
              <span className="font-display font-black text-xl text-white uppercase tracking-tight">
                Planet Fitness
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {GYM_INFO.tagline}. Home of the Judgement Free Zone®, where everyone can feel comfortable in a clean, non-intimidating club.
            </p>
            <div className="text-xs text-purple-300 font-mono">
              4 Liberty Lane West · Hampton, NH 03842
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 font-semibold">
              Explore Club
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" className="hover:text-yellow-400 transition-colors">Club Overview</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Amenities & Free Fitness Training</a></li>
              <li><a href="#tour" className="hover:text-yellow-400 transition-colors">Club Tour & Black Card Spa®</a></li>
              <li><a href="#crowd-meter" className="hover:text-yellow-400 transition-colors">PF Live Crowd Meter</a></li>
              <li><a href="#memberships" className="hover:text-yellow-400 transition-colors">Memberships ($10/mo & Black Card)</a></li>
              <li><a href="#reviews" className="hover:text-yellow-400 transition-colors">Member Reviews (4.4★)</a></li>
            </ul>
          </div>

          {/* Services Listed */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 font-semibold">
              Popular Perks
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-neutral-400">30-Minute Express Circuit</span></li>
              <li><span className="text-neutral-400">PF Black Card Spa® HydroMassage</span></li>
              <li><span className="text-neutral-400">Total Body Enhancement Booth</span></li>
              <li><span className="text-neutral-400">Free In-Club Fitness Training (PE@PF)</span></li>
              <li><span className="text-neutral-400">Clean Showers & Day Lockers</span></li>
              <li><span className="text-neutral-400">Bring a Guest Anytime</span></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 font-semibold">
              Hampton, NH Club
            </h4>
            <div className="text-xs space-y-1.5">
              <div className="text-white font-mono">Tel: {GYM_INFO.telephone}</div>
              <div className="text-white font-mono">Mobile: {GYM_INFO.mobile}</div>
              <div>
                <a href={`mailto:${GYM_INFO.email}`} className="text-yellow-400 font-mono hover:underline">
                  {GYM_INFO.email}
                </a>
              </div>
              <div className="text-purple-200">Mon–Fri: Open 24 Hours</div>
              <div className="text-neutral-400">Sat–Sun: 7:00 AM – 7:00 PM</div>
            </div>
            <div className="pt-2">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-yellow-400 hover:underline font-medium"
              >
                <span>Directions to 4 Liberty Lane West</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Planet Fitness. All rights reserved. Judgement Free Zone® is a registered trademark.
          </div>

          <div className="flex items-center gap-4">
            <span>Showers & Restrooms Available</span>
            <span className="text-purple-900">·</span>
            <span>Hampton, NH 03842</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-purple-950/60 hover:bg-purple-900 text-neutral-400 hover:text-white transition-colors"
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
