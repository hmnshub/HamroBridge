import React from 'react';

export default function ProjectDetail() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">See what a project looks like.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Clear project details make it easy for talent to understand requirements and submit accurate proposals.</p>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-surface-container-high p-8">
        <div className="flex justify-between items-start border-b border-surface-variant pb-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#F3F3FE] text-[#434655] px-2.5 py-1 rounded-md text-xs font-medium">Social Media</span>
              <span className="text-success text-sm flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">check_circle</span> Open for Proposals</span>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface mb-2">Social Media Videos for Kathmandu Café</h1>
            <p className="text-on-surface-variant text-sm flex items-center gap-4">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Thamel, Kathmandu (Remote ok)</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> Posted 2 hours ago</span>
            </p>
          </div>
          <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-label-md text-label-md hover:bg-blue-600 transition-colors shadow-sm whitespace-nowrap">Submit Proposal</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="font-title-lg text-title-lg text-[20px] mb-3 text-on-surface">Description</h3>
              <p className="text-body-md text-on-surface-variant space-y-4">
                We are opening a new specialty coffee shop in Thamel and need engaging content for our Instagram and TikTok launch.<br/><br/>
                Requirements:<br/>
                - Shoot and edit 5 short vertical videos (15-30s each)<br/>
                - Focus on the coffee-making process, interior ambiance, and barista interactions<br/>
                - Add trendy trending audio and engaging captions<br/>
                - Provide source files and final rendered versions<br/><br/>
                We prefer someone who can come on-site for a half-day shoot this weekend.
              </p>
            </div>
            <div>
              <h3 className="font-title-lg text-title-lg text-[20px] mb-3 text-on-surface">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-md text-sm">Videography</span>
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-md text-sm">Video Editing</span>
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-md text-sm">Social Media Content</span>
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-md text-sm">CapCut / Premiere Rush</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-surface p-6 rounded-xl border border-surface-variant space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-surface-dim/50">
                <div>
                  <p className="text-sm text-on-surface-variant">Budget</p>
                  <p className="font-semibold text-on-surface">Rs. 8,000 - 10,000</p>
                </div>
                <span className="material-symbols-outlined text-outline">payments</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-surface-dim/50">
                <div>
                  <p className="text-sm text-on-surface-variant">Deadline</p>
                  <p className="font-semibold text-on-surface">October 15, 2024</p>
                </div>
                <span className="material-symbols-outlined text-outline">event</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-on-surface-variant">Experience Level</p>
                  <p className="font-semibold text-on-surface">Intermediate</p>
                </div>
                <span className="material-symbols-outlined text-outline">trending_up</span>
              </div>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-surface-variant">
              <h3 className="font-label-md font-semibold text-on-surface mb-4">About the Client</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-primary font-bold">KC</div>
                <div>
                  <p className="font-medium text-sm text-on-surface">Kathmandu Café</p>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[14px] text-success">verified</span> Payment Verified</p>
                </div>
              </div>
              <div className="text-sm text-on-surface-variant space-y-2">
                <p>Joined August 2024</p>
                <p>2 jobs posted</p>
                <p>100% hire rate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-surface-variant">
          <h3 className="font-title-lg text-title-lg text-[20px] mb-6 text-on-surface">Current Applicants (3)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-surface-variant p-4 rounded-xl flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover" alt="Aarav Sharma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXv5R-_fHJYZG344WLKmHViiI1_aBGhDyoT9ZV0jB2WIVavJXaOz8ACMw5etHSDfSEmnMBqnAzdIYD2Cj7xPA84Vt-wxRWMHJ71idbPXFx940_oa4I-uRxOFVMCb4SnFuwFdxWb5a1UJSWfwzWVwnI90Jt6VfVnY4DzU1y10O3xl8qVkQIjDp3NQz5LDS_OioTQ-JmfuJcg8UaDZKXv8rM81VdLmfD5DqiJw6CH23IbV1n3JZJaQXp"/>
              <div>
                <p className="font-medium text-sm text-on-surface">Aarav Sharma</p>
                <p className="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[14px] text-amber-500">star</span> 4.9</p>
              </div>
            </div>
            <div className="border border-surface-variant p-4 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-bold text-sm">NK</div>
              <div>
                <p className="font-medium text-sm text-on-surface">Nita K.</p>
                <p className="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[14px] text-amber-500">star</span> 4.5</p>
              </div>
            </div>
            <div className="border border-surface-variant p-4 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-bold text-sm">SP</div>
              <div>
                <p className="font-medium text-sm text-on-surface">Sujan P.</p>
                <p className="text-xs text-on-surface-variant">New Talent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}