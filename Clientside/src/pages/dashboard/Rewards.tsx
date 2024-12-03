import React, { useState } from 'react';
import {
  Gift,
  Award,
  Star,
  TrendingUp,
  Clock,
  ChevronRight,
  Gift as GiftIcon,
  Heart,
  Users,
  Calendar,
} from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';

interface Reward {
  id: number;
  name: string;
  description: string;
  points: number;
  category: string;
  expiryDate: string;
  status: 'available' | 'claimed' | 'expired';
}

const Rewards: React.FC = () => {
  const [activeTab, setActiveTab] = useState('available');

  const rewards: Reward[] = [
    {
      id: 1,
      name: '10% Off Next Prescription',
      description: 'Get 10% off your next prescription refill at participating pharmacies',
      points: 500,
      category: 'Discount',
      expiryDate: '2024-03-31',
      status: 'available',
    },
    {
      id: 2,
      name: 'Free Health Check',
      description: 'Complimentary basic health check at partner clinics',
      points: 1000,
      category: 'Health',
      expiryDate: '2024-04-15',
      status: 'available',
    },
    {
      id: 3,
      name: 'Premium Membership Month',
      description: 'One month of premium membership features',
      points: 750,
      category: 'Membership',
      expiryDate: '2024-03-20',
      status: 'claimed',
    },
  ];

  const achievements = [
    {
      title: 'Perfect Week',
      description: 'Take all medications on time for a week',
      progress: 5,
      total: 7,
      points: 100,
    },
    {
      title: 'Donation Hero',
      description: 'Donate medicines 3 times',
      progress: 2,
      total: 3,
      points: 150,
    },
    {
      title: 'Family Care',
      description: 'Add and manage 3 family members',
      progress: 1,
      total: 3,
      points: 200,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rewards Program</h1>
          <p className="mt-1 text-sm text-gray-500">
            Earn points and unlock rewards for maintaining good medication adherence
          </p>
        </div>

        {/* Points Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-100">Available Points</p>
              <p className="mt-2 text-4xl font-bold">1,250</p>
            </div>
            <div className="h-16 w-16 bg-white/10 rounded-lg flex items-center justify-center">
              <Award className="h-8 w-8" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-blue-100">Earned this month</p>
              <p className="mt-1 text-lg font-semibold">350</p>
            </div>
            <div>
              <p className="text-sm text-blue-100">Lifetime earned</p>
              <p className="mt-1 text-lg font-semibold">2,500</p>
            </div>
            <div>
              <p className="text-sm text-blue-100">Current streak</p>
              <p className="mt-1 text-lg font-semibold">7 days</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Star className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Level</p>
                <p className="text-lg font-semibold text-gray-900">Gold</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Adherence</p>
                <p className="text-lg font-semibold text-gray-900">92%</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Streak</p>
                <p className="text-lg font-semibold text-gray-900">7 Days</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <GiftIcon className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Rewards</p>
                <p className="text-lg font-semibold text-gray-900">5 Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Current Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-500">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {achievement.points} points
                    </p>
                    <p className="text-sm text-gray-500">
                      {achievement.progress}/{achievement.total} completed
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(achievement.progress / achievement.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Rewards */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Available Rewards</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('available')}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'available'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Available
              </button>
              <button
                onClick={() => setActiveTab('claimed')}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'claimed'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Claimed
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewards
              .filter((reward) =>
                activeTab === 'available'
                  ? reward.status === 'available'
                  : reward.status === 'claimed'
              )
              .map((reward) => (
                <div
                  key={reward.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Gift className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      {reward.points} points
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{reward.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{reward.description}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Expires: {reward.expiryDate}
                  </div>
                  <button
                    className={`mt-4 w-full px-4 py-2 rounded-lg text-sm font-medium ${
                      reward.status === 'available'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={reward.status !== 'available'}
                  >
                    {reward.status === 'available' ? 'Claim Reward' : 'Claimed'}
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* How to Earn Points */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-medium text-blue-900 mb-4">How to Earn Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Heart className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Medication Adherence</p>
                <p className="mt-1 text-sm text-blue-800">
                  Take medications on time and maintain streaks
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Family Management</p>
                <p className="mt-1 text-sm text-blue-800">
                  Add and manage family members' medications
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Gift className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Medicine Donations</p>
                <p className="mt-1 text-sm text-blue-800">
                  Donate unused medicines to those in need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Rewards;
