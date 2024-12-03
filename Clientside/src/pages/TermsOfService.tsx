import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="gradient-bg text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2">Last updated: March 15, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using MedTrack, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-600">
              MedTrack provides a medication management platform that includes medication tracking,
              reminders, and donation features. We reserve the right to modify or discontinue the
              service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not misuse or abuse the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-600">
              MedTrack shall not be liable for any indirect, incidental, special, consequential or
              punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;