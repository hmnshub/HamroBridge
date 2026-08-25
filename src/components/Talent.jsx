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
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="talent">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Find people who can do the work.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Connect with verified student freelancers ready to take on your tasks.</p>
        </div>
        <a className="hidden sm:flex items-center gap-2 text-primary-container font-label-md text-label-md hover:underline" href="#">
          Browse all talent <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {talentList.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-surface-container-high card-hover flex flex-col items-center text-center">
            {t.img ? (
              <img className="w-20 h-20 rounded-full object-cover border-4 border-surface mb-4" alt={t.name} src={t.img} />
            ) : (
              <div className={`w-20 h-20 rounded-full ${t.bgClass} flex items-center justify-center text-2xl font-bold mb-4 border-4 border-surface`}>
                {t.initials}
              </div>
            )}
            <h3 className="font-title-lg text-title-lg text-[18px] leading-tight mb-1 text-on-surface">{t.name}</h3>
            <p className="text-on-surface-variant text-sm mb-3">{t.role}</p>
            <div className="flex items-center justify-center gap-4 text-sm mb-4">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-amber-500 text-[16px]">star</span>
                <span className="font-medium text-on-surface">{t.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">work</span>
                <span>{t.projects}</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {t.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-[#F3F3FE] text-[#434655] px-2 py-1 rounded text-xs font-medium">{skill}</span>
              ))}
            </div>
            <button className="w-full bg-surface-container-low text-primary-container py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container/10 transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}