import React from 'react';

export default function TalentProfile() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-dim/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Show what you can actually do.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Detailed profiles help talent showcase their skills, portfolio, and verified work history.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-surface-container-high overflow-hidden">
          <div className="h-32 bg-primary-fixed-dim"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start -mt-12 mb-8">
              <img className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm" alt="Aarav Sharma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXv5R-_fHJYZG344WLKmHViiI1_aBGhDyoT9ZV0jB2WIVavJXaOz8ACMw5etHSDfSEmnMBqnAzdIYD2Cj7xPA84Vt-wxRWMHJ71idbPXFx940_oa4I-uRxOFVMCb4SnFuwFdxWb5a1UJSWfwzWVwnI90Jt6VfVnY4DzU1y10O3xl8qVkQIjDp3NQz5LDS_OioTQ-JmfuJcg8UaDZKXv8rM81VdLmfD5DqiJw6CH23IbV1n3JZJaQXp"/>
              <div className="mt-4 sm:mt-16 flex gap-3">
                <button className="bg-white border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface transition-colors">Message</button>
                <button className="bg-primary-container text-white px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-blue-600 transition-colors">Invite to Project</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h1 className="font-headline-md text-headline-md text-on-surface mb-1">Aarav Sharma</h1>
                  <p className="font-body-lg text-on-surface-variant mb-4">Video Editor & Motion Designer</p>
                  <p className="text-body-md text-on-surface-variant">I specialize in creating engaging social media content, promotional videos, and motion graphics for brands. With 3 years of experience using Adobe Creative Suite, I deliver high-quality visuals tailored to your audience.</p>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-[20px] mb-4 text-on-surface">Portfolio</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-surface rounded-xl aspect-video overflow-hidden group relative cursor-pointer border border-surface-variant">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                      </div>
                      <div className="w-full h-full bg-primary-fixed-dim/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-container text-4xl">movie</span>
                      </div>
                    </div>
                    <div className="bg-surface rounded-xl aspect-video overflow-hidden group relative cursor-pointer border border-surface-variant">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                      </div>
                      <div className="w-full h-full bg-secondary-fixed-dim/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-4xl">animation</span>
                      </div>
                    </div>
                    <div className="bg-surface rounded-xl aspect-video overflow-hidden group relative cursor-pointer border border-surface-variant">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                      </div>
                      <div className="w-full h-full bg-tertiary-fixed-dim/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary text-4xl">video_camera_front</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-[20px] mb-4 text-on-surface">Recent Work</h3>
                  <div className="space-y-4">
                    <div className="border border-surface-variant rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-label-md font-bold text-on-surface">Social Media Campaign for Local Brand</h4>
                        <div className="flex items-center gap-1 text-amber-500 text-sm">
                          <span className="material-symbols-outlined text-[16px]">star</span>
                          <span>5.0</span>
                        </div>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-2">"Aarav was fantastic to work with. He understood our vision perfectly and delivered high-quality videos ahead of schedule."</p>
                      <span className="text-xs text-outline">Verified Project • Completed 2 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-xl border border-surface-variant">
                  <h3 className="font-label-md text-label-md font-semibold text-on-surface mb-4">Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-sm">Rating</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-amber-500 text-[16px]">star</span>
                        <span className="font-medium text-on-surface text-sm">4.9 (24 reviews)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-sm">Jobs Completed</span>
                      <span className="font-medium text-on-surface text-sm">42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-sm">On Time Rate</span>
                      <span className="font-medium text-on-surface text-sm">98%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-surface-variant">
                  <h3 className="font-label-md text-label-md font-semibold text-on-surface mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#EADDFF] text-[#6A1EDB] px-2.5 py-1 rounded-md text-xs font-medium">Premiere Pro</span>
                    <span className="bg-[#EADDFF] text-[#6A1EDB] px-2.5 py-1 rounded-md text-xs font-medium">After Effects</span>
                    <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-medium">DaVinci Resolve</span>
                    <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-medium">Color Grading</span>
                    <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-medium">Sound Design</span>
                  </div>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-surface-variant">
                  <h3 className="font-label-md text-label-md font-semibold text-on-surface mb-4">Links</h3>
                  <div className="space-y-3">
                    <a className="flex items-center gap-2 text-primary-container text-sm hover:underline" href="#"><span className="material-symbols-outlined text-[18px]">link</span> Behance Portfolio</a>
                    <a className="flex items-center gap-2 text-primary-container text-sm hover:underline" href="#"><span className="material-symbols-outlined text-[18px]">link</span> LinkedIn</a>
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