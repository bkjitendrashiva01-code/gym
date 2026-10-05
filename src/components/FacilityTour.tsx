import React, { useState } from 'react';
import { Play, Eye, Maximize2, X, Volume2, VolumeX, Sparkles, Heart, Activity } from 'lucide-react';
import { VIDEO_CLIPS, VideoClip } from '../data/gymData';
import { ASSETS } from '../data/assetMap';

export const FacilityTour: React.FC = () => {
  const [activeClip, setActiveClip] = useState<VideoClip | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const getThumbnailForClip = (id: string) => {
    switch (id) {
      case 'clip-1': return ASSETS.cardioStrength;
      case 'clip-2': return ASSETS.spa;
      case 'clip-3': return ASSETS.hero;
      case 'clip-4': return ASSETS.exterior;
      default: return ASSETS.hero;
    }
  };

  return (
    <section id="tour" className="py-16 sm:py-24 bg-[#0a0611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/40">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
              Virtual Club Tour & Video Reels
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              INSIDE PLANET <span className="text-yellow-400">FITNESS</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Tour our clean, spacious Hampton, NH club floor, featuring the 30-Minute Express Circuit, endless cardio machines, and Black Card Spa®.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/60 border border-purple-800/80 px-3 py-2 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>4 Interactive Video Tours</span>
          </div>
        </div>

        {/* Video Reel Snippets (with 0:16, 0:08, 0:14, 0:08 timestamps) */}
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
                className="group relative rounded-xl overflow-hidden bg-[#130a21] border border-purple-900/40 hover:border-yellow-400/80 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={thumb}
                    alt={clip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130a21] via-[#130a21]/20 to-transparent" />

                  {/* Duration Pill / Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/90 text-yellow-400 text-xs font-mono font-bold tracking-wider border border-purple-900/60">
                    {clip.duration}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/90 text-purple-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-200">
                      <Play className="w-5 h-5 fill-purple-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Zone Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-purple-950/80 backdrop-blur-xs text-[11px] font-medium text-purple-200 border border-purple-800">
                    {clip.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
                      {clip.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {clip.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] text-purple-300 font-mono">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-purple-400" />
                      {clip.views} views
                    </span>
                    <span className="text-yellow-400 font-sans font-semibold">Play Clip</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Bento Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: PF Black Card Spa */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-neutral-900 border border-purple-900/50 group relative flex flex-col justify-end p-8 min-h-[380px]">
            <img
              src={ASSETS.spa}
              alt="Planet Fitness Black Card Spa HydroMassage and relaxation lounge"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0714] via-[#0d0714]/75 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Premium Member Recovery</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
                PF Black Card Spa®
              </h3>
              <p className="text-sm text-neutral-200 max-w-xl leading-relaxed">
                Recharge after your workout in our heated HydroMassage® beds, Total Body Enhancement red light booths, and zero-gravity massage loungers. Unlimited sessions included with your Black Card.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-purple-200 font-medium">
                <span>HydroMassage®</span>
                <span className="text-purple-600">·</span>
                <span>Total Body Enhancement</span>
                <span className="text-purple-600">·</span>
                <span>Relaxation Loungers</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 30-Minute Circuit */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-neutral-900 border border-purple-900/50 group relative flex flex-col justify-end p-8 min-h-[380px]">
            <img
              src={ASSETS.cardioStrength}
              alt="Planet Fitness 30-minute workout area"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0714] via-[#0d0714]/75 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 uppercase tracking-widest">
                <Activity className="w-4 h-4" />
                <span>Fast & Complete Fitness</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
                30-Minute Express Circuit
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed">
                Short on time? Follow the traffic-light sequence alternating between cardio step stations and hydraulic strength machines for a full-body workout in half an hour.
              </p>
              <div className="pt-2 text-xs text-purple-200 font-medium">
                <span>10 Strength Stations · 10 Cardio Steps · Red/Green Light Pacing</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal */}
      {activeClip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="w-full max-w-3xl rounded-2xl bg-[#140b22] border border-purple-700 overflow-hidden shadow-2xl relative">
            
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/60 bg-[#0d0714]">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-yellow-400 text-purple-950 font-bold text-xs font-mono">
                  {activeClip.duration}
                </span>
                <h3 className="font-display text-xl font-bold text-white uppercase">
                  {activeClip.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveClip(null)}
                className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-purple-900/40"
                aria-label="Close clip modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={getThumbnailForClip(activeClip.id)}
                alt={activeClip.title}
                className="w-full h-full object-cover filter brightness-85"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
                <div 
                  className={`h-full bg-yellow-400 transition-all ${
                    isPlaying ? 'w-3/4 duration-1000' : 'w-1/4'
                  }`} 
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-yellow-400 text-purple-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className={`w-7 h-7 ml-1 fill-purple-950 ${isPlaying ? 'opacity-80' : ''}`} />
                </button>
              </div>

              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-purple-950/80 text-white hover:bg-purple-900 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-yellow-400" />}
                </button>
              </div>

              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-purple-800 text-xs font-mono text-white">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                <span>Planet Fitness Tour</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#0d0714] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-neutral-300">
                  {activeClip.description}
                </p>
                <div className="mt-1 text-xs text-neutral-400">
                  Club Location: 4 Liberty Lane West, Hampton, NH 03842 · Duration: {activeClip.duration}
                </div>
              </div>
              <button
                onClick={() => setActiveClip(null)}
                className="px-5 py-2 text-xs font-bold text-purple-950 bg-yellow-400 hover:bg-yellow-300 rounded-lg whitespace-nowrap transition-colors"
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
