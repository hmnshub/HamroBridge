import React from 'react';

const steps = [
  { step: 1, title: 'Post a Project', desc: 'Describe what you need done, set your budget, and publish your project to our marketplace.' },
  { step: 2, title: 'Find Talent', desc: 'Review proposals, check profiles and past work, and chat with candidates to find the right fit.' },
  { step: 3, title: 'Get it Done', desc: 'Collaborate directly, receive your completed work, and pay securely through the platform.' }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-dim/30" id="how-it-works">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Simple from start to finish.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">How Hamro Bridge connects businesses with talent in three easy steps.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-surface-variant -translate-y-1/2 z-0"></div>
          {steps.map((s) => (
            <div key={s.step} className="bg-white p-8 rounded-2xl shadow-sm border border-surface-container-high relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-container text-white rounded-full flex items-center justify-center font-display-md text-2xl mb-6 shadow-md">{s.step}</div>
              <h3 className="font-title-lg text-title-lg text-[22px] mb-3 text-on-surface">{s.title}</h3>
              <p className="text-on-surface-variant text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}