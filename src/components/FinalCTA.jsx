import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-surface-dim/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Ready to get started?</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Join thousands of businesses and talent already connecting on Nepal's premier marketplace.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="w-full sm:w-auto bg-primary-container text-white px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-blue-600 transition-colors shadow-md text-lg">
            I Need Work Done
          </button>
          <button className="w-full sm:w-auto bg-white text-primary-container border-2 border-outline-variant px-8 py-4 rounded-xl font-label-md text-label-md hover:border-primary-container transition-colors shadow-sm text-lg">
            I Want to Work
          </button>
        </div>
      </div>
    </section>
  );
}