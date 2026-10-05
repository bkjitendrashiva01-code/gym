import React from 'react';
import { Check, Shield, Sparkles } from 'lucide-react';
import { PASS_OPTIONS } from '../data/gymData';

interface PassesPricingProps {
  onOpenDayPass: () => void;
}

export const PassesPricing: React.FC<PassesPricingProps> = ({ onOpenDayPass }) => {
  return (
    <section id="memberships" className="py-16 sm:py-24 bg-[#0a0611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
            Low-Cost Memberships & Guest Passes
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            AFFORDABLE FITNESS FOR <span className="text-yellow-400">EVERYONE</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            No commitment traps, no intimidating bodybuilders. Just clean, high-value fitness with friendly staff at 4 Liberty Lane West, Hampton, NH.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PASS_OPTIONS.map((plan) => {
            const isBlackCard = plan.id === 'black-card';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isBlackCard
                    ? 'bg-[#150a26] border-2 border-yellow-400 shadow-2xl shadow-yellow-400/10 lg:-translate-y-2'
                    : 'bg-[#10081d] border border-purple-900/40 hover:border-purple-700'
                }`}
              >
                {/* Badge without pill clutter */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-950">
                  <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold">
                    {plan.badge}
                  </span>
                  {isBlackCard && (
                    <span className="text-xs font-bold text-purple-950 bg-yellow-400 px-2 py-0.5 rounded">
                      VIP Experience
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-3xl font-black text-white uppercase">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-yellow-400">$</span>
                    <span className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono ml-2">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-purple-950">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenDayPass}
                    className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm transition-all shadow-sm active:translate-y-0.5 ${
                      isBlackCard
                        ? 'bg-yellow-400 hover:bg-yellow-300 text-purple-950 shadow-yellow-400/20'
                        : 'bg-purple-950 hover:bg-purple-900 border border-purple-800 text-white'
                    }`}
                  >
                    {isBlackCard ? 'Get PF Black Card®' : plan.id === 'day-pass' ? 'Get Free Guest Pass' : 'Join Classic for $10'}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-neutral-500">
                    Friendly front desk support · Hampton, NH
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Judgement Free Guarantee */}
        <div className="mt-12 p-6 rounded-xl bg-[#12091e] border border-purple-900/50 max-w-3xl mx-auto text-center space-y-2">
          <div className="text-xs font-mono text-yellow-400 uppercase tracking-widest">
            Planet Fitness Promise
          </div>
          <p className="text-xs sm:text-sm text-purple-200">
            "Large low-cost fitness chain with many locations across the U.S. We exist to provide a welcoming workout space where anyone can build healthy habits without pressure or judgment."
          </p>
          <p className="text-xs text-neutral-400 max-w-xl mx-auto pt-1">
            Free fitness training with certified coaches is included with all memberships. No hidden coach fees.
          </p>
        </div>

      </div>
    </section>
  );
};
