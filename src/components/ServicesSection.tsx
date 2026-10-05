import React, { useState } from 'react';
import { 
  Dumbbell, 
  Users, 
  Bike, 
  Scan, 
  Radio, 
  Flame, 
  Bath, 
  HeartPulse, 
  Weight, 
  ChevronRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/gymData';

interface ServicesSectionProps {
  onOpenDayPass: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenDayPass }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'strength' | 'performance' | 'tech' | 'amenity'>('all');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'personal-training': return <Dumbbell className="w-5 h-5 text-amber-400" />;
      case 'group-exercise': return <Users className="w-5 h-5 text-amber-400" />;
      case 'group-cycle': return <Bike className="w-5 h-5 text-amber-400" />;
      case 'golds-3d': return <Scan className="w-5 h-5 text-amber-400" />;
      case 'golds-amp': return <Radio className="w-5 h-5 text-amber-400" />;
      case 'bootcamp': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'locker-rooms': return <Bath className="w-5 h-5 text-amber-400" />;
      case 'cardio-equipment': return <HeartPulse className="w-5 h-5 text-amber-400" />;
      case 'resistance-free-weights': return <Weight className="w-5 h-5 text-amber-400" />;
      default: return <Dumbbell className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-neutral-900/60 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              Championship Facilities & Programs
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              WORLD-CLASS <span className="text-amber-400">SERVICES</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              From heavy iron dumbbells up to 300 lbs to advanced 3D body composition scanning and Venice Beach outdoor conditioning.
            </p>
          </div>

          {/* Category Filter segmented control (Interactive Filter per guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-950 border border-neutral-800 rounded-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All (9)
            </button>
            <button
              onClick={() => setSelectedCategory('strength')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'strength'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Strength & Iron
            </button>
            <button
              onClick={() => setSelectedCategory('performance')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'performance'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Classes & Cardio
            </button>
            <button
              onClick={() => setSelectedCategory('tech')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'tech'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tech & Audio
            </button>
            <button
              onClick={() => setSelectedCategory('amenity')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'amenity'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Recovery & Amenities
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group relative p-6 rounded-xl bg-neutral-950 border border-neutral-800/90 hover:border-amber-400/60 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-1">
                  {service.tagline}
                </div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-900 space-y-1.5">
                  {service.highlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-amber-400 transition-colors">
                <span>View Details & Schedule</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight callout on Locker Room & Outdoor amenities */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Visiting Gold's Venice For The First Time?
            </h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              All day passes include unrestricted access to both indoor and outdoor workout compounds, private showers, restrooms, saunas, and day locker use.
            </p>
          </div>
          <button
            onClick={onOpenDayPass}
            className="px-6 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap transition-colors shrink-0 shadow-sm shadow-amber-400/20"
          >
            Get $50 Day Pass
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center">
                {getServiceIcon(activeService.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  {activeService.tagline}
                </span>
                <h3 className="font-display text-3xl font-black text-white uppercase">
                  {activeService.name}
                </h3>
              </div>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {activeService.description}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                What's Included at Gold's Venice:
              </h4>
              {activeService.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800 gap-3">
              <button
                onClick={() => setActiveService(null)}
                className="px-4 py-2.5 text-sm font-medium text-neutral-400 hover:text-white rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveService(null);
                  onOpenDayPass();
                }}
                className="px-6 py-2.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Access With $50 Day Pass
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
