import React from 'react';

export default function Reputation() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Your work becomes your reputation.</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">Build a verified track record that helps you land more opportunities.</p>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-surface-variant -translate-y-1/2 z-0 rounded-full"></div>
          <div className="hidden md:block absolute top-1/2 left-0 w-2/3 h-1 bg-primary -translate-y-1/2 z-0 rounded-full"></div>
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-surface-variant -translate-x-1/2 z-0 rounded-full"></div>
          <div className="md:hidden absolute top-0 left-1/2 w-1 h-2/3 bg-primary -translate-x-1/2 z-0 rounded-full"></div>

          <div className="relative z-10 flex flex-col items-center bg-surface p-4 rounded-xl w-40">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <p className="font-label-md font-semibold text-on-surface">Project Completed</p>
          </div>

          <div className="relative z-10 flex flex-col items-center bg-surface p-4 rounded-xl w-40">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="material-symbols-outlined">star</span>
            </div>
            <p className="font-label-md font-semibold text-on-surface">Earn Rating</p>
          </div>

          <div className="relative z-10 flex flex-col items-center bg-surface p-4 rounded-xl w-40 border-2 border-primary-container">
            <div className="w-12 h-12 bg-white border-2 border-primary-container text-primary-container rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <p className="font-label-md font-semibold text-primary-container">More Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}