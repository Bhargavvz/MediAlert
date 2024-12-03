import React from 'react';
import { Bell, QrCode, Heart, LineChart, Shield, Users, Smartphone, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  benefits: string[];
  details: string;
}

const features: Feature[] = [
  {
    name: 'Smart Reminders',
    description: 'Never miss a dose with our intelligent reminder system that adapts to your schedule.',
    icon: Bell,
    color: 'text-blue-600',
    benefits: [
      'Customizable reminder schedules',
      'Smart notification system',
      'Multiple reminder methods (push, SMS, email)',
      'Medication adherence tracking'
    ],
    details: 'Our AI-powered reminder system learns from your habits and schedule to send notifications at the most effective times. Set up custom schedules, get notifications across multiple devices, and maintain perfect medication adherence.'
  },
  {
    name: 'QR Prescriptions',
    description: 'Scan and manage prescriptions easily with our QR code system.',
    icon: QrCode,
    color: 'text-purple-600',
    benefits: [
      'Instant prescription scanning',
      'Digital prescription storage',
      'Easy medication information access',
      'Share prescriptions with healthcare providers'
    ],
    details: 'Simply scan your prescription using our mobile app to digitize and store it securely. Access your prescription history anytime, anywhere, and easily share them with healthcare providers when needed.'
  },
  {
    name: 'Medicine Donation',
    description: 'Contribute to community health by donating unused medicines safely.',
    icon: Heart,
    color: 'text-red-600',
    benefits: [
      'Safe medicine donation process',
      'Verified recipient organizations',
      'Impact tracking',
      'Tax deduction receipts'
    ],
    details: 'Make a difference in your community by safely donating unused medicines. We partner with verified NGOs and healthcare organizations to ensure your donations reach those in need, while providing you with tax deduction receipts.'
  },
  {
    name: 'Real-time Tracking',
    description: 'Monitor your medication intake and inventory with detailed analytics.',
    icon: LineChart,
    color: 'text-green-600',
    benefits: [
      'Detailed medication history',
      'Inventory management',
      'Usage analytics',
      'Exportable reports'
    ],
    details: 'Keep track of your medication inventory in real-time, view detailed analytics about your medication adherence, and generate comprehensive reports for your healthcare providers.'
  },
  {
    name: 'Secure Platform',
    description: 'Your health data is protected with enterprise-grade security.',
    icon: Shield,
    color: 'text-indigo-600',
    benefits: [
      'End-to-end encryption',
      'HIPAA compliance',
      'Regular security audits',
      'Data backup and recovery'
    ],
    details: 'Your health data is protected with enterprise-grade security measures. We use end-to-end encryption, maintain HIPAA compliance, and conduct regular security audits to ensure your information stays private and secure.'
  },
  {
    name: 'Family Management',
    description: 'Manage medications for your entire family in one place.',
    icon: Users,
    color: 'text-yellow-600',
    benefits: [
      'Multiple user profiles',
      'Role-based access control',
      'Family sharing features',
      'Caregiver support'
    ],
    details: 'Create profiles for family members, set up role-based access for caregivers, and manage everyone\'s medications in one place. Perfect for families and caregivers managing multiple medication schedules.'
  },
  {
    name: 'Mobile App',
    description: 'Access your medication information anywhere with our mobile app.',
    icon: Smartphone,
    color: 'text-pink-600',
    benefits: [
      'Cross-platform support',
      'Offline access',
      'Cloud sync',
      'User-friendly interface'
    ],
    details: 'Take MedTrack with you wherever you go with our mobile app. Access your medication information offline, sync data across devices, and enjoy a user-friendly interface designed for ease of use.'
  },
  {
    name: 'Rewards Program',
    description: 'Earn points for medication adherence and donations.',
    icon: Gift,
    color: 'text-orange-600',
    benefits: [
      'Points for adherence',
      'Donation rewards',
      'Partner discounts',
      'Redeemable benefits'
    ],
    details: 'Get rewarded for taking care of your health! Earn points for medication adherence and donations, then redeem them for partner discounts and other valuable benefits.'
  }
];

const Features: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Powerful Features for Better Health Management
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover all the ways MedTrack can help you manage your medications and improve your health.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${feature.color.replace('text', 'bg')}/10`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">{feature.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{feature.details}</p>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className={`h-2 w-2 rounded-full ${feature.color.replace('text', 'bg')} mr-3`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/get-started"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;