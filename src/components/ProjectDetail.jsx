import React from 'react';

export default function ProjectDetail() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface mb-2 md:mb-4">See what a project looks like.</h2>
        <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto">Clear project details make it easy for talent to understand requirements and submit accurate proposals.</p>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-surface-container-high p-4 sm:p-6 md:p-8">
        
        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-surface-variant pb-6 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#F3F3FE] text-[#434655] px-2.5 py-1 rounded-md text-xs font-medium">Social Media</span>
              <span className="text-success text-xs md:text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-base">check_circle</span> Open for Proposals
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-on-surface mb-2">Social Media Videos for Kathmandu Café</h1>
            <div className="text-on-surface-variant text-xs md:text-sm flex flex-col sm:flex-row gap-2 sm:gap-4">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">location_on</span> Thamel, Kathmandu (Remote ok)</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span> Posted 2 hours ago</span>
            </div>
          </div>
          <button className="w-full sm:w-auto bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm">
            Submit Proposal
          </button>
        </div>

        {/* Content body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-2 text-on-surface">Description</h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                We are opening a new specialty coffee shop in Thamel and need engaging content for our Instagram and TikTok launch.<br/><br/>
                <strong>Requirements:</strong><br/>
                • Shoot and edit 5 short vertical videos (15-30s each)<br/>
                • Focus on coffee-making process and interior ambiance<br/>
                • Add trending audio and engaging captions<br/>
                • Provide source files and rendered versions
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-2 text-on-surface">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-xs md:text-sm">Videography</span>
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-xs md:text-sm">Video Editing</span>
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-xs md:text-sm">Social Media</span>
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-xs md:text-sm">CapCut / Premiere</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-surface p-4 md:p-6 rounded-xl border border-surface-variant space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-surface-dim/50">
                <div>
                  <p className="text-xs text-on-surface-variant">Budget</p>
                  <p className="font-semibold text-sm md:text-base text-on-surface">Rs. 8,000 - 10,000</p>
                </div>
                <span className="material-symbols-outlined text-outline">payments</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-surface-dim/50">
                <div>
                  <p className="text-xs text-on-surface-variant">Deadline</p>
                  <p className="font-semibold text-sm md:text-base text-on-surface">October 15, 2024</p>
                </div>
                <span className="material-symbols-outlined text-outline">event</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}