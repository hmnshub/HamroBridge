import React from 'react';

export default function Reputation() {
  const steps = [
    {
      icon: 'check_circle',
      title: 'Project Completed',
      active: true,
    },
    {
      icon: 'star',
      title: 'Earn Rating',
      active: true,
    },
    {
      icon: 'trending_up',
      title: 'More Opportunities',
      active: false,
      highlight: true,
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center" id="reputation">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-3 tracking-tight">
          Your work becomes your reputation.
        </h2>
        <p className="text-sm md:text-lg text-on-surface-variant">
          Build a verified track record that helps you land more opportunities.
        </p>
      </div>

      {/* Timeline Stepper Container */}
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-surface-variant -translate-y-1/2 z-0 rounded-full" />
          <div className="hidden md:block absolute top-1/2 left-8 w-2/3 h-1 bg-primary -translate-y-1/2 z-0 rounded-full" />

          {/* Stepper Cards */}
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div 
                className={`relative z-10 flex flex-col items-center bg-white p-5 rounded-2xl w-full max-w-[220px] md:w-44 shadow-sm border ${
                  step.highlight 
                    ? 'border-2 border-primary text-primary' 
                    : 'border-surface-variant text-on-surface'
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md ${
                    step.highlight 
                      ? 'bg-white border-2 border-primary text-primary' 
                      : 'bg-primary text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <p className="text-sm font-semibold leading-snug">{step.title}</p>
              </div>

              {/* Mobile Down Arrow Connector */}
              {idx < steps.length - 1 && (
                <div className="md:hidden text-primary/60 -my-2 z-10">
                  <span className="material-symbols-outlined text-2xl">arrow_downward</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}