import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-surface-variant">
      <div className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand Info Column */}
        <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
          <div className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl sm:text-3xl">video_file</span>
            <span>Hamro Bridge</span>
          </div>
          <p className="text-on-surface-variant text-xs sm:text-sm max-w-sm">
            Connecting Nepal's businesses with verified student talent for quality work.
          </p>
          <div className="text-on-surface-variant text-xs pt-2 sm:pt-4">
            © {new Date().getFullYear()} Hamro Bridge. All rights reserved.
          </div>
        </div>

        {/* Platform Links */}
        <div className="col-span-1 flex flex-col gap-2 sm:gap-2.5">
          <h4 className="text-xs sm:text-sm font-bold text-on-surface mb-1">Platform</h4>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Browse Projects
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Find Talent
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            How it Works
          </a>
        </div>

        {/* Resources Links */}
        <div className="col-span-1 flex flex-col gap-2 sm:gap-2.5">
          <h4 className="text-xs sm:text-sm font-bold text-on-surface mb-1">Resources</h4>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Help Center
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Community Guidelines
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Success Stories
          </a>
        </div>

        {/* Legal Links */}
        <div className="col-span-1 flex flex-col gap-2 sm:gap-2.5">
          <h4 className="text-xs sm:text-sm font-bold text-on-surface mb-1">Legal</h4>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Privacy Policy
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Terms of Service
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm py-1" href="#">
            Trust & Safety
          </a>
        </div>
      </div>
    </footer>
  );
}