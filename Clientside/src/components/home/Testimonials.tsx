import React from 'react';
import Card from '../shared/Card';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: 'MedTrack has completely transformed how I manage my medications. The reminders are a lifesaver!',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Pharmacist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200',
    content: 'As a pharmacist, I appreciate how MedTrack streamlines prescription management and reduces errors.',
  },
  {
    name: 'Maria Garcia',
    role: 'Caregiver',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    content: 'Managing medications for my parents has never been easier. The donation feature is amazing too!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of satisfied users who have transformed their medication management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;