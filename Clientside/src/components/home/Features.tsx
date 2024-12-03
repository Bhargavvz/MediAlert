import React, { useState } from 'react';
import { Bell, QrCode, Heart, LineChart, Shield, Users, Smartphone, Gift, ChevronRight } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Smart Reminders',
    description: 'Never miss a dose with our intelligent reminder system that adapts to your schedule.',
    icon: Bell,
    benefits: [
      'Customizable reminder schedules',
      'Smart notification system',
      'Multiple reminder methods (push, SMS, email)',
      'Medication adherence tracking'
    ]
  },
  {
    id: 2,
    title: 'QR Prescriptions',
    description: 'Scan and manage prescriptions easily with our QR code system.',
    icon: QrCode,
    benefits: [
      'Instant prescription scanning',
      'Digital prescription storage',
      'Easy medication information access',
      'Share prescriptions with healthcare providers'
    ]
  },
  {
    id: 3,
    title: 'Medicine Donation',
    description: 'Contribute to community health by donating unused medicines safely.',
    icon: Heart,
    benefits: [
      'Safe medicine donation process',
      'Verified recipient organizations',
      'Impact tracking',
      'Tax deduction receipts'
    ]
  },
  {
    id: 4,
    title: 'Real-time Tracking',
    description: 'Monitor your medication intake and inventory with detailed analytics.',
    icon: LineChart,
    benefits: [
      'Detailed medication history',
      'Inventory management',
      'Usage analytics',
      'Exportable reports'
    ]
  },
  {
    id: 5,
    title: 'Secure Platform',
    description: 'Your health data is protected with enterprise-grade security.',
    icon: Shield,
    benefits: [
      'End-to-end encryption',
      'HIPAA compliance',
      'Regular security audits',
      'Data backup and recovery'
    ]
  },
  {
    id: 6,
    title: 'Family Management',
    description: 'Manage medications for your entire family in one place.',
    icon: Users,
    benefits: [
      'Multiple user profiles',
      'Role-based access control',
      'Family sharing features',
      'Caregiver support'
    ]
  },
  {
    id: 7,
    title: 'Mobile App',
    description: 'Access your medication information anywhere with our mobile app.',
    icon: Smartphone,
    benefits: [
      'Cross-platform support',
      'Offline access',
      'Cloud sync',
      'User-friendly interface'
    ]
  },
  {
    id: 8,
    title: 'Rewards Program',
    description: 'Earn points for medication adherence and donations.',
    icon: Gift,
    benefits: [
      'Points for adherence',
      'Donation rewards',
      'Partner discounts',
      'Redeemable benefits'
    ]
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="features-heading"
            className="text-base text-blue-600 font-semibold tracking-wide uppercase"
          >
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Everything you need to manage your medications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive tools to help you stay on track with your medication schedule and contribute to community health.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-1">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 ${
                    activeFeature.id === feature.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'hover:bg-blue-50 text-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <feature.icon className="h-6 w-6" />
                    <span className="font-medium">{feature.title}</span>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${
                    activeFeature.id === feature.id ? 'rotate-90' : ''
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Feature Details */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <div className="h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <activeFeature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{activeFeature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {activeFeature.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {activeFeature.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;