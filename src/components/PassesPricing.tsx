import React from 'react';
import { Check, Shield, Zap, Sparkles } from 'lucide-react';
import { PASS_OPTIONS } from '../data/gymData';

interface PassesPricingProps {
  onOpenDayPass: () => void;
}

export const PassesPricing: React.FC<PassesPricingProps> = ({ onOpenDayPass }) => {
  return (
    <section id="passes" className="py-16 sm:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            Venice Pilgrimage Passes & Membership
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            TRAIN AT <span className="text-amber-400">THE MECCA</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Whether you are making a one-time pilgrimage to lift on the outdoor yard or training year-round, we offer transparent access with no locked-in long term traps.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PASS_OPTIONS.map((plan) => {
            const isFeatured = plan.id === 'day-pass';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-neutral-900 border-2 border-amber-400 shadow-2xl shadow-amber-400/10 lg:-translate-y-2'
                    : 'bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Badge without pill clutter */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    {plan.badge}
                  </span>
                  {isFeatured && (
                    <span className="text-xs font-bold text-neutral-950 bg-amber-400 px-2 py-0.5 rounded">
                      Iconic Entry
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
                    <span className="text-2xl font-bold text-neutral-400">$</span>
                    <span className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono ml-2">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-neutral-800/80">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
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
                      isFeatured
                        ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-amber-400/20'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    {isFeatured ? 'Get $50 Day Pass Now' : `Select ${plan.title}`}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-neutral-500">
                    Instant digital pass voucher · No booking fee
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note directly addressing the $50 pass quote from user review */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-900 border border-neutral-800/80 max-w-3xl mx-auto text-center space-y-2">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
            A Note on the $50 Venice Day Pass
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 italic">
            "Ok as a gymrat you must go there but a 50$ ticket entry is a very salty price." — Google Reviewer
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-xl mx-auto pt-1">
            We preserve this rate to keep the Mecca accessible to visiting strength athletes from every corner of the world without requiring annual membership contracts, while maintaining immaculate equipment up to 300 lbs and the outdoor yard.
          </p>
        </div>

      </div>
    </section>
  );
};
