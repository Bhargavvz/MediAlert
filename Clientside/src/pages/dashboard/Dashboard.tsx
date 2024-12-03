import React from 'react';
import {
  Bell,
  Calendar,
  Heart,
  LineChart,
  Pill,
  QrCode,
  Users,
  Gift,
} from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Active Medications', value: '12', change: '+2', changeType: 'increase' },
    { name: 'Upcoming Reminders', value: '5', change: '-1', changeType: 'decrease' },
    { name: 'Medicines Donated', value: '8', change: '+3', changeType: 'increase' },
    { name: 'Reward Points', value: '350', change: '+50', changeType: 'increase' },
  ];

  const quickActions = [
    { name: 'Add Medication', icon: Pill, color: 'bg-blue-500' },
    { name: 'Set Reminder', icon: Bell, color: 'bg-purple-500' },
    { name: 'Scan Prescription', icon: QrCode, color: 'bg-green-500' },
    { name: 'View Analytics', icon: LineChart, color: 'bg-yellow-500' },
  ];

  const upcomingReminders = [
    {
      id: 1,
      medication: 'Aspirin',
      time: '9:00 AM',
      dosage: '1 tablet',
      status: 'pending',
    },
    {
      id: 2,
      medication: 'Vitamin D',
      time: '2:00 PM',
      dosage: '2 tablets',
      status: 'pending',
    },
    {
      id: 3,
      medication: 'Omega-3',
      time: '8:00 PM',
      dosage: '1 capsule',
      status: 'pending',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your medications today.
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Add Medication
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    stat.changeType === 'increase'
                      ? 'text-green-800 bg-green-100'
                      : 'text-red-800 bg-red-100'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div
                className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}
              >
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900">{action.name}</h3>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming reminders */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Upcoming Reminders
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {upcomingReminders.map((reminder) => (
                <div
                  key={reminder.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Pill className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {reminder.medication}
                      </p>
                      <p className="text-sm text-gray-500">{reminder.dosage}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {reminder.time}
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {reminder.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View all
              </button>
            </div>
            <div className="flow-root">
              <ul className="-mb-8">
                <li className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center ring-8 ring-white">
                        <Bell className="h-5 w-5 text-blue-600" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">
                            Reminder completed
                          </span>{' '}
                          for Aspirin
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center ring-8 ring-white">
                        <Heart className="h-5 w-5 text-green-600" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">
                            Medicine donated
                          </span>{' '}
                          to local pharmacy
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center ring-8 ring-white">
                        <QrCode className="h-5 w-5 text-purple-600" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">
                            New prescription
                          </span>{' '}
                          added to your records
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
