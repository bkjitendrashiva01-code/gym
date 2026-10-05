import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FacilityTour } from './components/FacilityTour';
import { PopularTimes } from './components/PopularTimes';
import { PassesPricing } from './components/PassesPricing';
import { ReviewsSection } from './components/ReviewsSection';
import { SocialUpdates } from './components/SocialUpdates';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { DayPassBookingModal } from './components/DayPassBookingModal';
import { ReviewModal } from './components/ReviewModal';
import { Review } from './data/gymData';
import { Check, BookmarkCheck } from 'lucide-react';

export default function App() {
  const [isDayPassOpen, setIsDayPassOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState<boolean>(() => {
    return localStorage.getItem('planet_fitness_hampton_saved') === 'true';
  });
  const [sharedToast, setSharedToast] = useState(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);
  const [userReviews, setUserReviews] = useState<Review[]>([]);

  const handleToggleSave = () => {
    const next = !isSaved;
    setIsSaved(next);
    localStorage.setItem('planet_fitness_hampton_saved', String(next));
    setSaveToast(next ? "Saved Planet Fitness Hampton to your clubs" : "Removed from your clubs");
    setTimeout(() => setSaveToast(null), 2500);
  };

  const handleShare = async () => {
    const shareData = {
      title: "Planet Fitness - Hampton, NH | Judgement Free Zone®",
      text: "Large low-cost fitness chain with many locations across the U.S. Located at 4 Liberty Lane West, Hampton, NH 03842.",
      url: window.location.href
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // user cancelled or share failed, fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2500);
    } catch {
      // clipboard fallback
    }
  };

  const handleAddReview = (newRev: Review) => {
    setUserReviews(prev => [newRev, ...prev]);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-400 selection:text-neutral-950">
      
      {/* Header */}
      <Header
        onOpenDayPass={() => setIsDayPassOpen(true)}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
        onShare={handleShare}
        sharedToast={sharedToast}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenDayPass={() => setIsDayPassOpen(true)}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onShare={handleShare}
          sharedToast={sharedToast}
        />

        <ServicesSection
          onOpenDayPass={() => setIsDayPassOpen(true)}
        />

        <FacilityTour />

        <PopularTimes />

        <PassesPricing
          onOpenDayPass={() => setIsDayPassOpen(true)}
        />

        <ReviewsSection
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
          userReviews={userReviews}
        />

        <SocialUpdates />

        <LocationHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Day Pass Booking Modal ($50) */}
      <DayPassBookingModal
        isOpen={isDayPassOpen}
        onClose={() => setIsDayPassOpen(false)}
      />

      {/* Rate & Review on Google Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />

      {/* Floating Save & Share Toast Notifications */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-xs shadow-2xl animate-fade-in">
          <BookmarkCheck className="w-4 h-4 text-amber-400" />
          <span>{saveToast}</span>
        </div>
      )}

      {sharedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-xs shadow-2xl animate-fade-in">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Page link copied to clipboard!</span>
        </div>
      )}

    </div>
  );
}
