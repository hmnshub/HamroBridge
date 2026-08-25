import React from 'react';

export default function Hero() {
  return (
    <section className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 z-10 relative">
          <div className="inline-flex items-center gap-2 bg-[#EADDFF] text-[#6A1EDB] px-4 py-1.5 rounded-full font-label-md text-label-md w-fit">
            <span className="material-symbols-outlined text-sm">school</span>
            Nepal's Student–Talent Marketplace
          </div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface max-w-2xl">
            Find the right <span className="text-primary-container">talent</span> for the work you need.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Connect with verified students and emerging professionals across Nepal to get your projects done, on time and on budget.
          </p>
          <div className="bg-white p-2 rounded-xl shadow-sm border border-outline-variant flex items-center gap-2 max-w-xl focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/20 transition-all">
            <span className="material-symbols-outlined text-outline ml-3">search</span>
            <input 
              className="border-none focus:ring-0 bg-transparent flex-1 font-body-md text-body-md text-on-surface placeholder:text-outline h-12" 
              placeholder="Video editing, website, logo design..." 
              type="text"
            />
            <button className="bg-primary text-white px-6 h-12 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shrink-0">
              Search
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#059669]">verified</span>
              Verified Profiles
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
              Secure Payments
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block h-[600px] w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-fixed-dim/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="absolute top-[10%] right-[10%] w-[320px] bg-white rounded-2xl p-6 shadow-lg border border-surface-container-high card-hover z-20">
            <div className="flex gap-4 items-start">
              <img className="w-16 h-16 rounded-full object-cover border-2 border-surface" alt="Aarav Sharma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXv5R-_fHJYZG344WLKmHViiI1_aBGhDyoT9ZV0jB2WIVavJXaOz8ACMw5etHSDfSEmnMBqnAzdIYD2Cj7xPA84Vt-wxRWMHJ71idbPXFx940_oa4I-uRxOFVMCb4SnFuwFdxWb5a1UJSWfwzWVwnI90Jt6VfVnY4DzU1y10O3xl8qVkQIjDp3NQz5LDS_OioTQ-JmfuJcg8UaDZKXv8rM81VdLmfD5DqiJw6CH23IbV1n3JZJaQXp"/>
              <div>
                <h3 className="font-title-lg text-title-lg text-[18px] leading-tight mb-1">Aarav Sharma</h3>
                <p className="text-on-surface-variant text-sm mb-2">Video Editor & Motion Designer</p>
                <div className="flex items-center gap-1 text-sm">
                  <span className="material-symbols-outlined text-amber-500 text-[16px]">star</span>
                  <span className="font-medium text-on-surface">4.9</span>
                  <span className="text-on-surface-variant">(42 jobs)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-[#F3F3FE] text-[#434655] px-2 py-1 rounded text-xs font-medium">Premiere Pro</span>
              <span className="bg-[#F3F3FE] text-[#434655] px-2 py-1 rounded text-xs font-medium">After Effects</span>
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[5%] w-[320px] bg-white rounded-2xl p-6 shadow-lg border border-surface-container-high card-hover z-10">
            <div className="flex gap-4 items-start">
              <img className="w-16 h-16 rounded-full object-cover border-2 border-surface" alt="Priya Karki" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdQr0fMlrxs-fqHTc05kN_p8uiPHMpUtOCxEJYHDoTfUj4SMYj-6npPv23rOc9EiVLG37qsh2rA2lmnWpIuVShJb1GO76reD33C3SQPavfq4DprS9ACmiAA3h8HLA6bJOnUCyCMrabdDv2gJUYXXgiH3ICtVzyp9kWVKSumyheYnE4tyOEd-xsLCp378QTMvczrVfeE11AUWcpRDVUDjICnkyeVTtyphoxI7uDWtR0MPL1piAUeOb"/>
              <div>
                <h3 className="font-title-lg text-title-lg text-[18px] leading-tight mb-1">Priya Karki</h3>
                <p className="text-on-surface-variant text-sm mb-2">UI/UX Designer</p>
                <div className="flex items-center gap-1 text-sm">
                  <span className="material-symbols-outlined text-amber-500 text-[16px]">star</span>
                  <span className="font-medium text-on-surface">5.0</span>
                  <span className="text-on-surface-variant">(18 jobs)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-[#F3F3FE] text-[#434655] px-2 py-1 rounded text-xs font-medium">Figma</span>
              <span className="bg-[#F3F3FE] text-[#434655] px-2 py-1 rounded text-xs font-medium">Web Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}