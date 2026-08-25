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
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="categories">
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Explore what you need.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Find skilled students across a wide range of services to bring your ideas to life.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <a key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-surface-container-high card-hover flex flex-col items-start gap-4 group" href="#">
            <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-primary-container group-hover:text-white transition-colors">{cat.icon}</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-title-lg text-title-lg text-[20px] text-on-surface">{cat.title}</h3>
              <p className="text-on-surface-variant text-sm">{cat.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}