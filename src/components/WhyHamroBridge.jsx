import React from 'react';

const reasons = [
  { 
    icon: 'school', 
    title: 'Student Focus', 
    desc: 'Empowering the next generation of Nepali professionals by connecting them with real-world experience.' 
  },
  { 
    icon: 'verified_user', 
    title: 'Verified Trust', 
    desc: 'Every profile and transaction is verified to ensure a safe, reliable experience for both parties.' 
  },
  { 
    icon: 'account_balance_wallet', 
    title: 'Secure Payments', 
    desc: 'Funds are held securely and only released when the work is completed and approved.' 
  },
  { 
    icon: 'handshake', 
    title: 'Local Connection', 
    desc: 'Built for Nepal. Connect with local businesses and talent who understand the context and culture.' 
  }
];

export default function WhyHamroBridge() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-container text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 tracking-tight">
          Why Hamro Bridge?
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r, idx) => (
            <div 
              key={idx} 
              className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20 text-left flex flex-col justify-between"
            >
              <div>
                <span className="material-symbols-outlined text-3xl sm:text-4xl mb-3 sm:mb-4 text-blue-200 block">
                  {r.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                  {r.title}
                </h3>
                <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}