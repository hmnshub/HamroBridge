import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-surface-variant px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">bridge</span>
          <span className="font-bold text-lg md:text-xl text-on-surface">Hamro Bridge</span>
        </div>

        {/* Desktop Links (Scrollable on small screens) */}
        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto w-full md:w-auto py-2 md:py-0 text-sm md:text-base">
          <a href="#projects" className="whitespace-nowrap hover:text-primary">Browse Projects</a>
          <a href="#talent" className="whitespace-nowrap hover:text-primary">Find Talent</a>
          <a href="#how" className="whitespace-nowrap hover:text-primary">How It Works</a>
          <a href="#categories" className="whitespace-nowrap hover:text-primary">Categories</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button className="px-4 py-2 text-sm font-medium text-on-surface hover:text-primary">
            Log in
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-container transition">
            Join Platform
          </button>
        </div>
      </div>
    </nav>
  );
}