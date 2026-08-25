import React from 'react';

const steps = [
  { step: 1, title: 'Post a Project', desc: 'Describe what you need done, set your budget, and publish your project to our marketplace.' },
  { step: 2, title: 'Find Talent', desc: 'Review proposals, check profiles and past work, and chat with candidates to find the right fit.' },
  { step: 3, title: 'Get it Done', desc: 'Collaborate directly, receive your completed work, and pay securely through the platform.' }
];

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface-container-low border-y border-surface-dim/30" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-3 tracking-tight">
          Simple from start to finish.
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          How Hamro Bridge connects businesses with talent in three easy steps.
        </p>

        {/* Steps Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-surface-variant z-0" />

          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-surface-container-high relative z-10 flex flex-col items-center"
            >
              {/* Step Badge */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-6 shadow-md shrink-0">
                {s.step}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-on-surface">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}