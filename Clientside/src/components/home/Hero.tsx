import React from 'react';
import { ArrowRight, Bell, QrCode, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-blue-100">
    <Icon className="h-10 w-10 text-blue-600 mb-4" aria-hidden="true" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Your Complete{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Medicine Management</span>
          </span>{' '}
          Solution
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Track medications, set reminders, and contribute to community health with our intelligent platform.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            to="/get-started"
            className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-700 hover:text-slate-100 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
          >
            Get started for free
          </Link>
          <Link
            to="/features"
            className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
          >
            View Features
          </Link>
        </div>

        <div className="mt-20 lg:mt-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="mt-4 font-display text-lg font-medium text-slate-900">Smart Reminders</h2>
              <p className="mt-2 text-sm text-slate-600">Never miss a dose with our intelligent reminder system</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="mt-4 font-display text-lg font-medium text-slate-900">Medicine Donation</h2>
              <p className="mt-2 text-sm text-slate-600">Contribute to community health by donating unused medicines</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="mt-4 font-display text-lg font-medium text-slate-900">Secure Platform</h2>
              <p className="mt-2 text-sm text-slate-600">Your health data is protected with enterprise-grade security</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-lg font-medium text-slate-900">Trusted by thousands of users worldwide</p>
          <div className="mt-6 flex justify-center gap-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50K+</div>
              <div className="mt-2 text-sm text-slate-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100K+</div>
              <div className="mt-2 text-sm text-slate-600">Medications Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">25K+</div>
              <div className="mt-2 text-sm text-slate-600">Medicines Donated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;