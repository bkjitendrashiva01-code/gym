import React, { useState } from 'react';
import { Dumbbell, Bookmark, Share2, Menu, X, Check, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeaderProps {
  onOpenDayPass: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
  onShare: () => void;
  sharedToast: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDayPass,
  isSaved,
  onToggleSave,
  onShare,
  sharedToast
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0714]/95 backdrop-blur-md border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group text-white tracking-wider"
        >
          <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-purple-950 font-black shadow-md shadow-yellow-400/20 group-hover:scale-105 transition-transform">
            <span className="font-display font-black text-lg">PF</span>
          </div>
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-yellow-400 transition-colors uppercase">
            Planet Fitness
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#overview" className="hover:text-yellow-400 transition-colors">Overview</a>
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#tour" className="hover:text-yellow-400 transition-colors">Club Tour</a>
          <a href="#crowd-meter" className="hover:text-yellow-400 transition-colors">Crowd Meter</a>
          <a href="#memberships" className="hover:text-yellow-400 transition-colors">Memberships</a>
          <a href="#reviews" className="hover:text-yellow-400 transition-colors">Reviews</a>
          <a href="#location" className="hover:text-yellow-400 transition-colors">Hampton, NH</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSave}
            title={isSaved ? "Saved to your clubs" : "Save this club"}
            className={`p-2.5 rounded-lg border transition-all ${
              isSaved 
                ? 'bg-yellow-400/10 border-yellow-400/40 text-yellow-400' 
                : 'bg-purple-950/40 border-purple-900/50 text-neutral-400 hover:text-white hover:border-purple-700'
            }`}
            aria-label="Save club"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-yellow-400' : ''}`} />
          </button>

          <button
            onClick={onShare}
            title="Share club details"
            className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-900/50 text-neutral-400 hover:text-white hover:border-purple-700 transition-all relative"
            aria-label="Share club"
          >
            {sharedToast ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenDayPass}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-bold text-purple-950 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-yellow-400/20 active:translate-y-0.5"
          >
            Join for $10 / Free Pass
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-900/40 bg-[#0d0714] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-purple-900/30 hover:text-yellow-400"
          >
            Overview
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-purple-900/30 hover:text-yellow-400"
          >
            Services & Amenities
          </a>
          <a
            href="#tour"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-purple-900/30 hover:text-yellow-400"
          >
            Virtual Tour & Black Card Spa
          </a>
          <a
            href="#crowd-meter"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-purple-900/30 hover:text-yellow-400"
          >
            PF Crowd Meter
          </a>
          <a
            href="#memberships"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-purple-900/30 hover:text-yellow-400"
          >
            Memberships ($10/mo & Black Card)
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-purple-900/30 hover:text-yellow-400"
          >
            Google Reviews ({GYM_INFO.reviewCount})
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-purple-900/30 hover:text-yellow-400"
          >
            4 Liberty Lane West, Hampton, NH
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDayPass();
              }}
              className="w-full text-center px-4 py-3 text-sm font-bold text-purple-950 bg-yellow-400 rounded-lg shadow-md"
            >
              Get Free Pass / Join for $10
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
