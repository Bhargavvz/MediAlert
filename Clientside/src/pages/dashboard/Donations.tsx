import React, { useState } from 'react';
import {
  Heart,
  Search,
  Filter,
  MapPin,
  Calendar,
  Package,
  ChevronRight,
  Plus,
  Users,
} from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import AddDonationModal from '../../components/modals/AddDonationModal';

interface Donation {
  id: number;
  medicineName: string;
  quantity: number;
  expiryDate: string;
  location: string;
  status: 'pending' | 'accepted' | 'completed';
  organization: string;
  date: string;
}

const Donations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'available' | 'history'>('available');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddDonation = (donation: {
    donationType: string;
    date: string;
    location: string;
    notes: string;
    status: string;
  }) => {
    // TODO: Implement donation addition logic
    console.log('New donation:', donation);
  };

  const donations: Donation[] = [
    {
      id: 1,
      medicineName: 'Paracetamol',
      quantity: 20,
      expiryDate: '2024-12-31',
      location: 'Local Community Center',
      status: 'pending',
      organization: 'MedShare Foundation',
      date: '2024-02-15',
    },
    {
      id: 2,
      medicineName: 'Vitamin C',
      quantity: 50,
      expiryDate: '2024-10-15',
      location: 'City Hospital',
      status: 'accepted',
      organization: 'Healthcare For All',
      date: '2024-02-10',
    },
    {
      id: 3,
      medicineName: 'Antibiotics',
      quantity: 15,
      expiryDate: '2024-08-20',
      location: 'Medical Clinic',
      status: 'completed',
      organization: 'Global Health Initiative',
      date: '2024-02-01',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Medicine Donations</h1>
            <p className="mt-1 text-sm text-gray-500">
              Donate unused medicines to help those in need
            </p>
          </div>
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus className="w-5 h-5 mr-2" />
            New Donation
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Donations</p>
                <p className="text-2xl font-semibold text-gray-900">156</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Medicines Donated</p>
                <p className="text-2xl font-semibold text-gray-900">2,450</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Collection Centers</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('available')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'available'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Available Donations
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Donation History
            </button>
          </nav>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2 text-gray-400" />
            Filters
          </button>
        </div>

        {/* Donations List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {donations
              .filter((donation) =>
                activeTab === 'available'
                  ? donation.status === 'pending'
                  : donation.status !== 'pending'
              )
              .map((donation) => (
                <div
                  key={donation.id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {donation.medicineName}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            donation.status
                          )}`}
                        >
                          {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Package className="w-5 h-5 mr-2 text-gray-400" />
                          {donation.quantity} units
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                          Expires: {donation.expiryDate}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                          {donation.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-gray-400" />
                          {donation.organization}
                        </div>
                      </div>
                    </div>
                    <button className="ml-6 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Collection Centers Section */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-blue-900">Find Collection Centers</h3>
              <p className="mt-1 text-sm text-blue-800">
                Locate nearby medicine collection centers and drop off your donations.
                All donations are verified and distributed to those in need.
              </p>
              <button className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Find Nearest Center
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddDonationModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddDonation={handleAddDonation}
      />
    </DashboardLayout>
  );
};

export default Donations;
