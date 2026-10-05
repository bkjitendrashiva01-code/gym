import React, { useState } from 'react';
import { Clock, Users, Smartphone, Info, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { POPULAR_TIMES_DATA, GYM_INFO } from '../data/gymData';

export const PopularTimes: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const [selectedHour, setSelectedHour] = useState<number>(17); // Default 5 PM (17:00)

  const dayData = POPULAR_TIMES_DATA[selectedDay] || POPULAR_TIMES_DATA['Mon'];
  const currentHourData = dayData.hours.find(h => h.hour === selectedHour) || dayData.hours[dayData.hours.length - 1];

  const getBusynessDescription = (busyness: number, hour: number) => {
    if (hour === 17) return "Usually as busy as it gets (Peak after-work crowd)";
    if (busyness >= 85) return "Crowded · High cardio & circuit usage";
    if (busyness >= 60) return "Moderately busy · Normal floor flow";
    if (busyness >= 35) return "A few people here · Plenty of open equipment";
    return "Not busy · Very quiet club";
  };

  const getMeterColor = (busyness: number) => {
    if (busyness >= 85) return 'text-rose-400 bg-rose-500/20 border-rose-500/40';
    if (busyness >= 60) return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/40';
    return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40';
  };

  return (
    <section id="crowd-meter" className="py-16 sm:py-24 bg-[#0e0717]/80 border-t border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/40">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
              Planet Fitness Live Crowd Meter & Visiting Patterns
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              PF CROWD METER & <span className="text-yellow-400">POPULAR TIMES</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Check live club capacity for 4 Liberty Lane West, Hampton, NH before heading out. Never guess how busy your workout will be.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-300 bg-[#140b22] border border-purple-900/60 px-4 py-3 rounded-lg">
            <Smartphone className="w-4 h-4 text-yellow-400 shrink-0" />
            <div>
              <span className="font-semibold text-white">Average Visit: </span>
              <span className="text-purple-200">{GYM_INFO.dwellTimeDescription}</span>
            </div>
          </div>
        </div>

        {/* Day Selector Buttons */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {Object.keys(POPULAR_TIMES_DATA).map((dayKey) => {
            const isSelected = selectedDay === dayKey;
            return (
              <button
                key={dayKey}
                onClick={() => setSelectedDay(dayKey)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-yellow-400 text-purple-950 shadow-md shadow-yellow-400/20'
                    : 'bg-[#140b22] hover:bg-purple-950 text-neutral-400 hover:text-white border border-purple-900/60'
                }`}
              >
                {dayKey}
              </button>
            );
          })}
        </div>

        {/* Main Popular Times Graph Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#12091e] border border-purple-900/50 relative">
          
          {/* Top highlight row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-950">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold text-white uppercase">
                  {currentHourData.label}
                </span>
                <span className="text-purple-600">·</span>
                <span className="text-yellow-400 font-semibold text-sm">
                  {getBusynessDescription(currentHourData.busyness, currentHourData.hour)}
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Peak crowd for {dayData.label}: <strong className="text-white">{dayData.peak}</strong> ({GYM_INFO.peakHourDescription})
              </p>
            </div>

            {/* PF Crowd Meter visual pill */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold ${getMeterColor(currentHourData.busyness)}`}>
              <Activity className="w-3.5 h-3.5" />
              <span>Crowd Meter: {currentHourData.busyness}% Capacity</span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="mt-8">
            <div className="h-56 sm:h-64 flex items-end justify-between gap-1 sm:gap-2 px-1 pt-6 border-b border-purple-950">
              {dayData.hours.map((item) => {
                const isCurrent = item.hour === selectedHour;
                const isPeak = item.busyness >= 95;

                return (
                  <div
                    key={item.hour}
                    onClick={() => setSelectedHour(item.hour)}
                    className="flex-1 flex flex-col items-center group cursor-pointer h-full justify-end relative"
                  >
                    {/* Tooltip on hover/active */}
                    <div className={`absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none px-2 py-1 rounded bg-[#1f1035] border border-purple-700 text-[10px] text-white whitespace-nowrap shadow-lg ${
                      isCurrent ? 'opacity-100' : ''
                    }`}>
                      <span className="font-bold text-yellow-400">{item.label}</span>: {item.busyness}% capacity
                    </div>

                    {/* Peak indicator dot */}
                    {isPeak && (
                      <div className="absolute top-1 text-yellow-400 font-bold text-[9px] uppercase tracking-tighter">
                        PEAK
                      </div>
                    )}

                    {/* Bar */}
                    <div
                      style={{ height: `${Math.max(item.busyness, 12)}%` }}
                      className={`w-full max-w-[28px] rounded-t-sm transition-all duration-300 ${
                        isCurrent
                          ? 'bg-yellow-400 ring-2 ring-yellow-300 ring-offset-2 ring-offset-[#12091e]'
                          : isPeak
                          ? 'bg-yellow-400/90 hover:bg-yellow-400'
                          : 'bg-purple-950/70 hover:bg-purple-900 border-t border-purple-800'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* X-Axis Hour Labels */}
            <div className="flex justify-between text-[10px] sm:text-xs font-mono text-neutral-400 mt-2 px-1">
              <span>{dayData.hours[0]?.label || '5 AM'}</span>
              <span>12 PM</span>
              <span className="text-yellow-400 font-bold">5 PM (Peak)</span>
              <span>{dayData.hours[dayData.hours.length - 1]?.label || '10 PM'}</span>
            </div>
          </div>

          {/* Member Guidance Windows */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-purple-950">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/50">
              <div className="text-xs font-mono text-yellow-400 uppercase tracking-wider mb-1">
                Quiet Workout Window
              </div>
              <div className="text-sm font-semibold text-white">5:00 AM – 7:30 AM</div>
              <p className="mt-1 text-xs text-neutral-400">
                Start your morning with wide-open cardio decks, available 30-minute circuit stations, and zero waits for weights.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/50">
              <div className="text-xs font-mono text-yellow-400 uppercase tracking-wider mb-1">
                Midday Stride
              </div>
              <div className="text-sm font-semibold text-white">1:00 PM – 3:30 PM</div>
              <p className="mt-1 text-xs text-neutral-400">
                Low crowd density before after-work members arrive. Great time for a HydroMassage® in the Black Card lounge.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/50">
              <div className="text-xs font-mono text-yellow-400 uppercase tracking-wider mb-1">
                Evening Peak
              </div>
              <div className="text-sm font-semibold text-white">5:00 PM – 7:00 PM</div>
              <p className="mt-1 text-xs text-neutral-400">
                Peak daily traffic. Hundreds of cardio machines mean you'll still get a great workout without waiting.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
