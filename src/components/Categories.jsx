import React from 'react';

const categories = [
  { icon: 'movie', title: 'Video & Content', desc: 'Editing, Motion Graphics, Animation' },
  { icon: 'brush', title: 'Design', desc: 'Logos, UI/UX, Illustrations' },
  { icon: 'code', title: 'Development', desc: 'Websites, Apps, Scripts' },
  { icon: 'share', title: 'Social Media', desc: 'Management, Strategy, Ads' },
  { icon: 'photo_camera', title: 'Photography', desc: 'Products, Events, Portraits' },
  { icon: 'campaign', title: 'Marketing', desc: 'SEO, Campaigns, Analytics' },
  { icon: 'edit_document', title: 'Writing', desc: 'Blogs, Copywriting, Translation' },
  { icon: 'bar_chart', title: 'Research & Data', desc: 'Analysis, Surveys, Entry' },
];

export default function Categories() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" id="categories">
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface mb-2 md:mb-4">Explore what you need.</h2>
        <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl">Find skilled students across a wide range of services to bring your ideas to life.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <a key={idx} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-surface-container-high card-hover flex flex-col items-start gap-3 md:gap-4 group" href="#">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-container/10 rounded-xl flex items-center justify-center group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-primary-container group-hover:text-white transition-colors text-xl md:text-2xl">{cat.icon}</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-base md:text-xl text-on-surface">{cat.title}</h3>
              <p className="text-on-surface-variant text-xs md:text-sm leading-tight">{cat.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}