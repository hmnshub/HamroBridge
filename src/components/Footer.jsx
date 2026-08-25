import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-surface-variant">
      <div className="w-full py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1 md:col-span-1 space-y-4">
          <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[32px]">video_file</span>
            Hamro Bridge
          </div>
          <p className="text-on-surface-variant text-sm pr-4">
            Connecting Nepal's businesses with verified student talent for quality work.
          </p>
          <div className="text-on-surface-variant text-sm mt-8">
            © 2024 Hamro Bridge. All rights reserved.
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-md text-label-md font-semibold text-on-surface mb-2">Platform</h4>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Browse Projects</a>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Find Talent</a>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">How it Works</a>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-md text-label-md font-semibold text-on-surface mb-2">Resources</h4>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Help Center</a>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Community Guidelines</a>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Success Stories</a>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-md text-label-md font-semibold text-on-surface mb-2">Legal</h4>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:underline decoration-primary transition-opacity opacity-80 hover:opacity-100 font-body-md text-sm" href="#">Trust & Safety</a>
        </div>
      </div>
    </footer>
  );
}