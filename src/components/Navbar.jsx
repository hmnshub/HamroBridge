import React, { useState } from 'react';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white border-b border-surface-variant sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">bridge</span>
              <span className="font-bold text-base sm:text-xl text-on-surface tracking-tight">
                Hamro Bridge
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-on-surface-variant">
              <a href="#projects" className="hover:text-primary transition-colors py-1">Browse Projects</a>
              <a href="#talent" className="hover:text-primary transition-colors py-1">Find Talent</a>
              <a href="#how" className="hover:text-primary transition-colors py-1">How It Works</a>
              <a href="#categories" className="hover:text-primary transition-colors py-1">Categories</a>
            </div>

            {/* Action Area: CTA Buttons + Mobile Drawer Toggle Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Log in Button */}
              <button className="px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-on-surface hover:text-primary transition-colors whitespace-nowrap">
                Log in
              </button>

              {/* Join Platform Button */}
              <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap">
                Join Platform
              </button>

              {/* Slide Drawer Toggle Button (Mobile Only) */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 rounded-xl md:hidden text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-center"
                aria-label="Open navigation menu"
              >
                <span className="material-symbols-outlined text-2xl">menu</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Modern Mobile Slide Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsDrawerOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top Panel Bar */}
          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">bridge</span>
                <span className="font-bold text-base text-on-surface">Menu</span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1">
              <a
                href="#projects"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-lg">grid_view</span>
                Browse Projects
              </a>
              <a
                href="#talent"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-lg">person_search</span>
                Find Talent
              </a>
              <a
                href="#how"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-lg">help_outline</span>
                How It Works
              </a>
              <a
                href="#categories"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-lg">category</span>
                Categories
              </a>
            </nav>
          </div>

          {/* Bottom Panel Footer */}
          <div className="pt-6 border-t border-surface-variant">
            <p className="text-xs text-on-surface-variant mb-3">
              Nepal's Student–Talent Marketplace
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Verified Community</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}