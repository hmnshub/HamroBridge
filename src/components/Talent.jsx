import React from 'react';

const talentList = [
  {
    name: 'Aarav Sharma',
    role: 'Video Editor & Motion Designer',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXv5R-_fHJYZG344WLKmHViiI1_aBGhDyoT9ZV0jB2WIVavJXaOz8ACMw5etHSDfSEmnMBqnAzdIYD2Cj7xPA84Vt-wxRWMHJ71idbPXFx940_oa4I-uRxOFVMCb4SnFuwFdxWb5a1UJSWfwzWVwnI90Jt6VfVnY4DzU1y10O3xl8qVkQIjDp3NQz5LDS_OioTQ-JmfuJcg8UaDZKXv8rM81VdLmfD5DqiJw6CH23IbV1n3JZJaQXp',
    rating: '4.9',
    projects: '42 projects',
    skills: ['Premiere Pro', 'After Effects']
  },
  {
    name: 'Priya Karki',
    role: 'UI/UX Designer',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdQr0fMlrxs-fqHTc05kN_p8uiPHMpUtOCxEJYHDoTfUj4SMYj-6npPv23rOc9EiVLG37qsh2rA2lmnWpIuVShJb1GO76reD33C3SQPavfq4DprS9ACmiAA3h8HLA6bJOnUCyCMrabdDv2gJUYXXgiH3ICtVzyp9kWVKSumyheYnE4tyOEd-xsLCp378QTMvczrVfeE11AUWcpRDVUDjICnkyeVTtyphoxI7uDWtR0MPL1piAUeOb',
    rating: '5.0',
    projects: '18 projects',
    skills: ['Figma', 'Web Design']
  },
  {
    name: 'Roshan Dhakal',
    role: 'Frontend Developer',
    initials: 'RD',
    bgClass: 'bg-primary-fixed text-primary',
    rating: '4.8',
    projects: '25 projects',
    skills: ['React', 'Tailwind CSS']
  },
  {
    name: 'Sita Maharjan',
    role: 'Content Writer',
    initials: 'SM',
    bgClass: 'bg-secondary-fixed text-secondary',
    rating: '4.7',
    projects: '30 projects',
    skills: ['Copywriting', 'SEO']
  }
];

export default function Talent() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="talent">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 md:mb-12 gap-4 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">
            Find people who can do the work.
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-2xl">
            Connect with verified student freelancers ready to take on your tasks.
          </p>
        </div>
        <a className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline w-fit" href="#">
          <span>Browse all talent</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {talentList.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-surface-container-high card-hover flex flex-col items-center text-center justify-between h-full"
          >
            <div className="flex flex-col items-center w-full">
              {/* Avatar Image / Initials */}
              {t.img ? (
                <img 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 sm:border-4 border-surface mb-3 sm:mb-4 shadow-sm" 
                  alt={t.name} 
                  src={t.img} 
                />
              ) : (
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${t.bgClass} flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 border-2 sm:border-4 border-surface shadow-sm`}>
                  {t.initials}
                </div>
              )}

              {/* Name & Role */}
              <h3 className="font-bold text-base sm:text-lg leading-snug mb-1 text-on-surface">
                {t.name}
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm mb-3">
                {t.role}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-500 text-sm sm:text-base">star</span>
                  <span className="font-semibold text-on-surface">{t.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm sm:text-base">work</span>
                  <span>{t.projects}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6">
                {t.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-[#F3F3FE] text-[#434655] px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Action */}
            <button className="w-full bg-surface-container-low text-primary py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/10 active:bg-primary/20 transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}