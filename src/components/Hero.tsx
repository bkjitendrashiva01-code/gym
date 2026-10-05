import React, { useState } from 'react';
import { Star, MapPin, Phone, Smartphone, Mail, Navigation, Globe, Bookmark, Share2, Clock, Check, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';
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
          alt="Planet Fitness interior gym floor with purple and yellow cardio and strength equipment"
          className="w-full h-full object-cover object-center filter brightness-80 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0712] via-[#0b0712]/85 to-[#0b0712]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0712]/50 to-[#0b0712]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Top unboxed metadata line (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-300 mb-4 font-medium">
          <div className="flex items-center gap-1.5 text-yellow-400">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-white tabular-nums">{GYM_INFO.rating}</span>
            <span className="text-neutral-400">({GYM_INFO.reviewCount.toLocaleString()} Google Reviews)</span>
          </div>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="text-purple-300 font-semibold">{GYM_INFO.category}</span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span>Hampton, New Hampshire</span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="text-yellow-400">The Judgement Free Zone®</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-4">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none text-balance">
            PLANET <span className="text-yellow-400">FITNESS</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-purple-200 font-light leading-relaxed max-w-3xl">
            {GYM_INFO.description}
          </p>
        </div>

        {/* Status & Operational info bar */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
          {/* Status with popover */}
          <div className="relative">
            <button
              onClick={() => setShowHoursPopover(!showHoursPopover)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-purple-950/80 border border-purple-800/80 hover:border-purple-600 text-neutral-200 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-yellow-400">{GYM_INFO.status}</span>
              <Clock className="w-3.5 h-3.5 text-purple-300 ml-1" />
            </button>

            {showHoursPopover && (
              <div className="absolute left-0 mt-2 w-80 p-4 bg-[#140b22] border border-purple-800 rounded-lg shadow-2xl z-30 text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-900/60">
                  <span className="font-semibold text-white">Club Hours · Hampton, NH</span>
                  <span className="text-yellow-400 font-mono">Eastern Time</span>
                </div>
                <div className="space-y-1.5">
                  {GYM_INFO.standardHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-neutral-300">
                      <span className="text-neutral-400">{item.day}</span>
                      <span className="font-mono tabular-nums text-purple-200">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-2 border-t border-purple-900/60 text-[11px] text-neutral-400">
                  Staffed round-the-clock. Check the live PF Crowd Meter anytime in the app.
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
            <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
            <span className="underline decoration-purple-800 hover:decoration-yellow-400 underline-offset-4">
              {GYM_INFO.address}
            </span>
          </a>

          {/* Telephone */}
          <a
            href={`tel:${GYM_INFO.telephoneClean}`}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-yellow-400 transition-colors font-mono"
            title="Club Telephone"
          >
            <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>Tel: {GYM_INFO.telephone}</span>
          </a>

          {/* Mobile */}
          <a
            href={`tel:${GYM_INFO.mobileClean}`}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-yellow-400 transition-colors font-mono"
            title="Club Mobile"
          >
            <Smartphone className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>Mobile: {GYM_INFO.mobile}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${GYM_INFO.email}`}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-yellow-400 transition-colors font-mono"
            title="Email Planet Fitness"
          >
            <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>{GYM_INFO.email}</span>
          </a>
        </div>

        {/* Action Controls Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-purple-900/50">
          
          {/* Primary Action: Get Pass or Join */}
          <button
            onClick={onOpenDayPass}
            className="px-6 py-3.5 text-sm font-bold text-purple-950 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-all shadow-lg shadow-yellow-400/20 active:translate-y-0.5 flex items-center gap-2"
          >
            <span>Get Free Day Pass / Join for $10</span>
          </button>

          {/* Directions */}
          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 text-sm font-medium text-white bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/80 rounded-lg transition-colors flex items-center gap-2"
          >
            <Navigation className="w-4 h-4 text-yellow-400" />
            <span>Directions</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${GYM_INFO.phoneClean}`}
            className="px-4 py-3 text-sm font-medium text-white bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/80 rounded-lg transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span>Call</span>
          </a>

          {/* Save */}
          <button
            onClick={onToggleSave}
            className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all flex items-center gap-2 ${
              isSaved
                ? 'bg-yellow-400/15 border-yellow-400 text-yellow-400'
                : 'bg-purple-950/60 hover:bg-purple-900/80 border-purple-800/80 text-neutral-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-yellow-400' : ''}`} />
            <span>{isSaved ? 'Saved Club' : 'Save'}</span>
          </button>

          {/* Share */}
          <button
            onClick={onShare}
            className="px-4 py-3 text-sm font-medium text-white bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/80 rounded-lg transition-colors flex items-center gap-2"
          >
            {sharedToast ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-yellow-400" />}
            <span>{sharedToast ? 'Link Copied' : 'Share'}</span>
          </button>

          {/* Website Link */}
          <a
            href="#services"
            className="px-4 py-3 text-sm font-medium text-purple-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4 text-purple-400" />
            <span>Club Amenities</span>
          </a>
        </div>

        {/* Proof & Facility Badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-purple-900/40">
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-yellow-400 tabular-nums">2,500+</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Clubs Across U.S.</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-yellow-400">$10/MO</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Classic Everyday Value</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-yellow-400">JUDGEMENT FREE</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Friendly For Everyone</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-yellow-400">BLACK CARD SPA</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">HydroMassage & Loungers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
