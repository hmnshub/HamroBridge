import React from 'react';

const candidates = [
  {
    initials: 'RD',
    name: 'Roshan Dhakal',
    role: 'Frontend Developer',
    match: '98%',
    skills: 'React, Tailwind',
    isTop: true,
    avatarBg: 'bg-primary-fixed text-primary',
  },
  {
    initials: 'AK',
    name: 'Amit Karki',
    role: 'Full Stack Dev',
    match: '85%',
    skills: 'React, CSS',
    isTop: false,
    avatarBg: 'bg-secondary-fixed text-secondary',
  },
  {
    initials: 'ST',
    name: 'Sita Tamang',
    role: 'Web Developer',
    match: '70%',
    skills: 'HTML, JS',
    isTop: false,
    dimmed: true,
    avatarBg: 'bg-tertiary-fixed text-tertiary',
  },
];

export default function SmartMatching() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-container-low border-y border-surface-dim/30">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-3 tracking-tight">
            Find the right talent faster.
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
            Our smart matching system highlights the best candidates based on skills, experience, and availability.
          </p>
        </div>

        {/* Card Wrapper */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-surface-container-high">
          {/* Requirement Box */}
          <div className="mb-6 p-3.5 sm:p-4 bg-primary-fixed/30 rounded-xl border border-primary-fixed-dim text-left">
            <h4 className="text-xs sm:text-sm font-bold text-primary-container mb-1">
              Your Requirement
            </h4>
            <p className="text-xs sm:text-sm text-on-surface-variant italic">
              "Need a React developer with Tailwind CSS experience for a 2-week frontend project."
            </p>
          </div>

          {/* Candidates List */}
          <div className="space-y-3.5 sm:space-y-4">
            {candidates.map((candidate, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl relative overflow-hidden text-left ${
                  candidate.isTop
                    ? 'border border-success/30 bg-success/5'
                    : 'border border-surface-variant'
                } ${candidate.dimmed ? 'opacity-75' : ''}`}
              >
                {/* Accent line for top match */}
                {candidate.isTop && (
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 sm:w-2 bg-success" />
                )}

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base shrink-0 ${candidate.avatarBg}`}>
                    {candidate.initials}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-bold text-on-surface leading-snug">
                      {candidate.name}
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      {candidate.role}
                    </p>
                  </div>
                </div>

                {/* Match score & skills */}
                <div className="flex sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-variant/50 text-right">
                  <div className={`font-bold text-xs sm:text-sm flex items-center gap-1 ${
                    candidate.isTop ? 'text-success' : 'text-primary'
                  }`}>
                    {candidate.isTop && (
                      <span className="material-symbols-outlined text-sm sm:text-base">bolt</span>
                    )}
                    <span>{candidate.match} Match</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    Skills: {candidate.skills}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}