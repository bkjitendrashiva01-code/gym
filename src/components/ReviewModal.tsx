import React, { useState } from 'react';
import { X, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { Review } from '../data/gymData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newRev: Review = {
      id: 'user-' + Date.now(),
      author: author.trim(),
      rating,
      date: 'Just now',
      content: content.trim(),
      likes: 1,
      verified: true
    };

    onSubmitReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAuthor('');
      setContent('');
      setRating(5);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <h3 className="font-display text-xl font-bold text-white uppercase">
              Rate & Review on Google
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800"
            aria-label="Close review modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="font-display text-2xl font-bold text-white">
              Thank You For Your Review!
            </h4>
            <p className="text-sm text-neutral-400">
              Your feedback for Gold's Gym Venice has been posted to the review feed.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Star Picker */}
            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Overall Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const active = hoverRating ? star <= hoverRating : star <= rating;
                  return (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 text-2xl focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          active ? 'fill-amber-400 text-amber-400' : 'text-neutral-700'
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="ml-2 font-mono font-bold text-sm text-amber-400">
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            {/* Author */}
            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Jack Dempsey"
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-sm"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                Review Details
              </label>
              <textarea
                required
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your experience with the equipment, outdoor yard, energy, or staff..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-sm"
              />
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-colors shadow-sm"
              >
                Post Review
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
