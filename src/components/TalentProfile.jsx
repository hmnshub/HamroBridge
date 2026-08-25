import React from 'react';

export default function TalentProfile() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface-container-low border-y border-surface-dim/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-3 tracking-tight">
            Show what you can actually do.
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
            Detailed profiles help talent showcase their skills, portfolio, and verified work history.
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high overflow-hidden">
          {/* Cover Banner */}
          <div className="h-24 sm:h-32 bg-primary-fixed-dim"></div>

          {/* Card Main Content */}
          <div className="px-4 sm:px-8 pb-6 sm:pb-8">
            {/* Header / Avatar & Actions Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-10 sm:-mt-12 mb-6 sm:mb-8 gap-4">
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-sm shrink-0"
                alt="Aarav Sharma"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXv5R-_fHJYZG344WLKmHViiI1_aBGhDyoT9ZV0jB2WIVavJXaOz8ACMw5etHSDfSEmnMBqnAzdIYD2Cj7xPA84Vt-wxRWMHJ71idbPXFx940_oa4I-uRxOFVMCb4SnFuwFdxWb5a1UJSWfwzWVwnI90Jt6VfVnY4DzU1y10O3xl8qVkQIjDp3NQz5LDS_OioTQ-JmfuJcg8UaDZKXv8rM81VdLmfD5DqiJw6CH23IbV1n3JZJaQXp"
              />
              <div className="flex w-full sm:w-auto gap-2.5 sm:gap-3">
                <button className="flex-1 sm:flex-none bg-white border border-outline-variant text-on-surface px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-surface transition-colors min-h-[44px]">
                  Message
                </button>
                <button className="flex-1 sm:flex-none bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors min-h-[44px]">
                  Invite to Project
                </button>
              </div>
            </div>

            {/* Profile Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
              {/* Main Column */}
              <div className="md:col-span-2 space-y-6 sm:space-y-8">
                {/* Bio Header */}
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-on-surface mb-1">
                    Aarav Sharma
                  </h1>
                  <p className="text-sm font-medium text-on-surface-variant mb-3">
                    Video Editor & Motion Designer
                  </p>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    I specialize in creating engaging social media content, promotional videos, and motion graphics for brands. With 3 years of experience using Adobe Creative Suite, I deliver high-quality visuals tailored to your audience.
                  </p>
                </div>

                {/* Portfolio Showcase */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-on-surface">
                    Portfolio
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-surface rounded-xl aspect-video overflow-hidden group relative cursor-pointer border border-surface-variant">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                      </div>
                      <div className="w-full h-full bg-primary-fixed-dim/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">movie</span>
                      </div>
                    </div>
                    <div className="bg-surface rounded-xl aspect-video overflow-hidden group relative cursor-pointer border border-surface-variant">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                      </div>
                      <div className="w-full h-full bg-secondary-fixed-dim/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-3xl sm:text-4xl">animation</span>
                      </div>
                    </div>
                    <div className="bg-surface rounded-xl aspect-video overflow-hidden group relative cursor-pointer border border-surface-variant">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                      </div>
                      <div className="w-full h-full bg-tertiary-fixed-dim/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary text-3xl sm:text-4xl">video_camera_front</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Work */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-on-surface">
                    Recent Work
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-surface-variant rounded-xl p-3.5 sm:p-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 mb-2">
                        <h4 className="text-xs sm:text-sm font-bold text-on-surface">
                          Social Media Campaign for Local Brand
                        </h4>
                        <div className="flex items-center gap-1 text-amber-500 text-xs sm:text-sm">
                          <span className="material-symbols-outlined text-sm sm:text-base">star</span>
                          <span className="font-semibold">5.0</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant mb-2 italic">
                        "Aarav was fantastic to work with. He understood our vision perfectly and delivered high-quality videos ahead of schedule."
                      </p>
                      <span className="text-[11px] sm:text-xs text-outline block">
                        Verified Project • Completed 2 weeks ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-4 sm:space-y-6">
                {/* Stats */}
                <div className="bg-surface p-4 sm:p-5 rounded-xl border border-surface-variant">
                  <h3 className="text-xs sm:text-sm font-bold text-on-surface mb-3 sm:mb-4">
                    Stats
                  </h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-on-surface-variant">Rating</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-amber-500 text-sm">star</span>
                        <span className="font-semibold text-on-surface">4.9 (24)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-on-surface-variant">Jobs Completed</span>
                      <span className="font-semibold text-on-surface">42</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-on-surface-variant">On Time Rate</span>
                      <span className="font-semibold text-on-surface">98%</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-surface p-4 sm:p-5 rounded-xl border border-surface-variant">
                  <h3 className="text-xs sm:text-sm font-bold text-on-surface mb-3 sm:mb-4">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="bg-[#EADDFF] text-[#6A1EDB] px-2.5 py-1 rounded-md text-xs font-semibold">
                      Premiere Pro
                    </span>
                    <span className="bg-[#EADDFF] text-[#6A1EDB] px-2.5 py-1 rounded-md text-xs font-semibold">
                      After Effects
                    </span>
                    <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-medium">
                      DaVinci Resolve
                    </span>
                    <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-medium">
                      Color Grading
                    </span>
                    <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-medium">
                      Sound Design
                    </span>
                  </div>
                </div>

                {/* Links */}
                <div className="bg-surface p-4 sm:p-5 rounded-xl border border-surface-variant">
                  <h3 className="text-xs sm:text-sm font-bold text-on-surface mb-3 sm:mb-4">
                    Links
                  </h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    <a className="flex items-center gap-2 text-primary text-xs sm:text-sm font-medium hover:underline" href="#">
                      <span className="material-symbols-outlined text-base">link</span> Behance Portfolio
                    </a>
                    <a className="flex items-center gap-2 text-primary text-xs sm:text-sm font-medium hover:underline" href="#">
                      <span className="material-symbols-outlined text-base">link</span> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}