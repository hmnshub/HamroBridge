import React from 'react';

const projects = [
  {
    category: 'Video & Content',
    time: '2h ago',
    title: '5 Instagram Reels for a Café',
    desc: 'Looking for a student who can shoot and edit 5 engaging Instagram reels for our new café in Thamel.',
    budget: 'Rs. 8,000 - 10,000',
    deadline: 'In 7 days',
    proposals: '4 submitted'
  },
  {
    category: 'Design',
    time: '5h ago',
    title: 'Restaurant Website Redesign',
    desc: "Need a fresh, modern Figma mockup for a local restaurant's landing page and menu.",
    budget: 'Rs. 15,000',
    deadline: 'In 14 days',
    proposals: '12 submitted'
  },
  {
    category: 'Development',
    time: '1d ago',
    title: 'Simple E-commerce Store',
    desc: 'Looking for someone to set up a basic Shopify or WooCommerce store for handmade crafts.',
    budget: 'Rs. 25,000 - 30,000',
    deadline: 'In 21 days',
    proposals: '8 submitted'
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white border-y border-surface-dim/30" id="projects">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Find your next project.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Browse open opportunities posted by local businesses and individuals.</p>
          </div>
          <a className="hidden sm:flex items-center gap-2 text-primary-container font-label-md text-label-md hover:underline" href="#">
            View all projects <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-surface p-6 rounded-2xl border border-surface-container-high card-hover flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#F3F3FE] text-[#434655] px-2.5 py-1 rounded-md text-xs font-medium">{proj.category}</span>
                <span className="text-on-surface-variant text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> {proj.time}
                </span>
              </div>
              <h3 className="font-title-lg text-title-lg text-[20px] leading-tight mb-2 text-on-surface">{proj.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow">{proj.desc}</p>
              <div className="flex flex-col gap-3 pt-4 border-t border-surface-variant">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Budget</span>
                  <span className="font-semibold text-on-surface">{proj.budget}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Deadline</span>
                  <span className="text-on-surface">{proj.deadline}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Proposals</span>
                  <span className="text-on-surface">{proj.proposals}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-white border border-outline-variant text-primary-container py-2.5 rounded-lg font-label-md text-label-md hover:border-primary-container transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}