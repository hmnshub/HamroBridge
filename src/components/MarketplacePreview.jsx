import React from 'react';

export default function MarketplacePreview() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface mb-2 md:mb-4">See what's inside.</h2>
        <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto">A powerful, intuitive dashboard designed to help you find work or manage projects efficiently.</p>
      </div>
      
      {/* Container: Changed fixed h-[600px] to min-h-[500px] auto height for mobile */}
      <div className="bg-surface-container-low rounded-2xl shadow-xl border border-outline-variant overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Desktop Sidebar (hidden on mobile to save vertical space) */}
        <div className="w-full md:w-64 bg-white border-r border-outline-variant p-6 hidden md:flex flex-col gap-6">
          <div className="font-bold text-on-surface mb-2">Filters</div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-on-surface-variant block mb-2">Category</label>
              <select className="w-full border border-outline-variant rounded-md text-sm p-2 bg-surface">
                <option>All Categories</option>
                <option>Design</option>
                <option>Development</option>
              </select>
            </div>
          </div>
        </div>

        {/* Project feed */}
        <div className="flex-1 p-4 md:p-6 bg-surface overflow-y-auto">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h3 className="font-bold text-base md:text-lg text-on-surface">Recommended Projects</h3>
            <button className="bg-white border border-outline-variant px-3 py-1.5 rounded-md text-xs md:text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-base">sort</span> Sort
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-surface-container-high flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <h4 className="font-bold text-sm md:text-base text-on-surface mb-1">E-commerce Website Design</h4>
                <p className="text-xs md:text-sm text-on-surface-variant mb-2">Need a complete UI design for a clothing brand in Figma.</p>
                <div className="flex gap-2">
                  <span className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 rounded text-xs">Design</span>
                  <span className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 rounded text-xs">Figma</span>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto mt-2 sm:mt-0 flex sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 pt-2 sm:pt-0">
                <div>
                  <p className="font-bold text-sm md:text-base text-on-surface">Rs. 20,000</p>
                  <p className="text-xs text-on-surface-variant hidden sm:block">Fixed Price</p>
                </div>
                <button className="bg-primary-container text-white px-4 py-1.5 rounded-md text-xs md:text-sm hover:bg-blue-600">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}