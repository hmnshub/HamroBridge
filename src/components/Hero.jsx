import React, { useState } from 'react';

// Reusable Avatar component with automated fallback if image link breaks
function UserAvatar({ src, alt, className }) {
  const [imgError, setImgError] = useState(false);

  // Extract initials (e.g., "Aarohi Sharma" -> "AS")
  const initials = alt
    ? alt
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
    : 'HB';

  if (imgError || !src) {
    return (
      <div className={`${className} bg-primary-fixed text-primary font-bold flex items-center justify-center border border-primary/20 shrink-0 text-sm`}>
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImgError(true)}
      className={`${className} shrink-0`}
    />
  );
}

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed text-primary text-xs md:text-sm font-medium w-fit">
            <span className="material-symbols-outlined text-sm">school</span>
            <span>Nepal's Student–Talent Marketplace</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
            Find the right talent for the work you need.
          </h1>

          <p className="text-base md:text-lg text-on-surface-variant max-w-xl">
            Connect with verified students and emerging professionals across Nepal to get your projects done, on time and on budget.
          </p>

          {/* Search Bar Container */}
          <div className="mt-2 w-full max-w-md flex items-center border border-outline-variant rounded-xl bg-white px-3 py-2.5 shadow-sm focus-within:border-primary">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
            <input 
              type="text"
              placeholder="Video editing, website, logo design..."
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-on-surface-variant mt-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-emerald-600 text-base">verified</span>
              <span>Verified Profiles</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-base">lock</span>
              <span>Secure Payments</span>
            </div>
          </div>
        </div>

        {/* Right Preview Cards Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Talent Card 1 */}
          <div className="p-4 bg-white rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4">
            <UserAvatar 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
              alt="Aarohi Sharma" 
              className="w-14 h-14 rounded-full object-cover" 
            />
            <div className="flex flex-col text-left">
              <h4 className="font-semibold text-on-surface">Aarohi Sharma</h4>
              <p className="text-xs text-on-surface-variant">Video Editor & Motion Designer</p>
              <div className="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                <span className="material-symbols-outlined text-sm">star</span>
                <span>4.9 (42 jobs)</span>
              </div>
            </div>
          </div>

          {/* Talent Card 2 */}
          <div className="p-4 bg-white rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4 ml-0 sm:ml-6">
            <UserAvatar 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" 
              alt="Priya Karki" 
              className="w-14 h-14 rounded-full object-cover" 
            />
            <div className="flex flex-col text-left">
              <h4 className="font-semibold text-on-surface">Priya Karki</h4>
              <p className="text-xs text-on-surface-variant">UI/UX Designer</p>
              <div className="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
                <span className="material-symbols-outlined text-sm">star</span>
                <span>5.0 (18 jobs)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}