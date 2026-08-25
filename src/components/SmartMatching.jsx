import React from 'react';

export default function SmartMatching() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-dim/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Find the right talent faster.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our smart matching system highlights the best candidates based on skills, experience, and availability.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-surface-container-high">
          <div className="mb-8 p-4 bg-primary-fixed/30 rounded-xl border border-primary-fixed-dim">
            <h4 className="font-label-md font-bold text-primary-container mb-1">Your Requirement</h4>
            <p className="text-sm text-on-surface-variant">"Need a React developer with Tailwind CSS experience for a 2-week frontend project."</p>
          </div>
          <div className="space-y-4 relative">
            <div className="flex items-center gap-4 p-4 border border-success/30 bg-success/5 rounded-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-success"></div>
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary font-bold">RD</div>
              <div className="flex-1">
                <h4 className="font-label-md font-bold text-on-surface">Roshan Dhakal</h4>
                <p className="text-xs text-on-surface-variant">Frontend Developer</p>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-success font-bold text-sm flex items-center gap-1 justify-end"><span class="material-symbols-outlined text-[16px]">bolt</span> 98% Match</div>
                <p className="text-xs text-on-surface-variant">Skills: React, Tailwind</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-surface-variant rounded-xl">
              <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center text-secondary font-bold">AK</div>
              <div className="flex-1">
                <h4 className="font-label-md font-bold text-on-surface">Amit Karki</h4>
                <p className="text-xs text-on-surface-variant">Full Stack Dev</p>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-primary font-bold text-sm flex items-center gap-1 justify-end">85% Match</div>
                <p className="text-xs text-on-surface-variant">Skills: React, CSS</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-surface-variant rounded-xl opacity-75">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary font-bold">ST</div>
              <div className="flex-1">
                <h4 className="font-label-md font-bold text-on-surface">Sita Tamang</h4>
                <p className="text-xs text-on-surface-variant">Web Developer</p>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-outline font-bold text-sm flex items-center gap-1 justify-end">70% Match</div>
                <p className="text-xs text-on-surface-variant">Skills: HTML, JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}