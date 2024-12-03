import React from 'react';
import Card from '../components/shared/Card';
import { Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Understanding Medication Adherence',
    excerpt: 'Learn about the importance of taking your medications as prescribed and tips for staying on track.',
    date: '2024-03-15',
    author: 'Dr. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'The Impact of Medicine Donations',
    excerpt: 'How our community donation program is making healthcare more accessible for everyone.',
    date: '2024-03-10',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Digital Health Revolution',
    excerpt: 'Exploring how technology is transforming healthcare management and patient outcomes.',
    date: '2024-03-05',
    author: 'Dr. Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Latest Updates</h1>
          <p className="text-xl">Insights, news, and health tips from the MedTrack team</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-primary-600 hover:text-primary-700">
                    Read More →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;