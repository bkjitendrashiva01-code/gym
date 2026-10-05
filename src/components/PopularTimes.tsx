import React, { useState } from 'react';
import { Clock, Users, Flame, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { POPULAR_TIMES_DATA, GYM_INFO } from '../data/gymData';

export const PopularTimes: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const [selectedHour, setSelectedHour] = useState<number>(17); // Default 5 PM (17:00)

  const dayData = POPULAR_TIMES_DATA[selectedDay] || POPULAR_TIMES_DATA['Mon'];
  const currentHourData = dayData.hours.find(h => h.hour === selectedHour) || dayData.hours[dayData.hours.length - 1];

  const getBusynessColor = (busyness: number) => {
    if (busyness >= 85) return 'bg-amber-400 text-neutral-950';
    if (busyness >= 60) return 'bg-amber-400/80 text-white';
    if (busyness >= 40) return 'bg-amber-400/50 text-white';
    return 'bg-neutral-800 text-neutral-400';
  };

  const getBusynessDescription = (busyness: number, hour: number) => {
    if (hour === 17) return "Usually as busy as it gets (Peak Mecca energy)";
    if (busyness >= 90) return "Very busy · High energy & full racks";
    if (busyness >= 70) return "Moderately busy · Normal wait times for key benches";
    if (busyness >= 40) return "Moderate traffic · Plenty of open dumbbells & squat stations";
    return "Usually not busy · Quiet workout session";
  };

  return (
    <section id="popular-times" className="py-16 sm:py-24 bg-neutral-900/60 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              Live Crowd Patterns & Planning
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              POPULAR <span className="text-amber-400">TIMES</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Based on historical Google visit data at 360 Hampton Drive. Plan your lifting session for prime energy or quiet racks.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-300 bg-neutral-950 border border-neutral-800 px-4 py-3 rounded-lg">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="font-semibold text-white">Visit Duration: </span>
              <span className="text-neutral-300">{GYM_INFO.dwellTimeDescription}</span>
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
                    ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20'
                    : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {dayKey}
              </button>
            );
          })}
        </div>

        {/* Main Popular Times Graph Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 relative">
          
          {/* Top highlight row directly quoting prompt: "5 pm: Usually as busy as it gets" */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold text-white uppercase">
                  {currentHourData.label}
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-amber-400 font-semibold text-sm">
                  {getBusynessDescription(currentHourData.busyness, currentHourData.hour)}
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Peak time for {dayData.label}: <strong className="text-white">{dayData.peak}</strong> ({GYM_INFO.peakHourDescription})
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="inline-block w-3 h-3 rounded bg-amber-400" />
              <span>Busyness Level: <strong className="text-white tabular-nums">{currentHourData.busyness}%</strong></span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="mt-8">
            <div className="h-56 sm:h-64 flex items-end justify-between gap-1 sm:gap-2 px-1 pt-6 border-b border-neutral-800">
              {dayData.hours.map((item) => {
                const isCurrent = item.hour === selectedHour;
                const isPeak = item.busyness === 100;

                return (
                  <div
                    key={item.hour}
                    onClick={() => setSelectedHour(item.hour)}
                    className="flex-1 flex flex-col items-center group cursor-pointer h-full justify-end relative"
                  >
                    {/* Tooltip on hover/active */}
                    <div className={`absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none px-2 py-1 rounded bg-neutral-900 border border-neutral-700 text-[10px] text-white whitespace-nowrap shadow-lg ${
                      isCurrent ? 'opacity-100' : ''
                    }`}>
                      <span className="font-bold text-amber-400">{item.label}</span>: {item.busyness}% busy
                    </div>

                    {/* Peak indicator dot */}
                    {isPeak && (
                      <div className="absolute top-1 text-amber-400 font-bold text-[9px] uppercase tracking-tighter">
                        PEAK
                      </div>
                    )}

                    {/* Bar */}
                    <div
                      style={{ height: `${Math.max(item.busyness, 12)}%` }}
                      className={`w-full max-w-[28px] rounded-t-sm transition-all duration-300 ${
                        isCurrent
                          ? 'bg-amber-400 ring-2 ring-amber-300 ring-offset-2 ring-offset-neutral-950'
                          : isPeak
                          ? 'bg-amber-400/90 hover:bg-amber-400'
                          : 'bg-neutral-800 hover:bg-neutral-700'
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
              <span className="text-amber-400 font-bold">5 PM (Peak)</span>
              <span>{dayData.hours[dayData.hours.length - 1]?.label || '10 PM'}</span>
            </div>
          </div>

          {/* Practical Lifter Guidance based on prompt data */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                Early Bird Window
              </div>
              <div className="text-sm font-semibold text-white">5:00 AM – 7:30 AM</div>
              <p className="mt-1 text-xs text-neutral-400">
                Doors open at 5 AM. Crisp morning air, uncrowded squat racks, and immediate access to the heavy dumbbell pit.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                Mid-Day Sweet Spot
              </div>
              <div className="text-sm font-semibold text-white">1:00 PM – 3:30 PM</div>
              <p className="mt-1 text-xs text-neutral-400">
                Lull in traffic between lunch and evening rushes. Prime time for open-air yard workouts under the California sun.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                Mecca Primetime
              </div>
              <div className="text-sm font-semibold text-white">5:00 PM – 7:30 PM</div>
              <p className="mt-1 text-xs text-neutral-400">
                "Usually as busy as it gets." Maximum energy, pros and serious lifters training simultaneously, electric atmosphere.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
