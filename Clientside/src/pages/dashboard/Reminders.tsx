import React, { useState } from 'react';
import { Bell, Calendar, Check, Clock, Plus, Search, X } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';

interface Reminder {
  id: number;
  medicationName: string;
  dosage: string;
  time: string;
  date: string;
  status: 'pending' | 'completed' | 'missed';
  notes?: string;
}

const Reminders: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'upcoming' | 'history'>('today');
  const [searchQuery, setSearchQuery] = useState('');

  const reminders: Reminder[] = [
    {
      id: 1,
      medicationName: 'Aspirin',
      dosage: '100mg',
      time: '09:00 AM',
      date: '2024-02-20',
      status: 'pending',
      notes: 'Take with food',
    },
    {
      id: 2,
      medicationName: 'Vitamin D3',
      dosage: '1000 IU',
      time: '10:00 AM',
      date: '2024-02-20',
      status: 'completed',
    },
    {
      id: 3,
      medicationName: 'Omega-3',
      dosage: '1000mg',
      time: '02:00 PM',
      date: '2024-02-20',
      status: 'pending',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'missed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return Clock;
      case 'completed':
        return Check;
      case 'missed':
        return X;
      default:
        return Clock;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reminders</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track and manage your medication schedule
            </p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-5 w-5 mr-2" />
            Add Reminder
          </button>
        </div>

        {/* Tabs and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('today')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'today'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              History
            </button>
          </div>
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search reminders..."
            />
          </div>
        </div>

        {/* Reminders List */}
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bell className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {reminder.medicationName}
                    </h3>
                    <p className="text-sm text-gray-500">{reminder.dosage}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {reminder.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {reminder.date}
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      reminder.status
                    )}`}
                  >
                    {React.createElement(getStatusIcon(reminder.status), {
                      className: 'h-4 w-4 mr-1',
                    })}
                    {reminder.status}
                  </span>
                </div>
              </div>
              {reminder.notes && (
                <div className="mt-4 text-sm text-gray-500">{reminder.notes}</div>
              )}
              <div className="mt-4 flex justify-end space-x-4">
                {reminder.status === 'pending' && (
                  <>
                    <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-1" />
                      Mark as Taken
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700">
                      <X className="h-4 w-4 mr-1" />
                      Skip
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reminders;
