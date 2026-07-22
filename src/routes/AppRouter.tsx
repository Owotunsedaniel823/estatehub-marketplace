import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";

import DashboardPage from "../pages/dashboard/DashboardPage";
import MarketplacePage from "../pages/marketplace/MarketplacePage";
import VisitorsPage from "../pages/visitors/VisitorsPage";
import ProfilePage from "../pages/profile/ProfilePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication Routes */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />


        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/marketplace"
          element={<MarketplacePage />}
        />

        <Route
          path="/visitors"
          element={<VisitorsPage />}
        />

        <Route
          path="/profile"
          element={<ProfilePage />}
        />


        {/* If user enters a wrong URL */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}