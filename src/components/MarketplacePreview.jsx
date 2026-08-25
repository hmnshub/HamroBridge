import React from 'react';

export default function MarketplacePreview() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">See what's inside.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A powerful, intuitive dashboard designed to help you find work or manage projects efficiently.</p>
      </div>
      <div className="bg-surface-container-low rounded-2xl shadow-xl border border-outline-variant overflow-hidden flex flex-col md:flex-row h-[600px]">
        <div className="w-full md:w-64 bg-white border-r border-outline-variant p-6 hidden md:flex flex-col gap-6">
          <div className="font-label-md font-bold text-on-surface mb-2">Filters</div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-on-surface-variant block mb-2">Category</label>
              <select className="w-full border border-outline-variant rounded-md text-sm p-2 bg-surface">
                <option>All Categories</option>
                <option>Design</option>
                <option>Development</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-on-surface-variant block mb-2">Budget Range</label>
              <input className="w-full" type="range"/>
              <div className="flex justify-between text-xs text-outline mt-1">
                <span>Rs. 0</span>
                <span>Rs. 50k+</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-on-surface-variant block mb-2">Skills</label>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-2 py-1 rounded text-xs">Figma</span>
                <span className="bg-surface-container-high px-2 py-1 rounded text-xs">React</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 bg-surface overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-lg text-on-surface">Recommended Projects</h3>
            <div className="flex gap-2">
              <button className="bg-white border border-outline-variant px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">sort</span> Sort
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-surface-container-high flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <h4 className="font-label-md font-bold text-on-surface mb-1">E-commerce Website Design</h4>
                <p className="text-sm text-on-surface-variant mb-2">Need a complete UI design for a clothing brand in Figma.</p>
                <div className="flex gap-2">
                  <span className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 rounded text-xs">Design</span>
                  <span className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 rounded text-xs">Figma</span>
                </div>
              </div>
              <div className="text-right sm:text-right w-full sm:w-auto mt-2 sm:mt-0">
                <p className="font-bold text-on-surface">Rs. 20,000</p>
                <p className="text-xs text-on-surface-variant mb-2">Fixed Price</p>
                <button className="bg-primary-container text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-600">View</button>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-surface-container-high flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <h4 className="font-label-md font-bold text-on-surface mb-1">Content Writer for Tech Blog</h4>
                <p className="text-sm text-on-surface-variant mb-2">Looking for 4 SEO-optimized articles per month.</p>
                <div className="flex gap-2">
                  <span className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 rounded text-xs">Writing</span>
                  <span className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 rounded text-xs">SEO</span>
                </div>
              </div>
              <div className="text-right sm:text-right w-full sm:w-auto mt-2 sm:mt-0">
                <p className="font-bold text-on-surface">Rs. 5,000 / article</p>
                <p className="text-xs text-on-surface-variant mb-2">Ongoing</p>
                <button className="bg-primary-container text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-600">View</button>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-surface-container-high flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center opacity-70">
              <div>
                <h4 className="font-label-md font-bold text-on-surface mb-1">Logo Design for Startup</h4>
                <p className="text-sm text-on-surface-variant mb-2">Minimalist logo needed for a new delivery service.</p>
                <div className="flex gap-2">
                  <span className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 rounded text-xs">Design</span>
                </div>
              </div>
              <div className="text-right sm:text-right w-full sm:w-auto mt-2 sm:mt-0">
                <p className="font-bold text-on-surface">Rs. 8,000</p>
                <p className="text-xs text-on-surface-variant mb-2">Fixed Price</p>
                <button className="bg-surface-container-high text-on-surface px-4 py-1.5 rounded-md text-sm">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}