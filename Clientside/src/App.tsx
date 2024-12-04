import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DashboardLayout from './components/layout/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import NotFound from './pages/NotFound';
import Dashboard from './pages/dashboard/Dashboard';
import Medications from './pages/dashboard/Medications';
import Reminders from './pages/dashboard/Reminders';
import Analytics from './pages/dashboard/Analytics';
import Family from './pages/dashboard/Family';
import Prescriptions from './pages/dashboard/Prescriptions';
import Rewards from './pages/dashboard/Rewards';
import Settings from './pages/dashboard/Settings';
import Profile from './pages/dashboard/Profile';
import Donations from './pages/dashboard/Donations';
import LoadingSpinner from './components/common/LoadingSpinner';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Toaster position="top-right" />
          <Routes>
            {/* Dashboard Routes */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/medications" element={<Medications />} />
                      <Route path="/reminders" element={<Reminders />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/family" element={<Family />} />
                      <Route path="/prescriptions" element={<Prescriptions />} />
                      <Route path="/rewards" element={<Rewards />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/donations" element={<Donations />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            {/* Public Routes */}
            <Route
              path="/*"
              element={
                <div className="flex-grow">
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/features" element={<Features />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/get-started" element={<Navigate to="/login" replace />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;