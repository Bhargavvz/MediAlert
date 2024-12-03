import React from 'react';
import { Heart, Shield, Users, ArrowRight, Award, Globe, Sparkles } from 'lucide-react';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom';

const stats = [
  { number: '50K+', label: 'Active Users' },
  { number: '100K+', label: 'Medications Tracked' },
  { number: '25K+', label: 'Medicines Donated' },
  { number: '99.9%', label: 'Uptime' },
];

const values = [
  {
    icon: Heart,
    title: 'Care & Compassion',
    description: 'We believe in making healthcare accessible to everyone through technology and community support.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your health data is protected with enterprise-grade security and strict privacy controls.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a supportive community that helps each other lead healthier lives.',
  },
];

const milestones = [
  {
    year: '2021',
    title: 'The Beginning',
    description: 'MedTrack was founded with a vision to revolutionize medication management.',
  },
  {
    year: '2022',
    title: 'Growing Impact',
    description: 'Launched our medicine donation program, connecting donors with those in need.',
  },
  {
    year: '2023',
    title: 'Innovation',
    description: 'Introduced AI-powered reminders and QR prescription management system.',
  },
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    bio: 'Former healthcare executive with 15+ years of experience in digital health.',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    bio: 'Tech innovator with expertise in healthcare software and security.',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300',
    bio: 'Clinical pharmacist specializing in medication therapy management.',
  },
];

const achievements = [
  {
    icon: Award,
    title: 'Best Healthcare App 2023',
    description: 'Recognized for innovation in digital health management.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Operating in 15+ countries, helping millions manage their health.',
  },
  {
    icon: Sparkles,
    title: 'Industry Leader',
    description: 'Setting standards in medication management and health tech.',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Healthcare Through Technology
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              We're on a mission to revolutionize medication management and make healthcare 
              more accessible to everyone through innovative technology and community support.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MedTrack began with a simple idea: make medication management smarter and more 
            accessible. Today, we're helping thousands of people stay healthy while building 
            a community of care and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="bg-gray-50 rounded-xl p-8">
              <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at MedTrack, from product development 
              to community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-8">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of healthcare professionals, technologists, and industry experts 
            are dedicated to improving healthcare through innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center p-8">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition of our commitment to innovation and excellence in healthcare technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className="text-center p-8">
                <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the healthcare revolution. Start managing your medications smarter 
            and join our community of care.
          </p>
          <Link to="/signup">
            <Button variant="primary" className="inline-flex items-center text-lg px-8 py-4">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;