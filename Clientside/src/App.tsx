import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DashboardLayout from './components/layout/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import NotFound from './pages/NotFound';
import GetStarted from './pages/GetStarted';
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

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/get-started" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
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
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/get-started" element={<GetStarted />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;