import React, { useState } from 'react';
import { Star, MapPin, Phone, Navigation, Globe, Bookmark, Share2, Clock, Check, ShieldCheck, Sun } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ASSETS } from '../data/assetMap';

interface HeroProps {
  onOpenDayPass: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
  onShare: () => void;
  sharedToast: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDayPass,
  isSaved,
  onToggleSave,
  onShare,
  sharedToast
}) => {
  const [showHoursPopover, setShowHoursPopover] = useState(false);

  return (
    <section id="overview" className="relative w-full pt-4 pb-12 lg:pt-8 lg:pb-16 overflow-hidden">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Gold's Gym Venice exterior on Hampton Drive with outdoor workout yard"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-neutral-950/40 to-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Top unboxed metadata line (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-300 mb-4 font-medium">
          <div className="flex items-center gap-1.5 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white tabular-nums">{GYM_INFO.rating}</span>
            <span className="text-neutral-400">({GYM_INFO.reviewCount.toLocaleString()} Google Reviews)</span>
          </div>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="text-neutral-300">{GYM_INFO.category}</span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span>Venice Beach, California</span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="text-neutral-400">Shower & Restroom Facilities</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-4">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none text-balance">
            GOLD'S GYM <span className="text-amber-400">VENICE</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            {GYM_INFO.description}
          </p>
        </div>

        {/* Status & Operational info bar */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
          {/* Closed / Opens 5 AM status with popover */}
          <div className="relative">
            <button
              onClick={() => setShowHoursPopover(!showHoursPopover)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 text-neutral-200 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-semibold text-amber-400">{GYM_INFO.status}</span>
              <Clock className="w-3.5 h-3.5 text-neutral-400 ml-1" />
            </button>

            {showHoursPopover && (
              <div className="absolute left-0 mt-2 w-72 p-4 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-30 text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
                  <span className="font-semibold text-white">Weekly Operating Hours</span>
                  <span className="text-amber-400">Venice, CA (PT)</span>
                </div>
                <div className="space-y-1.5">
                  {GYM_INFO.standardHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-neutral-300">
                      <span className="text-neutral-400">{item.day}</span>
                      <span className="font-mono tabular-nums">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-2 border-t border-neutral-800 text-[11px] text-neutral-400">
                  Open early 7 days a week. Peak crowds typically form around 5 PM.
                </div>
              </div>
            )}
          </div>

          {/* Address with link */}
          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="underline decoration-neutral-700 hover:decoration-amber-400 underline-offset-4">
              {GYM_INFO.address}
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${GYM_INFO.phoneClean}`}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 transition-colors font-mono"
          >
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{GYM_INFO.phone}</span>
          </a>
        </div>

        {/* Action Controls Bar (Directly matching Google Listing actions from prompt: Website, Directions, Save, Share, Call) */}
        <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-neutral-800/80">
          
          {/* Primary Action: Get $50 Day Pass */}
          <button
            onClick={onOpenDayPass}
            className="px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-lg shadow-amber-400/20 active:translate-y-0.5 flex items-center gap-2"
          >
            <span>Book $50 Venice Day Pass</span>
          </button>

          {/* Directions */}
          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 text-sm font-medium text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center gap-2"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>Directions</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${GYM_INFO.phoneClean}`}
            className="px-4 py-3 text-sm font-medium text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call</span>
          </a>

          {/* Save */}
          <button
            onClick={onToggleSave}
            className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all flex items-center gap-2 ${
              isSaved
                ? 'bg-amber-400/15 border-amber-400 text-amber-400'
                : 'bg-neutral-900/90 hover:bg-neutral-800 border-neutral-800 text-neutral-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          {/* Share */}
          <button
            onClick={onShare}
            className="px-4 py-3 text-sm font-medium text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center gap-2"
          >
            {sharedToast ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-amber-400" />}
            <span>{sharedToast ? 'Link Copied' : 'Share'}</span>
          </button>

          {/* Website Link (Internal overview anchor) */}
          <a
            href="#services"
            className="px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4 text-neutral-500" />
            <span>Explore Services</span>
          </a>
        </div>

        {/* Proof & Facility Pill-Free Badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-900">
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-amber-400 tabular-nums">300 LBS</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Heavy Dumbbell Pit</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-amber-400">OUTDOOR</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Open-Air Yard & Turf</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-amber-400 tabular-nums">1,524</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">4.4★ Google Reviews</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-amber-400">1965</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Forged In Venice, CA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
