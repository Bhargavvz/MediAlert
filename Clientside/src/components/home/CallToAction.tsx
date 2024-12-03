import React from 'react';
import Button from '../shared/Button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-20 md:px-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block text-blue-200">Join us today and transform your medication management.</span>
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Start your journey to better medication management with MedTrack.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Button variant="secondary" className="text-blue-600">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;