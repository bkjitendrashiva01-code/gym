import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, MessageSquarePlus, Filter } from 'lucide-react';
import { REVIEWS as INITIAL_REVIEWS, Review, GYM_INFO } from '../data/gymData';

interface ReviewsSectionProps {
  onOpenReviewModal: () => void;
  userReviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenReviewModal,
  userReviews
}) => {
  const [starFilter, setStarFilter] = useState<number | 'all'>('all');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const allReviews = [...userReviews, ...INITIAL_REVIEWS];

  const filteredReviews = starFilter === 'all'
    ? allReviews
    : allReviews.filter(r => r.rating === starFilter);

  const toggleLike = (id: string) => {
    setLikedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0e0717]/80 border-t border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/40">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
              Verified Google Community Feedback
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              MEMBER <span className="text-yellow-400">REVIEWS</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Authentic member reviews for our Planet Fitness club at 4 Liberty Lane West, Hampton, NH.
            </p>
          </div>

          <button
            onClick={onOpenReviewModal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#140b22] hover:bg-purple-950 border border-purple-800 hover:border-yellow-400 text-white font-medium text-sm transition-all shadow-sm active:translate-y-0.5"
          >
            <MessageSquarePlus className="w-4 h-4 text-yellow-400" />
            <span>Rate and review on Google</span>
          </button>
        </div>

        {/* Scorecard */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#12091e] border border-purple-900/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Big Rating Block */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 lg:pr-8 lg:border-r lg:border-purple-950">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl sm:text-7xl font-black text-white tabular-nums tracking-tight">
                {GYM_INFO.rating}
              </span>
              <span className="text-xl text-purple-400 font-mono">/ 5.0</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-5 h-5 ${s <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400 fill-yellow-400/50'}`}
                />
              ))}
            </div>

            <div className="text-xs text-neutral-400 font-mono">
              Based on <strong className="text-white tabular-nums">1,524 reviews</strong> on Google Maps
            </div>
            <div className="text-[11px] text-emerald-400 font-medium pt-1">
              Top rated for cleanliness and staff friendliness
            </div>
          </div>

          {/* Rating Distribution Bars */}
          <div className="lg:col-span-8 space-y-2">
            {[
              { stars: 5, pct: 68, count: 1036 },
              { stars: 4, pct: 18, count: 274 },
              { stars: 3, pct: 6, count: 91 },
              { stars: 2, pct: 3, count: 46 },
              { stars: 1, pct: 5, count: 77 }
            ].map((bar) => (
              <div key={bar.stars} className="flex items-center gap-3 text-xs">
                <span className="w-8 font-mono text-neutral-400 text-right">{bar.stars} ★</span>
                <div className="flex-1 h-3 rounded-full bg-purple-950 overflow-hidden border border-purple-900/50">
                  <div
                    style={{ width: `${bar.pct}%` }}
                    className="h-full bg-yellow-400 rounded-full"
                  />
                </div>
                <span className="w-12 font-mono text-neutral-400 text-right tabular-nums">{bar.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Star Filter Tabs */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Filter by:
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-[#140b22] border border-purple-900/60 rounded-lg text-xs">
              <button
                onClick={() => setStarFilter('all')}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  starFilter === 'all'
                    ? 'bg-yellow-400 text-purple-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStarFilter(5)}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  starFilter === 5
                    ? 'bg-yellow-400 text-purple-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                5 Stars
              </button>
              <button
                onClick={() => setStarFilter(4)}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  starFilter === 4
                    ? 'bg-yellow-400 text-purple-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                4 Stars
              </button>
            </div>
          </div>

          <div className="text-xs text-neutral-400">
            Showing {filteredReviews.length} reviews
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const isLiked = likedMap[rev.id];
            const currentLikes = rev.likes + (isLiked ? 1 : 0);

            return (
              <div
                key={rev.id}
                className="p-6 rounded-xl bg-[#12091e] border border-purple-900/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-900 text-yellow-400 flex items-center justify-center font-bold text-xs border border-purple-700">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{rev.author}</span>
                          {rev.verified && (
                            <CheckCircle className="w-3.5 h-3.5 text-yellow-400" />
                          )}
                        </div>
                        <div className="text-[11px] text-neutral-500">{rev.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < rev.rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    "{rev.content}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-950 flex items-center justify-between text-xs text-neutral-500">
                  <button
                    onClick={() => toggleLike(rev.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      isLiked ? 'text-yellow-400' : 'hover:text-neutral-300'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-yellow-400' : ''}`} />
                    <span className="font-mono tabular-nums">{currentLikes}</span>
                  </button>
                  <span className="font-mono text-[11px]">Hampton, NH Member</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
