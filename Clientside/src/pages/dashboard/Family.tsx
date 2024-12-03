import React, { useState } from 'react';
import { Plus, Search, Filter, User } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import AddFamilyMemberModal from '../../components/modals/AddFamilyMemberModal';

interface FamilyMember {
  id: number;
  name: string;
  relationship: string;
  age: number;
  medications: number;
  reminders: number;
  lastActive: string;
  status: 'active' | 'pending' | 'inactive';
}

const Family: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const handleAddFamilyMember = (familyMemberData: any) => {
    // TODO: Implement API call to save family member
    console.log('Adding family member:', familyMemberData);
  };

  const familyMembers: FamilyMember[] = [
    {
      id: 1,
      name: 'Sarah Doe',
      relationship: 'Spouse',
      age: 35,
      medications: 3,
      reminders: 4,
      lastActive: '2 hours ago',
      status: 'active',
    },
    {
      id: 2,
      name: 'Michael Doe',
      relationship: 'Son',
      age: 12,
      medications: 1,
      reminders: 2,
      lastActive: '1 day ago',
      status: 'active',
    },
    {
      id: 3,
      name: 'Emma Doe',
      relationship: 'Daughter',
      age: 8,
      medications: 2,
      reminders: 3,
      lastActive: '3 days ago',
      status: 'active',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 w-full sm:w-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Family Members</h1>
            <p className="mt-1 text-sm text-gray-500">Manage your family members and caregivers</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
          >
            <Plus className="h-5 w-5" />
            Add Family Member
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Members</p>
                <p className="text-2xl font-semibold text-gray-900">4</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Reminders</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <User className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Medications</p>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search family members..."
            />
          </div>
        </div>

        {/* Family Members List */}
        <div className="space-y-4">
          {familyMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">
                      {member.relationship} • {member.age} years old
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      member.status
                    )}`}
                  >
                    {member.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Filter className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    Last active: {member.lastActive}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {member.medications} medications
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {member.reminders} reminders
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">Caregiver access</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  View Details
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Manage Access
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-medium text-blue-900 mb-2">Family Care Tips</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <User className="h-5 w-5 text-blue-600 mt-0.5" />
              </div>
              <p className="ml-3 text-sm text-blue-800">
                Keep track of each family member's medication schedule
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <Search className="h-5 w-5 text-blue-600 mt-0.5" />
              </div>
              <p className="ml-3 text-sm text-blue-800">
                Set up reminders for important medication times
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <Filter className="h-5 w-5 text-blue-600 mt-0.5" />
              </div>
              <p className="ml-3 text-sm text-blue-800">
                Manage access permissions for caregivers and family members
              </p>
            </li>
          </ul>
        </div>
      </div>

      <AddFamilyMemberModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddFamilyMember}
      />
    </DashboardLayout>
  );
};

export default Family;
