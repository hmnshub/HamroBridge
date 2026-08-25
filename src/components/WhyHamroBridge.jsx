import React from 'react';

const reasons = [
  { icon: 'school', title: 'Student Focus', desc: 'Empowering the next generation of Nepali professionals by connecting them with real-world experience.' },
  { icon: 'verified_user', title: 'Verified Trust', desc: 'Every profile and transaction is verified to ensure a safe, reliable experience for both parties.' },
  { icon: 'account_balance_wallet', title: 'Secure Payments', desc: 'Funds are held securely and only released when the work is completed and approved.' },
  { icon: 'handshake', title: 'Local Connection', desc: 'Built for Nepal. Connect with local businesses and talent who understand the context and culture.' }
];

export default function WhyHamroBridge() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container text-white">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg mb-12">Why Hamro Bridge?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-left">
              <span className="material-symbols-outlined text-3xl mb-4 text-primary-fixed">{r.icon}</span>
              <h3 className="font-title-lg text-xl mb-2">{r.title}</h3>
              <p className="text-primary-fixed-dim text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}