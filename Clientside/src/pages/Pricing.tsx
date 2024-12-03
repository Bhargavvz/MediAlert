import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for individual users',
    features: [
      'Basic medication tracking',
      'Daily reminders',
      'Medication history',
      'Basic reports',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'month',
    description: 'Great for families',
    features: [
      'Everything in Basic',
      'Multiple user profiles',
      'Advanced analytics',
      'Priority support',
      'Medication interactions check',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For healthcare providers',
    features: [
      'Everything in Pro',
      'Custom integration',
      'Dedicated support',
      'Staff training',
      'Advanced security features',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl">Choose the plan that's right for you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.popular ? 'border-2 border-primary-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-primary-500 text-white rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500">/{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-gray-500">{plan.description}</p>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;