import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-surface shadow-sm top-0 sticky z-50 transition-all duration-300 border-b border-surface-dim/30">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <a className="font-display-md text-display-md font-bold text-primary tracking-tight text-[28px] leading-none shrink-0 flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-primary-container">video_file</span>
          Hamro Bridge
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#projects">Browse Projects</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#talent">Find Talent</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#how-it-works">How It Works</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#categories">Categories</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors">
            Log in
          </button>
          <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-label-md text-label-md hover:bg-blue-600 transition-colors shadow-sm hover:shadow">
            Join Platform
          </button>
        </div>
      </div>
    </nav>
  );
}