import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import HistoryPage from '../pages/HistoryPage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

// Application routing configuration
const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper for all primary routes */}
      <Route element={<MainLayout />}>
        {/* Public route example */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sonakanda-client" element={<HomePage />} />

        {/* Public login route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Public registration route */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Public history route (can be protected later if needed) */}
        <Route path="/history" element={<HistoryPage />} />

        {/* Example protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Protected profile route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
