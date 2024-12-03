import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get started with MedTrack?',
    answer: 'Getting started is easy! Simply sign up for an account, add your medications, and set up your reminder preferences. Our intuitive interface will guide you through the process.',
  },
  {
    question: 'Is my medical information secure?',
    answer: 'Yes, we take security very seriously. All your data is encrypted and stored securely following HIPAA guidelines. We never share your personal information with third parties without your explicit consent.',
  },
  {
    question: 'How does the medication donation system work?',
    answer: 'Our medication donation system connects donors with verified charitable pharmacies. Unused, unexpired medications can be donated through our platform, following all legal guidelines and regulations.',
  },
  {
    question: 'Can I manage medications for multiple people?',
    answer: 'Yes, with our Pro plan, you can manage medications for multiple family members or dependents. Each profile maintains separate medication lists and reminder settings.',
  },
  {
    question: 'What happens if I miss a reminder?',
    answer: 'If you miss a reminder, the app will send follow-up notifications based on your settings. You can also view your medication history to track any missed doses.',
  },
  {
    question: 'Is MedTrack available in my country?',
    answer: "MedTrack is currently available in the United States, Canada, and the United Kingdom. We're actively working on expanding to more countries.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Find answers to common questions about MedTrack</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-primary-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary-500" />
                ) : (
                  <Plus className="h-5 w-5 text-primary-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;