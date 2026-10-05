import React, { useState } from 'react';
import { Dumbbell, Bookmark, Share2, Menu, X, Check } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 group text-white tracking-wider"
        >
          <div className="w-8 h-8 rounded-md bg-amber-400 flex items-center justify-center text-neutral-950 font-bold transition-transform group-hover:scale-105">
            <Dumbbell className="w-5 h-5" />
          </div>
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">
            Gold's Gym Venice
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#tour" className="hover:text-amber-400 transition-colors">Facility Tour</a>
          <a href="#popular-times" className="hover:text-amber-400 transition-colors">Popular Times</a>
          <a href="#passes" className="hover:text-amber-400 transition-colors">Passes</a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
          <a href="#location" className="hover:text-amber-400 transition-colors">Location</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSave}
            title={isSaved ? "Saved to your list" : "Save this gym"}
            className={`p-2.5 rounded-lg border transition-all ${
              isSaved 
                ? 'bg-amber-400/10 border-amber-400/40 text-amber-400' 
                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
            aria-label="Save gym"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400' : ''}`} />
          </button>

          <button
            onClick={onShare}
            title="Share gym details"
            className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all relative"
            aria-label="Share gym"
          >
            {sharedToast ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenDayPass}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-amber-400/20 active:translate-y-0.5"
          >
            Get $50 Day Pass
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
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400"
          >
            Overview
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400"
          >
            Services & Amenities
          </a>
          <a
            href="#tour"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400"
          >
            Facility Tour & Video Clips
          </a>
          <a
            href="#popular-times"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400"
          >
            Popular Times
          </a>
          <a
            href="#passes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400"
          >
            Passes & Memberships
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400"
          >
            Google Reviews ({GYM_INFO.reviewCount})
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400"
          >
            Hours & Location
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDayPass();
              }}
              className="w-full text-center px-4 py-3 text-sm font-bold text-neutral-950 bg-amber-400 rounded-lg shadow-md"
            >
              Get $50 Day Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
