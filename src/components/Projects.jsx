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
    <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-surface-dim/30" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 md:mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">
              Find your next project.
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl">
              Browse open opportunities posted by local businesses and individuals.
            </p>
          </div>
          <a className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline w-fit" href="#">
            <span>View all projects</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-surface p-5 sm:p-6 rounded-2xl border border-surface-container-high card-hover flex flex-col justify-between h-full text-left"
            >
              <div>
                {/* Meta Badge & Posting Time */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="bg-[#F3F3FE] text-[#434655] px-2.5 py-1 rounded-md text-xs font-medium shrink-0">
                    {proj.category}
                  </span>
                  <span className="text-on-surface-variant text-xs flex items-center gap-1 shrink-0">
                    <span className="material-symbols-outlined text-xs sm:text-sm">schedule</span> 
                    {proj.time}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-lg sm:text-xl leading-snug mb-2 text-on-surface">
                  {proj.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-3">
                  {proj.desc}
                </p>
              </div>

              {/* Card Footer Info & CTA */}
              <div>
                <div className="flex flex-col gap-2 pt-4 border-t border-surface-variant text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Budget</span>
                    <span className="font-semibold text-on-surface">{proj.budget}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Deadline</span>
                    <span className="text-on-surface">{proj.deadline}</span>
                  </div>
                </div>

                <button className="w-full mt-5 bg-white border border-outline-variant text-primary py-3 sm:py-2.5 rounded-xl text-sm font-semibold active:bg-surface-variant hover:border-primary transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}