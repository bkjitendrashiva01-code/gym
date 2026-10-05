import React from 'react';
import { MapPin, Phone, Clock, Navigation, Check, ShieldCheck, Car, HeartHandshake, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#0e0717]/80 border-t border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/40">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
              Club Location & Information
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              FIND US IN <span className="text-yellow-400">HAMPTON, NH</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Conveniently located at 4 Liberty Lane West, Hampton, NH 03842 with ample free parking and 24/7 staff.
            </p>
          </div>

          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-purple-950 font-bold text-sm transition-colors shadow-sm shadow-yellow-400/20"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Two-Column Grid: Map Card & Details Card */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Map Card & Interactive Pin */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#12091e] border border-purple-900/50 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">
                    Map of Planet Fitness Hampton
                  </h3>
                  <p className="text-xs text-purple-300 font-mono">
                    42.9376° N, 70.8390° W · Hampton, NH 03842
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-yellow-400 font-mono">
                  <span>4.4 ★</span>
                  <span className="text-purple-600">·</span>
                  <span className="text-neutral-400">1,524 Reviews</span>
                </div>
              </div>

              {/* Styled Vector Map Canvas */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0d0714] border border-purple-900/40 flex items-center justify-center group">
                {/* Street Grid Graphic Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#581c87_1px,transparent_1px),linear-gradient(to_bottom,#581c87_1px,transparent_1px)] bg-[size:28px_28px]" />
                
                {/* Atlantic Ocean / Coastline Marker */}
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-blue-950/40 border-l border-blue-900/30 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-blue-400/60 rotate-90 uppercase tracking-widest whitespace-nowrap">
                    NH Seacoast
                  </span>
                </div>

                {/* Street labels */}
                <div className="absolute top-6 left-12 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  Route 1 / Lafayette Rd
                </div>
                <div className="absolute bottom-6 left-12 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  Exeter Rd
                </div>
                <div className="absolute top-1/2 left-12 text-[11px] font-mono text-yellow-400/90 font-bold uppercase tracking-wider">
                  Liberty Lane West
                </div>

                {/* Pin Card Marker */}
                <div className="relative z-10 p-3 rounded-xl bg-[#140b22] border-2 border-yellow-400 shadow-2xl flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-200">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400 text-purple-950 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Planet Fitness</div>
                    <div className="text-[10px] text-purple-200 font-mono">4 Liberty Lane West</div>
                  </div>
                </div>

                {/* External link trigger */}
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-[#1f1035] hover:bg-purple-900 border border-purple-700 text-xs text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Launch Navigation</span>
                  <Navigation className="w-3 h-3 text-yellow-400" />
                </a>
              </div>
            </div>

            {/* Parking & Accessibility Notes */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-purple-950 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-purple-950/30 border border-purple-900/40">
                <Car className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Large Free Parking Lot</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">
                    Hundreds of free parking spots directly in front of the building on Liberty Lane West.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-purple-950/30 border border-purple-900/40">
                <HeartHandshake className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Accessible & Welcoming</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">
                    Wheelchair accessible entry, spacious changing areas, and friendly staff available 24/7.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Operational Hours & Contact Table */}
          <div className="lg:col-span-5 rounded-2xl bg-[#12091e] border border-purple-900/50 p-6 sm:p-8 space-y-6">
            
            {/* Status indicator banner */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-xs font-mono text-purple-300 uppercase">Operational Status</div>
                  <div className="text-base font-bold text-yellow-400">{GYM_INFO.status}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-neutral-400 font-mono">Timezone</div>
                <div className="text-xs font-semibold text-white">Eastern Time (ET)</div>
              </div>
            </div>

            {/* Hours Table */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-purple-950 text-xs font-mono text-purple-300">
                <span>Day of Week</span>
                <span>Club Hours</span>
              </div>
              {GYM_INFO.standardHours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between py-1.5 text-xs sm:text-sm text-neutral-300"
                >
                  <span className="font-medium text-white">{row.day}</span>
                  <span className="font-mono text-purple-200 tabular-nums">{row.hours}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact & Amenities */}
            <div className="pt-6 border-t border-purple-950 space-y-3">
              <div className="text-xs font-mono text-yellow-400 uppercase tracking-wider">
                Direct Contact & Member Services
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Telephone:</span>
                  <a href={`tel:${GYM_INFO.telephoneClean}`} className="text-yellow-400 font-mono font-bold hover:underline">
                    {GYM_INFO.telephone}
                  </a>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Mobile (SMS):</span>
                  <a href={`tel:${GYM_INFO.mobileClean}`} className="text-yellow-400 font-mono font-bold hover:underline">
                    {GYM_INFO.mobile}
                  </a>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Email:</span>
                  <a href={`mailto:${GYM_INFO.email}`} className="text-yellow-400 font-mono hover:underline">
                    {GYM_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Address:</span>
                  <span className="text-white font-medium">4 Liberty Lane West, Hampton, NH</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Guest Pass:</span>
                  <span className="text-emerald-400 font-medium">Free 1-Day Trial Available</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
