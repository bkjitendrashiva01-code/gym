import React from 'react';
import { MapPin, Phone, Clock, Navigation, Check, ShieldCheck, Car, Bike, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-neutral-900/60 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              Venice Beach Headquarters
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              LOCATION & <span className="text-amber-400">HOURS</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Located on historic Hampton Drive, blocks from the Pacific Ocean and iconic Venice Boardwalk.
            </p>
          </div>

          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-colors shadow-sm shadow-amber-400/20"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Two-Column Grid: Map Card & Details Card */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Map Card & Interactive Pin */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">
                    Map of Gold's Gym Venice
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    33.9934° N, 118.4754° W · Venice, CA
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                  <span>4.4 ★</span>
                  <span className="text-neutral-500">·</span>
                  <span className="text-neutral-400">1,524 Reviews</span>
                </div>
              </div>

              {/* Styled Vector Map Canvas / Realistic Visual Map Tile */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center group">
                {/* Street Grid Graphic Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:28px_28px]" />
                
                {/* Pacific Ocean Blue Accent band on left side representing coast */}
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-blue-950/40 border-r border-blue-900/30 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-blue-400/60 -rotate-90 uppercase tracking-widest whitespace-nowrap">
                    Pacific Coast
                  </span>
                </div>

                {/* Street labels */}
                <div className="absolute top-6 left-28 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  Rose Ave
                </div>
                <div className="absolute bottom-6 left-28 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  Sunset Ave
                </div>
                <div className="absolute top-1/2 left-28 text-[11px] font-mono text-amber-400/80 font-bold uppercase tracking-wider">
                  Hampton Drive
                </div>

                {/* Pin Card Marker */}
                <div className="relative z-10 p-3 rounded-xl bg-neutral-950 border-2 border-amber-400 shadow-2xl flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-200">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-neutral-950 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Gold's Gym Venice</div>
                    <div className="text-[10px] text-neutral-400">360 Hampton Dr</div>
                  </div>
                </div>

                {/* External link trigger */}
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-xs text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Launch Navigation</span>
                  <Navigation className="w-3 h-3 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Parking & Transit Notes */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-neutral-900 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80">
                <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Parking Lot On Site</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">
                    Dedicated gym parking directly adjacent on Hampton Dr. Metered street parking along Rose Ave.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80">
                <Bike className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Bike & Cruiser Racks</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">
                    Secure outdoor bike racks provided at the entrance. 3-minute bike ride from Venice Boardwalk.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Operational Hours & Contact Table */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8 space-y-6">
            
            {/* Status indicator banner directly quoting prompt: "Closed · Opens 5 am" */}
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Operational Status</div>
                  <div className="text-base font-bold text-amber-400">{GYM_INFO.status}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-neutral-400 font-mono">Timezone</div>
                <div className="text-xs font-semibold text-white">Pacific Time (PT)</div>
              </div>
            </div>

            {/* Hours Table */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                <span>Day of Week</span>
                <span>Hours</span>
              </div>
              {GYM_INFO.standardHours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between py-1.5 text-xs sm:text-sm text-neutral-300"
                >
                  <span className="font-medium text-white">{row.day}</span>
                  <span className="font-mono text-neutral-300 tabular-nums">{row.hours}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact & Amenities */}
            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Direct Contact & Guest Services
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Front Desk:</span>
                  <a href={`tel:${GYM_INFO.phoneClean}`} className="text-amber-400 font-mono font-bold hover:underline">
                    {GYM_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Guest Amenities:</span>
                  <span className="text-white font-medium">Shower · Restroom · Lockers · Sauna</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Outdoor Yard:</span>
                  <span className="text-white font-medium">Included with all passes</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
