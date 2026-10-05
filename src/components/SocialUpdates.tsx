import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { SOCIAL_POSTS, SocialPost } from '../data/gymData';

export const SocialUpdates: React.FC = () => {
  const [likes, setLikes] = useState<Record<string, number>>({
    'sp-1': 1420,
    'sp-2': 2415,
    'sp-3': 1890
  });
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    if (liked[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0a0611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-purple-900/40">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
              Social Media Updates
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              LATEST POSTS FROM <span className="text-yellow-400">PLANET FITNESS</span>
            </h2>
            <p className="mt-1 text-sm text-neutral-400">
              Community updates, workout tips, and announcements from 4 Liberty Lane West, Hampton, NH.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-purple-300">
            <span>Official Handle:</span>
            <span className="text-yellow-400 font-mono font-bold">@planetfitness</span>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_POSTS.map((post) => {
            const isPostLiked = liked[post.id];
            const currentLikes = likes[post.id] || post.likes;

            return (
              <div
                key={post.id}
                className="p-6 rounded-xl bg-[#12091e] border border-purple-900/40 hover:border-purple-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-950">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-yellow-400 text-purple-950 font-bold text-xs flex items-center justify-center">
                        PF
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Planet Fitness Hampton</div>
                        <div className="text-[10px] text-neutral-500 font-mono">{post.timeAgo}</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-yellow-400">
                      #{post.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                    {post.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-950 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1.5 transition-colors ${
                        isPostLiked ? 'text-rose-500' : 'hover:text-white'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isPostLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span className="tabular-nums">{currentLikes.toLocaleString()}</span>
                    </button>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-neutral-500" />
                      <span className="tabular-nums">{post.comments}</span>
                    </div>
                  </div>

                  <span className="text-[11px] text-purple-400">Hampton, NH</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
