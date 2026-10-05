import React, { useState } from 'react';
import { Play, Eye, Maximize2, X, Volume2, VolumeX, Shield, Sun, Dumbbell } from 'lucide-react';
import { VIDEO_CLIPS, VideoClip } from '../data/gymData';
import { ASSETS } from '../data/assetMap';

export const FacilityTour: React.FC = () => {
  const [activeClip, setActiveClip] = useState<VideoClip | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'yard' | 'weights' | 'tech'>('all');

  const getThumbnailForClip = (id: string) => {
    switch (id) {
      case 'clip-1': return ASSETS.outdoor;
      case 'clip-2': return ASSETS.interior;
      case 'clip-3': return ASSETS.hero;
      case 'clip-4': return ASSETS.tech;
      default: return ASSETS.interior;
    }
  };

  return (
    <section id="tour" className="py-16 sm:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              Virtual Walkthrough & Iconic Compounds
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              INSIDE THE <span className="text-amber-400">MECCA</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Take an interactive visual tour through the world's most storied lifting grounds, featuring our outdoor compound and massive free weight pit.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>4 Video Snippets Available</span>
          </div>
        </div>

        {/* Video Reel Snippets (with 0:16, 0:08, 0:14, 0:08 timestamps from prompt) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_CLIPS.map((clip) => {
            const thumb = getThumbnailForClip(clip.id);
            return (
              <div
                key={clip.id}
                onClick={() => {
                  setActiveClip(clip);
                  setIsPlaying(true);
                }}
                className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                  <img
                    src={thumb}
                    alt={clip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Duration Pill / Badge (Timestamp strictly rendered as clean unboxed tag) */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-neutral-950/90 text-amber-400 text-xs font-mono font-bold tracking-wider border border-neutral-800">
                    {clip.duration}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-400/90 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-200">
                      <Play className="w-5 h-5 fill-neutral-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Zone Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-neutral-900/80 backdrop-blur-xs text-[11px] font-medium text-neutral-300 border border-neutral-800">
                    {clip.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {clip.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {clip.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-neutral-400" />
                      {clip.views} views
                    </span>
                    <span className="text-amber-400/90 font-sans font-semibold">Play Clip</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Feature Bento Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Outdoor Training Yard */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group relative flex flex-col justify-end p-8 min-h-[380px]">
            <img
              src={ASSETS.outdoor}
              alt="Outdoor workout yard at Gold's Gym Venice"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                <Sun className="w-4 h-4" />
                <span>Open-Air California Sanctuary</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
                The Legendary Outdoor Yard
              </h3>
              <p className="text-sm text-neutral-300 max-w-xl leading-relaxed">
                Step outside under the Venice sun into our fully covered outdoor strength yard. Complete with heavy Olympic squat racks, custom barbells, turf tracks, and heavy medicine balls bathed in ocean breezes.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-300 font-medium">
                <span>Natural Sunlight</span>
                <span className="text-neutral-600">·</span>
                <span>Power Racks & Turf</span>
                <span className="text-neutral-600">·</span>
                <span>Exclusive to Venice Location</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 300 lbs Free Weights */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group relative flex flex-col justify-end p-8 min-h-[380px]">
            <img
              src={ASSETS.interior}
              alt="Heavy dumbbell pit at Gold's Gym Venice"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                <Dumbbell className="w-4 h-4" />
                <span>The Heavy Iron Standard</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
                Free Weights Up To 300 LBS
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Nowhere else in the world will you find unbroken dumbbell racks spanning from 5 lbs up to 300 lbs, forged for serious strength athletes and bodybuilding champions.
              </p>
              <div className="pt-2 text-xs text-neutral-300 font-medium">
                <span>Calibrated Cast Iron · Arsenal Strength Benches</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Video Simulation Modal */}
      {activeClip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md">
          <div className="w-full max-w-3xl rounded-2xl bg-neutral-900 border border-neutral-700 overflow-hidden shadow-2xl relative">
            
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-amber-400 text-neutral-950 font-bold text-xs font-mono">
                  {activeClip.duration}
                </span>
                <h3 className="font-display text-xl font-bold text-white uppercase">
                  {activeClip.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveClip(null)}
                className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800"
                aria-label="Close video clip modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Video Player Screen */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={getThumbnailForClip(activeClip.id)}
                alt={activeClip.title}
                className="w-full h-full object-cover filter brightness-85"
                referrerPolicy="no-referrer"
              />

              {/* Progress bar animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
                <div 
                  className={`h-full bg-amber-400 transition-all ${
                    isPlaying ? 'w-3/4 duration-1000' : 'w-1/4'
                  }`} 
                />
              </div>

              {/* Center controls overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className={`w-7 h-7 ml-1 fill-neutral-950 ${isPlaying ? 'opacity-80' : ''}`} />
                </button>
              </div>

              {/* Top right audio toggle */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>
              </div>

              {/* Live badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800 text-xs font-mono text-white">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>Venice Archive Snippet</span>
              </div>
            </div>

            {/* Video description footer */}
            <div className="p-6 bg-neutral-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-neutral-300">
                  {activeClip.description}
                </p>
                <div className="mt-1 text-xs text-neutral-400">
                  Location: 360 Hampton Dr, Venice, CA 90291 · Duration: {activeClip.duration}
                </div>
              </div>
              <button
                onClick={() => setActiveClip(null)}
                className="px-5 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap transition-colors"
              >
                Done Watching
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
