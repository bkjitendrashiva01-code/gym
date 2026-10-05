import React, { useState } from 'react';
import { 
  Dumbbell, 
  Users, 
  Sparkles, 
  HeartPulse, 
  Clock, 
  Bath, 
  Smartphone, 
  Coffee, 
  ShieldCheck, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/gymData';

interface ServicesSectionProps {
  onOpenDayPass: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenDayPass }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cardio-strength' | 'spa-recovery' | 'coaching' | 'amenity'>('all');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'pe-pf-training': return <Users className="w-5 h-5 text-yellow-400" />;
      case 'express-30-circuit': return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'black-card-spa': return <Sparkles className="w-5 h-5 text-yellow-400" />;
      case 'cardio-equipment': return <HeartPulse className="w-5 h-5 text-yellow-400" />;
      case 'strength-free-weights': return <Dumbbell className="w-5 h-5 text-yellow-400" />;
      case 'pf-crowd-meter': return <Smartphone className="w-5 h-5 text-yellow-400" />;
      case 'bring-a-guest': return <ShieldCheck className="w-5 h-5 text-yellow-400" />;
      case 'locker-rooms': return <Bath className="w-5 h-5 text-yellow-400" />;
      case 'beverage-perks': return <Coffee className="w-5 h-5 text-yellow-400" />;
      default: return <Dumbbell className="w-5 h-5 text-yellow-400" />;
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0e0717]/80 border-t border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/40">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
              Clean, Welcoming & Low-Cost Fitness
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              CLUB <span className="text-yellow-400">AMENITIES & SERVICES</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Enjoy high-quality fitness equipment, certified trainer guidance, and recovery perks in an uplifting, judgement-free environment.
            </p>
          </div>

          {/* Category Filter segmented control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#140b22] border border-purple-900/60 rounded-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'all'
                  ? 'bg-yellow-400 text-purple-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Amenities
            </button>
            <button
              onClick={() => setSelectedCategory('cardio-strength')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'cardio-strength'
                  ? 'bg-yellow-400 text-purple-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Cardio & Strength
            </button>
            <button
              onClick={() => setSelectedCategory('spa-recovery')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'spa-recovery'
                  ? 'bg-yellow-400 text-purple-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Black Card Spa®
            </button>
            <button
              onClick={() => setSelectedCategory('coaching')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'coaching'
                  ? 'bg-yellow-400 text-purple-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Free Training
            </button>
            <button
              onClick={() => setSelectedCategory('amenity')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedCategory === 'amenity'
                  ? 'bg-yellow-400 text-purple-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Locker & App Perks
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group relative p-6 rounded-xl bg-[#12091e] border border-purple-900/40 hover:border-yellow-400/60 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-800/80 flex items-center justify-center group-hover:border-yellow-400/50 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono text-purple-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-xs font-medium text-yellow-400 uppercase tracking-wider mb-1">
                  {service.tagline}
                </div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm text-neutral-300 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-purple-950 space-y-1.5">
                  {service.highlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-purple-300 group-hover:text-yellow-400 transition-colors">
                <span>Explore Details</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#170a29] via-[#210e3b] to-[#170a29] border border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              The Judgement Free Zone® Difference
            </h4>
            <p className="text-sm text-purple-200 max-w-xl">
              We provide a hassle-free, non-intimidating atmosphere where anyone—and we mean anyone—can feel comfortable working out.
            </p>
          </div>
          <button
            onClick={onOpenDayPass}
            className="px-6 py-3 text-sm font-bold text-purple-950 bg-yellow-400 hover:bg-yellow-300 rounded-lg whitespace-nowrap transition-colors shrink-0 shadow-md shadow-yellow-400/20"
          >
            Claim Free Day Pass
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#140b22] border border-purple-700 shadow-2xl relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-purple-900/40"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/60 flex items-center justify-center">
                {getServiceIcon(activeService.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-yellow-400 uppercase tracking-widest">
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
              <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                Included with Planet Fitness:
              </h4>
              {activeService.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-purple-900/60 gap-3">
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
                className="px-6 py-2.5 text-sm font-bold text-purple-950 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-colors"
              >
                Try It In Hampton, NH
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
